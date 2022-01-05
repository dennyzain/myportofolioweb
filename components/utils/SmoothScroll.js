import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from 'framer-motion';

function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    // eslint-disable-next-line no-unused-expressions
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="w-full fixed left-0 top-0 overflow-hidden  will-change-transform"
      >
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
}

export default SmoothScroll;
