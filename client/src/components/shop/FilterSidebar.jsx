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

    const purities = [
        "22K Gold",
        "18K Gold"
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

                    {purities.map((purity) => (
                        <p 
                        key={purity}
                        className="gold-purity-sub-text"
                        onClick={() => toggleFilter("purity", purity)}
                        >
                            {isSelected("purity", purity) ? (
                                <SquareCheck className="square-check" fill="var(--gold)" color="var(--gold)" size={16} />
                            ) : (
                                <Square size={16} />
                            )}
                            {purity}
                        </p>
                    ))}
                </div>

                <div className="price-range">
                    <p className="price-range-text">Price Range</p>
                    <div className="price-range-filters">
                        <form>
                            <div>
                                <input type="radio" name="price" id="range1" />
                                <label htmlFor="range1">N - N100,000</label>
                            </div>

                            <div>
                                <input type="radio" name="price" id="range2" />
                                <label htmlFor="range2">N100,000 - N500,000</label>
                            </div>

                            <div>
                                <input type="radio" name="price" id="range3" />
                                <label htmlFor="range3">N500,000 - N1,000,000</label>
                            </div>

                            <div>
                                <input type="radio" name="price" id="range4" />
                                <label htmlFor="range4">N1,000,000+</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="availability">
                    <p className="availability-text">Availability</p>
                    <p 
                    className="availability-sub-text"
                    onClick={() => toggleFilter("availability", "In Stock")}
                    >
                        {isSelected("availability", "In Stock") ? (
                            <SquareCheck className="square-check" fill="var(--gold)" color="var(--gold)" size={16} />
                        ) : (
                            <Square size={16} />
                        )}

                        In Stock
                    </p>
                </div>

                <div className="sidebar-btn">
                    <button onClick={clearFilters}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar;