import { useNavigate } from "react-router";
import { MoveLeft } from "lucide-react";

function CartItem({ 
  cart, 
  decreaseQuantity, 
  increaseQuantity,
  handleToast,
  formatPrice,
  removeButtonToast,
  removeFromCart,
  clearCart 
  }) {

  const navigate = useNavigate();
    
  return (

    <div className="cart-items">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <p>{`${cart.length} ${cart.length > 1 ? "items" : "item"}`}</p>
      </div>

      <div className="cart-items-container">
        {cart.map((product) => (
          <div key={product.id} className="cart-box">
            <div className="product-image">
                <img src={product.image} width={100} height={100} alt={`${product.name} Image`} loading="lazy" />
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
  )
}

export default CartItem;