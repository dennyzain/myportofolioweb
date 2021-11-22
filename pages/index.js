import React, { useState, useEffect, useRef } from 'react';
import router from 'next/router';
import { motion, useAnimation } from 'framer-motion';
// local
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import ContentItem from '../components/atoms/ContentItem';
import Hero from '../components/atoms/Hero';
import useWindowSize from '../components/hooks/useWindowSize';

const container = {
  initial: { x: -200, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 2 } },
  exit: {
    opacity: 0,
  },
};

export default function Home() {
  const controls = useAnimation();
  const [height, width] = useWindowSize();
  const wrapper = useRef();
  const scrollContainer = useRef();
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
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
    <motion.div
      ref={wrapper}
      variants={container}
      initial="initial"
      animate="animate"
      className="h-full w-full top-0 left-0 fixed overflow-hidden "
    >
      <Header />
      <div ref={scrollContainer} className="relative">
        <Hero />
        <motion.div>
          <ContentItem
            variant="text-right justify-end"
            title="About"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam reprehenderit eius quae ratione repudiandae! Porro numquam repellendus ratione consequatur nam?"
            href={() => router.push('/about')}
            img="/unsplash2.png"
          />
        </motion.div>
        <motion.div>
          <ContentItem
            variant="text-left justify-start"
            title="Portofolio"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, facilis!"
            href={() => router.push('/portofolio')}
            img="/unsplash.png"
          />
        </motion.div>
        <Footer />
      </div>
    </motion.div>
  );
}
