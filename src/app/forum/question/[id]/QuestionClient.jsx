'use client';
import { useState, useEffect, useRef, use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  HiOutlineChat, HiOutlineDotsVertical, HiOutlineThumbUp, HiOutlinePaperAirplane, HiOutlineTrash,
  HiOutlineLightBulb, HiOutlineClock, HiOutlineUser, HiOutlineEye, HiOutlineBookmark,
  HiOutlineShare, HiOutlineTag, HiOutlineCheck, HiOutlineChatAlt, HiOutlineThumbDown,
  HiOutlinePencil, HiOutlineLockClosed, HiOutlineChartBar, HiOutlineArrowRight
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';

export default function QuestionPage({ params }) {
  const resolvedParams = use(params);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState(null);
  const [relatedQuestions, setRelatedQuestions] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState('120px');
  const [likes, setLikes] = useState(0);
  const [isLiking, setIsLiking] = useState(false);
  const textareaRef = useRef(null);
  const { user, loading: authLoading } = useAuth();

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(120, textareaRef.current.scrollHeight)}px`;
    }
  };

  const handleTextareaChange = (e) => {
    setNewAnswer(e.target.value);
    adjustTextareaHeight();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'لحظاتی پیش';
    return new Intl.DateTimeFormat('fa-IR').format(new Date(dateString));
  };

  const getInitialAndColor = (name) => {
    if (!name) return { initial: '?', color: 'bg-gray-200', gradient: 'from-gray-400/20 to-gray-500/20' };

    // Get first letter of the first word
    const initial = name.trim().charAt(0).toUpperCase();

    // Pastel color palette with matching gradients
    const colors = [
      { bg: 'bg-[#FFB5BA]', gradient: 'from-pink-400/20 to-rose-400/20' },     // Pastel Pink
      { bg: 'bg-[#B5E5CF]', gradient: 'from-green-400/20 to-emerald-400/20' }, // Pastel Green
      { bg: 'bg-[#B5D8FF]', gradient: 'from-blue-400/20 to-sky-400/20' },      // Pastel Blue
      { bg: 'bg-[#FFD9B5]', gradient: 'from-orange-400/20 to-amber-400/20' },  // Pastel Orange
      { bg: 'bg-[#D7B5FF]', gradient: 'from-purple-400/20 to-violet-400/20' }, // Pastel Purple
      { bg: 'bg-[#B5FFE1]', gradient: 'from-teal-400/20 to-cyan-400/20' },     // Pastel Mint
      { bg: 'bg-[#FFB5E8]', gradient: 'from-pink-400/20 to-fuchsia-400/20' },  // Pastel Rose
      { bg: 'bg-[#B5FFFF]', gradient: 'from-cyan-400/20 to-sky-400/20' }       // Pastel Cyan
    ];

    // Use the sum of char codes to determine color
    const charSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const colorIndex = charSum % colors.length;

    return {
      initial,
      color: colors[colorIndex].bg,
      gradient: colors[colorIndex].gradient
    };
  };

  const getPastelColor = (seed) => {
    const colors = [
      'from-rose-50/80 via-white to-rose-50/50',
      'from-pink-50/80 via-white to-pink-50/50',
      'from-fuchsia-50/80 via-white to-fuchsia-50/50',
      'from-purple-50/80 via-white to-purple-50/50',
      'from-violet-50/80 via-white to-violet-50/50',
      'from-indigo-50/80 via-white to-indigo-50/50',
      'from-blue-50/80 via-white to-blue-50/50',
      'from-sky-50/80 via-white to-sky-50/50',
      'from-cyan-50/80 via-white to-cyan-50/50',
      'from-teal-50/80 via-white to-teal-50/50',
      'from-emerald-50/80 via-white to-emerald-50/50',
      'from-green-50/80 via-white to-green-50/50',
      'from-lime-50/80 via-white to-lime-50/50',
      'from-yellow-50/80 via-white to-yellow-50/50',
      'from-amber-50/80 via-white to-amber-50/50',
      'from-orange-50/80 via-white to-orange-50/50'
    ];
    // Use the seed (author name) to consistently get the same color for the same author
    const index = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  const fetchQuestion = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://admin.yuhanna.ir/api/questions?filters[documentId][$eq]=${resolvedParams.id}&populate=*`);
      if (!response.ok) {
        throw new Error('Failed to fetch question');
      }
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setQuestion(data.data[0]);
      } else {
        setError('Question not found');
      }
    } catch (err) {
      console.error('Error fetching question:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedQuestions = async () => {
    try {
      const response = await fetch('https://admin.yuhanna.ir/api/questions?populate=*');
      if (!response.ok) {
        throw new Error('Failed to fetch related questions');
      }
      const data = await response.json();

      // Filter out the current question and get only relevant ones
      const otherQuestions = data.data
        .filter(q => q.documentId !== resolvedParams.id)
        .map(q => ({
          id: q.documentId, // Use documentId for routing
          title: q.title,
          views: q.ViewCount || 0,
          answers: q.Answers?.length || 0,
          content: q.content,
          author: q.author,
          QuestionStatus: q.QuestionStatus
        }))
        .slice(0, 3); // Get top 3 questions

      setRelatedQuestions(otherQuestions);
    } catch (err) {
      console.error('Error fetching related questions:', err);
      // Don't set error state as this is not critical
    }
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    if (!newAnswer.trim() || !user) return;

    try {
      setSubmitting(true);

      // First get the current question data
      const currentQuestion = await fetch(`https://admin.yuhanna.ir/api/questions?filters[documentId][$eq]=${resolvedParams.id}&populate=*`);
      const questionData = await currentQuestion.json();

      if (!questionData.data || !questionData.data[0]) {
        throw new Error('Question not found');
      }

      // Remove IDs from existing answers
      const currentAnswers = (questionData.data[0].Answers || []).map(({ Author, Answer }) => ({
        Author,
        Answer
      }));

      // Now update with the new answer
      const updateData = {
        data: {
          Answers: [
            ...currentAnswers,
            {
              Author: user.username || user.email || 'کاربر ناشناس',
              Answer: newAnswer.trim()
            }
          ],
          QuestionStatus: 'پاسخ داده شده'
        }
      };

      console.log('Sending update data:', updateData);

      const response = await fetch(`https://admin.yuhanna.ir/api/questions/${questionData.data[0].documentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      const responseText = await response.text();
      console.log('Server response:', responseText);

      if (!response.ok) {
        throw new Error(`Failed to submit answer: ${responseText}`);
      }

      // Try to parse the response if it's JSON
      try {
        const responseData = JSON.parse(responseText);
        console.log('Parsed response:', responseData);
      } catch (e) {
        console.log('Response was not JSON:', responseText);
      }

      await fetchQuestion();
      setNewAnswer('');
    } catch (error) {
      console.error('Error submitting answer:', error.message);
      alert('خطا در ثبت پاسخ. لطفا دوباره تلاش کنید.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteAnswer = async (answerIndex) => {
    if (!user || !window.confirm('آیا از حذف این پاسخ مطمئن هستید؟')) return;

    try {
      setSubmitting(true);

      // Get current question data
      const currentQuestion = await fetch(`https://admin.yuhanna.ir/api/questions?filters[documentId][$eq]=${resolvedParams.id}&populate=*`);
      const questionData = await currentQuestion.json();

      if (!questionData.data || !questionData.data[0]) {
        throw new Error('Question not found');
      }

      // Filter out the answer to delete and ensure correct structure
      const updatedAnswers = questionData.data[0].Answers
        .filter((_, index) => index !== answerIndex)
        .map(({ Author, Answer }) => ({
          Author,
          Answer
        }));

      // Update question status if no answers remain
      const questionStatus = updatedAnswers.length === 0 ? 'در انتظار پاسخ' : 'پاسخ داده شده';

      const updateData = {
        data: {
          Answers: updatedAnswers,
          QuestionStatus: questionStatus
        }
      };

      console.log('Sending delete data:', updateData);

      const response = await fetch(`https://admin.yuhanna.ir/api/questions/${questionData.data[0].documentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      const responseText = await response.text();
      console.log('Server response:', responseText);

      if (!response.ok) {
        throw new Error(`Failed to delete answer: ${responseText}`);
      }

      await fetchQuestion();
    } catch (error) {
      console.error('Error deleting answer:', error.message);
      alert('خطا در حذف پاسخ. لطفا دوباره تلاش کنید.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('لینک سوال کپی شد', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#F3F4F6',
          color: '#1F2937',
          fontFamily: 'IranSans',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        },
      });
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error('خطا در کپی کردن لینک', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
          fontFamily: 'IranSans',
          borderRadius: '12px',
          border: '1px solid #FCA5A5',
        },
      });
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = async () => {
    if (!user) {
      router.push('/auth/login');
      return;
    }

    try {
      setIsLiking(true);

      // First get the current question data
      const currentQuestion = await fetch(`https://admin.yuhanna.ir/api/questions?filters[documentId][$eq]=${resolvedParams.id}&populate=*`);
      const questionData = await currentQuestion.json();

      if (!questionData.data || !questionData.data[0]) {
        throw new Error('Question not found');
      }

      const questionId = questionData.data[0].documentId;
      const currentLikes = questionData.data[0].Likes || 0;

      const response = await fetch(`https://admin.yuhanna.ir/api/questions/${questionId}?populate=*`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Likes: currentLikes + 1
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        throw new Error('Failed to update likes');
      }

      const updatedData = await response.json();
      setLikes(updatedData.data.Likes || 0);

      toast.success('لایک شما ثبت شد', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#F3F4F6',
          color: '#1F2937',
          fontFamily: 'IranSans',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        },
      });
    } catch (error) {
      console.error('Error updating likes:', error);
      toast.error('خطا در ثبت لایک', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
          fontFamily: 'IranSans',
          borderRadius: '12px',
          border: '1px solid #FCA5A5',
        },
      });
    } finally {
      setIsLiking(false);
    }
  };

  useEffect(() => {
    if (question) {
      setLikes(question.Likes || 0);
    }
  }, [question]);

  useEffect(() => {
    console.log('Current question data:', question);
  }, [question]);

  useEffect(() => {
    fetchQuestion();
    fetchRelatedQuestions();
  }, [resolvedParams.id]);

  // Add helper function to parse content
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

  if (!mounted) {
    return null; // Return null on first render to avoid hydration mismatch
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 relative pt-20" >
        {/* Grid Background - More visible */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4444440A_1px,transparent_1px),linear-gradient(to_bottom,#4444440A_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-white/50 rounded-xl w-3/4"></div>
            <div className="h-4 bg-white/50 rounded-xl w-1/2"></div>
            <div className="h-32 bg-white/50 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-indigo-200 relative pt-20" >
        {/* Grid Background - More visible */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4444440A_1px,transparent_1px),linear-gradient(to_bottom,#4444440A_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl" role="alert">
            <strong className="font-bold font-IranSans">خطا: </strong>
            <span className="block sm:inline font-IranSans">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-300 relative pt-5">
      {/* Grid Background - More visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4444440A_1px,transparent_1px),linear-gradient(to_bottom,#4444440A_1px,transparent_1px)] bg-[size:32px_32px]" />

      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


          {loading ? (
            <div className="flex justify-center items-center min-h-[60vh]">
              <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : question ? (
            <div className="flex flex-col lg:flex-row gap-8 pt-10">
              {/* Main Content */}
              <div className="flex-1 min-w-0 ">
                <div className="bg-white rounded-3xl border border-gray-300 shadow-sm overflow-hidden">

                  {/* Question Header */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-3 mb-4 sm:mb-0">
                        <div className="flex items-center gap-3">
                          <img
                            src={`https://api.dicebear.com/7.x/micah/svg?seed=${question.author}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                            alt={question.author}
                            className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-400"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900 font-IranSans">
                                {question.author}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <span className="font-IranSans">
                                {formatDate(question.PostDate)}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Back to Forum Button */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6"
                        >
                          <Link
                            href="/forum"
                            className="inline-flex mt-5 items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-blue-600 
                transition-all duration-300 group bg-white/80 backdrop-blur-sm rounded-xl border 
                border-gray-200 hover:border-blue-100 hover:bg-white hover:shadow-md"
                          >
                            <HiOutlineArrowRight className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                            <span className="font-IranSans text-sm">بازگشت به فروم</span>
                          </Link>
                        </motion.div>
                      </div>
                      <div className="self-start sm:self-center">
                        <div className={`inline-flex px-3 py-1.5 rounded-lg font-IranSans text-sm font-medium whitespace-nowrap
                          ${question.QuestionStatus === 'در انتظار پاسخ'
                            ? 'bg-amber-50 text-amber-600 border border-amber-200'
                            : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                          }`}
                        >
                          {question.QuestionStatus}
                        </div>
                      </div>
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 font-IranSans leading-relaxed">{question.title}</h1>
                  </div>

                  {/* Question Content */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200">
                    <div className="prose prose-lg max-w-none pt-6 sm:pt-8">
                      <div className="text-gray-700 text-base font-IranSans text-justify whitespace-pre-wrap leading-relaxed">
                        {getTextFromContent(question.content)}
                      </div>
                    </div>
                  </div>

                  {/* Answers Section */}
                  <div className="border-t border-gray-200 bg-white">
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                        <div className="flex items-center gap-3 mb-4 sm:mb-0">
                          <span className="text-xl font-bold text-gray-900 font-IranSans">پاسخ‌ها</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.button
                            onClick={handleLike}
                            disabled={isLiking || !user}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
                              ${isLiking ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}
                              ${!user && 'opacity-50 cursor-not-allowed'}`}
                          >
                            <HiOutlineThumbUp className={`w-5 h-5 ${isLiking && 'animate-pulse'}`} />
                            <span className="font-IranSans">{likes}</span>
                          </motion.button>
                        </div>
                      </div>

                      {/* Answers List */}
                      <div className="space-y-6">
                        {question.Answers?.length === 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-gray-50/80 via-white to-gray-50/50 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 text-center"
                          >
                            <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                              <HiOutlineChatAlt className="w-8 h-8" />
                              <p className="font-IranSans text-sm">
                                هنوز پاسخی برای این سوال ثبت نشده است
                                <br />
                                اولین نفری باشید که پاسخ می‌دهد
                              </p>
                            </div>
                          </motion.div>
                        )}
                        {question.Answers?.map((answer, index) => (
                          <motion.div
                            key={answer.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-gradient-to-br ${getPastelColor(answer.Author)} backdrop-blur-sm rounded-2xl border border-gray-300 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300`}
                          >
                            <div className="p-4 sm:p-6 relative">
                              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/20 pointer-events-none rounded-2xl" />
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                                  <div className="relative">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white 
                                        ${getInitialAndColor(answer.Author).color} bg-gradient-to-br from-[#00000015] to-transparent`}>
                                        {getInitialAndColor(answer.Author).initial}
                                      </div>
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                                      <HiOutlineCheck className="w-2 h-2 text-white" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium text-gray-900 font-IranSans">{answer.Author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                      <span className="font-IranSans">پاسخ دهنده</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {user && (user.username === answer.Author || user.email === answer.Author) && (
                                    <motion.button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteAnswer(index);
                                      }}
                                      disabled={submitting}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                                      title="حذف پاسخ"
                                    >
                                      <HiOutlineTrash className="w-4 h-4" />
                                    </motion.button>
                                  )}
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-100 to-transparent rounded-full" />
                                <div className="pl-6">
                                  <p className="text-gray-700 leading-relaxed font-IranSans text-base text-justify">{answer.Answer}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Answer Input */}
                      {user ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-8 bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl border border-gray-300 shadow-sm"
                        >
                          <form onSubmit={handleSubmitAnswer} className="space-y-4">
                            <div className="relative group">
                              <textarea
                                id="answer-input"
                                ref={textareaRef}
                                value={newAnswer}
                                onChange={handleTextareaChange}
                                placeholder="پاسخ خود را بنویسید..."
                                style={{ height: textareaHeight }}
                                className="w-full min-h-[120px] bg-white/50 backdrop-blur-sm p-5 rounded-2xl 
                                  text-gray-700 placeholder-gray-400 border-none outline-none resize-none 
                                  font-IranSans text-base transition-all duration-300 text-justify
                                  focus:bg-white focus:shadow-[0_0_0_2px_rgba(59,130,246,0.2)]
                                  selection:bg-blue-100"
                                disabled={submitting}
                              />
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-gray-50/20 pointer-events-none" />
                              <div className="absolute bottom-3 right-4 flex items-center gap-2 text-sm text-gray-400">
                                <span className="font-IranSans">{newAnswer.length} حروف</span>
                                <div className="w-px h-4 bg-gray-300"></div>
                                <span className="font-IranSans">
                                  {newAnswer.split(/\s+/).filter(Boolean).length} کلمات
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                {newAnswer.length > 0 && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-1"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span className="font-IranSans text-blue-500">در حال نوشتن</span>
                                  </motion.div>
                                )}
                              </div>
                              <motion.button
                                type="submit"
                                disabled={submitting || !newAnswer.trim()}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 
                                  rounded-xl font-IranSans text-sm disabled:opacity-50 disabled:cursor-not-allowed 
                                  transition-all duration-300 hover:shadow-lg disabled:hover:shadow-none
                                  flex items-center gap-2 relative overflow-hidden group"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 
                                  group-hover:translate-x-full transition-transform duration-1000"></div>
                                {submitting ? (
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                  <>
                                    <span>ارسال</span>
                                    <HiOutlinePaperAirplane className="w-4 h-4 rotate-90" />
                                  </>
                                )}
                              </motion.button>
                            </div>
                          </form>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-sm"
                        >
                          <div className="text-center text-gray-500 font-IranSans">
                            برای ارسال پاسخ وارد شوید
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-20 space-y-6">
                  {/* Answer Button */}
                  {user ? (
                    <motion.button
                      onClick={() => textareaRef.current?.focus()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border border-blue-100/50 
                        hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center 
                          group-hover:bg-blue-500/20 transition-colors duration-300">
                          <HiOutlinePaperAirplane className="w-6 h-6 text-blue-600 rotate-90" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900 font-IranSans">
                            پاسخ دهید
                          </div>
                          <div className="text-sm text-gray-500 font-IranSans">
                            به این سوال پاسخ دهید
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ) : (
                    <div className="w-full bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl border border-gray-100/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gray-500/10 flex items-center justify-center">
                          <HiOutlineLockClosed className="w-6 h-6 text-gray-500" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-700 font-IranSans">
                            وارد شوید
                          </div>
                          <div className="text-sm text-gray-500 font-IranSans">
                            برای پاسخ دادن وارد شوید
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Related Questions */}
                  <div className="bg-white rounded-3xl border border-gray-300 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-IranSans flex items-center gap-2">
                      <HiOutlineLightBulb className="w-5 h-5 text-blue-500" />
                      سوالات مرتبط
                    </h3>
                    <div className="space-y-4">
                      {relatedQuestions.map((relatedQuestion, index) => (
                        <Link
                          href={`/forum/question/${relatedQuestion.id}`}
                          key={relatedQuestion.id}
                          className="block"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-gradient-to-br from-white to-gray-50 p-4 rounded-2xl border border-gray-200 
                              hover:border-blue-100 transition-all duration-300 hover:shadow-md"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 
                              group-hover:via-blue-500/5 rounded-2xl transition-all duration-500"></div>
                            <h4 className="text-gray-900 font-IranSans text-base mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                              {relatedQuestion.title}
                            </h4>
                            <p className="text-gray-500 text-sm font-IranSans line-clamp-2">
                              {relatedQuestion.content[1]?.children[0]?.text || relatedQuestion.content[0]?.children[0]?.text}
                            </p>
                            <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
                              <span className="font-IranSans">{relatedQuestion.author}</span>
                              <span>•</span>
                              <span className="font-IranSans">{relatedQuestion.QuestionStatus}</span>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
