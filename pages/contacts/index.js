import React from 'react';
import { motion } from 'framer-motion';
import SubHeader from '../../components/molecules/SubHeader';

export default function Contacts() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SubHeader title="Contacts" />
      <div className="flex justify-center items-center h-screen">
        <p>Im Web Developer </p>
      </div>
    </motion.div>
  );
}
