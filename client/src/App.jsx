import { useState } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import MarqueeBar from './components/layout/MarqueeBar';
import CategoryGrid from './components/home/CategoryGrid';
import FeaturedProducts from './components/home/FeaturedProducts';
import AboutStrip from './components/home/AboutStrip';
import TestimonialsSection from './components/home/TestimonialsSection';

function App() {

  return (
    <>
      <Header />
      <MarqueeBar />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutStrip />
      <TestimonialsSection />
    </>
  )
}

export default App;