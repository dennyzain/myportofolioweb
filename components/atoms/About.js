import React from 'react';
import style from '../../styles/animate.module.css';
import CardSm from '../molecules/CardSm';

export default function About() {
  return (
    <div className="flex flex-col mx-6 ">
      <section>
        <h1 className={`${style.animate}  text-3xl mb-3 `}>ABOUT</h1>
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
            <CardSm pic="/js.png" />
            <CardSm pic="/typescript.png" />
          </div>
        </section>
        <section>
          <p>technologies</p>
          <div className="flex flex-wrap justify-start my-1">
            <CardSm pic="/html.png" text="HTML5" />
            <CardSm pic="/css.png" text="CSS3" />
            <CardSm pic="/react.png" text="React" />
            <CardSm pic="/next.svg" text="Next" />
            <CardSm pic="/tailwind.png" text="TailwindCSS" />
            <CardSm pic="/sass.png" text="Sass" />
            <CardSm pic="/firebase.png" text="Firebase" />
            <CardSm pic="/mysql.png" text="MYSQL" />
            <CardSm pic="/webpack.png" text="Webpack" />
          </div>
        </section>
        <section>
          <p>currently learn</p>
          <div className="flex my-1">
            <CardSm pic="/express.png" text="Express" />
            <CardSm pic="/mongodb.png" text="MongoDB" />
            <CardSm pic="/vue.png" text="Vue" />
          </div>
        </section>
      </section>
      <section>
        <h1 className={`${style.animate} text-3xl mb-3 mt-7`}>EXPERIENCE</h1>
        <div className="border-l-2 border-primary pl-2 mb-3">
          <p className="text-sm"> 2018-Network Engineer at Dinas Kesehatan Kota Bogor</p>
        </div>
        <div className="border-l-2 border-primary pl-2 mb-3">
          <p className="text-sm"> 2020-Freelance as Web Developer </p>
        </div>
      </section>
    </div>
  );
}
