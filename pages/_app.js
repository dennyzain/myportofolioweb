import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Meta from '../components/molecules/Meta';
import '../styles/index.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <Meta />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
