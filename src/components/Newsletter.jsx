"use client";
import React, { useState } from 'react';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const Newsletter = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://admin.yuhanna.ir/api/news-letters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            PhoneNumber: phoneNumber
          }
        })
      });

      if (!response.ok) throw new Error('خطا در ارسال اطلاعات');

      setStatus('success');
      setPhoneNumber('');
    } catch (error) {
      setStatus('error');
      console.error('Submission error:', error);
    }
  };

  return (
    <section className="relative py-12 bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_2px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-grid"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_2px)] bg-[size:3rem_3rem] opacity-50 mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Form Container with Brand Consistency */}
          <div className="relative bg-white p-10 rounded-[2rem] shadow-lg border border-blue-100/50">
            <div className="max-w-2xl mx-auto space-y-8 text-center">
              {/* Heading Group */}
              <div className="space-y-4">
                <h2 className="text-4xl font-IranSans font-extraBold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    از دستش نده!
                  </span>

                </h2>
                <p className="text-blue-600/90 font-IranSansMedium text-lg leading-relaxed">
                  با عضویت رایگان، جدیدترین دوره‌های آموزشی و تخفیف‌های ویژه را دریافت کنید
                </p>
              </div>

              {/* Modern Input Group */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="شماره همراه"
                    className="w-full px-6 py-4 text-lg font-IranSans bg-white border-2 border-blue-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder:text-blue-400 text-right"
                    pattern="09[0-9]{9}"
                    required
                  />
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                </div>

                {/* Animated Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 text-lg font-IranSansBold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg hover:shadow-blue-200/50 flex items-center justify-center gap-2"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="animate-pulse">⏳</span>
                      در حال ارسال...
                    </>
                  ) : (
                    <>
                      <span>عضویت رایگان</span>
                      <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="animate-fade-in-up text-green-600 font-IranSansMedium flex items-center justify-center gap-2">
                  عضویت با موفقیت انجام شد!
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {status === 'error' && (
                <div className="animate-fade-in-up text-red-600 font-IranSansMedium flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  خطا در ارسال اطلاعات
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
