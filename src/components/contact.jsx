'use client';

export default function Contact() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-extraBold font-IranSans mb-4">
            با ما در <span className="text-accent">تماس</span> باشید
          </h2>
          <p className="text-gray-600 font-IranSans text-sm md:text-base">
            برای دریافت مشاوره رایگان فرم زیر را پر کنید
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Decorative Elements */}
          {/* <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div> */}
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>

          {/* Contact Form */}
          <form className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm relative">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-IranSans text-gray-700 mb-2 text-right">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-colors duration-300 font-IranSans text-right"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-IranSans text-gray-700 mb-2 text-right">
                  شماره تماس
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-colors duration-300 font-IranSans text-right"
                  placeholder="شماره تماس خود را وارد کنید"
                  dir="ltr"
                />
              </div>

              {/* Grade Selection */}
              <div>
                <label htmlFor="grade" className="block text-sm font-IranSans text-gray-700 mb-2 text-right">
                  پایه تحصیلی
                </label>
                <select
                  id="grade"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-colors duration-300 font-IranSans text-right appearance-none"
                >
                  <option value="">پایه تحصیلی خود را انتخاب کنید</option>
                  <option value="10">دهم</option>
                  <option value="11">یازدهم</option>
                  <option value="12">دوازدهم</option>
                  <option value="konkur">کنکوری</option>
                </select>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-IranSans text-gray-700 mb-2 text-right">
                  پیام شما
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-colors duration-300 font-IranSans text-right resize-none"
                  placeholder="پیام خود را وارد کنید"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent text-white font-IranSans py-3 px-6 rounded-xl hover:bg-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
