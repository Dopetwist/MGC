import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { MoveRight } from "lucide-react";
import { revealLeft } from "../../utils/reveal";
import CategoryCard from "../ui/CategoryCard";

function CategoryGrid() {

  useEffect(() => {
    revealLeft(".buy-sell");
  }, []);

  const categories = [
    { id: 1, name: "RINGS", image: "/images/category-images/gold-ring.jpg", pieces: 48 },
    { id: 2, name: "NECKLACES", image: "/images/category-images/gold-chain.jpg", pieces: 62 },
    { id: 3, name: "BRACELETS", image: "/images/category-images/gold-bracelet.png", pieces: 35 },
    { id: 4, name: "EARRINGS", image: "/images/category-images/gold-earring.png", pieces: 54 }
  ]

  return (
    <section id="category-grid">
      <div className="buy-sell">
        <h1>We Buy, <span>Sell</span> and Swap Gold</h1>
        <p>Sales of 18Karat/22Karat Gold</p>

        <ul>
          <li>Hand Cuban</li>
          <li>Pendants</li>
          <li>Neck Cuban</li>
          <li>Gold Teeth Grills</li>
          <li>Bracelets</li>
          <li>Chains</li>
          <li>Customizing & lots more.</li>
        </ul>
      </div>

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
            <CategoryCard
               category={category}
            />
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid;