import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Context } from '../context/useContext';
import { container } from '../presetAnimate/animate';

export default function Contacts() {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {!state.isDesktop && (
        <motion.div
          id="contacts"
          variants={container}
          initial="initial"
          whileInView="animate"
          onViewportEnter={() =>
            dispatch({ type: 'inViewContact', payload: true })
          }
          onViewportLeave={() =>
            dispatch({ type: 'inViewContact', payload: false })
          }
          className="mx-6 mb-5"
        >
          <h1 className=" text-3xl mb-3 mt-7">CONTACTS</h1>
          <div className="flex flex-col">
            <a href="https://www.instagram.com/abbas_dznx/">INSTAGRAM</a>
            <a href="https://github.com/dennyzain">GITHUB</a>
            <a href="https://www.linkedin.com/in/denny-abbas-zain-567552194/">
              LINKEDIN
            </a>
            <a href="mailto:abbasdenny24@gmail.com" className="animate-bounce">
              EMAIL
            </a>
          </div>
        </motion.div>
      )}{' '}
    </>
  );
}
