import { CreditCard, Landmark } from "lucide-react";


function CheckoutPage() {
    
  return (

    <section id="checkout-page">
      <div className="checkout-box">
        <div className="first-section">
          <div className="checkout-processes">
            <div className="process-box process1">
              <div className="process-circle">✓</div>
              <p>Cart</p>
            </div>
            <div className="process-box process2">
              <div className="process-circle">2</div>
              <p>Details</p>
            </div>
            <div className="process-box process3">
              <div className="process-circle">3</div>
              <p>Payment</p>
            </div>
            <div className="process-box process4">
              <div className="process-circle">4</div>
              <p>Confirm</p>
            </div>
          </div>

          <form className="checkout-form top">
              <div className="user-info">
                <p className="box-header">Contact Information</p>

                <div className="names">
                  <div className="input-box">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="input-box">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="input-box">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email"  placeholder="Your email address" />
                </div>

                <div className="input-box">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Your phone number" />
                </div>
              </div>
              
              <div className="delivery-info">
                <p className="box-header">Delivery Address</p>

                <div className="input-box">
                  <label htmlFor="address">Street Address</label>
                  <input type="text" id="address" placeholder="Enter your shipping address" />
                </div>

                <div className="state-city">
                  <div className="input-box">
                    <label htmlFor="state">State</label>
                    <select id="state">
                      <option value="">Select your state</option>
                      <option value="abuja">Abuja</option>
                      <option value="lagos">Lagos</option>
                      <option value="rivers">Rivers</option>
                      <option value="kano">Kano</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Your city" />
                  </div>
                </div>
              </div>
          </form>

          <div className="payment-info top">
            <p className="payment-method box-header">Payment Method</p>

            <div className="payment-options">
              <button
              className="pay-card payment-choice"
              >
                  <CreditCard size={24} />
                  Pay with Card
              </button>

              <button 
              className="bank-transfer payment-choice"
              >
                  <Landmark size={24} />
                  Bank Transfer
              </button>
            </div>
          </div>

          <button className="place-order">Place Order - $4,350</button>
        </div>

        <div className="second-section">
          <h2 className="heading-text">Your Order (3)</h2>

          <div className="order-items">
            {/* Order items will be displayed here */}
          </div>
        </div>
      </div>

    </section>
  )
}

export default CheckoutPage;