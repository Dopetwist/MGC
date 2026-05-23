import { HashLink } from "react-router-hash-link";
import { MoveLeft } from "lucide-react";
import jewelryCollections from "../data/products";
import ProductGrid from "../components/shop/ProductGrid";


function CollectionsPage() {
    
  return (

    <section id="collections-page">
      <HashLink to={"/"} smooth className="collections-home">
        <MoveLeft />
        Home
      </HashLink>
      <div className="collections-container">
        <h2 className="collections-title">Our Collections</h2><div className="hero-line"></div>

        {/* <div className="collections-grid">
          <div className="rings-container">
            <h3>Rings</h3>

            {jewelryCollections.rings.map((product) => (
              <div key={product.id} className="collection-item">
                <img src={product.image} alt={product.name} />
                <div className="collection-info">
                  <h2>{product.name}</h2>
                  <p className="collection-description">{product.description}</p>
                  <p className="collection-price">${product.price.toFixed(2)}</p>

                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        {i < product.rating ? "★" : "☆"}
                      </span>
                    ))}

                    <p className="reviews">({product.reviews} reviews)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="necklaces-container">
            <h3>Necklaces</h3>
            {jewelryCollections.necklaces.map((product) => (
              <div key={product.id} className="collection-item">
                <img src={product.image} alt={product.name} />
                <div className="collection-info">
                  <h2>{product.name}</h2>
                  <p className="collection-description">{product.description}</p>
                  <p className="collection-price">${product.price.toFixed(2)}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        {i < product.rating ? "★" : "☆"}
                      </span>
                    ))}

                    <p className="reviews">({product.reviews} reviews)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bracelets-container">
            <h3>Bracelets</h3>
            {jewelryCollections.bracelets.map((product) => (
              <div key={product.id} className="collection-item">
                <img src={product.image} alt={product.name} />
                <div className="collection-info">
                  <h2>{product.name}</h2>
                  <p className="collection-description">{product.description}</p>
                  <p className="collection-price">${product.price.toFixed(2)}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        {i < product.rating ? "★" : "☆"}
                      </span>
                    ))}
                    <p className="reviews">({product.reviews} reviews)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="earrings-container">
            <h3>Earrings</h3>
            {jewelryCollections.earrings.map((product) => (
              <div key={product.id} className="collection-item">
                <img src={product.image} alt={product.name} />
                <div className="collection-info">
                  <h2>{product.name}</h2>
                  <p className="collection-description">{product.description}</p>
                  <p className="collection-price">${product.price.toFixed(2)}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        {i < product.rating ? "★" : "☆"}
                      </span>
                    ))}
                    <p className="reviews">({product.reviews} reviews)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="rings-container collection-item">
          <div className="collection-header">
            <h3>Rings</h3>
            <div className="hero-line"></div>
          </div>
          <ProductGrid products={jewelryCollections.rings} columns={4} />
        </div>

        <div className="necklaces-container collection-item">
          <div className="collection-header">
            <h3>Necklaces</h3>
            <div className="hero-line"></div>
          </div>
          <ProductGrid products={jewelryCollections.necklaces} columns={4} />
        </div>

        <div className="bracelets-container collection-item">
          <div className="collection-header">
            <h3>Bracelets</h3>
            <div className="hero-line"></div>
          </div>
          <ProductGrid products={jewelryCollections.bracelets} columns={4} />
        </div>

        <div className="earrings-container collection-item">
          <div className="collection-header">
            <h3>Earrings</h3>
            <div className="hero-line"></div>
          </div>
          <ProductGrid products={jewelryCollections.earrings} columns={4} />
        </div>
      </div>
    </section>
  )
}

export default CollectionsPage;