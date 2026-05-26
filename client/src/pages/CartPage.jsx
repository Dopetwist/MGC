import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import { 
  MoveLeft, 
  MoveRight, 
  LockKeyhole, 
  Truck, 
  RefreshCcw, 
  ShoppingCart 
} from "lucide-react";


function CartPage({ cart, setCart }) {

  const navigate = useNavigate();

  const clearCart = () => {
      setCart([]); // Clear cart from local storage
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
        0
  );

  const roundedTotal = total.toFixed(2);
    
  return (

    <section id="cart-page">
      {total > 0 ? (
        <div className="cart-main">
          <div className="cart-items">
              <div className="cart-header">
                <h1>Your Cart</h1>
                <p>{`${cart.length} ${cart.length > 1 ? "items" : "item"}`}</p>
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

                <button
                className="clear-cart"
                onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
          </div>

          <div className="order-summary">
              <p className="order-text">Order Summary</p>

              <div className="cart-order-container">
                <div className="summary-stats">
                  <div className="subtotal cart-flex">
                    <p className="order-left-text">Subtotal ({`${cart.length} ${cart.length > 1 ? "items" : "item"}`})</p>
                    <p className="subtotal-amount">${roundedTotal}</p>
                  </div>
                  <div className="shipping cart-flex">
                    <p className="order-left-text">Shipping</p>
                    <p className="free">Free</p>
                  </div>
                </div>

                <div className="total cart-flex">
                  <p>Total:</p>
                  <p className="total-amount">${roundedTotal}</p>
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
      ) : <div className="empty-container">
            <ShoppingCart size={70} className="shopping-cart" />
            <h3 className="empty-cart"> 
                Your Cart is empty. <br /> Add new items to checkout! 
            </h3>
          </div>}
    </section>
  )
}

export default CartPage;