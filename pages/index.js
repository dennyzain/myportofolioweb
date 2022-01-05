import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
// local
import Scroll from '../components/utils/SmoothScroll';
import Header from '../components/atoms/Header';
import { Provider } from '../components/context/useContext';

// import About from '../components/atoms/About';
// import Footer from '../components/atoms/Footer';
// import Hero from '../components/atoms/Hero';
// import Projects from '../components/atoms/Projects';
// import Contacts from '../components/atoms/Contacts';

const About = dynamic(() => import('../components/atoms/About'));
const Footer = dynamic(() => import('../components/atoms/Footer'));
const Hero = dynamic(() => import('../components/atoms/Hero'));
const Projects = dynamic(() => import('../components/atoms/Projects'));
const Contacts = dynamic(() => import('../components/atoms/Contacts'));

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Provider>
        <Header>
          <Scroll>
            <Hero />
            <About />
            <Projects />
            <Contacts />
            <Footer />
          </Scroll>
        </Header>
      </Provider>
    </motion.div>
  );
}
