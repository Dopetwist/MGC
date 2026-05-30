import { useEffect } from "react";
import { MoveRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { revealCards } from "../../utils/reveal";


function FeaturedProducts({ cart, addToCart, setToast }) {

  const featuredPieces = [
    {
      id: "NEC011",
      name: "Stylish Money Bag Pendant Necklace",
      description: "Luxury money bag pendant necklace designed for bold styling.",
      image: "/images/necklaces/N11.png",
      purity: "22K Gold",
      category: "Necklaces",
      availability: "In Stock",
      fit: "Adjustable",
      price: 1410,
      discountPrice: 1325
    },
    {
      id: "GB001",
      name: "Top Tier Gold Bar",
      description: "Quality 24K Gold Bar for great investment.",
      image: "/images/GB1.PNG",
      purity: "24K",
      category: "Necklaces",
      availability: "In Stock",
      style: "Yellow Gold",
      price: 2400,
      discountPrice: 2180
    },
    {
      id: "NEC004",
      name: "Customized Gold Pendant",
      description: "Sleek custom gold pendant. Luxury in fashion.",
      image: "/images/necklaces/N4.png",
      category: "Necklaces",
      availability: "In Stock",
      purity: "22K",
      style: "Gold Plated",
      price: 1940
    },
    {
      id: "BRC001",
      name: "Cuban Link Bracelet",
      description: "Luxury Cuban link gold bracelet with polished shine.",
      image: "/images/bracelets/B1.png",
      purity: "22K",
      category: "Bracelets",
      availability: "In Stock",
      sizeRange: [6, 10],
      style: "Yellow Gold",
      price: 1530,
      discountPrice: 1480
    }
  ];

  useEffect(() => {
    revealCards(".featured-card");
  }, []);

  const handleToast = () => {
      setToast({
          message: "✔ Cart updated successfully!",
          type: "success"
      })
  }

  // Simple price formatter for USD.
  function formatPrice(value) {
    if (value == null) return ''
    if (typeof value === 'number') {
      return value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
    }
    return String(value)
  }

  // Function to check if product is already in cart
  const isInCart = (id) => {
      return cart.some(item => item.id === id);
  }

  return (

    <section id="featured-products">
        <p className="hand-picked">Hand picked</p>

        <div className="featured-flex">
          <p className="featured-pieces">Featured <span>Pieces</span></p>

          <HashLink to={"/shop"} smooth className="shop-all-link">
            Shop All <MoveRight size={16} />
          </HashLink>
        </div>

        <div className="featured-container">
          {featuredPieces.map(piece => (
            <div key={piece.id} className="featured-card">
              <figure>
                <img src={piece.image} alt={`${piece.name} Image`} loading="lazy" />
              </figure>

              <div className="featured-details">
                <h3>{piece.name}</h3>
                <p className="karat-text">
                  {`${piece.purity} ${piece.style || ''} ${piece.sizeRange ? `SIZE ${piece.sizeRange[0]}-${piece.sizeRange[1]}` : ''} ${piece.inchesRange ? `${piece.inchesRange[0]}-${piece.inchesRange[1]} inches` : ''} ${piece.fit || ''}`}
                </p>
                <div className="price-aspect">
                  <div className="price-box">
                    <p className="first-price">{formatPrice(piece.price)}</p>
                    {piece.discountPrice && (
                      <p className="discount-price">{formatPrice(piece.discountPrice)}</p>
                    )}
                  </div>

                  <button 
                  id="featured-add-btn"
                  className={`cart-btn ${isInCart(piece.id) ? "added" : ""}`}
                  onClick={() => {
                    addToCart && addToCart(piece);
                    handleToast();
                  }}
                  >
                    {isInCart(piece.id) ? "✔ In Cart" : "+"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default FeaturedProducts;