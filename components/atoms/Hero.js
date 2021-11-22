import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import styles from '../../styles/animate.module.css';

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center text-center h-screen animate-colorGradient">
        <div className="grid grid-cols-8 grid-rows-2 gap-8">
          <p className="col-start-2 col-span-6 ">
            Im Denny Abbas Zain a web developer based in Bogor, Indonesian.
          </p>
          <div className="col-start-2 row-start-2 row-span-2 col-span-6 flex justify-center items-center flex-col">
            <p className="text-xs">scroll down</p>
            <FaArrowCircleDown className="animate-bounce mt-5" />
          </div>
        </div>
      </div>
    </>
  );
}
