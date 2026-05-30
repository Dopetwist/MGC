import { useEffect } from "react";
import { useNavigate } from "react-router";
import { revealBottom } from "../../utils/reveal";

function HeroSection() {

    const navigate = useNavigate();

    useEffect(() => {
      revealBottom(".gold-image");
    }, []);

    return (

        <section id="hero">
            {/* <div className="mgc-box">
                <figure>
                  <img src="/images/MGC-logo.png" alt="Misan Gold Collection Logo" />
                </figure>

                <h1>Misan <span>Gold</span> Collection</h1>
            </div> */}

            <div className="hero-box">
                <div className="hero-texts">
                    <div className="new-collection-container">
                      <p className="new-collection-text">New Collection {new Date().getFullYear()} </p><div className="hero-line"></div>
                    </div>

                    <h2>Wear the <span>Timeless</span> in Gold</h2>
                    <p className="hero-sub-text">Experience the epitome of luxury with our exquisite range of 18K and 22K gold jewelries. Each piece is crafted to perfection and quality. Indulge in the brilliance of Misan Gold and elevate your jewelry game to new heights.</p>

                    <div className="hero-buttons">
                        <button 
                        className="explore-btn"
                        onClick={() => navigate("/collections")}
                        >
                          Explore Collection
                        </button>
                        <button 
                        className="sell-btn"
                        onClick={() => navigate("/contact")}
                        >
                          Sell Your Gold
                        </button>
                    </div>

                    <div id="stats">
                      <div className="stats-box">
                        <h2>1,400+</h2>
                        <p>Pieces Sold</p>
                      </div>
                      <div className="stats-box">
                        <h2>18K–22K</h2>
                        <p>Pure Gold</p>
                      </div>
                      <div className="stats-box">
                        <h2>5 Yrs</h2>
                        <p>Trusted by Clients</p>
                      </div>
                    </div>
                </div>

                <div className="gold-image">
                    <div className="gold-image-box">
                        <figure className="gold-image-figure1">
                          <img src="/images/hero-mgc.png" alt="Hero Top Image" loading="lazy" />
                        </figure>

                        <figure className="gold-image-figure2">
                          <img src="/images/Pendant1.png" alt="Hero Bottom Image" loading="lazy" />
                        </figure>
                    </div>

                    <p>Luxury Jewelry</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;