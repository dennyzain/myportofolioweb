import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Provider } from '../components/context/useContext';
import Meta from '../components/molecules/Meta';
import '../styles/index.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Provider>
        <AnimatePresence exitBeforeEnter>
          <Meta />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Provider>
    </>
  );
}

export default MyApp;
