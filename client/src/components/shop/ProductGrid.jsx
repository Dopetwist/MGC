import PropTypes from 'prop-types';
import ProductCard from '../ui/ProductCard';

/**
 * ProductGrid
 * Simple, responsive product grid used in the shop pages.
 * Props:
 * - products: array of product objects { id, title, price, image, description }
 * - columns: number of columns on large screens (default 4)
 * - onAddToCart: callback(product) when Add to Cart is clicked
 */

const ProductGrid = ({ products, cart, addToCart, handleToast, location }) => {

  // Function to check if product is already in cart
  const isInCart = (id) => {
      return cart.some(item => item.id === id);
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="no-products">No products found.</div>
  }

  return (
    <div className='product-grid-style'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          location={location}
          formatPrice={formatPrice}
          isInCart={isInCart}
          addToCart={addToCart}
          handleToast={handleToast}
        />
      ))}
    </div>
  )
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