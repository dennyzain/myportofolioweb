import { motion } from 'framer-motion';
import { container, containerAnimatedText } from '../presetAnimate/animate';
import { about, experience } from '../data/about';
import AnimatedTextContent from '../presetAnimate/AnimatedTextContent';
import CardSm from '../molecules/CardSm';

export default function About() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="about"
      className="flex flex-col mt-5 mx-6 md:mx-36 lg:mx-52 md:text-xs "
    >
      <section>
        <h1 className="text-3xl mb-3">ABOUT</h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerAnimatedText}
        >
          <div className="container">
            {about.map((item, index) => (
              <AnimatedTextContent
                key={index}
                type={item.type}
                text={item.text}
                style={item.style}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <section>
        <h2 className="text-xl my-3">SKILLS</h2>
        <section>
          <p>programming languages</p>
          <div className="flex my-1">
            <CardSm pic="/javascript.svg" text="javascript" />
            <CardSm pic="/typescript.svg" text="typescript" />
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerAnimatedText}
        >
          <div className="container">
            {experience.map((item, index) => (
              <div key={index} className="border-l-2 border-primary pl-2 mb-3">
                <AnimatedTextContent
                  type={item.type}
                  text={item.text}
                  style={item.style}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
