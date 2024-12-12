import Image from "next/image";
import Programs from "./programs";
import EducationHouse from './EducationHouse';
import Counseling from './Counseling';
import Gallery from './Gallery';
import Features from "./Features";
import Events from './Events';
import Books from './books';

export default function Hero() {
  return (
    <>
      <header className="h-[calc(100vh)] sm:py-20 sm:bg-[url('/illus/pers-grid.webp')] bg-cover bg-center overflow-hidden">
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Image */}
            <img
              src="/illus/hero-illus.webp"
              alt=""
              className="inline-block w-full max-w-full lg:max-w-2xl"
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

      {/* Unified Counseling Section */}
      <Counseling />

      <section id="pension">
        <Programs />
      </section>

      {/* Education House Section */}
      <EducationHouse />
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
                <div className="absolute -right-2 sm:-right-4 md:-right-12 top-8 md:top-16 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center text-white">
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
                        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <p className="text-xs md:text-sm text-gray-600 font-IranSans">قبولی در کنکور</p>
                      <p className="text-sm md:text-base font-bold font-IranSans">۹۸٪</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -left-2 sm:-left-4 md:-left-12 bottom-8 md:bottom-16 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center text-white">
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
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-xl font-IranSans font-bold text-sm inline-block mb-4">
                  آزمون‌های آزمایشی استاندارد
                </span>
              </div>
              <h2 className="font-IranSans font-extraBold text-3xl">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      {/* Books Section */}
      <Books />

      {/* Gallery Section */}
      <Gallery />
      {/* Events Section */}
      <Events />
      {/* Features Section */}
      <Features />
    </>
  );
}
