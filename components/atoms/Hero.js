import { useContext } from 'react';
import Image from 'next/image';
import { FaArrowCircleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Context } from '../context/useContext';
import hero from '../data/hero';
import { containerAnimatedText, container } from '../presetAnimate/animate';
import AnimatedText from '../presetAnimate/AnimatedTextHero';

export default function Hero() {
  const { state } = useContext(Context);
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
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
              priority
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
              priority
              height={270}
              className="rounded-3xl bg-gradient-to-t from-gray-700 to-white"
            />
          )}
        </div>
        <div className="flex flex-col md:ml-8 md:mt-9">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerAnimatedText}
          >
            <div className="container">
              {hero.map((item, index) => (
                <AnimatedText
                  key={index}
                  type={item.type}
                  text={item.text}
                  style={item.style}
                />
              ))}
            </div>
          </motion.div>
          <div className="mt-5 text-center">
            <p className="text-xs ">scroll down</p>
            <div className="flex justify-center">
              <FaArrowCircleDown className="animate-bounce mt-5 " />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
