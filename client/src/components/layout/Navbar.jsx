import { useLocation } from 'react-router';
import { HashLink } from "react-router-hash-link";

function Navbar() {

    const location = useLocation();

    return (

        <nav id="navbar">
            <HashLink smooth to="/collections" className={`link body-text ${location.pathname === "/collections" ? "active" : ""}`}>Collections</HashLink>
            <HashLink smooth to="/shop" className={`link body-text ${location.pathname === "/shop" ? "active" : ""}`}>Shop</HashLink>
            <HashLink smooth to="/about" className={`link body-text ${location.pathname === "/about" ? "active" : ""}`}>About</HashLink>
            <HashLink smooth to="/contact" className={`link body-text ${location.pathname === "/contact" ? "active" : ""}`}>Contact</HashLink>
        </nav>
    )
}

export default Navbar;