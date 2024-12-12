'use client';
import { motion } from 'framer-motion';

const Counseling = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      title: "آموزش فنون و مهارت های تحصیلی",
      description: `اما مشاوره ما به همین‌جا ختم نميشه, تو خانة مشاورٌ یوحناء کلی تکنیک تحصیلی هم یاد می‌گیرید؛ از روش تست زدن و مدیریت زمان و تندخوانی (البته تو جای درست خودش) گرفته
      تا حتی مدیریت بحران. کار ما بر مبنای نتیجه‌گراییه, به همین دلیل هميشه دنبال شناخت بهتر خودتون و
      هدف‌هاتون هستیم.`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      )
    },
    {
      title: "برنامه‌ریزی اختصاصی",
      description: `برنامه‌ریزی ما برای هر کدوم از شماء اختصاصیه و کاملاً سایز
      خودتون دوخته میشه! برای ما شناختن شما فقط به اهداف یا سطح علمی‌تون محدود نمیشه؛ ما
      با حال و هوا و روحیه و سبک زندگی‌تون هم آشنا می‌شیم تا بتونیم برنامه
      ای واقعا متناسب با خود شما رو براتون تنظیم کنیم.`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      )
    },
    {
      title: "پشتیبانی مداوم",
      description: `البته که تنظیم این برنامه تازه شروع ماجراست؛ از اینجا
      تا انتهای سیر پشتیبان‌تون قدم به قدم همراه شماست تا بر اساس
      گزارش‌های عملکرد و آنالیز کارنامه‌تون» روش مطالعه و برنامه درس خوندتون
      رو بهبود بدیم تا از زمانی که صرف می‌کنید بهترین نتیجه رو بگیرید.`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      )
    }
  ];

  return (
    <section id="counseling" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-32 font-IranSans" dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent/30 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 max-w-7xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div variants={itemVariants}>
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-accent/5 to-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
                <div className="bg-white/80 rounded-xl px-6 py-2">
                  <span className="font-bold text-accent text-lg">خانه مشاوره</span>
                </div>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-slate-800">
              مسیر موفقیت
              <div className="relative inline-block">
                <span className="relative z-10 text-accent mr-4">با ماست</span>
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-2 left-0 h-4 bg-accent/10 -z-10 rounded-full"
                ></motion.div>
              </div>
            </h2>

            <div className="space-y-6 text-lg text-slate-600">
              <p className="leading-relaxed">
                به جای حرف‌های انگیزشی، با روش‌های علمی و برنامه‌ریزی دقیق، شما را به هدف‌تان می‌رسانیم.
              </p>
            </div>

            {/* Stats Cards */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                {
                  value: '۸۵٪',
                  label: 'خواب راحت‌تر',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  )
                },
                {
                  value: '۲۰۰+',
                  label: 'دانش‌آموز موفق',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  )
                },
                {
                  value: '۸۰٪',
                  label: 'صرفه جویی در زمان',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )
                }
              ].map((stat, i) => (
                <div key={i} className="bg-white shadow-sm border border-slate-100 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {stat.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-slate-800">{stat.value}</div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="mt-16 space-y-6 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white/50 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 
                             hover:shadow-md transition-all duration-300 w-full"
                >
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center 
                                      group-hover:scale-105 transition-transform duration-300">
                          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {feature.icon}
                          </svg>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-accent transition-colors duration-300 mb-2">
                          {feature.title}
                        </h3>
                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [-20, 20],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="/images/counseling.webp"
                alt="مشاوره تحصیلی"
                className="rounded-3xl w-full h-auto shadow-xl"
              />
              
              {/* Subtle Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-accent/50 blur-2xl opacity-40 -z-10"></div>

              {/* Floating Stats Card */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-800">+۹۸٪</p>
                    <p className="text-sm text-slate-600">رضایت دانش‌آموزان</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-8 left-8 right-8">
                <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-2xl px-8 py-4 shadow-lg transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    شروع مشاوره رایگان
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Counseling;
