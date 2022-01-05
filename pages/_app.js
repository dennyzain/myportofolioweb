/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Meta from '../components/molecules/Meta';
import Loading from '../components/molecules/Loading';
import '../styles/index.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Meta />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
