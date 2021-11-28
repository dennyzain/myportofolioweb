import React from 'react';
import Image from 'next/image';
import { FaArrowCircleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { container, item } from '../presetAnimate/animate';
import style from '../../styles/animate.module.css';

export default function Hero() {
  return (
    <>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        className="flex justify-center items-center text-center h-screen "
      >
        <div className="grid grid-cols-8 grid-rows-3 gap-2 mt-7">
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
          <div className="col-start-1 row-start-2 col-span-8 self-center mx-2">
            <p>Hi there, Im </p>
            <span className={` text-xl  ${style.animate}`}>Denny Abbas Zain</span>
            <p>a web developer based in Bogor, Indonesian.</p>
          </div>
          <div className="col-start-2 row-start-3 row-span-2 col-span-6 flex items-center flex-col">
            <p className="text-xs">scroll down</p>
            <FaArrowCircleDown className="animate-bounce mt-5" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
