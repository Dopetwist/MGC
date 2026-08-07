
function ShippingForm({ formData, handleChange, errors }) {

  return (

    <div id="shipping-form">
      <form className="delivery-info">
        <p className="box-header">Delivery Address</p>

        <div className="input-box">
          <label htmlFor="address">Street Address</label>
          <input 
            type="text" 
            id="address"
            name="address"
            placeholder="Enter your shipping address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "input-error" : ""}
          />
            {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="state-city">
          <div className="input-box">
            <label htmlFor="state">State</label>
            <select 
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={errors.state ? "input-error" : ""}
            >
              <option value="">Select your state</option>
              <option value="abuja">Abuja</option>
              <option value="lagos">Lagos</option>
              <option value="rivers">Rivers</option>
              <option value="kano">Kano</option>
            </select>
              {errors.state && <span className="error-message">{errors.state}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city"
              name="city"
              placeholder="Your city"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? "input-error" : ""}
            />
              {errors.city && <span className="error-message">{errors.city}</span>}
          </div>
        </div>
      </form>

    </div>
  )
}

export default ShippingForm;