'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="min-h-screen relative overflow-hidden font-IranSans bg-slate-50" dir="rtl">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:34px_34px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-purple-500/20 rounded-full filter blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>


      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8 lg:pb-16 mt-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-right order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-800 mb-5 mt-5 px-5 sm:px-0">
              <span className="block leading-[1.2] lg:leading-[1.3]">
                کور‌ترین گره زندگیت هم فقط با دستای
                <span className="text-blue-500"> خودت </span>
                باز میشه!
              </span>

            </h1>

            <p className="text-base lg:text-md text-gray-600 mb-10 px-5 sm:px-0 leading-[1.5] lg:leading-[2] text-justify">
              هدف یوحنا: تغییر یه باوره. باوری که از کنکور به در نفوذناپذیر درست کرده؛ ولی راه قبولی در کنکور مشخص‌تر از چیزی که بهتون گفتند! اما خب فوت و فن خودش رو داره. در یوحنا، ما از تجربه سال‌ها فعالیت در فضای کنکور و به‌کارگیری دانش و روش‌های روز دنیا، دنیای مختص خود شما برای رد شدن از کنکور می‌سازیم. می‌دونیم که گوش‌تون از این حرفا پره؛ ولی ما فقط اهل حرف نیستیم؛ اینجا ما به حرفامون عمل می‌کنیم. در یوحنا، هر کدام از شما دانش‌آموزها روش اختصاصی خودتون رو برای مطالعه، آماده‌سازی و حتی انتخاب رشته تجربه می‌کنید. ما به شما مسیر نمی‌دیم؛ ما همراه شما هستیم تا کمک کنیم بهترین مسیر رو برای خودتون بسازید.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-start mb-12">
              <Link href="/consultation" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-demiBold px-6 lg:px-8 py-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5">
                <span>درخواست مشاوره</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </Link>
              <Link href="/forum">
                <button className="group relative inline-flex items-center gap-2 bg-white text-gray-800 font-demiBold px-6 lg:px-8 py-3.5 rounded-xl border border-gray-200 hover:border-blue-100 hover:bg-blue-50/50 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-0.5">
                  <span>پرسش و پاسخ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </button>
              </Link>
            </div>

          </div>

          {/* Illustration */}
          <div className="relative order-1 lg:order-2 w-full">
            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0">
              {/* Floating Dots */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full animate-[pulse_2s_ease-in-out_infinite] backdrop-blur-sm"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-tr from-purple-400/20 to-purple-600/20 rounded-full animate-[pulse_3s_ease-in-out_infinite] backdrop-blur-sm"></div>

              {/* Geometric Shapes */}
              <div className="absolute top-1/4 left-10 w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20 rounded-lg transform rotate-45 animate-[bounce_6s_ease-in-out_infinite] shadow-lg backdrop-blur-sm"></div>
              <div className="absolute bottom-1/3 right-5 w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-2 border-purple-500/20 transform rotate-12 animate-[bounce_4s_ease-in-out_infinite] shadow-lg backdrop-blur-sm"></div>

              {/* Curved Lines */}
              <div className="absolute top-20 left-1/4 w-40 h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent border-t-2 border-r-2 border-blue-500/20 rounded-tr-full animate-[spin_15s_linear_infinite] backdrop-blur-sm"></div>
              </div>
              <div className="absolute bottom-20 right-1/4 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-transparent border-b-2 border-l-2 border-purple-500/20 rounded-bl-full animate-[spin_12s_linear_infinite_reverse] backdrop-blur-sm"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/3 right-20 animate-[bounce_3s_ease-in-out_infinite]">
                <div className="text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 text-transparent bg-clip-text">+</div>
              </div>
              <div className="absolute bottom-1/4 left-20 animate-[bounce_4s_ease-in-out_infinite]">
                <div className="text-3xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 text-transparent bg-clip-text">×</div>
              </div>

              {/* Additional Floating Shapes */}
              <div className="absolute top-1/2 right-1/4 w-8 h-8 border-2 border-blue-500/20 rounded-full animate-[ping_3s_ease-in-out_infinite] backdrop-blur-sm"></div>
              <div className="absolute bottom-1/2 left-1/3 w-6 h-6 border-2 border-purple-500/20 rounded-full animate-[ping_2s_ease-in-out_infinite] backdrop-blur-sm"></div>
            </div>

            {/* Main Image Container */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px] xl:h-[800px] w-full">
              {/* Decorative Background Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-blue-100/50 via-purple-50/50 to-blue-50/50 rounded-full blur-3xl animate-pulse"></div>

              <Image
                src="/illus/HappyKids-2.webp"
                alt="Happy Students"
                fill
                priority
                className="object-contain object-center scale-80 lg:scale-90 relative z-10"
                sizes="(max-width: 768px) 100vw, (max-width: 800px) 50vw, 800px"
              />
            </div>

            {/* Animated Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <div className="absolute inset-0 border-2 border-dashed border-blue-300/20 rounded-full animate-[spin_20s_linear_infinite] backdrop-blur-sm"></div>
              <div className="absolute inset-10 border-2 border-dashed border-purple-300/20 rounded-full animate-[spin_15s_linear_infinite_reverse] backdrop-blur-sm"></div>
              <div className="absolute inset-20 border-2 border-dashed border-blue-300/10 rounded-full animate-[spin_25s_linear_infinite] backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Links */}

    </header>
  );
};

export default Header;