'use client';
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "محیط یادگیری شاد و پویا",
      description: "در کنار هم، با انرژی و انگیزه به سمت موفقیت حرکت می‌کنیم",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: "اساتید مجرب و حرفه‌ای",
      description: "بهترین اساتید با سال‌ها تجربه در خدمت شما هستند",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      )
    },
    {
      title: "برنامه‌ریزی هوشمند",
      description: "برنامه‌ریزی شخصی‌سازی شده برای هر دانش‌آموز",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      )
    },
    {
      title: "پشتیبانی مداوم",
      description: "همیشه و همه جا در کنار شما هستیم",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-32 font-IranSans" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-accent/5 to-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
              <div className="bg-white/80 rounded-xl px-6 py-2">
                <span className="font-bold text-accent text-lg">چرا یوحنا؟</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-tight mb-8">
            مسیر موفقیت با
            <div className="relative inline-block">
              <span className="relative z-10 text-accent mr-4">تجربه و تخصص</span>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-2 left-0 h-4 bg-accent/10 -z-10 rounded-full"
              ></motion.div>
            </div>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با بهترین امکانات و پشتیبانی، همراه شما در مسیر موفقیت هستیم
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/50 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 
                         hover:shadow-lg transition-all duration-300"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center 
                              group-hover:scale-105 transition-transform duration-300 mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                
                {/* Text */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/50 backdrop-blur-sm border border-slate-100 rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "۱۰۰۰+", label: "دانش‌آموز موفق" },
              { value: "۹۸٪", label: "رضایت والدین" },
              { value: "۵۰+", label: "استاد مجرب" },
              { value: "۹۵٪", label: "رضایت از پشتیبانی" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
