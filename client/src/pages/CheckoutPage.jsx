import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ContactForm from "../components/checkout/ContactForm";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentForm from "../components/checkout/PaymentForm";
import PlaceOrder from "../components/checkout/PlaceOrder";
import OrderItems from "../components/checkout/OrderItems";


function CheckoutPage({ cart, setCart }) {

  const [ type, setType ] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const selectedProduct = location.state?.selectedProduct;
  const orderItems = selectedProduct
    ? [{ ...selectedProduct, quantity: selectedProduct.quantity || 1 }]
    : cart;

  const clearCart = () => {
    if (!selectedProduct) {
      setCart([]); // Clear cart from local storage only when checkout is using the cart
    }
  }

  const total = orderItems.reduce(
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
    
  return (

    <section id="checkout-page">
      <div className="checkout-box">
        <div className="first-section">

          <CheckoutSteps />

          <div className="checkout-form top">
            <ContactForm />
            
            <ShippingForm />
          </div>

          <PaymentForm
            total={total}
            setType={setType}
            type={type}
            formatPrice={formatPrice}
          />

          <PlaceOrder
            total={total}
            clearCart={clearCart}
            formatPrice={formatPrice}
          />
        </div>

        <div className="second-section">
          <h2 className="your-order">Your Order ({orderItems.length})</h2>

          <OrderItems
            total={total}
            orderItems={orderItems}
            formatPrice={formatPrice}
          />

          <div className="secure-box">
            <p>🔒 Your payment is encrypted and secured by SSL. We never store card details.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CheckoutPage;