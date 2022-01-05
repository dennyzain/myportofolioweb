import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { container } from '../presetAnimate/animate';

const contactNav = (state) => (
  <AnimatePresence>
    {!state.isContact && (
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
        exit={{ x: -200, opacity: 0, transition: { duration: 0.7 } }}
        className="row-span-2 row-start-1 col-span-4 col-start-1 flex justify-self-center self-center md:flex-col md:row-start-2  md:justify-self-start md:col-span-2"
      >
        <a
          className="mx-5 md:text-sm md:mb-2"
          href="https://www.instagram.com/abbas_dznx/"
        >
          {state.isDesktop ? <p>Instagram</p> : <FaInstagram />}
        </a>
        <a
          className="mx-5 md:text-sm md:mb-2"
          href="https://github.com/dennyzain"
        >
          {state.isDesktop ? <p>Github</p> : <FaGithub />}
        </a>
        <a
          className="mx-5 md:text-sm md:mb-2"
          href="https://www.linkedin.com/in/denny-abbas-zain-567552194/"
        >
          {state.isDesktop ? <p>LinkedIn</p> : <FaLinkedin />}
        </a>
        <a
          className="mx-5 md:text-sm md:mb-2 animate-bounce "
          href="mailto:abbasdenny24@gmail.com"
        >
          {state.isDesktop ? <p>Email</p> : <FaEnvelope />}
        </a>
      </motion.div>
    )}
  </AnimatePresence>
);

const navbarAtOpen = (dispatch) => (
  <AnimatePresence>
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed bg-white text-black z-50  w-full h-full "
    >
      <div className="bg-transparent  flex justify-between w-full">
        <div className="text-xs  m-5">
          <p>Denny Abbas Zain</p>
        </div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'isOpenMenu' })}
          onKeyPress={() => dispatch({ type: 'isOpenMenu' })}
          className="text-xs m-5"
        >
          <p className="cursor-pointer">Close</p>
        </button>
      </div>
      <div className="text-5xl  -mt-8 flex justify-center items-center h-full flex-col">
        <Link
          className=" mb-2 cursor-pointer "
          onClick={() => dispatch({ type: 'isOpenMenu' })}
          to="about"
        >
          {' '}
          About
        </Link>
        <Link
          className=" mb-2 cursor-pointer "
          onClick={() => dispatch({ type: 'isOpenMenu' })}
          to="projects"
        >
          {' '}
          Projects
        </Link>
        <Link
          className=" mb-2 cursor-pointer "
          onClick={() => dispatch({ type: 'isOpenMenu' })}
          to="contacts"
        >
          {' '}
          Contacts
        </Link>
      </div>
    </motion.div>
  </AnimatePresence>
);

const navbarAtClosed = (state, dispatch, scrollPercent, circularScroll) => (
  <motion.div>
    <div className=" bg-transparent  text-white flex fixed z-50  justify-between w-full">
      <div className="text-xs md:text-sm  m-5 cursor-pointer">
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <p>Denny Abbas Zain</p>
        </button>
      </div>
      {!state.isDesktop ? (
        <button
          onClick={() => dispatch({ type: 'isOpenMenu' })}
          type="button"
          className="text-xs m-5"
        >
          <p className="cursor-pointer md:text-sm">Menu</p>
        </button>
      ) : (
        <div className="flex flex-col text-xs md:text-sm text-right m-5">
          <Link className=" mb-2 cursor-pointer " to="about">
            {' '}
            About
          </Link>
          <Link className=" mb-2 cursor-pointer" to="projects">
            {' '}
            Projects
          </Link>
        </div>
      )}
    </div>
    <div className="bottom-0 grid grid-cols-6   gap-2 mb-3 text-xl w-full z-40 fixed  ">
      {contactNav(state)}
      <div
        ref={circularScroll}
        className="z-30 row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 w-16 h-16 circular-progressive relative text-sm md:row-start-2 md:col-start-6"
      />
      <div className=" row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 w-14 h-14 circular-progressive z-40 bg-black text-white text-center md:row-start-2 md:col-start-6" />
      <div className="row-span-2 row-start-1 col-span-2  col-start-5 justify-self-center self-center m-1 p-6 z-40 md:row-start-2 md:col-start-6 text-white ">
        <p>{scrollPercent}</p>
      </div>
    </div>
  </motion.div>
);

export { navbarAtClosed, navbarAtOpen };
