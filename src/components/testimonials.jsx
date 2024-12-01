'use client';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'سارا محمدی',
    rank: 'رتبه ۱۲۳ کنکور ۱۴۰۲',
    initial: 'س',
    text: 'با کمک مشاوران یوحنا تونستم برنامه‌ریزی درستی داشته باشم و به هدفم برسم. واقعاً ممنونم از تیم حرفه‌ای و دلسوزشون.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'با کمک مشاوران یوحنا تونستم برنامه‌ریزی درستی داشته باشم و به هدفم برسم. واقعاً ممنونم از تیم حرفه‌ای و دلسوزشون.'
  },
  {
    id: 2,
    name: 'محمد رضایی',
    rank: 'رتبه ۲۵۶ کنکور ۱۴۰۲',
    initial: 'م',
    text: 'روش‌های آموزشی یوحنا کاملاً متفاوت و کاربردی هستن. اینجا یاد گرفتم چطور درست درس بخونم و وقتم رو مدیریت کنم.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'روش‌های آموزشی یوحنا کاملاً متفاوت و کاربردی هستن. اینجا یاد گرفتم چطور درست درس بخونم و وقتم رو مدیریت کنم.'
  },
  {
    id: 3,
    name: 'زهرا کریمی',
    rank: 'رتبه ۴۵۸ کنکور ۱۴۰۲',
    initial: 'ز',
    text: 'پشتیبانی ۲۴ ساعته و مشاوره‌های تخصصی یوحنا واقعاً عالی بود. همیشه می‌تونستم روی کمکشون حساب کنم.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'پشتیبانی ۲۴ ساعته و مشاوره‌های تخصصی یوحنا واقعاً عالی بود. همیشه می‌تونستم روی کمکشون حساب کنم.'
  },
  {
    id: 4,
    name: 'مبینا مهدوی',
    rank: 'رتبه ۷۸۹ کنکور ۱۴۰۲',
    initial: 'ع',
    text: 'مشاوران یوحنا با تجربه و حرفه‌ای هستند. روش‌های مطالعاتی که یاد گرفتم باعث شد خیلی راحت‌تر به هدفم برسم.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'مشاوران یوحنا با تجربه و حرفه‌ای هستند. روش‌های مطالعاتی که یاد گرفتم باعث شد خیلی راحت‌تر به هدفم برسم.'
  },
  {
    id: 5,
    name: 'فاطمه نوری',
    rank: 'رتبه ۹۱۲ کنکور ۱۴۰۲',
    initial: 'ف',
    text: 'برنامه‌های مطالعاتی شخصی‌سازی شده و پشتیبانی مداوم یوحنا واقعاً عالی بود. به همه توصیه می‌کنم.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'برنامه‌های مطالعاتی شخصی‌سازی شده و پشتیبانی مداوم یوحنا واقعاً عالی بود. به همه توصیه می‌کنم.'
  },
  {
    id: 6,
    name: 'امیر کاظمی',
    rank: 'رتبه ۱۵۶۷ کنکور ۱۴۰۲',
    initial: 'ا',
    text: 'با کمک یوحنا تونستم استرسم رو کنترل کنم و با آرامش درس بخونم. مشاوره‌های روانشناسی‌شون خیلی کمکم کرد.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'با کمک یوحنا تونستم استرسم رو کنترل کنم و با آرامش درس بخونم. مشاوره‌های روانشناسی‌شون خیلی کمکم کرد.'
  },
  {
    id: 7,
    name: 'نیلوفر احمدی',
    rank: 'رتبه ۲۳۴۵ کنکور ۱۴۰۲',
    initial: 'ن',
    text: 'کلاس‌های رفع اشکال و جزوه‌های کاربردی یوحنا خیلی به پیشرفتم کمک کرد. ممنون از تیم خوبشون.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'کلاس‌های رفع اشکال و جزوه‌های کاربردی یوحنا خیلی به پیشرفتم کمک کرد. ممنون از تیم خوبشون.'
  },
  {
    id: 8,
    name: 'حسین رحیمی',
    rank: 'رتبه ۳۴۵۶ کنکور ۱۴۰۲',
    initial: 'ح',
    text: 'مشاوران یوحنا همیشه در دسترس بودن و سوالاتم رو با حوصله جواب می‌دادن. واقعاً حرفه‌ای و دلسوز هستن.',
    image: '', // Add image URL here
    role: '', // Add role here
    comment: 'مشاوران یوحنا همیشه در دسترس بودن و سوالاتم رو با حوصله جواب می‌دادن. واقعاً حرفه‌ای و دلسوز هستن.'
  }
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
          if (isAtEnd) {
            slider.scrollLeft = 0;
          } else {
            slider.scrollLeft += 1;
          }
        }
      }, 20);
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-extraBold font-IranSans text-center mb-16">
          نظرات <span className="text-accent">دانش‌آموزان</span> ما
        </h2>
        
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-4 md:w-32 bg-gradient-to-r from-white to-transparent z-[1] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-4 md:w-32 bg-gradient-to-l from-white to-transparent z-[1] pointer-events-none" />

          {/* Testimonials Slider */}
          <div 
            ref={sliderRef}
            className="overflow-x-scroll scrollbar-hide"
          >
            <div className="flex gap-8 pb-4 min-w-max">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[250px] md:w-[300px] bg-white rounded-2xl md:rounded-3xl border border-gray-200 p-4 md:p-6 text-right flex-shrink-0"
                >
                  <div className="flex flex-row-reverse items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="font-IranSans text-accent font-bold text-sm md:text-base">{testimonial.initial}</span>
                    </div>
                    <div>
                      <h3 className="font-IranSans font-extraBold text-base md:text-lg">{testimonial.name}</h3>
                      <p className="font-IranSans text-gray-600 text-xs md:text-sm">{testimonial.rank}</p>
                    </div>
                  </div>
                  <p className="font-IranSans text-gray-600 text-xs md:text-sm leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
