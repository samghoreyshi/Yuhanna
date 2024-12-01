'use client';
import { useRef } from 'react';

const courses = [
  {
    id: 1,
    title: "دوره جامع ریاضی کنکور",
    subject: "ریاضی",
    description: "آموزش کامل مفاهیم ریاضی با روش‌های کاربردی و تست‌زنی",
    duration: "۱۲۰ ساعت",
    image: "/images/math.webp"
  },
  {
    id: 2,
    title: "دوره پیشرفته فیزیک",
    subject: "فیزیک",
    description: "یادگیری عمیق مفاهیم فیزیک با تمرکز بر حل مسئله",
    duration: "۹۰ ساعت",
    image: "/images/physic.webp"
  },
  {
    id: 3,
    title: "دوره جامع شیمی",
    subject: "شیمی",
    description: "آموزش مفاهیم شیمی با رویکرد کنکوری و کاربردی",
    duration: "۸۰ ساعت",
    image: "/images/chemics.webp"
  },
  {
    id: 4,
    title: "دوره زیست شناسی",
    subject: "زیست",
    description: "آموزش جامع مفاهیم زیست شناسی با تمرکز بر تست های کنکور",
    duration: "۱۱۰ ساعت",
    image: "/images/zist.webp"
  },
  {
    id: 5,
    title: "دوره ادبیات فارسی",
    subject: "ادبیات",
    description: "تسلط بر قواعد ادبی و آرایه های ادبی با رویکرد کنکور",
    duration: "۷۰ ساعت",
    image: "/images/persian.webp"
  },
  {
    id: 6,
    title: "دوره زبان انگلیسی",
    subject: "زبان",
    description: "تقویت مهارت های زبان انگلیسی برای موفقیت در کنکور",
    duration: "۶۰ ساعت",
    image: "/images/english.webp"
  }
];

export default function Courses() {
  const carousel = useRef();

  const scroll = (direction) => {
    const scrollAmount = 400;
    if (carousel.current) {
      carousel.current.scrollBy({
        left: direction === 'right' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-5">
        <h2 className="text-2xl md:text-3xl font-extraBold font-IranSans text-center mb-8 md:mb-16">
          دوره‌های <span className="text-accent font-extraBlack">آموزشی</span> ما
        </h2>
        
        <div className="relative px-2 md:px-2"> 
          {/* Navigation Buttons - Hidden on mobile */}
          <button 
            onClick={() => scroll('right')} 
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 text-accent hover:text-accent/80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('left')} 
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 text-accent hover:text-accent/80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gradient Overlays - Adjusted for mobile */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-4 md:w-16 bg-gradient-to-r from-white to-transparent z-[1] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-4 md:w-16 bg-gradient-to-l from-white to-transparent z-[1] pointer-events-none" /> */}

          {/* Carousel Container */}
          <div 
            ref={carousel}
            className="overflow-x-scroll scrollbar-hide"
          >
            <div className="flex gap-4 md:gap-8 pb-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="w-[280px] md:w-[350px] bg-white rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden hover:border-accent transition-colors duration-300 flex-shrink-0"
                >
                  <div className="h-[160px] md:h-[200px] bg-gray-100 relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6 text-right">
                    <span className="font-IranSans text-accent text-xs md:text-sm block">{course.subject}</span>
                    <h3 className="font-IranSans font-extraBold text-lg md:text-xl mt-2 mb-3 md:mb-4">{course.title}</h3>
                    <p className="font-IranSans text-gray-600 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{course.description}</p>
                    <div className="flex flex-row-reverse justify-between items-center">
                      <span className="font-IranSans text-gray-900 font-bold text-sm md:text-base">{course.duration}</span>
                      <button className="font-IranSans bg-accent/10 text-accent text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl hover:bg-accent hover:text-white transition-colors duration-300">
                        اطلاعات بیشتر
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
