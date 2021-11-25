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
    const skew = velocity * 7.5;
    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    window.requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      {' '}
      <div className="h-full w-full top-0 left-0 fixed overflow-hidden ">
        <Header />
        <div ref={scrollContainer}>
          {images.map((image, index) => (
            <>
              <div key={index} className="m-20 ">
                <img src={image} alt={`people ${index}`} />
              </div>
              <h2>
                Skew <span className="m-4">Scrolling</span>
              </h2>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

const images = [
  'https://images.unsplash.com/photo-1551392505-f4056032826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1497&q=80',
  'https://images.unsplash.com/photo-1594312180721-3b5217cfc65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80',
  'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
];
