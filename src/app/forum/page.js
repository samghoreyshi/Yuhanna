'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  HiOutlineChat,
  HiOutlineQuestionMarkCircle,
  HiPlus,
  HiOutlineSearch,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineThumbUp,
  HiOutlineChartBar,
  HiOutlineFire
} from 'react-icons/hi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { Combobox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

// --- Helper functions ---

// Array of bright, cool pastel colors (for non‑selected categories)
const pastelColors = [
  "#FFF8EB", // In Progress - Light orange/peach
  "#F5F6FF", // Not Started - Light purple/lavender
  "#F8F5FF", // Code review - Light purple
  "#F1FDF6", // Done - Light green
  "#FFF5EB", // Hold - Light beige/tan
  "#EBFAF5", // To-do - Light mint/cyan
  "#FAFEE6", // Rework - Light yellow/lime
  "#EBF6FA", // Archived - Light blue
  "#F5F9FF", // In review - Very light blue
  "#FFEBEB"  // Blocked - Light red/pink
];

// Returns a pastel color based on the text (so the color is consistent)
const getPastelColor = (text) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % pastelColors.length;
  return pastelColors[index];
};

// Converts digits in a number/string to Persian numerals.
const toPersianDigits = (num) => {
  return String(num).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

export default function ForumPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [popularQuestions, setPopularQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionContent, setQuestionContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showNewQuestionModal, setShowNewQuestionModal] = useState(false);
  const [selectedQuestionCategory, setSelectedQuestionCategory] = useState('');
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const categoriesRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { title: 'دسته بندی و عنوان', content: 'لطفا دسته بندی و عنوان سوال خود را وارد کنید' },
    { title: 'متن سوال', content: 'لطفا متن سوال خود را وارد کنید' },
  ];

  const categoryOptions = [
    'کنکوری',
    'مشاوره تحصیلی',
    'درسی',
    'شخصی',
    'زندگی'
  ];
  const QUESTIONS_PER_PAGE = 6;

  // Helper function to extract text from content blocks
  const getTextFromContent = (content) => {
    if (!content || !Array.isArray(content)) return '';
    
    return content
      .map(block => {
        if (block.type === 'paragraph') {
          return block.children
            .map(child => child.text)
            .join(' ');
        }
        return '';
      })
      .join('\n')
      .trim();
  };

  // Redirect if user is not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth/login');
    }
  }, [user, authLoading, router]);

  // Fetch all questions once (client-side pagination)
  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://admin.yuhanna.ir/api/questions?populate=*');
      const data = await response.json();

      if (!data.data) {
        throw new Error('Invalid data format received');
      }

      // Sort questions by likes (highest first)
      const sortedQuestions = data.data.sort((a, b) => {
        const likesA = a.Likes || 0;
        const likesB = b.Likes || 0;
        return likesB - likesA;
      });

      setQuestions(sortedQuestions);
      setFilteredQuestions(sortedQuestions);
      const total = Math.ceil(sortedQuestions.length / QUESTIONS_PER_PAGE);
      setTotalPages(total > 0 ? total : 1);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError('خطا در دریافت سوالات');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Fetch popular questions (for sidebar)
  useEffect(() => {
    const fetchPopularQuestions = async () => {
      try {
        const response = await fetch('https://admin.yuhanna.ir/api/questions?populate=*');
        const data = await response.json();

        if (!data.data) {
          throw new Error('Invalid data format received');
        }

        const sortedQuestions = data.data.sort((a, b) => {
          const likesA = a.Likes || 0;
          const likesB = b.Likes || 0;
          return likesB - likesA;
        });

        setPopularQuestions(sortedQuestions.slice(0, 4));
      } catch (error) {
        console.error('Error fetching popular questions:', error);
      }
    };

    fetchPopularQuestions();
  }, []);

  // Extract unique categories from the questions list
  useEffect(() => {
    const uniqueCategories = [...new Set(questions.map(q => q.Category))].filter(Boolean);
    setCategories(uniqueCategories);
  }, [questions]);

  // Filter questions based on search query and selected category
  useEffect(() => {
    if (questions) {
      const filtered = questions.filter(question => {
        const matchesSearch =
          searchQuery === '' ||
          question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          getTextFromContent(question.content).toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || question.Category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      setFilteredQuestions(filtered);
      const total = Math.ceil(filtered.length / QUESTIONS_PER_PAGE);
      setTotalPages(total > 0 ? total : 1);
      if (currentPage > total) {
        setCurrentPage(1);
      }
    }
  }, [questions, searchQuery, selectedCategory, currentPage]);

  // Slice the filtered questions to get only those for the current page
  const getPaginatedQuestions = () => {
    if (!filteredQuestions.length) return [];
    const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
    const endIndex = startIndex + QUESTIONS_PER_PAGE;
    return filteredQuestions.slice(startIndex, endIndex);
  };

  // Submit a new question
  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    if (!user) {
      router.push('/auth/login');
      return;
    }

    if (!selectedQuestionCategory) {
      toast.error('لطفا دسته‌بندی سوال را انتخاب کنید', {
        duration: 3000,
        position: 'bottom-center',
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
          fontFamily: 'IranSans',
          borderRadius: '12px',
          border: '1px solid #FCA5A5',
        },
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const questionData = {
        data: {
          title: questionTitle.trim() || 'بدون عنوان',
          content: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: questionContent.trim() }]
            }
          ],
          QuestionStatus: 'در انتظار پاسخ',
          ViewCount: 0,
          author: user.username || user.email || 'کاربر ناشناس',
          PostDate: new Date().toISOString(),
          Answers: [],
          Category: selectedQuestionCategory
        }
      };

      const response = await fetch('https://admin.yuhanna.ir/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(questionData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error?.message || 'Failed to submit question');
      }

      await response.json();

      setQuestionTitle('');
      setQuestionContent('');
      setCharCount(0);
      setSelectedQuestionCategory('');
      setShowNewQuestionModal(false);

      toast.success('سوال شما با موفقیت ثبت شد', {
        duration: 3000,
        position: 'bottom-center',
        style: {
          background: '#F3F4F6',
          color: '#1F2937',
          fontFamily: 'IranSans',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
      });

      await fetchQuestions();
    } catch (err) {
      console.error('Error submitting question:', err);
      toast.error('خطا در ثبت سوال', {
        duration: 3000,
        position: 'bottom-center',
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
          fontFamily: 'IranSans',
          borderRadius: '12px',
          border: '1px solid #FCA5A5',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContentChange = (e) => {
    const content = e.target.value;
    if (content.length <= 3000) {
      setQuestionContent(content);
      setCharCount(content.length);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'پاسخ داده شده':
        return 'bg-emerald-50  text-emerald-600 ring-1 ring-inset ring-emerald-600/20';
      case 'در انتظار پاسخ':
        return 'bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-600/20';
      default:
        return 'bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-600/20';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} دقیقه پیش`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} ساعت پیش`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} روز پیش`;
  };

  const checkScroll = () => {
    if (categoriesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = categoriesRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      categoriesRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const categoriesElement = categoriesRef.current;
    if (categoriesElement) {
      checkScroll();
      categoriesElement.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (categoriesElement) {
        categoriesElement.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (user) {
      console.log('User object:', user);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-[#F8F9FC] pt-20 font-IranSans relative pb-10" dir="rtl">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[#0066FF]/[0.03]" style={{
        backgroundImage: `linear-gradient(#0066FF10 1px, transparent 1px), linear-gradient(to right, #0066FF10 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Redesigned Header Section */}
        <div className="mb-10">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg relative overflow-hidden border border-gray-200">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 backdrop-blur-lg"></div>
            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="mb-2 lg:mb-0">
                  <h1 className="text-3xl text-justify sm:text-3xl lg:text-4xl font-extrabold text-blue-900 font-IranSans">
                    ســلام <span className="text-blue-500">{user?.username || user?.email?.split('@')[0] || 'کاربر'}</span> خـوش اومــدی !
                  </h1>
                </div>
                <motion.button
                  onClick={() => setShowNewQuestionModal(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white text-blue-600 shadow-md transition-all font-IranSans text-sm border border-gray-200 hover:border-blue-200 w-full sm:w-auto"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                    <HiPlus className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>سوال جدید</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Categories Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="جستجو در سوالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-4 rounded-xl bg-white/95 backdrop-blur-sm border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-300/50 transition-all font-IranSans placeholder:text-gray-400 text-gray-700 text-sm hover:shadow-[0_4px_12px_-1px_rgba(0,0,0,0.08)]"
              />
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-10 h-5 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="flex-[2] relative group">
              {showLeftScroll && (
                <button
                  onClick={() => handleScroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Scroll left"
                >
                  <HiChevronLeft className="w-5 h-5" />
                </button>
              )}
              {showRightScroll && (
                <button
                  onClick={() => handleScroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Scroll right"
                >
                  <HiChevronRight className="w-5 h-5" />
                </button>
              )}
              <div
                ref={categoriesRef}
                className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
              >
                {/* "همه" Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory("")}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === ""
                      ? "bg-blue-100 text-blue-600 border border-blue-300"
                      : "bg-gray-100 text-gray-600 border border-gray-300"
                  }`}
                >
                  <span className="font-IranSans">همه</span>
                  <span className="inline-flex items-center justify-center min-w-[22px] h-6 px-2 rounded-full text-xs bg-white text-blue-600 shadow">
                    {toPersianDigits(questions.length)}
                  </span>
                </motion.button>

                {/* Category Buttons */}
                {categoryOptions.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-blue-100 text-blue-600 border border-blue-300"
                        : "bg-gray-100 text-gray-600 border border-gray-300"
                    }`}
                  >
                    <span className="font-IranSans">{category}</span>
                    <span className="inline-flex items-center justify-center min-w-[22px] h-6 px-2 rounded-full text-xs bg-white text-blue-600 shadow">
                      {toPersianDigits(questions.filter(q => q.Category === category).length)}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Questions List */}
          <div className="lg:col-span-2 space-y-5">
            {loading ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                <div className="animate-spin w-8 h-8 border-2 border-[#0066FF] border-t-transparent rounded-full mx-auto"></div>
                <p className="mt-4 text-gray-600">در حال بارگذاری سوالات...</p>
              </div>
            ) : error ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <p>{error}</p>
              </div>
            ) : (
              <>
                <div className="space-y-5">
                  {getPaginatedQuestions().map((question) => (
                    <motion.div
                      key={question.documentId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -2 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl shadow-blue-500/10 border border-gray-200 overflow-hidden relative group"
                    >
                      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 backdrop-blur-lg"></div>
                      
                      <div className="relative p-4 sm:p-6">
                        {/* User Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
                          <div className="flex items-center gap-3">
                            <img
                              src={`https://api.dicebear.com/7.x/micah/svg?seed=${question.author}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                              alt={question.author}
                              className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200"
                            />
                            <div>
                              <span className="block text-sm font-medium text-gray-900 font-IranSans">
                                {question.author || 'کاربر ناشناس'}
                              </span>
                              <span className="text-xs text-gray-500 font-IranSans">
                                {formatDate(question.PostDate)}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded-lg border border-blue-100">
                              <HiOutlineThumbUp className="w-4 h-4 text-blue-500" />
                              <span className="text-sm text-blue-600">{question.Likes || 0}</span>
                            </div>
                          </div>
                        </div>

                        {/* Question Content */}
                        <Link href={`/forum/question/${question.documentId}`} className="block">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 font-IranSans group-hover:text-blue-600 transition-colors">
                              {question.title}
                            </h3>
                            <span className={`inline-flex w-fit px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap ${
                              question.QuestionStatus === 'پاسخ داده شده'
                                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                : 'bg-amber-50 text-amber-600 border border-amber-200'
                            }`}>
                              {question.QuestionStatus}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2 font-IranSans text-sm sm:text-base">
                            {getTextFromContent(question.content)}
                          </p>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="px-3 w-fit py-1.5 text-sm text-purple-600 font-medium font-IranSans bg-purple-50 rounded-lg border border-purple-100 inline-flex items-center justify-center">
                              {question.Category}
                            </span>
                            <div className="flex items-center gap-1.5 text-gray-500">
                              <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                              <span className="font-IranSans">{question.Answers?.length || 0} پاسخ</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8 mb-10 overflow-x-auto pb-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                        currentPage === 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <HiChevronRight className="w-5 h-5" />
                    </motion.button>

                    {[...Array(totalPages)].map((_, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all font-medium ${
                          currentPage === i + 1
                            ? "bg-[#0066FF] text-white shadow-[0_2px_8px_-2px_rgba(0,102,255,0.3)]"
                            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                        }`}
                      >
                        {i + 1}
                      </motion.button>
                    ))}

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                        currentPage === totalPages
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <HiChevronLeft className="w-5 h-5" />
                    </motion.button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:block">
            {/* Popular Questions */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl shadow-blue-500/10 border border-gray-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 backdrop-blur-lg"></div>

              <div className="relative p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <HiOutlineFire className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 font-IranSans">سوالات محبوب</h2>
                </div>
              </div>

              <div className="relative divide-y divide-gray-100">
                {questions
                  .sort((a, b) => (b.Likes || 0) - (a.Likes || 0))
                  .slice(0, 5)
                  .map((question) => (
                    <Link
                      href={`/forum/question/${question.documentId}`}
                      key={question.documentId}
                      className="block p-5 hover:bg-white/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-900 line-clamp-1 font-IranSans">
                          {question.title}
                        </h4>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded-lg text-xs text-blue-600">
                          <HiOutlineThumbUp className="w-3.5 h-3.5" />
                          <span>{question.Likes || 0}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 font-IranSans">
                        {getTextFromContent(question.content)}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Question Modal */}
      {showNewQuestionModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">{steps[currentStep - 1].title}</h2>
              <button
                onClick={() => setShowNewQuestionModal(false)}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              {currentStep === 1 && (
                <div>
                  <Combobox 
                    value={selectedQuestionCategory} 
                    onChange={setSelectedQuestionCategory}
                  >
                    <Combobox.Label className="block text-sm font-medium text-gray-700 mb-2">
                      دسته‌بندی
                    </Combobox.Label>
                    <div className="relative">
                      <Combobox.Button className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 flex items-center justify-between transition-all bg-white">
                        {selectedQuestionCategory || 'انتخاب دسته‌بندی'}
                        <ChevronUpDownIcon className="w-5 h-5 text-gray-400" />
                      </Combobox.Button>
                      <Combobox.Options className="absolute mt-2 w-full rounded-xl border border-gray-100 bg-white shadow-lg py-2 z-50 transform origin-top transition-all">
                        {categoryOptions.map((category) => (
                          <Combobox.Option
                            key={category}
                            value={category}
                            className={({ active }) => `px-4 py-3 cursor-pointer transition-colors ${active ? 'bg-blue-50' : ''}`}
                          >
                            {category}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </div>
                  </Combobox>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      value={questionTitle}
                      onChange={(e) => setQuestionTitle(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-900 peer transition-all"
                      placeholder=" "
                      dir="rtl"
                    />
                    <label className="absolute right-4 -top-2.5 px-1 ئف bg-white text-sm text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-[#0066FF] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                      عنوان سوال
                    </label>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div>
                  <div className="relative">
                    <textarea
                      value={questionContent}
                      onChange={(e) => {
                        setQuestionContent(e.target.value);
                        setCharCount(e.target.value.length);
                      }}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 peer h-40 resize-none transition-all"
                      placeholder=" "
                      dir="rtl"
                    />
                    <label className="absolute right-4 -top-2.5 px-1 bg-white text-sm text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-[#0066FF] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                      متن سوال
                    </label>
                    <div className="absolute bottom-3 left-4 text-sm text-gray-400 transition-colors peer-focus:text-[#0066FF]">
                      {charCount}/1000
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-end gap-3 mt-6">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep(s => s - 1)}
                    className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    بازگشت
                  </button>
                )}
                
                <button
                  onClick={(e) => {
                    if (currentStep < steps.length) {
                      if (selectedQuestionCategory && questionTitle.trim()) {
                        setCurrentStep(s => s + 1)
                      } else {
                        toast.error('لطفا فیلدهای ضروری را پر کنید')
                      }
                    } else {
                      handleSubmitQuestion(e)
                    }
                  }}
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-xl text-white transition-all ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#0066FF] hover:bg-[#0052CC] shadow-[0_2px_8px_-2px_rgba(0,102,255,0.3)]'
                  }`}
                >
                  {isSubmitting ? 'در حال ارسال...' 
                    : currentStep === steps.length ? 'ارسال سوال' 
                    : 'مرحله بعد'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
