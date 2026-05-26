import { MoveRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";


function FeaturedProducts() {

  const featuredPieces = [
    {
      id: 1,
      name: "Stylish Gold Bracelet",
      image: "/images/featured-products/stylish-gold-bracelet.png",
      karat: "18K",
      style: "Rose Gold",
      fit: "Adjustable",
      firstPrice: 149.99,
      discountPrice: 129.99
    },
    {
      id: 2,
      name: "Elegant Gold Earrings",
      image: "/images/featured-products/elegant-gold-earring.png",
      karat: "24K",
      style: "Yellow Gold",
      firstPrice: 179.99,
      discountPrice: 159.99
    },
    {
      id: 3,
      name: "Luxurious Gold Necklace",
      image: "/images/featured-products/luxurious-gold-necklace.jpg",
      karat: "24K",
      inchesRange: [18, 20],
      style: "Gold Plated",
      firstPrice: 299.99
    },
    {
      id: 4,
      name: "Elegant Gold Ring",
      image: "/images/featured-products/elegant-gold-ring.png",
      karat: "18K",
      sizeRange: [6, 10],
      style: "Yellow Gold",
      firstPrice: 199.99,
      discountPrice: 149.99
    }
  ];

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
                <img src={piece.image} alt={`${piece.name} Image`} />
              </figure>

              <div className="featured-details">
                <h3>{piece.name}</h3>
                <p className="karat-text">
                  {`${piece.karat} ${piece.style} ${piece.sizeRange ? `SIZE ${piece.sizeRange[0]}-${piece.sizeRange[1]}` : ''} ${piece.inchesRange ? `${piece.inchesRange[0]}-${piece.inchesRange[1]} inches` : ''} ${piece.fit || ''}`}
                </p>
                <div className="price-aspect">
                  <div className="price-box">
                    <p className="first-price">${piece.firstPrice.toFixed(2)}</p>
                    {piece.discountPrice && (
                      <p className="discount-price">${piece.discountPrice.toFixed(2)}</p>
                    )}
                  </div>

                  <button className="cart-btn">
                    +
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