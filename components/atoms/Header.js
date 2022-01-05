import { useState, useEffect, useRef, useContext } from 'react';
import useWindowSize from '../utils/useWindowSize';
import { Context } from '../context/useContext';
import { navbarAtClosed, navbarAtOpen } from '../molecules/Navbar';

export default function Header({ children }) {
  const { state, dispatch } = useContext(Context);
  const circularScroll = useRef();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [height, width] = useWindowSize();

  const progressCircularPageScroll = () => {
    const scrollTop = window.scrollY;
    const { offsetHeight } = document.body;
    // eslint-disable-next-line no-shadow
    const scrollPercent = scrollTop / (offsetHeight - height);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    const degrees = scrollPercent * 360;
    setScrollPercent(scrollPercentRounded);
    circularScroll.current.style.background = `conic-gradient(#753188 ${degrees}deg, #ddd ${degrees}deg)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', progressCircularPageScroll);
    return () =>
      window.removeEventListener('scroll', progressCircularPageScroll);
  }, [height]);

  useEffect(() => {
    if (width >= 768) {
      dispatch({ type: 'isDesktop', payload: true });
    } else {
      dispatch({ type: 'isDesktop', payload: false });
    }
  }, [width]);

  return (
    <>
      {state.isOpen
        ? navbarAtOpen(dispatch)
        : navbarAtClosed(state, dispatch, scrollPercent, circularScroll)}
      {children}
    </>
  );
}
