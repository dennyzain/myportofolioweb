import React from 'react';
import { motion } from 'framer-motion';
import SubHeader from '../../components/molecules/SubHeader';

export default function About() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SubHeader title="About" />
      <div className="flex justify-center items-center h-screen">
        <p>Im Web Developer</p>
      </div>
    </motion.div>
  );
}
