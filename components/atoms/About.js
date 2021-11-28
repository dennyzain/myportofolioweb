import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { container } from '../presetAnimate/animate';
import CardSm from '../molecules/CardSm';

export default function About() {
  const scrollView = useRef();
  return (
    <div ref={scrollView}>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        className="flex flex-col mt-5 mx-6 "
      >
        <section>
          <h1 className="text-3xl mb-3">ABOUT</h1>
          <p>
            I&apos;m a self taught web developer focused on building useful websites. I&apos;m so
            excited about new things both learning and experience.
          </p>
        </section>
        <section>
          <h2 className="text-xl my-3">SKILLS</h2>
          <section>
            <p>programming languages</p>
            <div className="flex my-1">
              <CardSm pic="/javascript.svg" />
              <CardSm pic="/typescript.svg" />
            </div>
          </section>
          <section>
            <p>technologies</p>
            <div className="flex flex-wrap justify-start my-1">
              <CardSm pic="/html.svg" text="HTML5" />
              <CardSm pic="/css.svg" text="CSS3" />
              <CardSm pic="/react.svg" text="React" />
              <CardSm pic="/next.svg" text="Next" />
              <CardSm pic="/tailwind.svg" text="TailwindCSS" />
              <CardSm pic="/sass.svg" text="Sass" />
              <CardSm pic="/firebase.svg" text="Firebase" />
              <CardSm pic="/mysql.svg" text="MYSQL" />
              <CardSm pic="/webpack.svg" text="Webpack" />
            </div>
          </section>
          <section>
            <p>currently learn</p>
            <div className="flex my-1">
              <CardSm pic="/expressjs.svg" text="Express" />
              <CardSm pic="/mongodb.svg" text="MongoDB" />
              <CardSm pic="/vue.svg" text="Vue" />
            </div>
          </section>
        </section>
        <section>
          <h1 className="text-3xl mb-3 mt-7">EXPERIENCE</h1>
          <div className="border-l-2 border-primary pl-2 mb-3">
            <p className="text-sm"> 2018-Network Engineer at Dinas Kesehatan Kota Bogor</p>
          </div>
          <div className="border-l-2 border-primary pl-2 mb-3">
            <p className="text-sm"> 2020-Freelance as Web Developer </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
