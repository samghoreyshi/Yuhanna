'use client';
import { motion } from 'framer-motion';

const EducationHouse = () => {
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

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      title: "آموزش خصوصی",
      description: "کلاس‌های خصوصی با بهترین اساتید",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      gradient: "from-purple-500 to-blue-600",
      image: "/images/english.webp"
    },
    {
      title: "کلاس‌های گروهی",
      description: "یادگیری در محیطی پویا و تعاملی",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-600",
      image: "/images/group-class.webp"
    },
    {
      title: "کارگاه‌های تخصصی",
      description: "ارتقای مهارت‌های تخصصی",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
      image: "/images/english.webp"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32 font-IranSans" dir="rtl">
      {/* Background Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-blue-100/20 rounded-full filter blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-purple-100/10 rounded-full filter blur-[80px] transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 max-w-7xl relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-24">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
              <div className="bg-white/50 rounded-xl px-6 py-2">
                <span className="font-bold text-accent text-lg">خانه آموزش</span>
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
            مسیر یادگیری
            <div className="relative inline-block">
              <span className="relative z-10 text-accent mr-4">نوین</span>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-2 left-0 h-4 bg-accent/10 -z-10 rounded-full"
              ></motion.div>
            </div>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            با روش‌های نوین آموزشی، یادگیری را لذت‌بخش‌تر و موثرتر تجربه کنید
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className={`text-2xl font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-3`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Cards Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-32 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Introduction Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-full bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={floatingAnimation}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 p-0.5"
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                    برنامه متفاوت، نتایج متفاوت
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  خانه آموزش، بر خلاف چیزی که ممکنه از اسمش برداشت کنید، صرفاً یه برنامه کلاس هفتگی و ماهیانه روتین و از پیش تعیین‌شده نیست؛ بلکه مجموعه‌ای از کارگاه‌های آموزشی دقیق، منظم و متمرکزه که مختص تک تک شما برنامه‌ریزی میشه و عمل می‌کنه.
                </p>
              </div>
            </motion.div>

            {/* Process Cards */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={floatingAnimation}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5"
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    تعیین سطح تخصصی
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  بعد از تعیین سطح اولیه با آزمون‌های علمی توسط متخصص، با آنالیز سطح دانش و هدف‌تون بر اساس میزان مهارت‌تون در هر مبحث، یه برنامهٔ آموزشی شخصی براتون چیده میشه تا برای بخش‌هایی که مهارت کمتری دارید، زمان بیشتری داشته باشید.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={floatingAnimation}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-0.5"
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    برنامه‌ریزی هوشمند
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  تعداد جلسه‌های هر کلاس متناسب با نیاز خود شما تعیین میشه تا با حضور در کلاس‌هایی که به اونها نیاز دارید، در زمان و انرژی صرفه‌جویی کنید.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={floatingAnimation}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-0.5"
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    پشتیبانی و پیگیری مستمر
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  پشتیبان‌تون در همهٔ مراحل، عملکردتون رو قبل و بعد از هر جلسه آموزشی با آزمون‌ها به دقت تحلیل و پیگیری می‌کنه تا بفهمیم کجا نیاز به صرف وقت و انرژی بیشتری دارید و بتونیم در اون قسمت‌ها به پیشرفت‌تون سرعت بیشتری بدیم.
                </p>
              </div>
            </motion.div>

            {/* Workshop Focus Card - Now placed next to Support Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={floatingAnimation}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-accent p-0.5"
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-accent bg-clip-text text-transparent">
                    کارگاه‌های تخصصی
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  کلاس‌های ما کارگاه محوره، تا کمک‌تون کنه روی جزئیات مباحث هر درس تمرکز کنید و برای باقی قسمت‌ها ذهن بازتری داشته باشید.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-accent/10 text-accent font-medium">
            <span>بیش از ۱۰۰۰ دانش‌آموز موفق</span>
            <div className="w-2 h-2 rounded-full bg-accent mx-2"></div>
            <span>رتبه‌های برتر کنکور</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationHouse;
