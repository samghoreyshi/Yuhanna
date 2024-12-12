'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Portal from './Portal';

const eventData = [
  {
    id: 1,
    image: "/illus/event-1.webp",
    date: "۱۵ خرداد",
    title: "همایش بزرگ موفقیت در کنکور",
    description: "با حضور رتبه‌های برتر کنکور و اساتید برجسته، راز موفقیت در کنکور را کشف کنید.",
    location: "سالن همایش‌های یوحنا",
    time: "۱۵:۰۰ الی ۱۹:۰۰",
    gradient: "from-purple-500/5 to-pink-500/5",
    bgColor: "bg-purple-50",
  },
  {
    id: 2,
    image: "/illus/event-2.webp",
    date: "۲۰ خرداد",
    title: "کارگاه تکنیک‌های تست‌زنی",
    description: "در این کارگاه تخصصی، مهارت‌های پیشرفته تست‌زنی را از اساتید مجرب فرا بگیرید.",
    location: "کلاس شماره ۳ یوحنا",
    time: "۱۰:۰۰ الی ۱۳:۰۰",
    gradient: "from-blue-500/5 to-cyan-500/5",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    image: "/illus/event-3.webp",
    date: "۲۵ خرداد",
    title: "جلسه مشاوره گروهی",
    description: "برنامه‌ریزی اصولی و مدیریت استرس در روزهای پایانی با حضور مشاوران متخصص.",
    location: "سالن کنفرانس یوحنا",
    time: "۱۶:۰۰ الی ۱۸:۰۰",
    gradient: "from-orange-500/5 to-red-500/5",
    bgColor: "bg-orange-50",
  },
];

const Modal = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-xl relative"
          >
            {/* Modal Content */}
            <div className="overflow-y-auto h-full">
              {/* Image Section */}
              <div className="relative h-72 sm:h-96">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 left-4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 direction-rtl">
                {/* Date and Time */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-accent/10 text-accent px-4 py-2 rounded-xl font-IranSans font-bold">
                    {event.date}
                  </span>
                  <div className="flex items-center text-gray-600 font-IranSans">
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-IranSans font-extraBold text-2xl sm:text-3xl mb-4">
                  {event.title}
                </h2>

                {/* Description */}
                <p className="font-IranSans text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-center text-gray-600 font-IranSans mb-8">
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>

                {/* Action Button */}
                <ShimmerButton>
                  ثبت‌نام در رویداد
                </ShimmerButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
};

const ShimmerButton = ({ children }) => {
  return (
    <motion.button
      className="relative font-IranSans rounded-2xl bg-accent px-8 py-3 font-semibold text-white overflow-hidden group"
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.02,
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        }
      }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        variants={{
          hover: {
            translateX: ["100%", "-100%"],
            transition: {
              duration: 1,
              ease: "linear",
              repeat: Infinity
            }
          }
        }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

const EventSection = ({ event, index }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const isEven = index % 2 === 0;

  return (
    <div className={`w-full ${event.bgColor}`}>
      <div className="container mx-auto px-4 py-20">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-3xl`} />
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-accent px-6 py-3 rounded-xl font-IranSans font-bold">
                  مشاهده جزئیات
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="direction-rtl space-y-6"
          >
            {/* Date and Time */}
            <div className="flex flex-wrap gap-4">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-xl font-IranSans font-bold">
                {event.date}
              </span>
              <div className="flex items-center text-gray-600 font-IranSans">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </div>
            </div>

            {/* Title */}
            <h2 className="font-IranSans font-extraBold text-3xl">
              {event.title}
            </h2>

            {/* Description */}
            <p className="font-IranSans text-gray-600 leading-relaxed">
              {event.description}
            </p>

            {/* Location */}
            <div className="flex items-center text-gray-600 font-IranSans">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </div>

            {/* Action Button */}
            <ShimmerButton>
              ثبت‌نام در رویداد
            </ShimmerButton>
          </motion.div>
        </div>

        {/* Modal */}
        <Modal
          event={event}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section className="bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
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
                <span className="font-bold text-accent text-lg font-IranSans">رویدادهای پیش رو</span>
              </div>
            </div>
          </motion.div>

          <h2 className="font-IranSans mx-auto max-w-3xl font-extraBold text-3xl md:text-4xl leading-relaxed">
            در رویدادهای تخصصی یوحنا شرکت کنید و{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">متفاوت</span>
              <motion.div
                className="absolute bottom-2 right-0 h-3 bg-accent/10 w-full -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>{" "}
            باشید
          </h2>
        </motion.div>
      </div>

      {/* Event Sections */}
      {eventData.map((event, index) => (
        <EventSection key={event.id} event={event} index={index} />
      ))}
    </section>
  );
};

export default Events; 