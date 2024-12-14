import { motion } from "framer-motion";

const Exams = () => {
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
      title: "طراحی سوالات استاندارد",
      description: "سوالات دقیقاً مشابه سطح و استاندارد کنکور سراسری",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H12m-.75 3h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      )
    },
    {
      title: "کارنامه تحلیلی پیشرفته",
      description: "تحلیل جامع عملکرد و ارائه نقشه راه برای بهبود",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    },
    {
      title: "رفع اشکال آنلاین",
      description: "جلسات رفع اشکال با اساتید مجرب پس از هر آزمون",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="exams" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-32 font-IranSans" dir="rtl">
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
                  <span className="font-bold text-accent text-lg">آزمون‌های آزمایشی</span>
                </div>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-slate-800">
              سنجش
              <div className="relative inline-block">
                <span className="relative z-10 text-accent mr-4">استاندارد</span>
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
                با آزمون‌های استاندارد یوحنا، در فضایی کاملاً مشابه کنکور، توانایی‌های خود را محک بزنید و با تحلیل دقیق نتایج، نقاط قوت و ضعف خود را شناسایی کنید.
              </p>
            </div>

            {/* Features List */}
            <div className="mt-12 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60
                           hover:bg-white/80 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent/80
                               flex items-center justify-center text-white shadow-lg shadow-accent/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
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
            <div className="relative z-10">
              <img
                src="/images/exam.webp"
                alt="آزمون های آزمایشی"
                className="w-full max-w-2xl mx-auto filter drop-shadow-xl rounded-3xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/5 via-purple-500/5 to-accent/5 rounded-3xl blur-2xl -z-20"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Exams;
