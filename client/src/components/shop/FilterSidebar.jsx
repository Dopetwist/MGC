import { Link } from "react-router";
import { Square, SquareCheck, MoveLeft } from "lucide-react";

function FilterSidebar({ filters, setFilters, allProducts }) {

     // TOGGLE FILTER
    function toggleFilter(type, value) {

        setFilters((prev) => {

            const alreadySelected = prev[type].includes(value);

            return {
                ...prev,

                [type]: alreadySelected
                ? prev[type].filter((item) => item !== value)
                : [...prev[type], value],
            };
        });
    }

    // CHECK IF ACTIVE
    function isSelected(type, value) {
        return filters[type].includes(value);
    }

    // CLEAR ALL
    function clearFilters() {
        setFilters({
            categories: [],
            purity: [],
            availability: [],
        });
    }

    const categories = [
        "Rings",
        "Necklaces",
        "Bracelets",
        "Earrings"
    ];


    return (

        <div id="sidebar">
            <Link to={"/"} className="sidebar-home-link">
                <MoveLeft />
                Home
            </Link>

            <p className="sidebar-filter-text">Filter & Refine</p>
                
            <div className="sidebar-contents">
                <div className="category">
                    <p className="category-head-text">Category</p>

                    {categories.map((category) => (
                        <p 
                        key={category}
                        className="sidebar-item" 
                        onClick={() => toggleFilter("categories", category)}
                        >
                            {isSelected("categories", category) ? (
                                <SquareCheck className="square-check" fill="var(--gold)" color="var(--gold)" size={16} />
                            ) : (
                                <Square size={16} />
                            )}

                            {category}
                        </p>
                    ))}
                </div>

                <div className="gold-purity">
                    <p className="gold-purity-text">Gold Purity</p>

                    <p className="gold-purity-sub-text"><Square size={16} /> 24K Pure Gold</p>
                    <p className="gold-purity-sub-text"><Square size={16} /> 18K Gold</p>
                </div>

                <div className="price-range">
                    <p className="price-range-text">Price Range</p>
                    <p className="price-range-sub-text">N50,000 - N700,000</p>
                </div>

                <div className="availability">
                    <p className="availability-text">Availability</p>
                    <p className="availability-sub-text"><Square size={16} /> In Stock</p>
                    <p className="availability-sub-text"><Square size={16} /> Made to Order</p>
                </div>

                <div className="sidebar-btn">
                    <button onClick={clearFilters}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar;