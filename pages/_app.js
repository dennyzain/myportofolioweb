import React, { useLayoutEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Provider } from '../components/context/useContext';
import Meta from '../components/molecules/Meta';
import '../styles/index.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  // const Font = new FontFaceObserver('monument_extendedregular', {});

  // useLayoutEffect(() => {
  //   (async () => {
  //     try {
  //       const font = await Font.load();
  //       console.log(font);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  return (
    <>
      <Provider>
        <Meta />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Provider>
    </>
  );
}

export default MyApp;
