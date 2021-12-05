import { motion } from 'framer-motion';
import Card from './Card';
import { container } from '../presetAnimate/animate';

export default function Projects() {
  return (
    <>
      <motion.div variants={container} initial="initial" whileInView="animate">
        <div className=" mx-6 md:mx-36 md:text-xs">
          <h1 className="text-3xl mt-5 mb-1 md:mb-3">PROJECTS</h1>
        </div>
        <div className="relative flex justify-center items-center  w-screen h-72">
          <Card />
        </div>
        <div className="flex justify-center">
          <p>swipe</p>
        </div>
      </motion.div>
    </>
  );
}
