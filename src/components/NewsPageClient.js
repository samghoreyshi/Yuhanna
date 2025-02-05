'use client';

import { useState, useEffect } from 'react';
import ImageWithPlaceholder from './ImageWithPlaceholder.jsx';

export default function NewsPageClient() {
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/ad-banners?populate=*`);
        const data = await res.json();
        
        if (data.data && data.data.length > 0) {
          // Get a random banner from the array
          const randomBanner = data.data[Math.floor(Math.random() * data.data.length)];
          
          // Get a random image from the banner's images
          if (randomBanner.Banner && randomBanner.Banner.length > 0) {
            const randomImage = randomBanner.Banner[Math.floor(Math.random() * randomBanner.Banner.length)];
            setBannerImage(randomImage);
          }
        }
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    };

    fetchBanner();
  }, []);

  if (!bannerImage) {
    return null;
  }

  return (
    <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
      <ImageWithPlaceholder
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${bannerImage.formats?.medium?.url || bannerImage.url}`}
        alt="Promo Banner"
        className="object-cover"
      />
    </div>
  );
}
