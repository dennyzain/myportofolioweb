import React from 'react';
import Image from 'next/image';

export default function Card({ thumbnail, featured, title }) {
  return (
    <div className="rounded-lg border-2 text-center border-black mt-1 bg-gray-500 w-19 ">
      <div>
        <Image
          src={thumbnail}
          quality={100}
          alt={thumbnail}
          width={350}
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
              width={30}
              height={30}
              className="rounded-t-lg object-contain"
            />
            <p className="text-xs ">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
