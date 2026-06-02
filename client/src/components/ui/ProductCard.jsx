import { useNavigate } from "react-router";

function ProductCard({ product, location, formatPrice, isInCart, addToCart, handleToast }) {

    const navigate = useNavigate();

    return (
        <article className='product-card-style' aria-label={`product-${product.id}`}>
          <div 
          className="product-card-main"
          onClick={() => navigate(`/product/${product.id}`, { state: location.pathname })}
          >
            <figure>
              <img className="bg-blur" src={product.image} alt="Backdrop Image" loading="lazy" />
              {product.image && <img src={product.image} alt={product.name || 'product image'} className='product-image' loading="lazy" />}
            </figure>

            <div className='title-style'>{product.name}</div>

            {location.pathname === "/shop" && product.purity && (
              <p className="purity">{product.purity}</p>
            )}

            {location.pathname === '/collections' && (
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="collection-star">
                    {i < product.rating ? "★" : "☆"}
                  </span>
                ))}
                
                <p className="reviews">({product.reviews} reviews)</p>
              </div>
            )}
          </div>

          <div className='footer-style'>
            <div className='price-style'>{formatPrice(product.price)}</div>
            <button
              type="button"
              id="product-btn"
              className={`cart-btn ${isInCart(product.id) ? "added" : ""}`}
              onClick={() => {
                addToCart && addToCart(product);
                handleToast();
              }}
            >
              {isInCart(product.id) ? "✔ In Cart" : "Add to cart"} 
            </button>
          </div>
        </article>
    )
}

export default ProductCard;