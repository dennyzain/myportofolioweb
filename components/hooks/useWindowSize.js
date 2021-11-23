import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return [height, width];
};

export default useWindowSize;
