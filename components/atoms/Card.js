import React from 'react';
import Image from 'next/image';

export default function Card({ thumbnail, featured, title }) {
  return (
    <div className="text-center border-primary border my-2  w-19 ">
      <div>
        <Image
          src={thumbnail}
          quality={90}
          alt={thumbnail}
          width={350}
          priority={true}
          height={200}
          className="rounded-t-lg object-contain"
        />
      </div>
      <p>{title}</p>
      <div className="flex justify-center">
        {featured.map((data) => (
          <div key={data.image} className="m-1 text-center w-20">
            <Image
              src={data.image}
              alt={data.image}
              width={25}
              height={25}
              quality={70}
              layout="fixed"
              className="rounded-t-lg object-contain"
            />
            <p className="text-xs ">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
