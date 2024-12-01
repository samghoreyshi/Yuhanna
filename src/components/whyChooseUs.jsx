'use client';
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "محیط یادگیری شاد و پویا",
      description: "در کنار هم، با انرژی و انگیزه به سمت موفقیت حرکت می‌کنیم",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "اساتید مجرب و حرفه‌ای",
      description: "بهترین اساتید با سال‌ها تجربه در خدمت شما هستند",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "برنامه‌ریزی هوشمند",
      description: "برنامه‌ریزی شخصی‌سازی شده برای هر دانش‌آموز",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "پشتیبانی مداوم",
      description: "همیشه و همه جا در کنار شما هستیم",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const stats = [
    { number: "۱۰۰۰+", label: "دانش‌آموز موفق" },
    { number: "۹۸٪", label: "رضایت والدین" },
    { number: "۵۰+", label: "استاد مجرب" },
    { number: "۹۵٪", label: "رضایت از پشتیبانی" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-70" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-br from-rose-100/50 to-orange-100/50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-IranSans font-extraBlack mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            چرا <span className="text-accent">یوحنا</span> را انتخاب کنید؟
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg font-IranSans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            با بهترین امکانات و پشتیبانی، همراه شما در مسیر موفقیت هستیم
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-4 lg:p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative text-right">
                {/* Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-white/10 group-hover:text-white transition-colors duration-300 mb-4 lg:mb-5 mr-auto">
                  {feature.icon}
                </div>
                
                {/* Text */}
                <h3 className="text-lg lg:text-xl font-IranSans font-bold mb-2 lg:mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 font-IranSans group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-IranSans font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-IranSans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
