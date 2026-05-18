import { useState } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import MarqueeBar from './components/layout/MarqueeBar';
import CategoryGrid from './components/home/CategoryGrid';

function App() {

  return (
    <>
      <Header />
      <MarqueeBar />
      <HeroSection />
      <CategoryGrid />
    </>
  )
}

export default App;