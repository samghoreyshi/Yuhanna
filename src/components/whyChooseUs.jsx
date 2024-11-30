export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-extraBold font-IranSans text-center mb-16">
          چرا <span className="text-accent font-extraBlack">یوحنا</span> را انتخاب کنید؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 direction-rtl">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-14 w-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mr-0">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="font-IranSans font-extraBold text-xl mb-4 text-right">برنامه‌ریزی شخصی‌سازی شده</h3>
            <p className="font-IranSans text-gray-600 text-right leading-relaxed">برنامه‌ای متناسب با شرایط و توانایی‌های شما، طراحی شده توسط متخصصین ما</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-14 w-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mr-0">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-IranSans font-extraBold text-xl mb-4 text-right">پشتیبانی ۲۴/۷</h3>
            <p className="font-IranSans text-gray-600 text-right leading-relaxed">همیشه در کنار شما هستیم تا به سؤالات و نیازهای شما پاسخ دهیم</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-14 w-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mr-0">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="font-IranSans font-extraBold text-xl mb-4 text-right">تضمین پیشرفت</h3>
            <p className="font-IranSans text-gray-600 text-right leading-relaxed">با روش‌های علمی و اصولی، پیشرفت شما را تضمین می‌کنیم</p>
          </div>
        </div>
      </div>
    </section>
  );
}
