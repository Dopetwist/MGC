import Header from '../components/layout/Header';
import MarqueeBar from '../components/layout/MarqueeBar';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutStrip from '../components/home/AboutStrip';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Footer from '../components/layout/Footer';


function HomePage() {
    
  return (

    <div id="home-page">
        <Header />
        <MarqueeBar />
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <AboutStrip />
        <TestimonialsSection />
        <Footer />

    </div>
  )
}

export default HomePage;