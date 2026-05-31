import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

/**
 * ProductGrid
 * Simple, responsive product grid used in the shop pages.
 * Props:
 * - products: array of product objects { id, title, price, image, description }
 * - columns: number of columns on large screens (default 4)
 * - onAddToCart: callback(product) when Add to Cart is clicked
 */

const ProductGrid = ({ products, cart, addToCart, handleToast, location }) => {

  const navigate = useNavigate();

  console.log("The location is: ", location.pathname);

  // Function to check if product is already in cart
  const isInCart = (id) => {
      return cart.some(item => item.id === id);
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="no-products">No products found.</div>
  }

  return (
    <div className='product-grid-style'>
      {products.map((p) => (
        <article key={p.id} className='product-card-style' aria-label={`product-${p.id}`} onClick={() => navigate(`/product/${p.id}`, { state: location.pathname })}>
          {p.image && <img src={p.image} alt={p.name || 'product image'} className='product-image-style' loading="lazy" />}
          <div className='title-style'>{p.name}</div>
          {p.description && <div className='desc-style'>{truncate(p.description, 120)}</div>}

          {location.pathname === "/shop" && p.purity && (
            <p className="purity">{p.purity}</p>
          )}

          {location.pathname === '/collections' && (
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="collection-star">
                  {i < p.rating ? "★" : "☆"}
                </span>
              ))}
              
              <p className="reviews">({p.reviews} reviews)</p>
            </div>
          )}

          <div className='footer-style'>
            <div className='price-style'>{formatPrice(p.price)}</div>
            <button
              type="button"
              id="product-btn"
              className={`cart-btn ${isInCart(p.id) ? "added" : ""}`}
              onClick={() => {
                addToCart && addToCart(p);
                handleToast();
              }}
            >
              {isInCart(p.id) ? "✔ In Cart" : "Add to cart"} 
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

// Helper to truncate long descriptions
function truncate(text, maxLen) {
  if (!text) return ''
  return text.length > maxLen ? text.slice(0, maxLen - 1) + '…' : text
}

// Simple price formatter for USD.
function formatPrice(value) {
  if (value == null) return ''
  if (typeof value === 'number') {
    return value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
  }
  return String(value)
}

// PropTypes for type checking and default props
ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.number,
  onAddToCart: PropTypes.func,
}

ProductGrid.defaultProps = {
  products: [],
  columns: 4,
  onAddToCart: null,
}

export default ProductGrid;