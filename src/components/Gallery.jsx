'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryData = [
  {
    id: 1,
    src: '/images/gallery/h-5.webp',
    alt: 'کلاس درس',
    title: 'فضای آموزشی مدرن',
    description: 'محیطی ایده‌آل برای یادگیری، مجهز به امکانات پیشرفته آموزشی و طراحی شده برای تمرکز حداکثری دانش‌آموزان'
  },
  {
    id: 2,
    src: '/images/gallery/h-6.webp',
    alt: 'مشاوره',
    title: 'جلسات مشاوره',
    description: 'برگزاری جلسات مشاوره تخصصی با حضور مشاوران مجرب برای هدایت تحصیلی و برنامه‌ریزی شخصی‌سازی شده'
  },
  {
    id: 3,
    src: '/images/gallery/h-4.webp',
    alt: 'کتابخانه',
    title: 'کتابخانه تخصصی',
    description: 'دسترسی به منابع غنی آموزشی و کتب مرجع برای تقویت پایه علمی و مطالعه عمیق‌تر'
  },
  {
    id: 4,
    src: '/images/gallery/h-3.webp',
    alt: 'آزمون',
    title: 'سالن آزمون',
    description: 'برگزاری منظم آزمون‌های آزمایشی در محیطی استاندارد برای آمادگی کامل دانش‌آموزان'
  },
  {
    id: 5,
    src: '/images/gallery/h-2.webp',
    alt: 'کلاس',
    title: 'کلاس‌های رفع اشکال',
    description: 'برگزاری جلسات رفع اشکال با اساتید مجرب برای حل مشکلات درسی و تقویت نقاط ضعف'
  },
  {
    id: 6,
    src: '/images/gallery/h-1.webp',
    alt: 'فضای مطالعه',
    title: 'سالن مطالعه اختصاصی',
    description: 'فضای مطالعه آرام و دنج با امکانات کامل برای تمرکز حداکثری در مطالعه'
  }
];

const ImageModal = ({ image, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        onClick={onClose}
      >
        <motion.div
          variants={contentVariants}
          className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="aspect-video relative">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="transform-gpu"
            />
          </div>

          <div className="p-8 bg-white font-IranSans text-right">
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              {image.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {image.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const GalleryItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="aspect-[4/3] relative overflow-hidden rounded-2xl cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image
          src={item.src}
          alt={item.alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transform-gpu transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute bottom-0 right-0 left-0 p-6 text-white text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-IranSans font-bold text-lg mb-2">
          {item.title}
        </h3>
        <p className="font-IranSans text-sm text-gray-200 line-clamp-2">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-24 font-IranSans" dir="rtl">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
                <span className="font-bold text-accent text-lg">گالری تصاویر</span>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            فضای آموزشی{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">یوحنا</span>
              <motion.div
                className="absolute bottom-2 right-0 h-3 bg-accent/10 w-full -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <div key={item.id} onClick={() => setSelectedImage(item)}>
              <GalleryItem item={item} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
