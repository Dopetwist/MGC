import { useEffect } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { revealBottom } from "../utils/reveal";

function ContactPage() {

    useEffect(() => {
        revealBottom(".page-header");
    }, []);

    function handleSubmit() {
        return alert("Functionality not implemented yet!");
    }

    return (

        <section id="contact-page">
            <div className="page-header">
                <p className="eyebrow">Contact Misan Gold Collection</p>
                <h1>Reach out for gold selling, buying, custom orders and appraisals.</h1>
                <p className="page-lead">
                    Send a message, request a quote or visit our Delta store. <br /> We are ready to help with your gold enquiry.
                </p>
            </div>

            <div className="contact-layout">
                <div className="contact-details">
                    <div className="contact-card">
                        <MapPin size={26} className="contact-icon" />
                        <h3>Store location</h3>
                        <p>Warri, Delta State, Nigeria.</p>
                    </div>
                    <div className="contact-card">
                        <Mail size={26} className="contact-icon" />
                        <h3>Email</h3>
                        <p><a href="mailto:misandouglas@gmail.com">misandouglas@gmail.com</a></p>
                    </div>
                    <div className="contact-card">
                        <Phone size={26} className="contact-icon" />
                        <h3>Phone</h3>
                        <p><a href="tel:+2349055789610">+234 905 578 9610</a></p>
                    </div>
                    <div className="contact-card">
                        <Clock size={26} className="contact-icon" />
                        <h3>Opening hours</h3>
                        <p>Mon - Fri: 9am - 7pm</p>
                        <p>Sat: 10am - 4pm</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
                    <div className="form-row">
                        <label htmlFor="contact-name">Full name</label>
                        <input id="contact-name" type="text" className="form-input" placeholder="Your name" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="contact-email">Email address</label>
                        <input id="contact-email" type="email" className="form-input" placeholder="you@example.com" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="contact-subject">Subject</label>
                        <input id="contact-subject" type="text" className="form-input" placeholder="How can we help?" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="contact-message">Message</label>
                        <textarea id="contact-message" className="form-textarea" rows="6" placeholder="Tell us about your gold enquiry" required />
                    </div>
                    <button 
                    type="submit" 
                    className="form-submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage;