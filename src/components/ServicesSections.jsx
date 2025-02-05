import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesSections = () => {
  return (
    <div className="w-full font-IranSans" dir="rtl">
      {/* Counseling Section */}
      <section className="w-full py-24 bg-gradient-to-l from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-36 -mt-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-36 -mb-36"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block">
                <span className="text-blue-600 text-lg font-medium mb-2 block">بخش مشاوره</span>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">خانه مشاوره</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              {/* Service Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Motivation */}
                <div className="bg-white/30 rounded-lg p-3 transition-all duration-300 hover:bg-white/50">
                  <h3 className="text-base font-semibold text-gray-800 mb-1.5 flex items-center">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center ml-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    انگیزه
                  </h3>
                  <p className="text-sm text-gray-600 pr-9 text-justify">
                    آیندهٔ شما دانش‌آموزها مهم‌ترین هدف ماست. برای همین، به جای حرف‌های خشک و انگیزشی بی‌هدف، تمام تلاش‌مان را می‌کنیم تا بر اساس روان‌شناسی امید (تئوری انتخاب)، شما را به چیزی که واقعاً بهش علاقه دارید، برسانیم.
                  </p>
                </div>

                {/* Study Skills */}
                <div className="bg-white/30 rounded-lg p-3 transition-all duration-300 hover:bg-white/50">
                  <h3 className="text-base font-semibold text-gray-800 mb-1.5 flex items-center">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center ml-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    آموزشِ فنون و مهارت‌های تحصیلی
                  </h3>
                  <p className="text-sm text-gray-600 pr-9 text-justify">
                    همیشه در خانه مشاوره، جهانی از تکنیک‌های تحصیلی هم هست؛ از هم تست زدن و مدیریت زمان تا مدیریت بحران (یا بهتر بگیم مدیریت پیشگیری از بحران!). کار ما بر مبنای تجربه‌گراییه، به همین دلیل همیشه دنبال شناخت بهتر خودتون و تقویت‌تون هستیم. در واقع همهٔ اصلاح و پیشرفت‌های درس خوندن و آمادگی برای آزمونه، اون هم متناسب با هدفی که دارید.
                  </p>
                </div>

                {/* Planning */}
                <div className="bg-white/30 rounded-lg p-3 transition-all duration-300 hover:bg-white/50">
                  <h3 className="text-base font-semibold text-gray-800 mb-1.5 flex items-center">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center ml-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                      </svg>
                    </div>
                    برنامه‌ریزی
                  </h3>
                  <p className="text-sm text-gray-600 pr-9 text-justify">
                    برنامه‌ریزی که ما به شما میدیم، برای هرکدوم از شما اختصاصیه و کاملاً سایز خودتون دوخته شده.
                    برای ما، شما فقط به اهداف یا سطح علمی‌تون محدود نمیشید، ما حال و هوا و روحیه و سبک زندگی‌تون هم آشنا می‌شیم و براتون برنامه‌ای می‌چینیم که به مرور براتون قابل اجرا بشه و عادت‌تون بشه. روش ما، روش‌های معمولی صرف نیست، بلکه برنامه مطالعه شما هر روز تحلیل و اصلاح میشه، تا همیشه عملکرد بهتری داشته باشید.
                  </p>
                </div>

                {/* Support */}
                <div className="bg-white/30 rounded-lg p-3 transition-all duration-300 hover:bg-white/50">
                  <h3 className="text-base font-semibold text-gray-800 mb-1.5 flex items-center">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center ml-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    پشتیبانی
                  </h3>
                  <p className="text-sm text-gray-600 pr-9 text-justify">
                    ما به‌تنهایی یک برنامه به‌دست‌تون نمی‌دیم و بگیم خداحافظ. از اینجا به‌بعد، همراه شما هستیم و آنالیز گزارش‌های شما، جلسه‌های بررسی و دوره‌های راهبردی در نظر گرفته می‌شه. تا از زمانی که شروع می‌کنید، تا روز آزمون، همراه‌تون باشیم.
                  </p>
                </div>

                {/* Meditation */}
                <div className="bg-white/30 rounded-lg p-3 transition-all duration-300 hover:bg-white/50">
                  <h3 className="text-base font-semibold text-gray-800 mb-1.5 flex items-center">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center ml-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 10-2 0v2a1 1 0 00l2 2h5a1 1 0 00l2-2v-2a1 1 0 10-2 0h-5z" />
                      </svg>
                    </div>
                    مراقبه و آرامش
                  </h3>
                  <p className="text-sm text-gray-600 pr-9 text-justify">
                    در خانهٔ مشاوره، آرامش و تمرکز شما برامون مهمه. ما کنارتون هستیم تا استرس رو مدیریت کنید و از مسیر درس خوندن، بیشترین بهره رو ببرید.
                  </p>
                </div>

                {/* Major Selection */}
                <div className="bg-white/30 rounded-lg p-3 transition-all duration-300 hover:bg-white/50">
                  <h3 className="text-base font-semibold text-gray-800 mb-1.5 flex items-center">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center ml-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    انتخاب رشته تخصصی
                  </h3>
                  <p className="text-sm text-gray-600 pr-9 text-justify">
                    انتخاب رشته برای ما فقط یک فرم نیست؛ ما مسیر آینده‌تون رو با در نظر گرفتن علایق و اهداف‌تون ترسیم می‌کنیم و در این مسیر، مستقیماً با مشاوران متخصص در ارتباط خواهید بود.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <button className="w-full md:w-auto group relative inline-flex items-center justify-center px-4 md:px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105">
                  <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center">
                    دریافت مشاوره
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <svg className="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 001.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    مشاوره تخصصی
                  </span>
                  <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <svg className="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12a2 2 0 00-2-2v-4a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2z" clipRule="evenodd" />
                    </svg>
                    مشاوران مجرب
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[600px] relative group">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full transform rotate-45 opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full transform -rotate-45 opacity-60"></div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-2 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                {/* Background and Image */}
                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform group-hover:scale-95 transition-transform duration-300 opacity-20"></div>
                <Image
                  src="/images/counseling-illustration.webp"
                  alt="مشاوره تحصیلی"
                  fill
                  className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Section */}
      <section className="w-full md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-36 -mt-36"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-36 -mb-36"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-16 max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block">
                <span className="text-blue-600 text-lg font-medium mb-2 block">بخش مطالعه</span>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">خانه مطالعه</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              {/* Study Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* In-Person Study */}
                <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    پانسیون حضوری
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-justify leading-relaxed">
                    فضای مطالعه که به‌اندازهٔ اتاق خودتون گرم آشنا و خودمونی و به‌اندازهٔ کتابخونه آزمونه ولی برنامه‌ریزی درست و حساب‌شده داره. اینجا می‌تونید راحت و درست درس بخونید.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      <svg className="w-4 h-4 ml-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      فضای دوستانه
                    </span>
                    <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      <svg className="w-4 h-4 ml-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      امکانات رفاهی
                    </span>
                  </div>
                </div>

                {/* Online Study */}
                <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2z" />
                    </svg>
                    پانسیون آنلاین
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-justify leading-relaxed">
                    بدون نگرانی از ترافیک و تلف شدن وقتتون، می‌تونید تو پانسیون آنلاین بونا، اتاق خودتون و اتاق دوستان‌تون به شکل وبینار شرکت کنید.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      <svg className="w-4 h-4 ml-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      مدیریت زمان
                    </span>
                    <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      <svg className="w-4 h-4 ml-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2z" />
                      </svg>
                      وبینار تعاملی
                    </span>
                  </div>
                </div>
              </div>

              {/* Study Camps */}
              <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-blue-100 mt-4 md:mt-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  ۵ اردوی مطالعاتی
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-justify leading-relaxed">
                  ما ۵ تا اردوی مطالعه داریم که تو تابستون، امتحان‌های دی و خرداد، نوروز و البته ۴۰ روز پایانی کنکور برگزار می‌شه تا شما رو آماده کنیم. می‌خوایم بگیم که اینجا فقط خونهٔ مطالعه‌نداره، بلکه یه تیم داریم که همیشه بهتون فکر کرده‌اند.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/services/pension">
                  <button className="group relative inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105">
                    <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative flex items-center">
                      ثبت نام در پانسیون
                      <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[600px] relative group">
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full transform -rotate-45 opacity-70"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full transform rotate-45 opacity-60"></div>
                <div className="absolute bottom-1/2 -left-3 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -right-3 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
                {/* Background and Image */}
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform group-hover:scale-95 transition-transform duration-300 opacity-20"></div>
                <Image
                  src="/images/study-illustration.webp"
                  alt="فضای مطالعه"
                  fill
                  className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full md:py-24 bg-gradient-to-l from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-36 -mt-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-36 -mb-36"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block">
                <span className="text-blue-600 text-lg font-medium mb-2 block">بخش آموزش</span>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">خانه آموزش</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              <p className=" leading-relaxed max-w-xl text-sm text-gray-600 text-justify">
                خانهٔ آموزش، برخلاف چیزی که ممکنه از اسمش برداشت کنید، صرفاً به برنامهٔ کلاس هفتگی و ماهیانهٔ روتین و از پیش تعیین‌شده نیست، بلکه مجموعه‌ای از کارگاه‌های آموزشی دقیق، منظم و متمرکزه که مختص تک‌تک شما برنامه‌ریزی میشه و عمل می‌کنه.
                اینجا، بعد از تعیین سطح اولیه (که ناگفته پیداست با روش و آزمون‌های علمی توسط یه متخصص انجام میشه)، با آنالیز سطح دانش و هدفتون بر اساس میزان مهارت‌تون تو هر مبحث، برنامهٔ آموزشی متناسب براتون می‌چینیم تا برای بخش‌هایی که مهارت دارید، زمان بیشتری داشته باشید.
                با این روش، تعداد جلسه‌های هر کلاس متناسب با نیازتون هست، نه اینکه به اون‌ها نیاز نداشته باشید، در زمان و انرژی‌تون صرفه‌جویی میشه و بازدهی‌تون هم تو همهٔ مراحل عملکردتون رو قبل و بعد از هر جلسهٔ آموزشی با آزمون‌های QT به دقت تحلیل و پیگیری می‌کنه تا بفهمیم کجا نیاز به صرف وقت و انرژی بیشتری دارید و هم بتونیم در اون قسمت‌ها سرعت بیشتری بدیم.
                کلاس‌های ما کارگاه‌محوره، تا کلاستون یک‌طرفه نباشه و روی جزئیات مباحث هر درس تمرکز کنید و برای قسمت‌های باقی‌مانده ذهن بازتری داشته باشید.              </p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                {/* <button className="w-full md:w-auto group relative inline-flex items-center justify-center px-4 md:px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105">
                  <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center">
                    ثبت نام در دوره‌ها
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button> */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <svg className="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    اساتید مجرب
                  </span>
                  <span className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <svg className="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12a2 2 0 00-2-2v-4a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2z" clipRule="evenodd" />
                    </svg>
                    برنامه منظم
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[600px] relative group">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full transform rotate-45 opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full transform -rotate-45 opacity-60"></div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-2 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                {/* Background and Image */}
                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform group-hover:scale-95 transition-transform duration-300 opacity-20"></div>
                <Image
                  src="/images/education-illustration.webp"
                  alt="آموزش تخصصی"
                  fill
                  className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Section */}
      <section className="w-full md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-36 -mt-36"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-36 -mb-36"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-16 max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block">
                <span className="text-blue-600 text-lg font-medium mb-2 block">بخش آزمون</span>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">آزمون</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-md text-gray-600 leading-relaxed max-w-xl text-justify">
                مرکز آزمون یوحنا با برگزاری آزمون‌های آزمایشی استاندارد و تحلیل دقیق نتایج، به شما کمک می‌کند تا با شناخت نقاط قوت و ضعف خود، مسیر موفقیت را هموارتر کنید. آزمون‌های ما با استانداردهای روز طراحی شده‌اند تا بهترین تجربه را برای شما فراهم کنند.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                  سطح‌بندی هوشمند
                </span>
                <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  کارنامه تحلیلی
                </span>
                <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                  رفع اشکال آنلاین
                </span>
              </div>
              <div className="mt-8">
                {/* <button className="group relative inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105">
                  <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center">
                    ثبت نام آزمون
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[600px] relative group">
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full transform -rotate-45 opacity-70"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full transform rotate-45 opacity-60"></div>
                <div className="absolute bottom-1/2 -left-3 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -right-3 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
                {/* Background and Image */}
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform group-hover:scale-95 transition-transform duration-300 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-3xl opacity-40"></div>
                <Image
                  src="/illus/exam-illustration.webp"
                  alt="آزمون"
                  fill
                  className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="w-full md:py-24 bg-gradient-to-l from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-36 -mt-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-36 -mb-36"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block">
                <span className="text-blue-600 text-lg font-medium mb-2 block">بخش کتاب</span>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">کتاب</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              <p className="leading-relaxed max-w-xl text-sm text-gray-600 text-justify">
                اینجا هم ماجرا کاملاً شخصیه! شخصی خود شما!
                در بونا بر اساس سنجش سطح علمی، روحیه و هدفی که دارید، مناسب‌ترین کتاب‌ها رو براتون مشخص می‌کنیم (که می‌تونید با ۵۰ درصد تخفیف و بدون هزینه ارسال در خود بونا تهیه کنید). شاید ندونید، اما نباید همهٔ کتاب‌های بازار رو بخرید و روی هم تلنبار کنید.
                ما نه تنها مانع خرید بی‌مورد شما می‌شیم، بلکه با مشخص کردن منابعی که مناسب‌ترین مسیر رو براتون هموار می‌کنیم.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  منابع معتبر
                </span>
                <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12a2 2 0 00-2-2v-4a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2z" clipRule="evenodd" />
                  </svg>
                  خلاصه دروس
                </span>
                <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0115.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                  دانلود رایگان
                </span>
              </div>
              <div className="mt-8">
                {/* <button className="group relative inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105">
                  <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center">
                    خرید کتاب
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[600px] relative group">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full transform rotate-45 opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full transform -rotate-45 opacity-60"></div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-2 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                {/* Background and Image */}
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform group-hover:scale-95 transition-transform duration-300 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-3xl opacity-40"></div>
                <Image
                  src="/images/books-illustration.webp"
                  alt="کتاب"
                  fill
                  className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSections;
