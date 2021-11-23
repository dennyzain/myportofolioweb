import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';

export default function Header() {
  const circularScroll = useRef();
  const [state, setstate] = useState({ isOpen: false, isContact: false });
  const [scrollP, setScrollP] = useState(0);
  const [height, width] = useWindowSize();

  useLayoutEffect(() => {
    window.addEventListener('scroll', progressCircularPageScroll);
    return () => window.removeEventListener('scroll', progressCircularPageScroll);
  }, [height]);

  const handleChangeIsOpen = () => {
    setstate({ ...state, isOpen: !state.isOpen });
  };
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
      {state.isOpen ? (
        <div className="fixed bg-white text-black z-50  w-full h-full">
          <div className="bg-transparent animate-colorGradient flex justify-between w-full">
            <div className="text-xs m-5">
              <p>Denny Abbas Zain</p>
            </div>
            <div
              onClick={() => handleChangeIsOpen()}
              onKeyPress={() => handleChangeIsOpen()}
              className="text-xs m-5"
            >
              <p className="cursor-pointer">Close</p>
            </div>
          </div>
          <div className="text-5xl animate-colorGradient -mt-8 flex justify-center items-center h-full flex-col">
            <p className=" mb-4 cursor-pointer ">About</p>
            <p className="mb-4 cursor-pointer ">Portofolio</p>
            <p className="mb-4 cursor-pointer ">Contacts</p>
          </div>
        </div>
      ) : (
        <div>
          <div className=" bg-transparent animate-colorGradient text-white flex fixed z-50  justify-between w-full">
            <div className="text-xs m-5">
              <p>Denny Abbas Zain</p>
            </div>
            <div
              onClick={() => handleChangeIsOpen()}
              onKeyPress={() => handleChangeIsOpen()}
              role="button"
              className="text-xs m-5"
            >
              <p className="cursor-pointer">Menu</p>
            </div>
          </div>
          <div className="bottom-0 grid grid-cols-6 grid-rows-2 gap-2 mb-3 text-xl w-full z-40 fixed animate-colorGradient">
            {!state.isContact && (
              <>
                <a
                  className="row-span-2 col-start-1 self-center justify-self-center"
                  href="http://"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="row-span-2 col-start-2 self-center justify-self-center"
                  href="http://"
                >
                  <FaInstagram />
                </a>
                <a
                  className="row-span-2 col-start-3 self-center justify-self-center"
                  href="http://"
                >
                  <FaGithub />
                </a>
                <a
                  className="row-span-2 row-start-1 col-start-4 self-center justify-self-center animate-bounce"
                  href="http://"
                >
                  <FaEnvelope />
                </a>
              </>
            )}
            <div
              ref={circularScroll}
              className="row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 w-16 h-16 circular-progressive relative text-sm"
            ></div>
            <div className="row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 w-14 h-14 circular-progressive z-20 bg-black text-white text-center"></div>
            <div className="row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 z-20  text-white ">
              <p>{scrollP}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
