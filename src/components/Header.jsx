'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="min-h-screen relative overflow-hidden font-IranSans bg-slate-50" dir="rtl">
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
              <Link
                href="/consultation"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-demiBold px-6 lg:px-8 py-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>درخواست مشاوره</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </Link>
              <Link href="/forum">
                <button className="group relative inline-flex items-center gap-2 bg-white text-gray-800 font-demiBold px-6 lg:px-8 py-3.5 rounded-xl border border-gray-200 hover:border-blue-100 hover:bg-blue-50/50 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-0.5">
                  <span>پرسش و پاسخ</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Illustration (Main Image Only) */}
          <div className="relative order-1 lg:order-2 w-full">
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px] xl:h-[800px] w-full">
              <Image
                src="/illus/HappyKids-2.webp"
                alt="Happy Students"
                fill
                priority
                className="object-contain object-center scale-80 lg:scale-90"
                sizes="(max-width: 768px) 100vw, (max-width: 800px) 50vw, 800px"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
