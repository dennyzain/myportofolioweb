import React, { useState, useEffect, useRef } from 'react';
import router from 'next/router';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// local
import About from '../components/atoms/About';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import Hero from '../components/atoms/Hero';
import Portofolio from '../components/atoms/Projects';
import Contacts from '../components/atoms/Contacts';
import useWindowSize from '../components/hooks/useWindowSize';

export default function Home() {
  const scrollContainer = useRef();
  const [height, width] = useWindowSize();
  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scroll render once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, [height]);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <>
      <div className="top-0 left-0 fixed w-full h-full overflow-hidden">
        <Header />
        <div ref={scrollContainer}>
          <Hero />
          <About />
          <Portofolio />
          <Contacts />
          <Footer />
        </div>
      </div>
    </>
  );
}
