import { useLocation } from 'react-router';
import { HashLink } from "react-router-hash-link";

function Navbar({ isOpen }) {

    const location = useLocation();

    return (

        <nav id="navbar">
            <div className={`nav-links ${isOpen ? "show toggle" : ""}`}>
                <HashLink smooth to="/collections" className={`link body-text ${location.pathname === "/collections" ? "active" : ""}`}>Collections</HashLink>
                <HashLink smooth to="/shop" className={`link body-text ${location.pathname === "/shop" ? "active" : ""}`}>Shop</HashLink>
                <HashLink smooth to="/about" className={`link body-text ${location.pathname === "/about" ? "active" : ""}`}>About</HashLink>
                <HashLink smooth to="/contact" className={`link body-text ${location.pathname === "/contact" ? "active" : ""}`}>Contact</HashLink>
            </div>
        </nav>
    )
}

export default Navbar;