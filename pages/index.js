import React, { useState, useEffect, useRef } from 'react';
import router from 'next/router';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// local
import About from '../components/atoms/About';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import Hero from '../components/atoms/Hero';
import Portofolio from '../components/atoms/Portofolio';
import Certificates from '../components/atoms/Certificates';
import Contacts from '../components/atoms/Contacts';
import useWindowSize from '../components/hooks/useWindowSize';

export default function Home() {
  const controls = useAnimation();
  const [height, width] = useWindowSize();
  const scrollContainer = useRef();
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  useEffect(() => {
    window.requestAnimationFrame(() => skewScrolling());
  }, [height]);

  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  }, [height]);

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = (data.previous * 100 + 1) / 100;
    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / width;
    const velocity = +acceleration;
    const skew = velocity * 2.5;
    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px) skewY(${skew}deg)`;

    //loop vai raf
    window.requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      {' '}
      <div className="h-full w-full top-0 left-0 fixed overflow-hidden ">
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
