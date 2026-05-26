import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import { MoveLeft, MoveRight, LockKeyhole, Truck, RefreshCcw } from "lucide-react";


function CartPage() {

  const navigate = useNavigate();
    
  return (

    <section id="cart-page">
      <div className="cart-main">
        <div className="cart-items">
            <div className="cart-header">
              <h1>Your Cart</h1>
              <p>3 items</p>
            </div>

            <div className="cart-items-container">
              <div className="cart-box">
                <h2>Order items are contained here</h2>
              </div>
            </div>
            
            <div className="cart-items-buttons">
              <button 
              className="back-to-shop"
              onClick={() => navigate("/shop")}
              >
                <MoveLeft size={16} />
                Continue Shopping
              </button>

              <button>
                Clear Cart
              </button>
            </div>
        </div>

        <div className="order-summary">
            <p className="order-text">Order Summary</p>

            <div className="order-container">
              <div className="summary-stats">
                <div className="subtotal cart-flex">
                  <p className="order-left-text">Subtotal(3 items)</p>
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

              <div className="action-buttons">
                <button
                className="proceed-checkout"
                onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                  <MoveRight size={20} />
                </button>

                <HashLink to={"/shop"} smooth className="continue-shopping">
                  <MoveLeft size={16} />
                  continue shopping
                </HashLink>
              </div>

              <div className="cart-icons-box">
                  <div className="secure">
                    <span className="cart-icon">🔒</span>
                    <p>Secured</p>
                  </div>

                  <div className="insured">
                    <span className="cart-icon">🚚</span>
                    <p>Insured</p>
                  </div>
                  <div className="reliable">
                    <span className="cart-icon">↩️</span>
                    <p>Reliable</p>
                  </div>
              </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default CartPage;