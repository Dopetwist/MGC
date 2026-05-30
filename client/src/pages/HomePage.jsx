import Header from '../components/layout/Header';
import MarqueeBar from '../components/layout/MarqueeBar';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutStrip from '../components/home/AboutStrip';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Footer from '../components/layout/Footer';
import Chat from '../components/animation/Chat';


function HomePage({ cart, addToCart }) {
    
  return (

    <div id="home-page">
        <Header cart={cart} />
        <MarqueeBar />
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts cart={cart} addToCart={addToCart} />
        <AboutStrip />
        <TestimonialsSection />
        <Footer />
        <Chat />
    </div>
  )
}

export default HomePage;