'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineChatAlt2, HiChevronLeft, HiOutlineClock, HiOutlineExclamation } from 'react-icons/hi';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userAnswers, setUserAnswers] = useState([]);
  const [loadingAnswers, setLoadingAnswers] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchUserAnswers = async () => {
      if (user) {
        try {
          const response = await fetch('https://admin.yuhanna.ir/api/questions?populate=*');

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          
          // Filter questions that have answers from the current user
          const userAnswers = data.data
            .filter(question => 
              question.Answers?.some(answer => answer.Author === user.username)
            )
            .map(question => {
              const userAnswer = question.Answers.find(answer => answer.Author === user.username);
              return {
                id: userAnswer.id,
                attributes: {
                  Content: userAnswer.Answer,
                  createdAt: question.createdAt,
                  Question: {
                    data: {
                      id: question.id,
                      attributes: {
                        Title: question.title,
                        Content: question.content,
                        documentId: question.documentId
                      }
                    }
                  }
                }
              };
            })
            .sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt))
            .slice(0, 5);

          setUserAnswers(userAnswers);
        } catch (error) {
          console.error('Error fetching user answers:', error.message);
          setUserAnswers([]);
        } finally {
          setLoadingAnswers(false);
        }
      }
    };

    if (user) {
      fetchUserAnswers();
    }
  }, [user]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-24 relative mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl shadow-blue-500/20 border border-gray-200 overflow-hidden p-8">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'تاریخ نامعتبر';
    try {
      const date = new Date(dateString);
      
      const formatter = new Intl.DateTimeFormat('fa-IR', {
        timeZone: 'Asia/Tehran',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        calendar: 'persian'
      });

      const parts = formatter.formatToParts(date);
      const year = parts.find(part => part.type === 'year').value;
      const month = parts.find(part => part.type === 'month').value;
      const day = parts.find(part => part.type === 'day').value;

      return `${year}/${month}/${day}`;
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'تاریخ نامعتبر';
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gray-50">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 py-24 relative mt-10">
        <div className="max-w-4xl mx-auto">
          {/* Development Warning Banner */}
          <div className="mb-6 backdrop-blur-sm bg-amber-50/80 rounded-3xl shadow-lg shadow-amber-500/10 border border-amber-200 overflow-hidden p-6">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <HiOutlineExclamation className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-800 font-IranSans mb-1">وب‌سایت در حال توسعه</h3>
                <p className="text-amber-700 font-IranSans text-sm">
                  این وب‌سایت در حال حاضر در مرحله توسعه قرار دارد. برخی از امکانات ممکن است به درستی کار نکنند یا در دسترس نباشند.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative Dots */}
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-500/10 rounded-full blur-lg" />
            <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-purple-500/10 rounded-full blur-lg" />
            
            <h1 className="text-3xl font-bold text-blue-600 font-IranSans mb-8 text-right relative">
              داشبورد کاربری
              <div className="absolute bottom-0 right-0 h-1 w-24 bg-gradient-to-l from-blue-600/0 via-blue-600 to-blue-600/0" />
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Information Card */}
            <div className="backdrop-blur-sm bg-white/80 rounded-3xl shadow-xl shadow-blue-500/10 border border-gray-300 overflow-hidden p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-800 font-IranSans mb-6 text-right relative">
                اطلاعات کاربری
                <div className="absolute bottom-0 right-0 h-0.5 w-16 bg-gradient-to-l from-gray-800/0 via-gray-800 to-gray-800/0" />
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                  <span className="text-gray-800 font-IranSans">{user.username}</span>
                  <span className="text-gray-600 font-IranSans">نام کاربری</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                  <span className="text-gray-800 font-IranSans">{user.email}</span>
                  <span className="text-gray-600 font-IranSans">ایمیل</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                  <span className="text-gray-800 font-IranSans">{formatDate(user.createdAt)}</span>
                  <span className="text-gray-600 font-IranSans">تاریخ عضویت</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                  <span className="text-gray-800 font-IranSans">{user.FirstNameLastName || '---'}</span>
                  <span className="text-gray-600 font-IranSans">نام و نام خانوادگی</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                  <span className="text-gray-800 font-IranSans">{user.CodeMelli || '---'}</span>
                  <span className="text-gray-600 font-IranSans">کد ملی</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-IranSans">{user.PhoneNumber || '---'}</span>
                  <span className="text-gray-600 font-IranSans">شماره تلفن</span>
                </div>
              </div>
            </div>

            {/* Account Status Card */}
            <div className="backdrop-blur-sm bg-white/80 rounded-3xl shadow-xl shadow-blue-500/10 border border-gray-300 overflow-hidden p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-800 font-IranSans mb-6 text-right relative">
                وضعیت حساب کاربری
                <div className="absolute bottom-0 right-0 h-0.5 w-16 bg-gradient-to-l from-gray-800/0 via-gray-800 to-gray-800/0" />
              </h2>
              <div className="flex justify-between items-center">
                {user.confirmed ? (
                  <span className="px-4 py-2 rounded-xl bg-green-50 text-green-600 font-IranSans text-sm">
                    تایید شده
                  </span>
                ) : (
                  <span className="px-4 py-2 rounded-xl bg-amber-50 text-amber-600 font-IranSans text-sm">
                    در انتظار تایید
                  </span>
                )}
                <span className="text-gray-600 font-IranSans">وضعیت تایید</span>
              </div>
              {user.blocked && (
                <div className="flex justify-between items-center mt-4">
                  <span className="px-4 py-2 rounded-xl bg-red-50 text-red-600 font-IranSans text-sm">
                    مسدود شده
                  </span>
                  <span className="text-gray-600 font-IranSans">وضعیت حساب</span>
                </div>
              )}
            </div>

            {/* Recent Activity Card */}
            <div className="md:col-span-2 backdrop-blur-sm bg-white/80 rounded-3xl shadow-xl shadow-blue-500/10 border border-gray-300 overflow-hidden p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-800 font-IranSans mb-6 text-right relative">
                پاسخ‌های اخیر شما
                <div className="absolute bottom-0 right-0 h-0.5 w-16 bg-gradient-to-l from-gray-800/0 via-gray-800 to-gray-800/0" />
              </h2>
              
              {loadingAnswers ? (
                <div className="space-y-4 animate-pulse">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-gray-100">
                      <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                      <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : userAnswers.length > 0 ? (
                <div className="space-y-4">
                  {userAnswers.map((answer) => (
                    <Link 
                      href={`/forum/question/${answer.attributes.Question.data.attributes.documentId}`}
                      key={answer.id}
                      className="group block"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-300 transition-all duration-300 hover:shadow-md hover:border-blue-100">
                        <div className="flex items-start gap-3 flex-grow">
                          <div className="mt-1">
                            <HiOutlineChatAlt2 className="w-5 h-5 text-blue-500" />
                          </div>
                          <div className="space-y-1 flex-grow">
                            <h3 className="font-IranSans text-gray-900 text-right line-clamp-2">
                              {answer.attributes.Question.data.attributes.Title}
                            </h3>
                            <p className="font-IranSans text-gray-600 text-sm text-right line-clamp-2">
                              {answer.attributes.Content}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mr-auto text-gray-500 text-sm font-IranSans">
                          <HiOutlineClock className="w-4 h-4" />
                          <span>{formatDate(answer.attributes.createdAt)}</span>
                          <HiChevronLeft className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 font-IranSans text-right">
                  شما هنوز هیچ پاسخی ثبت نکرده‌اید
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
