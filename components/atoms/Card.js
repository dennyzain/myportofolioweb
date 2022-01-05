import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import Projects from '../data/projects';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function Card() {
  const router = useRouter();
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, Projects.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        className=" mx-6 my-10  h-auto w-auto bg-gray-400 overflow-hidden  flex-col rounded-lg absolute "
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          onClick={() =>
            router.push(`/projects/${Projects[imageIndex].id}`, undefined, {
              shallow: true,
              scroll: false,
            })
          }
          className="overflow-hidden"
        >
          <Image
            src={Projects[imageIndex].image}
            alt={Projects[imageIndex].title}
            blurDataURL={Projects[imageIndex].image}
            placeholder="blur"
            quality={60}
            width={600}
            height={250}
          />
        </motion.div>
        <div className="m-2 flex justify-center items-center flex-col">
          <p className="text-xl text-black bottom-5 m-1">
            {Projects[imageIndex].title}
          </p>
          <ul className="text-xs py-2 text-black bottom-5 m-1 flex">
            {Projects[imageIndex].tech
              .filter((data, index) => index < 3)
              .map((data, index) => (
                <li key={index} className="ml-2 underline">
                  {data.item}
                </li>
              ))}
          </ul>
          <button
            type="button"
            onClick={() =>
              router.push(`/projects/${Projects[imageIndex].id}`, undefined, {
                shallow: true,
                scroll: false,
              })
            }
            className="text-sm bg-black p-2 rounded-lg"
          >
            Show More
          </button>
        </div>
      </motion.div>
      <div className="flex justify-center items-center absolute z-20 bottom-56 md:bottom-36 ">
        <FaArrowLeft
          className="animate-bounce cursor-pointer"
          onClick={() => paginate(1)}
        />
        <p className="m-2">swipe</p>
        <FaArrowRight
          className="animate-bounce cursor-pointer"
          onClick={() => paginate(-1)}
        />
      </div>
    </AnimatePresence>
  );
}
