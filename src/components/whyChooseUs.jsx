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
      title: "پشتیبانی ۲۴ ساعته",
      description: "همیشه و همه جا در کنار شما هستیم",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
    },
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extraBold font-IranSans mb-4">
              چرا <span className="text-accent">یوحنا</span> را انتخاب کنیم؟
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 font-IranSans text-lg max-w-2xl mx-auto">
              ما با ترکیبی از تجربه، تخصص و نوآوری، محیطی ایده‌آل برای یادگیری فراهم می‌کنیم
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Feature Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-accent/10 p-4 mb-6 text-accent transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Feature Content */}
                <h3 className="text-xl font-extraBlack font-IranSans mb-4 text-right">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-IranSans text-right">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "۱۰۰۰+", label: "دانش‌آموز موفق" },
            { number: "۹۸٪", label: "رضایت والدین" },
            { number: "۵۰+", label: "استاد مجرب" },
            { number: "۹۵٪", label: "رضایت از پشتیبانی" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-extraBold font-IranSans text-accent mb-2">
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
