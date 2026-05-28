import { useState } from "react";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import Toast from "../components/ui/Toast";
import { 
  MoveLeft, 
  MoveRight, 
  LockKeyhole, 
  Truck, 
  RefreshCcw, 
  ShoppingCart 
} from "lucide-react";


function CartPage({ cart, setCart }) {

  const [ toast, setToast ] = useState(null);

  const navigate = useNavigate();

  const clearCart = () => {
      setCart([]); // Clear cart from local storage
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleToast = () => {
      setToast({
          message: "✔ Product quantity updated successfully!",
          type: "success"
      })
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
        0
  );

  // Simple price formatter for USD.
  function formatPrice(value) {
    if (value == null) return ''
    if (typeof value === 'number') {
      return value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
    }
    return String(value)
  }

  // Remove item from cart and show toast
  const removeFromCart = (id) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const removeButtonToast = () => {
      setToast({
          message: "✔ Product removed from cart!",
          type: "success"
      })
  }

  // Increase quantity of items in cart
    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity of items in cart
    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // remove if quantity = 0
        );
    };
    
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
                {cart.map((product) => (
                  <div key={product.id} className="cart-box">
                    <div className="product-image">
                        <img src={product.image} width={100} height={100} alt={`${product.name} Image`} />
                    </div>

                    <div className="product-contents">
                      <div className="product-name">
                          <h2 className="heading-text">{product.name}</h2>

                          <p className="cart-product-description">{product.description}</p>

                          <p className="cart-purity-text">{product.purity}</p>

                          <div id="quantity-box">
                            <div className="quantity-btns">
                                <button 
                                id="decrease"
                                onClick={() => {
                                    decreaseQuantity(product.id);
                                    handleToast();
                                }}
                                disabled={product.quantity === 1} // Disable button if quantity is 1
                                >
                                    -
                                </button>

                                <p className="body-text product-quantity">{product.quantity}</p>

                                <button 
                                id="increase"
                                onClick={() => {
                                    increaseQuantity(product.id);
                                    handleToast();
                                }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                      </div>

                      <p className="body-text order-price">{formatPrice(product.price * product.quantity)}</p>

                      <p 
                      className="remove-item" 
                      onClick={() => {
                          removeFromCart(product.id);
                          removeButtonToast();
                      }}>
                          Remove Item
                      </p>
                    </div>
                  </div>
                ))}
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
        </div>
      ) : <div className="empty-container">
            <ShoppingCart size={70} className="shopping-cart" />
            <h3 className="empty-cart"> 
                Your Cart is empty. <br /> Add new items to checkout! 
            </h3>
          </div>}

        {/* Render Toast */}
        {toast && (
          <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
          />
        )}
    </section>
  )
}

export default CartPage;