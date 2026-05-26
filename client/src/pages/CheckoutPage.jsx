import { useState } from "react";
import { useNavigate } from "react-router";
import { CreditCard, Landmark } from "lucide-react";


function CheckoutPage() {

  const [ type, setType ] = useState("");

  const navigate = useNavigate();
    
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
              onClick={() => setType("card")}
              >
                  <CreditCard size={24} />
                  Pay with Card
              </button>

              <button 
              className="bank-transfer payment-choice"
              onClick={() => setType("transfer")}
              >
                  <Landmark size={24} />
                  Bank Transfer
              </button>
            </div>

            {type === "card" && (
              <form className="card-form">
                <div className="input-box">
                    <label htmlFor="card-num">Card Number</label>
                    <input type="number" id="card-num" placeholder="5191 2312 3456 7890" required />
                </div>
                <div className="expiry input-box">
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input type="text" id="expiry-date" placeholder="00/00" required />
                </div>

                <div className="cvv input-box">
                    <label htmlFor="cvv-number">CVV</label>
                    <input type="number" id="cvv-number" placeholder="345" maxLength={3} required />
                </div>
              </form>
            )}

            {type === "transfer" && (
              <div className="transfer-container">
                <p>Please transfer the total amount of <span><strong>$4,350</strong></span> to the below account!</p>

                <div className="company-account">
                    <p><strong>Account Number:</strong> 0284954839</p>
                    <p><strong>Bank:</strong> Polaris Bank</p>
                    <p><strong>Account Name:</strong> Misan Gold Collection </p>
                </div>

                <p className="paid-paragraph">After a successful transfer, click the <strong>"Place Order"</strong> button.</p>
              </div>
            )}
          </div>

          <button 
          className="place-order"
          onClick={() => navigate("/confirmation")}
          >
            Place Order - $4,350
          </button>
        </div>

        <div className="second-section">
          <h2 className="your-order">Your Order (3)</h2>

          <div className="order-items">
            <div className="order-box">
              <div className="product-image">
                  <img src="/path/to/image" width={50} height={50} alt="" />
                  <div className="item-quantity">1</div>
              </div>

              <div className="product-contents">
                <div className="product-name">
                  <h2 className="heading-text">Earring</h2>

                  <p className="body-text">18K Gold</p>
                </div>

                <p className="body-text order-price">$3,800</p>
              </div>
            </div>

            <div className="order-box">
              <div className="product-image">
                <img src="/path/to/image" width={50} height={50} alt="" />
                <div className="item-quantity">2</div>
              </div>

              <div className="product-contents">
                <div className="product-name">
                  <h2 className="heading-text">Necklace</h2>

                  <p className="body-text">22K Gold</p>
                </div>

                <p className="body-text order-price">$550</p>
              </div>
            </div>

            <div className="summary-stats">
              <div className="subtotal cart-flex">
                <p className="order-left-text">Subtotal</p>
                <p className="subtotal-amount">$4,350</p>
              </div>
              <div className="shipping cart-flex">
                <p className="order-left-text">Shipping</p>
                <p className="free">Free</p>
              </div>
            </div>

            <div className="total cart-flex">
              <p>Total:</p>
              <p className="total-amount">$4,350</p>
            </div>
          </div>

          <div className="secure-box">
            <p>🔒 Your payment is encrypted and secured by SSL. We never store card details.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CheckoutPage;