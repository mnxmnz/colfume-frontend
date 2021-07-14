import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { MainWrap } from '../components/index';

function Home() {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWindowSize(JSON.parse(window.localStorage.getItem('size')));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem('size', JSON.stringify(windowSize));
  }, [windowSize]);

  const handleResize = () => {
    return setWindowSize(window.innerWidth);
  };

  const isMobile = windowSize <= 375 ? true : false;

  return <MainWrap isMobile={isMobile} />;
}

export default Home;
