import { useEffect } from "react";
import { Award, ShieldCheck, Truck, RefreshCcw, Gem, Zap, Flower } from "lucide-react";
import { revealBottom } from "../../utils/reveal";


function AboutStrip() {

  useEffect(() => {
    revealBottom(".about-container");
  }, []);

  return (

    <div id="about-strip">
      <div className="about-container">
        <div className="about-texts">
            <p className="our-story">Our Story</p>
            <h1>Premium <span>Gold</span> for your daily fashion lifestyle</h1>
            <p className="about-sub-text">We source only the finest gold, certified to the highest standards. Each piece in our collection is handcrafted by master artisans with decades of experience creating heirloom-quality jewellery.</p>

            <div className="about-inner-container">
              <div className="about-inner-box">
                <div className="item-box">
                  <Award size={30} className="item-icon" />
                </div>
                <div className="item-box-texts">
                  <h2>Certified Gold</h2>
                  <p>Hallmarked & authenticated</p>
                </div>
              </div>
              <div className="about-inner-box">
                <div className="item-box">
                  <Truck size={30} className="item-icon" />
                </div>
                <div className="item-box-texts">
                  <h2>Insured Delivery</h2>
                  <p>Nationwide & international</p>
                </div>
              </div>
              <div className="about-inner-box">
                <div className="item-box">
                  <ShieldCheck size={30} className="item-icon" />
                </div>
                <div className="item-box-texts">
                  <h2>Lifetime Warranty</h2>
                  <p>On all craftsmanship</p>
                </div>
              </div>
              <div className="about-inner-box">
                <div className="item-box">
                  <RefreshCcw size={30} className="item-icon" />
                </div>
                <div className="item-box-texts">
                  <h2>Easy Returns</h2>
                  <p>30-day no-hassle policy</p>
                </div>
              </div>
            </div>
        </div>

        <div className="about-images">
          <div className="figure-box figure1">
            <Gem size={50} className="figure-icon" />
          </div>
          <div className="figure-box figure2">
            <Flower size={50} className="figure-icon" />
          </div>
          <div className="figure-box figure3">
            <Zap size={50} className="figure-icon" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutStrip;