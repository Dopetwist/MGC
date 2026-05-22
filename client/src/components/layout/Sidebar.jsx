import { Link } from "react-router";

function Sidebar() {

    return (

        <div id="sidebar">
            <Link to={"/"} className="sidebar-home-link">Home</Link>

            <p className="sidebar-filter-text">Filter & Refine</p>
                
            <div className="sidebar-contents">
                <div className="category">
                    <p>Category</p>

                    <Link to={"/all"} className="sidebar-item">All Jewellry</Link>
                    <Link to={"/rings"} className="sidebar-item">Rings</Link>
                    <Link to={"/necklaces"} className="sidebar-item">Necklaces</Link>
                    <Link to={"/bracelets"} className="sidebar-item">Bracelets</Link>
                    <Link to={"/earrings"} className="sidebar-item">Earrings</Link>
                </div>

                <div className="gold-purity">
                    <p className="gold-purity-text">Gold Purity</p>

                    <p className="gold-purity-sub-text">24K Pure Gold</p>
                    <p className="gold-purity-sub-text">18K Gold</p>
                </div>

                <div className="price-range">
                    <p className="price-range-text">Price Range</p>
                    <p className="price-range-sub-text">N50,000 - N700,000</p>
                </div>

                <div className="availability">
                    <p className="availability-text">Availability</p>
                    <p className="availability-sub-text">In Stock</p>
                    <p className="availability-sub-text">Made to Order</p>
                </div>

                <div className="sidebar-btns">
                    <button>Apply Filters</button>
                    <button>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;