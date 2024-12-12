'use client';

const Events = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-32 font-IranSans" dir="rtl">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-accent/5 to-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
                <div className="bg-white/80 rounded-xl px-6 py-2">
                  <span className="font-bold text-accent text-lg">رویدادها</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-slate-800">
              همراه با
              <div className="relative inline-block">
                <span className="relative z-10 text-accent mr-4">برترین‌ها</span>
                <div className="absolute bottom-2 left-0 h-4 bg-accent/10 -z-10 rounded-full w-full"></div>
              </div>
            </h2>

            <div className="space-y-6 text-lg text-slate-600">
              <p className="leading-relaxed">
                در رویدادهای ما، با برترین اساتید و دانش‌آموزان موفق دیدار کنید و از تجربیات آنها بهره‌مند شوید.
              </p>
              <p className="leading-relaxed">
                کارگاه‌های تخصصی، همایش‌های انگیزشی و دورهمی‌های علمی، همه و همه در خدمت موفقیت شما.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="bg-white shadow-sm border border-slate-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-700">رویدادهای هفتگی</span>
              </div>
              
              <div className="bg-white shadow-sm border border-slate-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-slate-700">حضور اساتید برتر</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/english.webp"
                alt="رویدادهای آموزشی"
                className="rounded-3xl w-full h-auto shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Subtle Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-accent/50 blur-2xl opacity-40 -z-10"></div>

              {/* Event Card */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-800">۲۰+</p>
                    <p className="text-sm text-slate-600">رویداد در ماه</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-8 left-8 right-8">
                <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-2xl px-8 py-4 shadow-lg transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    مشاهده رویدادها
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Static Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events; 