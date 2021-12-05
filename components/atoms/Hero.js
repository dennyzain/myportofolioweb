import React, { useContext } from 'react';
import Image from 'next/image';
import { FaArrowCircleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { container, item } from '../presetAnimate/animate';
import { Context } from '../context/useContext';
import AnimatedText from '../presetAnimate/AnimatedText';

import style from '../../styles/animate.module.css';

export default function Hero() {
  const { state, dispatch } = useContext(Context);

  const placeholderText = [
    {
      type: 'paragraph',
      text: 'Hi there, im',
      style: 'md:text-xl text-white ',
    },
    { type: 'heading1', text: 'Denny Abbas Zain', style: `text-xl md:text-2xl ${style.animate}` },
    {
      type: 'paragraph',
      text: 'a web developer based in Bogor, Indonesian.',
      style: 'md:text-xl',
    },
  ];

  const containerAnimatedText = {
    visible: {
      transition: {
        staggerChildren: 0.075,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        className="flex justify-center items-center text-center md:mx-36 md:text-left h-screen "
      >
        <div className="flex flex-col md:mt-15  md:flex-row">
          <div className=" md:bg-blend-screen">
            {' '}
            {!state.isDesktop ? (
              <Image
                src="/profilemobile.png"
                quality={100}
                alt="/profile.png"
                width={150}
                priority={true}
                height={150}
                className="circular-progressive object-contain bg-gray-200"
              />
            ) : (
              <Image
                src="/profile.png"
                quality={100}
                alt="/profile.png"
                width={150}
                layout="fixed"
                priority={true}
                height={270}
                className="rounded-3xl bg-gradient-to-t from-gray-700 to-white"
              />
            )}
          </div>
          <div className="flex flex-col md:ml-8 md:mt-9">
            <motion.div initial="hidden" whileInView="visible" variants={containerAnimatedText}>
              <div className="container">
                {placeholderText.map((item, index) => {
                  return <AnimatedText {...item} key={index} style={item.style} />;
                })}
              </div>
            </motion.div>
            {/* 
            <div className="mx-2 mt-7 md:text-xl  ">
              <p>Hi there, Im </p>
              <span className={` text-xl md:text-2xl ${style.animate}`}>Denny Abbas Zain</span>
              <p>a web developer based in Bogor, Indonesian.</p>
            </div> */}
            <div className="mt-5 text-center">
              <p className="text-xs ">scroll down</p>
              <div className="flex justify-center">
                <FaArrowCircleDown className="animate-bounce mt-5 " />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
