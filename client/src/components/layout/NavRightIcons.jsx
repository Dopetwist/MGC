import { useNavigate } from "react-router";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

function NavRightIcons() {

  const navigate = useNavigate();

  return (

    <div id="nav-right">
        <Search size={20} className="nav-icon" />
        <Heart size={20} className="nav-icon" />

        <div 
        className="cart-container"
        onClick={() => navigate("/cart")}
        >
            <ShoppingBag size={20} className="nav-icon" />

            <div className="cart-count-box">
              <p className="cart-count body-text">
                  3
              </p>
            </div>
        </div>

        <User size={20} className="nav-icon" />
    </div>
  )
}

export default NavRightIcons;