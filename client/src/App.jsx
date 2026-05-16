import { useState } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import MarqueeBar from './components/layout/MarqueeBar';

function App() {

  return (
    <>
      <Header />
      <MarqueeBar />
      <HeroSection />
    </>
  )
}

export default App;