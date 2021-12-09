import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';
import { container } from '../presetAnimate/animate';

export default function Projects() {
  return (
    <>
      <motion.div id="projects" variants={container} initial="initial" whileInView="animate">
        <div className=" mx-6 md:mx-36 md:text-xs">
          <h1 className="text-3xl mt-5 mb-1 md:mb-3">PROJECTS</h1>
        </div>
        <div className="flex justify-center items-center overflow-hidden h-72 mt-4 w-screen ">
          <Card />
        </div>
        <div className="flex justify-center items-center  ">
          <FaArrowLeft className="animate-bounce" />
          <p className="mx-2">swipe</p>
          <FaArrowRight className="animate-bounce" />
        </div>
      </motion.div>
    </>
  );
}
