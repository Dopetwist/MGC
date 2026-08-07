
function ContactForm({ formData, handleChange, errors }) {

  return (

    <div id="contact-form">
      <form className="user-info">
        <p className="box-header">Contact Information</p>

        <div className="names">
          <div className="input-box">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "input-error" : ""}
            />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "input-error" : ""}
            />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""} 
          />
            {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="input-box">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "input-error" : ""}
          />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
      </form>
    </div>
  )
}

export default ContactForm;