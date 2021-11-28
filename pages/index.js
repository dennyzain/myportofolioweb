import React, { useState, useEffect, useRef } from 'react';
import router from 'next/router';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// local
import About from '../components/atoms/About';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import Hero from '../components/atoms/Hero';
import Portofolio from '../components/atoms/Portofolio';
import Contacts from '../components/atoms/Contacts';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portofolio />
      <Contacts />
      <Footer />
    </>
  );
}
