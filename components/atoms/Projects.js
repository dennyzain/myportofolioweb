import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';
import { container } from '../presetAnimate/animate';

export default function Projects() {
  return (
    <>
      <motion.div
        id="projects"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className=" mx-6 md:mx-36 lg:mx-52 md:text-xs">
          <h1 className="text-3xl mt-5 mb-1 md:mb-3">PROJECTS</h1>
        </div>
        <div className=" flex justify-center items-center  h-96 mb-4 ">
          <Card />
        </div>
      </motion.div>
    </>
  );
}
