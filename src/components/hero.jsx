import Image from "next/image";
import Programs from "./programs";

export default function Hero() {
  return (
    <>
      <header className="h-[calc(100vh)] sm:py-20 sm:bg-[url('/illus/pers-grid.webp')] bg-cover bg-center">
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Image */}
            <img
              src="/illus/hero-illus.webp"
              alt=""
              className="inline-block h-full w-full max-w-2xl"
            />
            {/* Hero Content */}
            <div className="flex flex-col direction-rtl ">
              {/* Hero Title */}
              <h1
                className="font-extraBold mb-4 text-4xl md:text-6xl font-IranSans"
                style={{ lineHeight: "1.35" }}
              >
                کورترین گره زندگیت هم فقط با دستای{" "}
                <span className="font-extraBlack text-accent">خودت</span> باز
                میشه!
              </h1>
              <p className="font-IranSans font-medium mb-6 max-w-lg text-right text-sm text-gray-500 sm:text-lg md:mb-10 lg:mb-12">
                هدف یوحنا، تغییر یه باوره، باوری که از کنکور یه دِژ نفوذناپذیر
                درست کرده؛ ولی راه قبولی در کنکور مشخص‌تر از چیزی که بهتون گفتن!
                اما خب فوت و فن خودش رو داره.
              </p>
              {/* Hero Button */}
              <div className="flex gap-2 items-center">
                <a
                  href="#"
                  className="font-IranSans items-center rounded-2xl bg-accent px-6 py-3 font-semibold text-white hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  درخواست مشاوره
                </a>
                <a
                  href="#"
                  className="font-IranSans items-center rounded-2xl bg-gray-100 border-2 border-gray-300 px-6 py-3 font-semibold hover:border-accent hover:border-2 text-black transition-all duration-300 ease-in-out"
                >
                  پرسش و پاسخ
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="features" className="bg-white">
        <div className="flex flex-col justify-center items-center gap-10 py-28">
          <h1 className="font-IranSans mx-10 font-extraBold sm:text-center text-2xl text-right leading-relaxed direction-rtl">
            می‌دونیم که گوشتون از این حرفا پُره، ولی ما
            فقط اهل حرف و{" "}
            <span className="font-extraBlack text-accent">شعار</span> نیستیم!
          </h1>
          <div className="grid sm:grid-cols-3 gap-5 mx-10 sm:mx-40">
            <span className="flex flex-col w-full h-full font-IranSans bg-white border border-gray-300 direction-rtl p-10 gap-5 rounded-3xl shadow-lg">
              <img className="" src="/illus/feat-3.webp" alt="" />
              <h2 className="font-extraBlack">همیشه یک قدم جلوتر باشید</h2>
              <p className="text-gray-500">
                در یوحنا، هدف ما این است که شما به صورت پیوسته و هدفمند درس
                بخوانید. برای رسیدن به این هدف، ما سیستم نظارت دقیقی طراحی
                کرده‌ایم که از ابتدا تا انتهای مسیر همراه شماست.
              </p>
            </span>
            <span className="flex flex-col w-full h-full font-IranSans bg-white border border-gray-300 direction-rtl p-10 gap-5 rounded-3xl shadow-lg">
              <img className="" src="/illus/feat-2.webp" alt="" />
              <h2 className="font-extraBlack">
                محیطی آرام و حرفه‌ای برای بهترین بهره‌وری از زمان مطالعه شما!
              </h2>
              <p className="text-gray-500">
                حواس‌پرتی و اتلاف وقت، بزرگ‌ترین دشمنان موفقیت در درس خواندن
                هستند. ما در یوحنا فضایی صمیمانه و گرم، همراه با نظم و سخت‌گیری
                لازم، ایجاد کرده‌ایم تا شما در محیطی آرام و اختصاصی به مطالعه
                بپردازید.
              </p>
            </span>
            <span className="flex flex-col w-full h-full font-IranSans bg-white border border-gray-300 direction-rtl p-10 gap-5 rounded-3xl shadow-lg">
              <img src="/illus/feat-1.webp" alt="" />
              <h2 className="font-extraBlack">
                یوحنا به شما کمک می‌کند با باورهای نادرست خداحافظی کنید!
              </h2>
              <p className="text-gray-500">
                ما معتقدیم که موفقیت در کنکور صرفاً به پشتکار و تلاش شما بستگی
                ندارد، بلکه به استفاده صحیح از دانش، برنامه‌ریزی دقیق و روش‌های
                مطالعه علمی نیاز دارد.
              </p>
            </span>
          </div>
        </div>
      </section>
     
      {/* Counseling Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/5 to-transparent">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Now on the right side for RTL */}
            <div className="lg:order-2 space-y-8 text-right">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extraBold font-IranSans text-gray-900 leading-tight">
                  مشاوره تخصصی 
                  <span className="text-accent block">کنکور و تحصیلی</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-IranSans leading-relaxed">
                  با بهترین مشاوران تحصیلی کشور به موفقیت برسید
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    title: 'مشاوره آنلاین',
                    desc: 'دسترسی ۲۴ ساعته به مشاوران',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    title: 'برنامه شخصی',
                    desc: 'متناسب با شرایط شما',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    ),
                  },
                  {
                    title: 'پشتیبانی مداوم',
                    desc: 'همراهی در تمام مسیر',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: 'تضمین پیشرفت',
                    desc: 'نتیجه محور و کاربردی',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    ),
                  },
                ].map((feature, i) => (
                  <div 
                    key={i}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 hover:border-accent/20 transition-colors duration-300 group"
                  >
                    <div className="flex flex-row-reverse items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="font-IranSans font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-IranSans text-sm text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-accent text-white font-IranSans rounded-xl hover:bg-accent/90 transition-colors duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/35">
                  مشاوره رایگان
                </button>
                <button className="px-8 py-4 bg-white text-accent font-IranSans rounded-xl hover:bg-accent/5 transition-colors duration-300 border-2 border-accent/10 hover:border-accent/20">
                  درباره ما
                </button>
              </div>
            </div>

            {/* Image Section - Now on the left side for RTL */}
            <div className="lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-[2rem] shadow-xl shadow-accent/5">
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                  <img
                    src="/images/counseling.webp"
                    alt="مشاوره تحصیلی"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute -bottom-20 right-1/2 translate-x-1/2 flex gap-4">
                  {[
                    { 
                      value: '۸۵٪', 
                      label: 'خواب راحت‌تر', 
                      subtext: 'بدون استرس امتحان',
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      ),
                      color: 'from-indigo-500 to-purple-500'
                    },
                    { 
                      value: '۲۰۰+', 
                      label: 'لبخند در روز', 
                      subtext: 'با برنامه‌ریزی درست',
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      color: 'from-amber-400 to-orange-500'
                    },
                    { 
                      value: '۵۰۰۰+', 
                      label: 'فنجان چای',
                      subtext: 'همراه با مشاوره آنلاین',
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </svg>
                      ),
                      color: 'from-teal-400 to-emerald-500'
                    },
                  ].map((stat, i) => (
                    <div 
                      key={i} 
                      className="group relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[180px]"
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative flex flex-col items-center text-center gap-2 p-2">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-white/10 flex items-center justify-center text-accent group-hover:text-white transition-colors duration-300">
                          {stat.icon}
                        </div>
                        
                        {/* Text */}
                        <div>
                          <div className="font-IranSans font-bold text-2xl text-gray-900 group-hover:text-white transition-colors duration-300">
                            {stat.value}
                          </div>
                          <div className="font-IranSans text-sm font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                            {stat.label}
                          </div>
                          <div className="font-IranSans text-xs text-gray-600 group-hover:text-white/80 transition-colors duration-300 mt-1">
                            {stat.subtext}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Programs Section */}
      <Programs />
      
      {/* Bento Grid Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-16">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-xl font-IranSans font-bold text-sm inline-block mb-4">
              گالری تصاویر
            </span>
            <h2 className="font-IranSans font-extraBold text-3xl">
              لحظات <span className="text-accent font-extraBlack">ماندگار</span> در یوحنا
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4 direction-rtl">
            {/* Large Feature Image */}
            <div className="relative col-span-1 sm:col-span-2 row-span-2 overflow-hidden rounded-3xl group">
              <img
                src="/images/gallery/h-5.webp"
                alt="کلاس درس"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 right-6 text-white">
                  <h3 className="font-IranSans font-bold text-xl mb-2">فضای آموزشی مدرن</h3>
                  <p className="font-IranSans text-sm text-gray-200">محیطی ایده‌آل برای یادگیری</p>
                </div>
              </div>
            </div>

            {/* Regular Grid Items */}
            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src="/images/gallery/h-6.webp"
                alt="مشاوره"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="font-IranSans font-bold">جلسات مشاوره</h3>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src="/images/gallery/h-4.webp"
                alt="کتابخانه"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="font-IranSans font-bold">کتابخانه تخصصی</h3>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src="/images/gallery/h-3.webp"
                alt="آزمون"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="font-IranSans font-bold">سالن آزمون</h3>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src="/images/gallery/h-2.webp"
                alt="کلاس"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="font-IranSans font-bold">کلاس‌های رفع اشکال</h3>
                </div>
              </div>
            </div>

            {/* Wide Image */}
            <div className="relative col-span-1 sm:col-span-2 overflow-hidden rounded-3xl group">
              <img
                src="/images/gallery/h-1.webp"
                alt="فضای مطالعه"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="font-IranSans font-bold">سالن مطالعه اختصاصی</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side with Floating Elements */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <img
                  src="/illus/exam.webp"
                  alt="آزمون های آزمایشی"
                  className="w-full h-auto rounded-3xl  z-10 relative"
                />
                {/* Floating Stats */}
              <div className="absolute -right-4 md:-right-12 top-8 md:top-16 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 md:w-5 h-4 md:h-5 text-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <p className="text-xs md:text-sm text-gray-600 font-IranSans">قبولی در کنکور</p>
                    <p className="text-sm md:text-base font-bold font-IranSans">۹۸٪</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -left-4 md:-left-12 bottom-8 md:bottom-16 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 md:w-5 h-4 md:h-5 text-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <p className="text-xs md:text-sm text-gray-600 font-IranSans">رتبه برتر</p>
                    <p className="text-sm md:text-base font-bold font-IranSans">+۱۵۰</p>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="direction-rtl space-y-8 order-1 lg:order-2">
              <div className="inline-block">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-xl font-IranSans font-bold text-sm">
                  آزمون‌های آزمایشی استاندارد
                </span>
              </div>
              <h2 className="font-IranSans font-extraBold text-3xl sm:text-4xl leading-tight">
                آزمون‌های <span className="text-accent font-extrabold">هدفمند</span> برای
                <br />
                سنجش دقیق پیشرفت شما
              </h2>
              <p className="font-IranSans text-gray-600 leading-relaxed">
                با آزمون‌های استاندارد یوحنا، در فضایی کاملاً مشابه کنکور، توانایی‌های خود را محک بزنید
                و با تحلیل دقیق نتایج، نقاط قوت و ضعف خود را شناسایی کنید.
              </p>

              {/* Timeline Features */}
              <div className="space-y-6 relative before:absolute before:right-[17px] before:top-0 before:bottom-0 before:w-0.5 before:bg-accent/20">
                {/* Feature 1 */}
                <div className="relative pr-12">
                  <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">طراحی سوالات استاندارد</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    سوالات دقیقاً مشابه سطح و استاندارد کنکور سراسری
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="relative pr-12">
                  <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">کارنامه تحلیلی پیشرفته</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    تحلیل جامع عملکرد و ارائه نقشه راه برای بهبود
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="relative pr-12">
                  <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">رفع اشکال آنلاین</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    جلسات رفع اشکال با اساتید مجرب پس از هر آزمون
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#"
                  className="font-IranSans inline-flex items-center rounded-2xl bg-accent px-6 py-3 font-semibold text-white hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  ثبت‌نام در آزمون
                  <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="font-IranSans inline-flex items-center rounded-2xl bg-gray-100 border-2 border-gray-200 px-6 py-3 font-semibold hover:border-accent text-gray-800 transition-all duration-300 ease-in-out"
                >
                  مشاهده نمونه سوالات
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
