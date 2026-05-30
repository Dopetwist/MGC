import { useState } from 'react';
import Header from '../components/layout/Header';
import MarqueeBar from '../components/layout/MarqueeBar';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutStrip from '../components/home/AboutStrip';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Footer from '../components/layout/Footer';
import Chat from '../components/animation/Chat';
import Toast from '../components/ui/Toast';


function HomePage({ cart, addToCart }) {

  const [ toast, setToast ] = useState(null);
    
  return (

    <div id="home-page">
        <Header cart={cart} />
        <MarqueeBar />
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts cart={cart} addToCart={addToCart} setToast={setToast} />
        <AboutStrip />
        <TestimonialsSection />
        <Footer />
        <Chat />

        {/* Render Toast */}
      {toast && (
        <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default HomePage;