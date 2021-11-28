import React from 'react';
import Image from 'next/image';
import { FaArrowCircleDown } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import styles from '../../styles/animate.module.css';

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center text-center h-screen animate-colorGradient">
        <div className="grid grid-cols-8 grid-rows-3 gap-2">
          <div className="row-start-1 col-start-2 col-span-6">
            {' '}
            <Image
              src="/profilemobile.png"
              quality={100}
              alt="/profile.png"
              width={150}
              priority={true}
              height={150}
              className="circular-progressive object-contain bg-gray-200"
            />
          </div>
          <div className="col-start-2 row-start-2 col-span-6 self-center ">
            <p>Im Denny Abbas Zain a web developer based in Bogor, Indonesian.</p>
          </div>
          <div className="col-start-2 row-start-3 row-span-2 col-span-6 flex items-center flex-col">
            <p className="text-xs">scroll down</p>
            <FaArrowCircleDown className="animate-bounce mt-5" />
          </div>
        </div>
      </div>
    </>
  );
}
