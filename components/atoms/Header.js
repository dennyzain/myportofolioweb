import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
import { Context } from '../context/useContext';

export default function Header() {
  const { state, dispatch } = useContext(Context);
  const circularScroll = useRef();
  const [scrollP, setScrollP] = useState(0);
  const [height, width] = useWindowSize();

  const container = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
    exit: {
      opacity: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  useEffect(() => {
    window.addEventListener('scroll', progressCircularPageScroll);
    return () => window.removeEventListener('scroll', progressCircularPageScroll);
  }, [height]);

  const progressCircularPageScroll = () => {
    const scrollTop = window.scrollY;
    const offsetHeight = document.body.offsetHeight;
    const scrollPercent = scrollTop / (offsetHeight - height);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    let degrees = scrollPercent * 360;
    setScrollP(scrollPercentRounded);
    circularScroll.current.style.background = `conic-gradient(#753188 ${degrees}deg, #ddd ${degrees}deg)`;
  };
  return (
    <>
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } }}
            exit={{
              opacity: 0,
            }}
            className="fixed bg-white text-black z-50  w-full h-full"
          >
            <div className="bg-transparent  flex justify-between w-full">
              <div className="text-xs m-5">
                <p>Denny Abbas Zain</p>
              </div>
              <div
                onClick={() => dispatch({ type: 'isOpenMenu' })}
                onKeyPress={() => dispatch({ type: 'isOpenMenu' })}
                className="text-xs m-5"
              >
                <p className="cursor-pointer">Close</p>
              </div>
            </div>
            <div className="text-5xl  -mt-8 flex justify-center items-center h-full flex-col">
              <p className=" mb-4 cursor-pointer ">About</p>
              <p className="mb-4 cursor-pointer ">Portofolio</p>
              <p className="mb-4 cursor-pointer ">Contacts</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!state.isOpen && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          exit={{
            opacity: 0,
            transition: { duration: 1 },
          }}
        >
          <div className=" bg-transparent  text-white flex fixed z-50  justify-between w-full">
            <div className="text-xs m-5">
              <p>Denny Abbas Zain</p>
            </div>
            <div
              onClick={() => dispatch({ type: 'isOpenMenu' })}
              onKeyPress={() => dispatch({ type: 'isOpenMenu' })}
              role="button"
              className="text-xs m-5"
            >
              <p className="cursor-pointer">Menu</p>
            </div>
          </div>
          <div className="bottom-0 grid grid-cols-6 grid-rows-2 gap-2 mb-3 text-xl w-full z-40 fixed ">
            <AnimatePresence>
              {!state.isContact && (
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
                  exit={{ x: -200, opacity: 0, transition: { duration: 0.7 } }}
                  className="row-span-2 row-start-1 col-span-4 col-start-1 flex justify-self-center self-center"
                >
                  <a className="mx-5" href="http://">
                    <FaFacebookF />
                  </a>
                  <a className="mx-5" href="http://">
                    <FaInstagram />
                  </a>
                  <a className="mx-5" href="http://">
                    <FaGithub />
                  </a>
                  <a className="mx-5 animate-bounce" href="http://">
                    <FaEnvelope />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            <div
              ref={circularScroll}
              className="row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 w-16 h-16 circular-progressive relative text-sm"
            ></div>
            <div className="row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 w-14 h-14 circular-progressive z-20 bg-black text-white text-center"></div>
            <div className="row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 z-20  text-white ">
              <p>{scrollP}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
