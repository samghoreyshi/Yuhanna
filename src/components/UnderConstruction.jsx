import React from 'react';
import Image from 'next/image';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen relative overflow-hidden font-IranSans" dir="rtl">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-accent/10 rounded-full filter blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/construction.svg"
                alt="در حال ساخت"
                layout="fill"
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              در حال ساخت و بروزرسانی
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            وبسایت خانه یوحنا در حال توسعه و به‌روزرسانی است. به زودی آماده خدمت‌رسانی به شما خواهیم بود.
            </p>
            <div className="flex justify-center space-x-4 flex-row-reverse">
              <div className="animate-pulse w-3 h-3 bg-accent rounded-full"></div>
              <div className="animate-pulse w-3 h-3 bg-accent rounded-full delay-75"></div>
              <div className="animate-pulse w-3 h-3 bg-accent rounded-full delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
