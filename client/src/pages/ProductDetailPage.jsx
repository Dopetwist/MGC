import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { Heart, MoveRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Toast from "../components/ui/Toast";

function ProductDetailPage({ cart, setCart, addToCart, allProducts }) {

  const { id } = useParams();

  const [ toast, setToast ] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const path = location.state;

  const product = allProducts.find(
    (item) => item.id === id
  );

  const cartItem = cart.find(
    (item) => item.id === id
  );

  const quantity = cartItem ? cartItem.quantity : 0;

  if (!product) {
    return <h2>Product not Found!</h2>;
  }

  const handleToast = () => {
      setToast({
          message: "✔ Product quantity updated successfully!",
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

  // Function to check if product is already in cart
  const isInCart = (id) => {
      return cart.some(item => item.id === id);
  }

   // Simple price formatter for USD.
  function formatPrice(value) {
    if (value == null) return ''
    if (typeof value === 'number') {
      return value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
    }
    return String(value)
  }
    
  return (

    <section id="product-detail-page">
      <p className="details-top-path">
        {path === "/collections" ? "collections" : "shop"} 
        <MoveRight size={20} /> 
        <HashLink to={`${path}#${product.category}`.toLowerCase()} smooth>
          {product.category}
        </HashLink> 
        <MoveRight size={20} /> 
        <span>{product.name}</span>
      </p>
      <div className="product-details-container">
        <div className="product-detail-image">
          <figure>
            <img src={product.image} alt={`${product.name} Image`} />
          </figure>
        </div>
        <div className="product-details">
          <div className="name-price-section">
            <h1>{product.name}</h1>
            <p>{product.purity}</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="collection-star">
                  {i < product.rating ? "★" : "☆"}
                </span>
              ))}
              
              <span className="reviews">({product.reviews} reviews)</span>
            </div>
            <div className="price-section">
              <p>{formatPrice(product.price)}</p>
            </div>
            <p className="in-stock">{product.availability}</p>
          </div>

          <div className="action-btns-section">
            <div className="product-description-section">
              <p>{product.description}</p>
            </div>

            <div className="product-all-btns">
              <div className="first-product-btns">
                <div className="product-quantity-btns">
                  <button 
                    id="decrease"
                    type="button"
                    onClick={() => {
                        decreaseQuantity(product.id);
                        handleToast();
                    }}
                    disabled={quantity === 0} // Disable button if quantity is 0
                    >
                        -
                    </button>

                    <p className="body-text">{quantity}</p>

                    <button 
                    id="increase"
                    onClick={() => {
                        increaseQuantity(product.id);
                        handleToast();
                    }}
                    disabled={!cartItem} // Disable button if product is not in cart
                    >
                        +
                    </button>
                </div>
                <div className="product-add-to-cart">
                  <button
                  className={`product-cart-btn ${isInCart(product.id) ? "added" : ""}`}
                  onClick={() => {
                    addToCart && addToCart(product);
                    handleToast();
                  }}
                  >
                    {isInCart(product.id) ? "✔ In Cart" : "Add to Cart"}
                  </button>
                </div>
                <div className="favorite-btn">
                  <Heart size={24} />
                </div>
              </div>
              <div className="buy-now-btn">
                <button
                onClick={() => navigate("/checkout", { state: { selectedProduct: product } })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default ProductDetailPage;