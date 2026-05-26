import { useNavigate } from "react-router";

function OrderConfirmationPage() {

  const navigate = useNavigate();
    
  return (

    <div id="order-confirmation-page">
      <div className="order-success">
        <div className="order-container">
          <p className="payment-header heading-text">Payment Successful!</p>

          <div className="checkmark">
            <p>✓</p>
          </div>

          <div className="payment-description">
            <p id="thank-you-text">Thank you, <strong>Adaeze</strong> for your Order!</p>

            <p className="payment-sub-text">Your order has been received and is being processed. You'll receive a confirmation email shortly.</p>

            <p className="order-id">Order ID: #MGC39048</p>
          </div>

          <button
          className="shop-back-btn"
          onClick={() => navigate("/collections")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmationPage;