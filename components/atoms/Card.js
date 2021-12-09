import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { item } from '../presetAnimate/animate';
import { Projects } from '../data/projects';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      scale: 0.2,
      opacity: 0,
      transition: { duration: 0.8 },
    };
  },
  center: {
    zIndex: 1,
    scale: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Card() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, Projects.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div
          className="mt-2 mx-6 mb-10 flex justify-center  items-center flex-col relative
          "
        >
          <motion.img
            src={Projects[imageIndex].image}
            alt={Projects[imageIndex].image}
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.7 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-auto h-52"
          />

          <p className="text-xl text-white bottom-5 mt-3">{Projects[imageIndex].title}</p>
        </div>
      </AnimatePresence>
      {/* <div
        className="cursor-pointer top-1/2 relative bg-white text-black right-20 rounded-3xl w-10 h-10 flex justify-center items-center z-20 text-xl "
        onClick={() => paginate(1)}
      >
        {'‣'}
      </div>
      <div
        className="cursor-pointer top-1/2 relative bg-white text-black left-20 transform rotate-180 rounded-3xl w-10 h-10 flex justify-center items-center z-20 text-xl "
        onClick={() => paginate(-1)}
      >
        {'‣'}
      </div> */}
    </>
  );
}
