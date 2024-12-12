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

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-32 font-IranSans" dir="rtl">
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
                  <span className="font-bold text-accent text-lg">خانه آموزش</span>
                </div>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-slate-800">
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

            <div className="space-y-6 text-lg text-slate-600">
              <p className="leading-relaxed">
                خانه آموزش، فراتر از یک برنامه آموزشی معمولی است. ما با ترکیبی از
                تکنولوژی‌های نوین و متدهای آموزشی پیشرفته، محیطی پویا و تعاملی را
                برای یادگیری فراهم می‌کنیم.
              </p>
              <p className="leading-relaxed">
                در این مسیر، شما تنها نیستید. تیمی از متخصصان آموزشی در کنار شما
                هستند تا با برنامه‌ریزی شخصی‌سازی شده، مسیر موفقیت شما را هموار کنند.
              </p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-4"
            >
              <div className="bg-white shadow-sm border border-slate-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-slate-700">بیش از ۱۰۰۰ دانش‌آموز موفق</span>
              </div>
              
              <div className="bg-white shadow-sm border border-slate-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700">رتبه‌های برتر کنکور</span>
              </div>
            </motion.div>
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
                src="/images/persian.webp"
                alt="Education Space"
                className="rounded-3xl w-full h-auto shadow-xl"
              />
              
              {/* Subtle Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-accent/50 blur-2xl opacity-40 -z-10"></div>
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

export default EducationHouse;
