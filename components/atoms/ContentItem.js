import React from 'react';
import Image from 'next/image';
import Button from '../molecules/Button';

export default function ContentItem({ title, content, href, img, variant }) {
  return (
    <>
      <div className={`flex  flex-col  box-border py-16 px-2  ${variant && variant} `}>
        <div className={`${variant && variant} w-full`}>
          <Image
            src={img}
            alt={img}
            width={300}
            height={400}
            placeholder="blur"
            blurDataURL={img}
            priority="true"
            quality={80}
          />
        </div>

        <div className="my-2">
          <h1 className="text-3xl">{title}</h1>
          <p>{content}</p>
        </div>
        <Button name="show more" method={href} />
      </div>
    </>
  );
}
