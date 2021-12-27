import React from 'react';
import { motion } from 'framer-motion';
// local
import Scroll from '../components/utils/SmoothScroll';
import About from '../components/atoms/About';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import Hero from '../components/atoms/Hero';
import Projects from '../components/atoms/Projects';
import Contacts from '../components/atoms/Contacts';

export default function Home() {
  return (
    <>
      <motion.div exit={{ opacity: 0 }}>
        <Header>
          <Scroll>
            <Hero />
            <About />
            <Projects />
            <Contacts />
            <Footer />
          </Scroll>
        </Header>
      </motion.div>
    </>
  );
}
