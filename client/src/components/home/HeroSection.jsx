
function HeroSection() {

    return (

        <section id="hero">
            <div className="mgc-box">
                <figure>
                  <img src="/path/to/logo.png" alt="Misan Gold Collection Logo" />
                </figure>

                <h1>Misan Gold Collection</h1>
            </div>

            <div className="hero-box">
                <div className="hero-texts">
                    <div className="new-collection-container">
                      <p className="new-collection-text">New Collection {new Date().getFullYear()} </p><div className="hero-line"></div>
                    </div>

                    <h2>Wear the <br /> <span>Timeless</span> <br /> in Gold</h2>
                    <p className="hero-sub-text">Experience the epitome of luxury with our exquisite range of 18K and 24K gold jewelries. Each piece is crafted to perfection and quality. Indulge in the brilliance of Misan Gold and elevate your jewelry game to new heights.</p>

                    <div className="hero-buttons">
                        <button className="explore-btn">Explore Collection</button>
                        <button className="sell-btn">Sell Your Gold</button>
                    </div>
                </div>

                <div className="gold-image">
                    <div className="gold-image-box">
                        <figure>
                          <img src="/path/to/gold.png" alt="Hero Gold Image" />
                        </figure>

                        <figure>
                          <img src="/path/to/gold.png" alt="Hero Gold Image" />
                        </figure>
                    </div>

                    <p>Luxury Jewelry</p>
                </div>
            </div>

            <div className="stats">
              <div className="stats-box">
                <h2>1,400+</h2>
                <p>Pieces Sold</p>
              </div>
              <div className="stats-box">
                <h2>18K–24K</h2>
                <p>Pure Gold</p>
              </div>
              <div className="stats-box">
                <h2>5 Yrs</h2>
                <p>Trusted by Clients</p>
              </div>
            </div>
          

        </section>
    )
}

export default HeroSection;