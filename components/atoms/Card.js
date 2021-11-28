import React from 'react';
import Image from 'next/image';

export default function Card({ thumbnail, title }) {
  return (
    <div className="text-center mt-2 mb-10 w-19 ">
      <div>
        <Image
          src={thumbnail}
          quality={90}
          alt={thumbnail}
          width={350}
          priority={true}
          height={150}
          className="object-contain"
        />
      </div>
      <p className="text-2xl">{title}</p>
    </div>
  );
}
