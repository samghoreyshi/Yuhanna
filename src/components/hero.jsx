import Image from "next/image";

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
      <section className="bg-gradient-to-br from-accent/5 to-accent/10 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="direction-rtl space-y-8">
              <div className="inline-block">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-xl font-IranSans font-bold text-sm">
                  مشاوره تخصصی کنکور
                </span>
              </div>
              <h2 className="font-IranSans font-extraBold text-3xl sm:text-4xl leading-tight">
                مشاوره‌ای متفاوت برای
                <span className="text-accent font-extraBlack"> آینده‌ای درخشان</span>
              </h2>
              <p className="font-IranSans text-gray-600 leading-relaxed">
                در یوحنا، مشاوره فقط یک گفتگوی ساده نیست. ما با استفاده از تکنولوژی‌های نوین و
                روش‌های علمی، مسیر موفقیت شما را به دقت برنامه‌ریزی می‌کنیم.
              </p>
　　 　 　 　 {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {/* Feature 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">برنامه‌ریزی هوشمند</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    برنامه‌ای منحصر به فرد، متناسب با شرایط و اهداف شما
                  </p>
                </div>
　 　 　 　 　 {/* Feature 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">پشتیبانی ۲۴/۷</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    در هر ساعت از شبانه‌روز در کنار شما هستیم
                  </p>
                </div>
　 　 　 　 　 {/* Feature 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">تضمین پیشرفت</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    با روش‌های علمی و اصولی، پیشرفت شما را تضمین می‌کنیم
                  </p>
                </div>
　 　 　 　 　 {/* Feature 4 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">مشاوره انگیزشی</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    کمک به حفظ انگیزه و تمرکز در طول مسیر آمادگی
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="#"
                  className="font-IranSans inline-flex items-center rounded-2xl bg-accent px-8 py-4 font-semibold text-white hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  درخواست مشاوره رایگان
                  <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <img
                src="/illus/cons.webp"
                alt="مشاوره تخصصی"
                className="w-full h-auto rounded-3xl  relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
     
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
                  <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">طراحی سوالات استاندارد</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    سوالات دقیقاً مشابه سطح و استاندارد کنکور سراسری
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="relative pr-12">
                  <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                  </div>
                  <h3 className="font-IranSans font-bold text-lg mb-2">کارنامه تحلیلی پیشرفته</h3>
                  <p className="font-IranSans text-gray-600 text-sm">
                    تحلیل جامع عملکرد و ارائه نقشه راه برای بهبود
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="relative pr-12">
                  <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center">
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
