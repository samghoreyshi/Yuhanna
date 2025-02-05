'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TopicPage({ params }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [topic, setTopic] = useState({
    id: params.id,
    title: 'به فروم یوحنا خوش آمدید',
    author: 'Admin',
    content: 'محتوای موضوع اینجا قرار می‌گیرد...',
    createdAt: '۱۰ دقیقه پیش',
    category: 'عمومی',
    replies: [
      {
        id: 1,
        author: 'کاربر ۱',
        content: 'پاسخ به موضوع...',
        createdAt: '۵ دقیقه پیش',
      },
      // Add more sample replies
    ],
  });

  const [newReply, setNewReply] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    // Add reply logic here
    setNewReply('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-4 space-x-reverse text-sm font-IranSans">
            <li>
              <Link href="/forum" className="text-gray-500 hover:text-gray-700">
                فروم
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href={`/forum?category=${topic.category}`} className="text-gray-500 hover:text-gray-700">
                {topic.category}
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">{topic.title}</li>
          </ol>
        </nav>

        {/* Topic */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 font-IranSans">{topic.title}</h1>
              <span className="text-sm text-gray-500 font-IranSans">{topic.createdAt}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-IranSans">
              <span>نویسنده: {topic.author}</span>
              <span>دسته: {topic.category}</span>
            </div>
            <div className="prose prose-blue max-w-none font-IranSans">
              {topic.content}
            </div>
          </div>
        </div>

        {/* Replies */}
        <div className="space-y-6">
          {topic.replies.map((reply) => (
            <div key={reply.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-gray-900 font-IranSans">{reply.author}</span>
                <span className="text-sm text-gray-500 font-IranSans">{reply.createdAt}</span>
              </div>
              <div className="prose prose-blue max-w-none font-IranSans">
                {reply.content}
              </div>
            </div>
          ))}
        </div>

        {/* Reply Form */}
        <form onSubmit={handleSubmitReply} className="mt-8">
          <div className="mb-4">
            <label htmlFor="reply" className="block text-sm font-medium text-gray-700 mb-2 font-IranSans">
              پاسخ شما
            </label>
            <textarea
              id="reply"
              rows={4}
              className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-IranSans resize-none"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="پاسخ خود را اینجا بنویسید..."
              dir="rtl"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-IranSans"
            >
              ارسال پاسخ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
