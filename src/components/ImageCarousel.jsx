"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/slides?populate=*`);
        const { data } = await res.json();
        setSlides(data);
      } catch (error) {
        console.error('Error fetching slides:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full aspect-[3/1] md:aspect-[4/1] bg-gray-100 animate-pulse" />
    );
  }

  if (!slides.length) {
    return null;
  }

  return (
    <section className="w-full  bg-gray-50">
      <div className="w-full  overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={slides.length > 1}
          className="w-full overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link href={`/${slide.Link}`} className="block relative   sm:h-[500px] w-full">
                <ImageWithPlaceholder
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.SlideImage?.url}`}
                  alt={slide.Title}
                  className="w-full h-auto  rounded-lg object-contain sm:object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
                
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.2);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7 !important;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }

        /* Add these styles to ensure full width */
        .swiper {
          width: 100% !important;
          margin: 0 !important;
        }

        .swiper-slide {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;