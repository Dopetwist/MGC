
function ContactForm() {

  return (

    <div id="contact-form">
      <form className="user-info">
        <p className="box-header">Contact Information</p>

        <div className="names">
          <div className="input-box">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Your first name" required />
          </div>
          <div className="input-box">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Your last name" required />
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email"  placeholder="Your email address" required />
        </div>

        <div className="input-box">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Your phone number" required />
        </div>
      </form>
    </div>
  )
}

export default ContactForm;