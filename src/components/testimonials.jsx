'use client';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'سارا محمدی',
    rank: 'رتبه ۱۲۳ کنکور ۱۴۰۲',
    initial: 'س',
    text: 'با کمک مشاوران یوحنا تونستم برنامه‌ریزی درستی داشته باشم و به هدفم برسم. واقعاً ممنونم از تیم حرفه‌ای و دلسوزشون.',
    image: '',
    role: '',
    comment: 'با کمک مشاوران یوحنا تونستم برنامه‌ریزی درستی داشته باشم و به هدفم برسم. واقعاً ممنونم از تیم حرفه‌ای و دلسوزشون.'
  },
  {
    id: 2,
    name: 'محمد رضایی',
    rank: 'رتبه ۲۵۶ کنکور ۱۴۰۲',
    initial: 'م',
    text: 'روش‌های آموزشی یوحنا کاملاً متفاوت و کاربردی هستن. اینجا یاد گرفتم چطور درست درس بخونم و وقتم رو مدیریت کنم.',
    image: '',
    role: '',
    comment: 'روش‌های آموزشی یوحنا کاملاً متفاوت و کاربردی هستن. اینجا یاد گرفتم چطور درست درس بخونم و وقتم رو مدیریت کنم.'
  },
  {
    id: 3,
    name: 'زهرا کریمی',
    rank: 'رتبه ۴۵۸ کنکور ۱۴۰۲',
    initial: 'ز',
    text: 'پشتیبانی ۲۴ ساعته و مشاوره‌های تخصصی یوحنا واقعاً عالی بود. همیشه می‌تونستم روی کمکشون حساب کنم.',
    image: '',
    role: '',
    comment: 'پشتیبانی ۲۴ ساعته و مشاوره‌های تخصصی یوحنا واقعاً عالی بود. همیشه می‌تونستم روی کمکشون حساب کنم.'
  },
  {
    id: 4,
    name: 'مبینا مهدوی',
    rank: 'رتبه ۷۸۹ کنکور ۱۴۰۲',
    initial: 'ع',
    text: 'مشاوران یوحنا با تجربه و حرفه‌ای هستند. روش‌های مطالعاتی که یاد گرفتم باعث شد خیلی راحت‌تر به هدفم برسم.',
    image: '',
    role: '',
    comment: 'مشاوران یوحنا با تجربه و حرفه‌ای هستند. روش‌های مطالعاتی که یاد گرفتم باعث شد خیلی راحت‌تر به هدفم برسم.'
  },
  {
    id: 5,
    name: 'فاطمه نوری',
    rank: 'رتبه ۹۱۲ کنکور ۱۴۰۲',
    initial: 'ف',
    text: 'برنامه‌های مطالعاتی شخصی‌سازی شده و پشتیبانی مداوم یوحنا واقعاً عالی بود. به همه توصیه می‌کنم.',
    image: '',
    role: '',
    comment: 'برنامه‌های مطالعاتی شخصی‌سازی شده و پشتیبانی مداوم یوحنا واقعاً عالی بود. به همه توصیه می‌کنم.'
  },
  {
    id: 6,
    name: 'امیر کاظمی',
    rank: 'رتبه ۱۵۶۷ کنکور ۱۴۰۲',
    initial: 'ا',
    text: 'با کمک یوحنا تونستم استرسم رو کنترل کنم و با آرامش درس بخونم. مشاوره‌های روانشناسی‌شون خیلی کمکم کرد.',
    image: '',
    role: '',
    comment: 'با کمک یوحنا تونستم استرسم رو کنترل کنم و با آرامش درس بخونم. مشاوره‌های روانشناسی‌شون خیلی کمکم کرد.'
  },
  {
    id: 7,
    name: 'نیلوفر احمدی',
    rank: 'رتبه ۲۳۴۵ کنکور ۱۴۰۲',
    initial: 'ن',
    text: 'کلاس‌های رفع اشکال و جزوه‌های کاربردی یوحنا خیلی به پیشرفتم کمک کرد. ممنون از تیم خوبشون.',
    image: '',
    role: '',
    comment: 'کلاس‌های رفع اشکال و جزوه‌های کاربردی یوحنا خیلی به پیشرفتم کمک کرد. ممنون از تیم خوبشون.'
  },
  {
    id: 8,
    name: 'حسین رحیمی',
    rank: 'رتبه ۳۴۵۶ کنکور ۱۴۰۲',
    initial: 'ح',
    text: 'مشاوران یوحنا همیشه در دسترس بودن و سوالاتم رو با حوصله جواب می‌دادن. واقعاً حرفه‌ای و دلسوز هستن.',
    image: '',
    role: '',
    comment: 'مشاوران یوحنا همیشه در دسترس بودن و سوالاتم رو با حوصله جواب می‌دادن. واقعاً حرفه‌ای و دلسوز هستن.'
  }
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const startAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }

      scrollIntervalRef.current = setInterval(() => {
        if (slider) {
          const maxScroll = slider.scrollWidth - slider.clientWidth;
          if (slider.scrollLeft >= maxScroll - 1) {
            slider.scrollLeft = 0;
          } else {
            slider.scrollLeft += 1;
          }
        }
      }, 20);
    };

    const handleMouseEnter = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    const handleMouseLeave = () => {
      startAutoScroll();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (scrollIntervalRef.current) {
          clearInterval(scrollIntervalRef.current);
        }
      } else {
        startAutoScroll();
      }
    };

    if (slider) {
      slider.addEventListener('mouseenter', handleMouseEnter);
      slider.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      // Start auto-scroll immediately
      startAutoScroll();
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      if (slider) {
        slider.removeEventListener('mouseenter', handleMouseEnter);
        slider.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white font-IranSans" dir="rtl">
      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-24 left-24 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-blue-600 text-lg font-medium mb-2 block">نظرات و تجربیات</span>
            <h2 className="text-4xl font-black text-gray-800 mb-4">
              دانش‌آموزان <span className="text-blue-600">موفق</span> ما
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          </div>
        </div>
        
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-4 md:w-32 bg-gradient-to-r from-blue-50/90 to-transparent z-[1] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-4 md:w-32 bg-gradient-to-l from-blue-50/90 to-transparent z-[1] pointer-events-none" />

          {/* Testimonials Slider */}
          <div 
            ref={sliderRef}
            className="overflow-x-scroll scrollbar-hide px-4 sm:px-6 lg:px-8"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            <div className="flex space-x-6 space-x-reverse pb-4">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[280px] md:w-[320px] bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 text-right flex-none hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-blue-600/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                    </svg>
                  </div>

                  <div className="flex flex-row-reverse items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                      <p className="text-blue-600 text-sm">{testimonial.rank}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
