'use client';
import { motion } from "framer-motion";

const featureData = [
  {
    id: 1,
    image: "/illus/feat-3.webp",
    title: "همیشه یک قدم جلوتر باشید",
    description:
      "در یوحنا، هدف ما این است که شما به صورت پیوسته و هدفمند درس بخوانید. برای رسیدن به این هدف، ما سیستم نظارت دقیقی طراحی کرده‌ایم که از ابتدا تا انتهای مسیر همراه شماست.",
    gradient: "from-blue-500/20 to-purple-500/20",
    delay: 0,
  },
  {
    id: 2,
    image: "/illus/feat-2.webp",
    title: "محیطی آرام و حرفه‌ای برای بهترین بهره‌وری از زمان مطالعه شما!",
    description:
      "حواس‌پرتی و اتلاف وقت، بزرگ‌ترین دشمنان موفقیت در درس خواندن هستند. ما در یوحنا فضایی صمیمانه و گرم، همراه با نظم و سخت‌گیری لازم، ایجاد کرده‌ایم تا شما در محیطی آرام و اختصاصی به مطالعه بپردازید.",
    gradient: "from-green-500/20 to-teal-500/20",
    delay: 0.2,
  },
  {
    id: 3,
    image: "/illus/feat-1.webp",
    title: "یوحنا به شما کمک می‌کند با باورهای نادرست خداحافظی کنید!",
    description:
      "ما معتقدیم که موفقیت در کنکور صرفاً به پشتکار و تلاش شما بستگی ندارد، بلکه به استفاده صحیح از دانش، برنامه‌ریزی دقیق و روش‌های مطالعه علمی نیاز دارد.",
    gradient: "from-orange-500/20 to-red-500/20",
    delay: 0.4,
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.01,
        transition: { type: "spring", stiffness: 300 }
      }}
      transition={{ duration: 0.5, delay: feature.delay }}
      viewport={{ once: true }}
      className="relative w-full h-full overflow-hidden pb-2"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30 rounded-3xl`} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.5, delay: feature.delay }}
        viewport={{ once: true }}
        className="relative flex flex-col h-full font-IranSans bg-white/80 backdrop-blur-sm border border-gray-200 direction-rtl p-8 gap-5 rounded-3xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: feature.delay + 0.2 }}
          viewport={{ once: true }}
          className="relative h-60 w-full overflow-hidden rounded-2xl"
        >
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={feature.image}
            alt=""
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: feature.delay + 0.3 }}
          viewport={{ once: true }}
          className="font-IranSans font-extraBlack text-xl leading-relaxed"
        >
          {feature.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: feature.delay + 0.4 }}
          viewport={{ once: true }}
          className="font-IranSans text-gray-600 leading-relaxed"
        >
          {feature.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-white/50 backdrop-blur-sm py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
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
            {/* <div className="bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-2">
              <div className="bg-white/50 rounded-xl px-6 py-2">
                <span className="font-bold text-accent text-lg font-IranSans">ویژگی‌های ما</span>
              </div>
            </div> */}
          </motion.div>

          <h1 className="font-IranSans mx-auto max-w-3xl font-extraBold text-3xl md:text-4xl leading-relaxed direction-rtl">
            می‌دونیم که گوشتون از این حرفا پُره، ولی ما فقط اهل حرف و{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent font-IranSans">شعار</span>
              <motion.div
                className="absolute bottom-2 right-0 h-3 bg-accent/10 w-full -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>{" "}
            نیستیم!
          </h1>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {featureData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3
                  }
                }
              }}
              whileHover={{ 
                scale: 1.01,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
              className="relative flex flex-col h-full"
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
