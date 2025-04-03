"use client";

import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import Link from 'next/link';

const cardData = [
  { id: 1, href: '/events/ordu-emtehanat', imgSrc: '/images/BentoGrid/b-1.webp', title: 'اردو امتحانات', description: 'آمادگی برای آزمون‌ها' },
  { id: 4, href: '/events/ordu-gharantine', imgSrc: '/images/BentoGrid/b-4.webp', title: 'برنامه مطالعاتی', description: 'تدوین برنامه اختصاصی برای شما' },
  { id: 2, href: '/events/ordu-nowruzi', imgSrc: '/images/BentoGrid/b-2.webp', title: 'اردو نوروزی', description: 'جشن و آموزش در تعطیلات' },
  { id: 5, href: '/events/ordu-gharantine', imgSrc: '/images/BentoGrid/b-5.webp', title: 'مشاوره', description: 'مشاوره تحصیلی و سبک زندگی' },
  { id: 3, href: '/events/ordu-gharantine', imgSrc: '/images/BentoGrid/b-3.webp', title: 'اردو قرنطینه', description: 'یادگیری متمرکز' },
  { id: 5, href: '/events/ordu-gharantine', imgSrc: '/images/BentoGrid/b-6.webp', title: 'اصلاح منابع', description: 'منابع مطالعاتی خود را بهینه کنید' },
];

export default function BentoGrid() {
  return (
    <section className="flex flex-col justify-center overflow-visible gap-5 items-center mb-10">
      <div className="w-full overflow-visible relative">
        <div className="flex gap-2 items-center justify-center animate-marquee-wrapper">
          <div className="flex gap-2 items-center animate-marquee overflow-visible py-5">
            {[...cardData, ...cardData, ...cardData].map(({ id, href, imgSrc, title, description }, index) => (
              <Link key={id + '-' + index} href={href} passHref>
                <div className="relative cursor-pointer group w-[160px] h-[160px] md:w-[360px] md:h-[360px]  inline-block bg-gradient-to-t from-accent/10 to-white border border-[#9EC3CE] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                  <ImageWithPlaceholder
                    src={imgSrc}
                    className="w-full h-full object-cover object-center"
                    alt={title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 transition duration-300"></div>
                  <div className="absolute bottom-2 right-3 md:bottom-6 md:right-6 flex flex-col items-start text-white" dir="rtl">
                    <span className=" text-sm md:text-xl font-semibold mb-1">{title}</span>
                    <span className="hidden md:block text-sm  opacity-80">{description}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }

        .animate-marquee-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee-wrapper {
            width: 100vw;
            overflow: hidden;
            position: relative;
          }
        }
      `}</style>
    </section>
  );
}