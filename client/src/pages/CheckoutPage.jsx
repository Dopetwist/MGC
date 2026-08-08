import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ContactForm from "../components/checkout/ContactForm";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentForm from "../components/checkout/PaymentForm";
import PlaceOrder from "../components/checkout/PlaceOrder";
import OrderItems from "../components/checkout/OrderItems";


function CheckoutPage({ cart, setCart, formData, setFormData, resetFormData }) {

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

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";

    if (type === "card") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
      if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
          newErrors.cardNumber = "Card number must be 16 digits";
      }
      if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";
      if (formData.cvv.length !== 3) {
          newErrors.cvv = "CVV must be 3 digits";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    localStorage.setItem('mgc-form-data', JSON.stringify(formData));
    resetFormData();
    navigate("/confirmation");
    clearCart();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "cardNumber") {
        formattedValue = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
    }

    // Format expiry date
    if (name === "expiryDate") {
        formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").slice(0, 5);
    }

    // Limit CVV to 3 digits
    if (name === "cvv") {
        formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
    }));

    // Clear error for this field
    if (errors[name]) {
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    }
  };
    
  return (

    <section id="checkout-page">
      <div className="checkout-box">
        <div className="first-section">

          <CheckoutSteps />

          <div className="checkout-form top">
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            
            <ShippingForm 
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          </div>

          <PaymentForm
            total={total}
            setType={setType}
            type={type}
            formData={formData}
            handlePaymentChange={handlePaymentChange}
            errors={errors}
            formatPrice={formatPrice}
          />

          <PlaceOrder
            total={total}
            handleSubmit={handleSubmit}
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