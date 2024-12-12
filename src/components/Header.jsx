'use client';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="min-h-screen relative overflow-hidden font-IranSans" dir="rtl">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-accent/10 rounded-full filter blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-right"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-xl border border-accent/20 rounded-2xl p-1.5">
                <div className="bg-white/50 rounded-xl px-4 py-1.5">
                  <span className="font-bold text-accent text-sm">موسسه آموزشی یوحنا</span>
                </div>
              </div>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-800 leading-tight mb-6">
              کورترین گره زندگیت هم فقط با دستای{" "}
              <div className="relative inline-block mt-2">
                <span className="relative z-10 text-accent">خودت</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-4 bg-accent/10 -z-10 rounded-full"
                ></motion.div>
              </div>{" "}
              باز میشه!
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mr-0">
              هدف یوحنا، تغییر یه باوره، باوری که از کنکور یه دِژ نفوذناپذیر
              درست کرده؛ ولی راه قبولی در کنکور مشخص‌تر از چیزی که بهتون گفتن!
              اما خب فوت و فن خودش رو داره.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-2xl font-bold text-lg
                         shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
              >
                درخواست مشاوره
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg
                         shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-300
                         backdrop-blur-sm bg-white/50"
              >
                پرسش و پاسخ
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto lg:mr-0">
              {[
                { value: "۱۰۰۰+", label: "دانش‌آموز موفق" },
                { value: "۹۸٪", label: "رضایت والدین" },
                { value: "۱۵+", label: "سال تجربه" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 text-center
                           hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-2xl font-black text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10">
              <img
                src="/illus/hero-illus.webp"
                alt="Hero Illustration"
                className="w-full max-w-2xl mx-auto filter drop-shadow-xl"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/5 via-purple-500/5 to-accent/5 rounded-3xl blur-2xl -z-20"></div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header; 