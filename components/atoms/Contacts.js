import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Context } from '../context/useContext';

export default function Contacts() {
  const { state, dispatch } = useContext(Context);
  return (
    <motion.div
      onViewportEnter={() => dispatch({ type: 'inViewContact', payload: true })}
      onViewportLeave={() => dispatch({ type: 'inViewContact', payload: false })}
      className="mx-6 mb-5"
    >
      <h1 className=" text-3xl mb-3 mt-7">CONTACTS</h1>
      <p>FACEBOOK</p>
      <p>INSTAGRAM</p>
      <p>GITHUB</p>
      <p>EMAIL</p>
    </motion.div>
  );
}
