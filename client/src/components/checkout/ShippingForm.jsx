
function ShippingForm() {

  return (

    <div id="shipping-form">
      <form className="delivery-info">
        <p className="box-header">Delivery Address</p>

        <div className="input-box">
          <label htmlFor="address">Street Address</label>
          <input type="text" id="address" placeholder="Enter your shipping address" required />
        </div>

        <div className="state-city">
          <div className="input-box">
            <label htmlFor="state">State</label>
            <select id="state" required>
              <option value="">Select your state</option>
              <option value="abuja">Abuja</option>
              <option value="lagos">Lagos</option>
              <option value="rivers">Rivers</option>
              <option value="kano">Kano</option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Your city" required />
          </div>
        </div>
      </form>

    </div>
  )
}

export default ShippingForm;