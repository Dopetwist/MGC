import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import { MoveRight, MoveLeft } from "lucide-react";


function OrderSummary({ total, cart, formatPrice }) {

  const navigate = useNavigate();

  return (

    <div className="order-summary">
      <p className="order-text">Order Summary</p>

      <div className="cart-order-container">
        <div className="summary-stats">
          <div className="subtotal cart-flex">
            <p className="order-left-text">Subtotal ({`${cart.length} ${cart.length > 1 ? "items" : "item"}`})</p>
            <p className="subtotal-amount">{formatPrice(total)}</p>
          </div>
          <div className="shipping cart-flex">
            <p className="order-left-text">Shipping</p>
            <p className="free">Free</p>
          </div>
        </div>

        <div className="total cart-flex">
          <p>Total:</p>
          <p className="total-amount">{formatPrice(total)}</p>
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
  )
}

export default OrderSummary;