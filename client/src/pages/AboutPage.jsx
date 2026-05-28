import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ShieldCheck, Sparkles, Handshake, Star, ArrowRight } from "lucide-react";
import { revealLeft, revealCards, revealBottom } from "../utils/reveal";

function AboutPage() {

    const navigate = useNavigate();

    useEffect(() => {
        revealLeft("#large-text");
        revealCards(".hero-card");
        revealBottom(".about-values, .about-story");
    }, []);

    return (

        <section id="about-page">
            <div className="page-header">
                <p className="eyebrow">About Misan Gold Collection</p>
                <h1 id="large-text">Gold buying, selling and custom jewellery with trust at every step.</h1>
                <p className="page-lead">
                    We help you turn gold into value with clear pricing, expert appraisal and dependable customer service — whether you are selling, buying or creating custom pieces.
                </p>
            </div>

            <div className="hero-highlights">
                <article className="hero-card">
                    <ShieldCheck size={32} className="hero-icon" />
                    <h3>Trusted valuations</h3>
                    <p>Professional purity testing and transparent offers based on current market rates.</p>
                </article>
                <article className="hero-card">
                    <Sparkles size={32} className="hero-icon" />
                    <h3>Premium craftsmanship</h3>
                    <p>Beautiful gold jewellery created for lasting luxury and everyday confidence.</p>
                </article>
                <article className="hero-card">
                    <Handshake size={32} className="hero-icon" />
                    <h3>Customer focus</h3>
                    <p>Personalised support from the first enquiry until delivery or collection.</p>
                </article>
            </div>

            <div className="about-grid">
                <div className="about-card">
                    <h2>Who we are</h2>
                    <p>
                        Misan Gold Collection is a Delta-based gold house specialising in gold selling, buying and quality handcrafted jewellery.
                        We combine deep market knowledge with a commitment to clear pricing and friendly, secure service.
                    </p>
                    <p>
                        Our goal is to make gold commerce easy and trustworthy for customers who want beautiful new pieces, fast payouts, or reliable gold resale support.
                    </p>
                </div>

                <div className="about-card">
                    <h2>What we do</h2>
                    <ul>
                        <li>Sell certified gold products and elegant curated collections</li>
                        <li>Buy old gold jewellery, coins and bullion with instant payment</li>
                        <li>Offer custom jewellery design, repairs and remakes</li>
                        <li>Provide expert appraisals, purity testing and market guidance</li>
                    </ul>
                </div>
            </div>

            <div className="about-values">
                <article className="value-item">
                    <Star size={24} className="value-icon" />
                    <h3>Our mission</h3>
                    <p>To give every customer a fair, transparent and professional gold trading experience.</p>
                </article>
                <article className="value-item">
                    <Star size={24} className="value-icon" />
                    <h3>Our vision</h3>
                    <p>To be the first choice in Nigeria for buying, selling and custom gold craftsmanship.</p>
                </article>
                <article className="value-item">
                    <Star size={24} className="value-icon" />
                    <h3>Our promise</h3>
                    <p>Honest pricing, secure handling and strong service from appraisal to delivery.</p>
                </article>
            </div>

            <div className="about-story">
                <h2>Why customers choose us</h2>
                <p>
                    Customers choose Misan Gold Collection because we make every step simple and transparent.
                    From immediate gold purchase offers to guided jewellery selections, we are committed to delivering value with respect and reliability.
                </p>
                <p>
                    Whether you want to invest in new gold pieces, sell gold you no longer wear, or create custom jewellery for a special moment,
                    our expert team is ready to assist with clarity and care.
                </p>
            </div>

            <div className="about-cta">
              <h1>Ready to Buy your desired gold jewelries?</h1>
              <button 
              className="about-shop-btn"
              onClick={() => navigate("/shop")}
              >
                Shop Now
                <ArrowRight size={26} className="about-shop-icon" />
              </button>
            </div>
        </section>
    )
}

export default AboutPage;