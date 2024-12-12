'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('حضوری');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const programs = {
    'حضوری': {
      title: 'پانسیون حضوری',
      description: 'پرتی حواس و هرز رفتن وقت همیشه بزرگترین سدهای درست درس خوندن بوده و هست. ما در خانه مطالعه یوحنا با چند ترفند حساب‌شده، چاره‌ای برای این مسئله پیدا کرده‌ایم: یه فضای مطالعه که به اندازه اتاق خودتون گرم، آشنا و خودمونیه و به اندازه یه کتابخونه آرومه و یه برنامه‌ریزی درست و حساب‌شده داره. اینجا می‌تونید راحت و درست درس بخونید.',
      features: [
        {
          title: 'محیط مطالعه اختصاصی',
          description: 'فضای مطالعه کاملاً آرام و مجهز برای تمرکز بیشتر',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
        },
        {
          title: 'مشاوره تخصصی روزانه',
          description: 'برنامه‌ریزی و مشاوره شخصی‌سازی شده برای هر دانش‌آموز',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
        },
        {
          title: 'تغذیه سالم و متنوع',
          description: 'برنامه غذایی متعادل و مقوی برای حفظ انرژی در طول روز',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
        },
        {
          title: 'کلاس‌های تقویتی',
          description: 'رفع اشکال و تقویت دروس با اساتید مجرب',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          ),
        },
      ],
      stats: [
        { value: '+۵۰۰', label: 'دانش‌آموز موفق' },
        { value: 'مداوم', label: 'پشتیبانی' },
        { value: '۹۸٪', label: 'رضایت والدین' },
      ],
      image: '/images/inp-c.webp',
    },
    'آنلاین': {
      title: 'پانسیون آنلاین',
      description: 'اين رو هم بدونید که بدون نگرانی از ترافیک و تلف شدن وقت‌تون, می‌تونید تو پانسیون آنلاین یوحنا اونم از تو خونه و اتاق خودتون به شکل وبینار شرکت کنید. اینجوری پشتیبان‌های ماء کنارتون هستند تا از وقت و انرژی‌تون» بهترین بهره رو ببرید.',
      features: [
        {
          title: 'پلتفرم اختصاصی آموزش',
          description: 'سیستم هوشمند آموزش آنلاین با امکانات پیشرفته',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: 'مشاوره آنلاین',
          description: 'ارتباط مستقیم با مشاوران از طریق ویدیو کال',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: 'محتوای تعاملی',
          description: 'ویدیوهای آموزشی با کیفیت و تکالیف تعاملی',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
        {
          title: 'گزارش پیشرفت',
          description: 'پیگیری مستمر پیشرفت با نمودارهای تحلیلی',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
      ],
      stats: [
        { value: '+۱۰۰۰', label: 'دانش‌آموز فعال' },
        { value: '۱۰۰٪', label: 'پوشش دروس' },
        { value: '۲۴/۷', label: 'دسترسی' },
      ],
      image: '/images/online-c.webp',
    },
  };

  const activeProgram = programs[activeTab];

  return (
    <section className="py-24 bg-white font-IranSans overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
              <div className="bg-white/50 rounded-xl px-6 py-2">
                <span className="font-bold text-accent text-lg">خانه مطالعه</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8"
          >
            پیشرفت
            <div className="relative inline-block">
              <span className="relative z-10 text-accent mr-4">تضمینی</span>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-2 left-0 h-4 bg-accent/10 -z-10 rounded-full"
              ></motion.div>
            </div>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 font-medium leading-relaxed"
          >
            انتخاب کنید، پیشرفت کنید، موفق شوید!
          </motion.p>
        </motion.div>

        {/* Program Selector */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          {Object.keys(programs).map((program) => (
            <motion.button
              key={program}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(program)}
              className={`px-8 py-3 rounded-full font-IranSans text-lg transition-all duration-300 relative
                ${activeTab === program 
                  ? 'bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg shadow-accent/20' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent before:bg-[length:200%_100%] before:bg-gradient-to-r before:from-transparent before:via-accent/30 before:to-transparent before:animate-shimmer'}`}
            >
              پانسیون {program}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Program Content */}
        <motion.div 
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-black bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent mb-4">
                  {activeProgram.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {activeProgram.description}
                </p>
              </motion.div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {activeProgram.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex gap-4 items-start">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 
                          flex items-center justify-center text-accent transition-all duration-300"
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-between items-center py-6 px-8 bg-gradient-to-r from-accent/5 to-accent/10 rounded-3xl backdrop-blur-lg"
              >
                {activeProgram.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      className="text-2xl font-black bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 rounded-[2rem] transform rotate-6"
              ></motion.div>
              <motion.img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="relative rounded-[2rem] shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
