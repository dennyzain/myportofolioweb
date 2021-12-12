import React from 'react';
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
      <Header />
      <Scroll>
        <Hero />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </Scroll>
    </>
  );
}
