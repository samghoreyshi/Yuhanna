'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TeamMemberImage({ src, alt, width, height, className }) {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=0CAEDD&color=fff`);
  };

  return (
    <Image 
      src={imgSrc} 
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
}