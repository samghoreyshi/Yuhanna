'use client';

const Counseling = () => {
  return (
    <section id="counseling" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 text-right font-IranSans py-32" dir="rtl">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-blue-100/20 rounded-full filter blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-purple-100/10 rounded-full filter blur-[80px] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <div className="bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
              <div className="bg-white/50 rounded-xl px-6 py-2">
                <span className="font-bold text-accent text-lg">خانه مشاوره</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
            مسیر موفقیت شما
            <div className="relative inline-block">
              <span className="relative z-10 text-accent mr-4">با ماست</span>
              <div className="absolute bottom-2 left-0 h-4 bg-accent/10 -z-10 rounded-full w-full"></div>
            </div>
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            به جای حرف‌های انگیزشی، با روش‌های علمی و برنامه‌ریزی دقیق، شما را به هدف‌تان می‌رسانیم.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              value: '۸۵٪',
              label: 'خواب راحت‌تر',
              subtext: 'بدون استرس امتحان',
              gradient: 'from-purple-500/20 to-blue-500/20'
            },
            {
              value: '۲۰۰+',
              label: 'دانش‌آموز موفق',
              subtext: 'قبولی در برترین دانشگاه‌ها',
              gradient: 'from-amber-500/20 to-orange-500/20'
            },
            {
              value: '۸۰٪',
              label: 'صرفه جویی در زمان',
              subtext: 'مطالعه هدفمند و بهینه',
              gradient: 'from-emerald-500/20 to-teal-500/20'
            }
          ].map((stat, i) => (
            <div key={i} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100`}></div>
              <div className="relative bg-white/70 backdrop-blur-lg border border-gray-200/50 p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl font-black bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">{stat.value}</span>
                  <span className="font-bold text-xl text-gray-800 mb-2">{stat.label}</span>
                  <span className="text-gray-600">{stat.subtext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {[
              {
                title: 'آموزش فنون و مهارت های تحصیلی',
                desc: "در خانة مشاوره یوحنا، شما با تکنیک‌های پیشرفته تحصیلی آشنا می‌شوید. از مدیریت زمان و تندخوانی تا روش‌های تست‌زنی حرفه‌ای، همه را به صورت علمی و کاربردی خواهید آموخت.",
                color: 'from-purple-500 to-blue-600'
              },
              {
                title: 'برنامه‌ریزی اختصاصی',
                desc: "برنامه‌ای کاملاً شخصی‌سازی شده، متناسب با سبک زندگی، اهداف و توانایی‌های شما. هر روز، هر ساعت، برای موفقیت شما برنامه‌ریزی می‌کنیم.",
                color: 'from-amber-500 to-orange-600'
              },
              {
                title: 'پشتیبانی مداوم',
                desc: "در تمام مسیر همراه شما هستیم. با آنالیز دقیق عملکرد و بازخورد مستمر، مسیر موفقیت شما را هموار می‌کنیم.",
                color: 'from-emerald-500 to-teal-600'
              }
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50/50 rounded-3xl blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg">
                  <div className="flex flex-col gap-6">
                    <h3 className={`font-black text-2xl bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image and CTA */}
          <div className="sticky top-32">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img
                  src="/images/counseling.webp"
                  alt="مشاوره تحصیلی"
                  className="w-full h-auto rounded-3xl"
                />
                
                {/* Floating Stats */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg">+۹۸٪</p>
                      <p className="text-sm text-gray-600">رضایت دانش‌آموزان</p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <button className="w-full bg-accent text-white font-bold text-lg rounded-2xl px-8 py-5 shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="flex items-center justify-center gap-3">
                      شروع مشاوره رایگان
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counseling;
