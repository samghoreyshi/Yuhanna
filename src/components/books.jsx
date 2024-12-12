'use client';
import { motion } from "framer-motion";

const Books = () => {
  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
                <div className="bg-white/50 rounded-xl px-6 py-2">
                  <span className="font-bold text-accent text-lg font-IranSans">منابع درسی هدفمند</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="direction-rtl"
            >
              <div className="space-y-8">
                <h2 className="font-IranSans font-extraBold text-2xl leading-relaxed">
                  اینجا هم ماجرا کاملاً{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">شخصیه!</span>
                    <motion.div
                      className="absolute bottom-2 right-0 h-3 bg-accent/10 w-full -z-10"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </span>{" "}
                  شخص خود شماست!
                </h2>

                <p className="font-IranSans text-gray-600 leading-8 text-lg">
                  در یوحنا بر اساس سنجش سطح علمی، روحیه و هدفی که دارید،
                  مناسب‌ترین کتاب‌ها رو براتون مشخص می‌کنیم (که می‌تونید با ۲۰
                  درصد تخفیف و بدون هزینۀ ارسال تو خود یوحنا تهیه کنید) تا مجبور
                  نباشید بی‌هدف همۀ کتاب‌های بازار رو بخرید و بی‌نتیجه روی هم تلنبار
                  کنید.
                </p>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-3xl"></div>
                  <p className="font-IranSans text-gray-700 leading-8 text-lg relative bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-accent/10">
                    ما نه تنها منابع درسی شما رو بی‌هدف اضافه نمی‌کنیم، بلکه با مشخص
                    کردن منابعی که مناسب‌تونه مسیر رو براتون هموارتر می‌کنیم.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex gap-4 pt-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="font-IranSans inline-flex items-center rounded-2xl bg-accent px-8 py-3 font-semibold text-white hover:bg-blue-600 transition-all duration-300 ease-in-out"
                    >
                      مشاوره اصلاح منابع
                      <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="font-IranSans inline-flex items-center rounded-2xl bg-gray-100 border-2 border-gray-200 px-8 py-3 font-semibold hover:border-accent text-gray-800 transition-all duration-300 ease-in-out"
                    >
                      مشاهده لیست کتاب‌ها
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image & Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <img
                  src="/illus/books.webp"
                  alt="کتاب های درسی"
                  className="w-full h-auto rounded-3xl z-10 relative"
                />
                
                {/* Floating Badge - Discount */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -right-4 top-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <span className="font-IranSans font-bold text-accent text-xl">٪</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 font-IranSans">تخفیف ویژه</p>
                      <p className="text-xl font-bold font-IranSans text-accent">۲۰ درصد</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge - Free Shipping */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -left-4 bottom-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 font-IranSans">ارسال</p>
                      <p className="text-lg font-bold font-IranSans">سراسر کشور</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
