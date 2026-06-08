import { SocialIcon } from 'react-social-icons';
import { MapPin, Mail, Phone } from 'lucide-react';


function Footer() {

  return (

    <footer id="footer">
      <div className="footer-container">
        <div className="footer-main-box">
          <h2 className="footer-business-name">Mylux Gold Collection</h2>
          <p className="footer-description">Premium gold jewellery, crafted with precision and passion. <br /> Proudly Nigerian, globally inspired.</p>

          <div className="footer-contact-details">
            <p className="footer-contact-us">Contact Us:</p>
            <p><MapPin size={24} className='footer-icon' /> 123 Silicon Street, Lagos, Nigeria.</p>
            <p><Mail size={24} className='footer-icon' /> myluxgoldcollection@gmail.com</p>
            <p><Phone size={24} className='footer-icon' /> +234 123 456 7890</p>

            <p className="follow">Follow us on:</p>
            <div className="social-icons">
              <SocialIcon url="https://www.instagram.com/myluxgoldcollection" bgColor="#c79f33" className="social-icon" style={{width: "2rem", height: "2rem"}} label="Our Instagram" target="_blank" />
              <SocialIcon url="https://www.tiktok.com/myluxgoldcollection" bgColor="#c79f33" className="social-icon" style={{width: "2rem", height: "2rem"}} label="Our TikTok" target="_blank" />
              <SocialIcon url="https://www.facebook.com/myluxgoldcollection" bgColor="#c79f33" className="social-icon" style={{width: "2rem", height: "2rem"}} label="Our Facebook" target="_blank" />
            </div>
          </div>
        </div>

       
        <div className="footer-links">
          <div className="footer-link-box">
            <h3>Shop</h3>
            <ul>
              <li>All Jewellery</li>
              <li>Rings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Earrings</li>
            </ul>
          </div>

          <div className="footer-link-box">
            <h3>Services</h3>
            <ul>
              <li>Buy Gold</li>
              <li>Sell Gold</li>
              <li>Custom Orders</li>
              <li>Repairs & Maintenance</li>
            </ul>
          </div>
          <div className="footer-link-box">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright-section">
        <p>&copy; { new Date().getFullYear() } MyLux Gold Collection. All rights reserved.</p>
        
        <div className="bottom-links">
          <a href="/privacy-policy" className="bottom-link">Privacy Policy</a>
          <a href="/terms" className="bottom-link">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;