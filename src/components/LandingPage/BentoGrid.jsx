import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import Link from 'next/link';

export default function BentoGrid() {
  return (
    <>
      <section className="px-8  pt-5 md:px-32 lg:px-64 flex flex-col justify-center gap-10 items-center mb-24 ">
        <div className="relative z-10 w-full flex flex-col gap-2 justify-center">
          <h1 className="text-[clamp(16px,7vw,32px)] sm:text-center text-secondary font-extrabold leading-relaxed text-center">
            در رویداد‌های<span className="relative text-accent"> یوحنا</span> شرکت کن، یک قدم جلو باش!
          </h1>
        </div>

        {/* Horizontal scroll container on mobile */}
        <div className="w-full pl-0 py-5 pr- overflow-x-auto md:overflow-visible ">
          <div className="flex gap-5 items-center md:justify-center">
            {/* Card 1 */}
            <Link href="/events/ordu-emtehanat" passHref>
              <div className="relative cursor-pointer group w-[260px] h-[260px] inline-block bg-gradient-to-t from-accent/10 to-white border border-[#9EC3CE] rounded-md p-1 shadow-lg transform transition duration-300 hover:scale-105">
                <ImageWithPlaceholder
                  src="/images/BentoGrid/b-1.webp"
                  className="w-full h-full object-cover object-center rounded-md"
                  alt="Hero illustration"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 rounded-md"></div>
                {/* Always-visible RTL Title with decorative element on hover */}
                <div className="absolute bottom-4 right-4 flex items-center text-sm text-white font-bold" dir="rtl">
                  <span className="transition-all duration-300 ml-2 opacity-0 w-0 group-hover:opacity-100 group-hover:w-4 h-0.5 bg-white"></span>
                  <span>اردو امتحانات</span>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/events/ordu-nowruzi" passHref>
              <div className="relative cursor-pointer group w-[260px] h-[260px] inline-block bg-gradient-to-t from-accent/10 to-white border border-[#9EC3CE] rounded-md p-1 shadow-lg transform transition duration-300 hover:scale-105">
                <ImageWithPlaceholder
                  src="/images/BentoGrid/b-2.webp"
                  className="w-full h-full object-cover object-center rounded-md"
                  alt="Hero illustration"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 rounded-md"></div>
                <div className="absolute bottom-4 right-4 flex items-center text-sm text-white font-bold" dir="rtl">
                  <span className="transition-all duration-300 ml-2 opacity-0 w-0 group-hover:opacity-100 group-hover:w-4 h-0.5 bg-white"></span>
                  <span>اردو نوروزی</span>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/events/ordu-gharantine" passHref>
              <div className="relative cursor-pointer group w-[260px] h-[260px] inline-block bg-gradient-to-t from-accent/10 to-white border border-[#9EC3CE] rounded-md p-1 shadow-lg transform transition duration-300 hover:scale-105">
                <ImageWithPlaceholder
                  src="/images/BentoGrid/b-3.webp"
                  className="w-full h-full object-cover object-center rounded-md"
                  alt="Hero illustration"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 rounded-md"></div>
                <div className="absolute bottom-4 right-4 flex items-center text-sm text-white font-bold" dir="rtl">
                  <span className="transition-all duration-300 ml-2 opacity-0 w-0 group-hover:opacity-100 group-hover:w-4 h-0.5 bg-white"></span>
                  <span>اردو قرنطینه</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
