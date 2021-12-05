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

const swipeConfidenceThreshold = 15000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Card() {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.

  const imageIndex = wrap(0, Projects.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          whileHover={{ scale: 1.1 }}
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
          className="text-center mt-2 mb-10 flex flex-col justify-center  absolute items-center z-10 left-0 top-0 
          bottom-0 right-0"
        >
          <Image
            src={Projects[imageIndex].image}
            quality={90}
            alt={Projects[imageIndex].image}
            blurDataURL={Projects[imageIndex].image}
            placeholder="blur"
            width={500}
            priority={true}
            height={300}
            className="object-contain"
          />
          <p className="text-xl text-white  ml-3">{Projects[imageIndex].title}</p>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
