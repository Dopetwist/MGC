import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { MoveLeft } from "lucide-react";
import jewelryCollections from "../data/products";
import ProductGrid from "../components/shop/ProductGrid";
import Toast from "../components/ui/Toast";


function CollectionsPage({ cart, addToCart }) {

  const [ toast, setToast ] = useState(null);

  const handleToast = () => {
      setToast({
          message: "✔ Cart updated successfully!",
          type: "success"
      })
  }
    
  return (

    <section id="collections-page">
      <HashLink to={"/"} smooth className="collections-home">
        <MoveLeft />
        Home
      </HashLink>
      <div className="collections-container">
        <h2 className="collections-title">Our Collections</h2><div className="hero-line"></div>

        <div className="necklaces-container collection-item">
          <div className="collection-header">
            <h3>Necklaces</h3>
            <div className="hero-line"></div>
          </div>
          <ProductGrid 
            cart={cart}
            addToCart={addToCart}
            handleToast={handleToast}
            products={jewelryCollections.necklaces}
            />
        </div>

        <div className="earrings-container collection-item">
          <div className="collection-header">
            <h3>Earrings</h3>
            <div className="hero-line"></div>
          </div>
          <ProductGrid 
            cart={cart}
            addToCart={addToCart}
            handleToast={handleToast}
            products={jewelryCollections.earrings}
          />
        </div>

        <div className="bracelets-container collection-item">
          <div className="collection-header">
            <h3>Bracelets</h3>
            <div className="hero-line"></div>
          </div>
          <ProductGrid 
            cart={cart}
            addToCart={addToCart}
            handleToast={handleToast}
            products={jewelryCollections.bracelets}
          />
        </div>
      </div>

      <div className="rings-container collection-item">
        <div className="collection-header">
          <h3>Rings</h3>
          <div className="hero-line"></div>
        </div>
        <ProductGrid 
          cart={cart}
          addToCart={addToCart}
          handleToast={handleToast}
          products={jewelryCollections.rings}
        />
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

export default CollectionsPage;