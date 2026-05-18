import { HashLink } from "react-router-hash-link";
import { MoveRight } from "lucide-react";

function CategoryGrid() {

  const categories = [
    { id: 1, name: "RINGS", image: "/images/category-images/gold-ring.jpg", pieces: 48 },
    { id: 2, name: "NECKLACES", image: "/images/category-images/gold-chain.jpg", pieces: 62 },
    { id: 3, name: "BRACELETS", image: "/images/category-images/gold-bracelet.png", pieces: 35 },
    { id: 4, name: "EARRINGS", image: "/images/category-images/gold-earring.png", pieces: 54 }
  ]

  return (
    <section id="category-grid">
      <p className="explore">Explore our collection of exquisite jewelry.</p>
      <p className="browse">Browse by</p>

      <div className="category-flex">
        <p className="our-collections">Our <span>Collections</span></p>

        <HashLink to="/collections" className="view-all-link">
          View All <MoveRight size={16} />
        </HashLink>
      </div>

      <div className="category-container">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <figure>
              <img src={category.image} alt={`${category.name} Image`} />
            </figure>

            <div className="category-details">
              <h3>{category.name}</h3>
              <p>{category.pieces} Pieces</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid;