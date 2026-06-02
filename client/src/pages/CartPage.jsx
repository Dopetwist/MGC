import { useState } from "react";
import { useNavigate } from "react-router";
import Toast from "../components/ui/Toast";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import { 
  MoveLeft,
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
      setToast({
          message: "✔ All items cleared from cart!",
          type: "success"
      })
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
          <CartItem
            cart={cart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            handleToast={handleToast}
            formatPrice={formatPrice}
            removeButtonToast={removeButtonToast}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />

          <OrderSummary
            total={total}
            cart={cart}
            formatPrice={formatPrice}
          />
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