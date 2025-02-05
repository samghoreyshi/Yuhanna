'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import NewsPageClient from '@/components/NewsPageClient'; // Fixed import path

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const filteredNews = newsData.filter(news =>
    news.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.Content.some(content =>
      content.children.some(child =>
        child.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  );

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://admin.yuhanna.ir/api/newspages?populate=*');
        const data = await response.json();
        setNewsData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsSearching(false);
    }, 300);

    return () => {
      clearTimeout(handler);
      setIsSearching(true);
    };
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-24">
          {/* Rotating Logo */}
          <div className="flex justify-center mb-16">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg"
            />
          </div>

          {/* Content Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Panel */}
            <div className="space-y-6">
              <div className="h-12 bg-blue-100/30 rounded-2xl w-3/4 animate-pulse" />
              <div className="h-6 bg-blue-100/30 rounded-xl w-1/2 animate-pulse" />
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-blue-100/30 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              <div className="aspect-video bg-blue-100/30 rounded-2xl animate-pulse" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 bg-blue-100/30 rounded-xl animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#fafbff] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:24px_24px] bg-center opacity-[0.03]" />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute -top-32 -left-48 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.3, x: 0 }}
        className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-2xl rotate-45"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[#0066FF]/[0.03]" style={{
        backgroundImage: `linear-gradient(#0066FF10 1px, transparent 1px), linear-gradient(to right, #0066FF10 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Featured Article */}
            {filteredNews.length > 0 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-forum-card hover:shadow-forum-card-hover border border-[#e0e7ff] transition-all duration-300 group relative mb-5"
              >
                <Link href={`/news/${filteredNews[0].Slug}`} className="absolute inset-0 z-10" />
                {filteredNews[0].CoverImage && (
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={`https://admin.yuhanna.ir${filteredNews[0].CoverImage.formats.large.url}`}
                      alt={filteredNews[0].Title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">اخبار جدید</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400" dir="ltr">
                    {new Date(filteredNews[0].publishedAt).toLocaleDateString('fa-IR')}
                  </span>
                </div>
                <h1 className="text-2xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {filteredNews[0].Title}
                </h1>
                <p className="text-gray-500 leading-relaxed">
                  {filteredNews[0].Content[0].children[0].text}
                </p>
                <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  ادامه مطلب
                  <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.article>
            )}

            {/* Recent Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNews.slice(1).map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-100 to-white rounded-2xl overflow-hidden p-6 shadow-forum-card hover:shadow-forum-card-hover border border-[#e0e7ff] transition-all duration-300 group relative"
                >

                  <Link href={`/news/${news.Slug}`} className="absolute inset-0 z-10" />
                  {news.CoverImage && (
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={`https://admin.yuhanna.ir${news.CoverImage.formats.medium.url}`}
                        alt={news.Title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="bg-gradient-to-br from-gray-100 to-white text-blue-800 px-3 py-1 rounded-full text-xs font-medium">اخبار جدید</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400" dir="ltr">
                      {new Date(news.publishedAt).toLocaleDateString('fa-IR')}
                    </span>
                  </div>
                  <h2 className="text-base font-medium text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {news.Title}
                  </h2>

                </motion.article>
              ))}

            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8 px-5 pb-5 bg-white rounded-2xl shadow-forum-card border border-[#e0e7ff] overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:24px_24px] bg-center opacity-10" />
              <div className="relative z-10 space-y-8">
                {/* Promo Image */}
                <NewsPageClient />

                {/* Search Container */}
                <div className="relative">
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 text-sm bg-white/80 backdrop-blur-sm transition-all"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setIsSearching(true);
                        }}
                        placeholder="جستجو در اخبار..."
                        dir="rtl"
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Suggested News Grid */}
                <div className="relative">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b border-blue-50">پیشنهادهای ویژه</h3>
                  <div className="grid grid-cols-1 gap-5">
                    {filteredNews.slice(0, 4).map((news) => (
                      <motion.article
                        key={news.id}
                        className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-lg border-2 border-blue-50 hover:border-blue-100 transition-all duration-300"
                      >
                        <Link href={`/news/${news.Slug}`} className="absolute inset-0 z-10" />
                        {news.CoverImage && (
                          <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
                            <Image
                              src={`https://admin.yuhanna.ir${news.CoverImage.formats.small.url}`}
                              alt={news.Title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        )}
                        <h4 className="text-base font-medium text-gray-900 leading-tight line-clamp-2 mb-2">
                          {news.Title}
                        </h4>
                        <div className="flex items-center text-xs text-blue-600 gap-1.5 font-medium">
                          <ClockIcon className="w-4 h-4" />
                          <span dir="ltr">
                            {new Date(news.publishedAt).toLocaleDateString('fa-IR')}
                          </span>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
      {filteredNews.length === 0 && !isSearching && (
        <div className="text-center py-8 text-gray-500 text-sm">
          موردی یافت نشد
        </div>
      )}
    </div>
  );
}
