import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProductGrid
 * Simple, responsive product grid used in the shop pages.
 * Props:
 * - products: array of product objects { id, title, price, image, description }
 * - columns: number of columns on large screens (default 4)
 * - onAddToCart: callback(product) when Add to Cart is clicked
 */

const ProductGrid = ({ products, columns, onAddToCart }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: '16px',
  }

  const cardStyle = {
    border: '1px solid #e6e6e6',
    borderRadius: 8,
    padding: 12,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }

  const imgStyle = {
    width: '100%',
    height: 160,
    objectFit: 'cover',
    borderRadius: 6,
    marginBottom: 8,
  }

  const titleStyle = { fontFamily: 'var(--poppins)', fontSize: 16, fontWeight: 600, marginBottom: 6 }
  const descStyle = { fontFamily: 'var(--inter)', fontSize: 13, color: '#555', marginBottom: 'auto' }
  const footerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }
  const priceStyle = { fontWeight: 700 }
  const btnStyle = {
    background: '#0D0D0D',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: 6,
    cursor: 'pointer',
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products found.</div>
  }

  return (
    <div style={gridStyle}>
      {products.map((p) => (
        <article key={p.id} style={cardStyle} aria-label={`product-${p.id}`}>
          {p.image && <img src={p.image} alt={p.name || 'product image'} style={imgStyle} />}
          <div style={titleStyle}>{p.name}</div>
          {p.description && <div style={descStyle}>{truncate(p.description, 120)}</div>}
          
          <div className="rating">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="collection-star">
                    {i < p.rating ? "★" : "☆"}
                </span>
            ))}
            <p className="reviews">({p.reviews} reviews)</p>
          </div>

          <div style={footerStyle}>
            <div style={priceStyle}>{formatPrice(p.price)}</div>
            <button
              type="button"
              style={btnStyle}
              onClick={() => onAddToCart && onAddToCart(p)}
            >
              Add to cart
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