import { useNavigate } from "react-router";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

function NavRightIcons({ cart = [] }) {

  const navigate = useNavigate();

  let totalItems = cart.reduce(
      (total, item) => total + item.quantity,
      0
  );

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
                  { totalItems }
              </p>
            </div>
        </div>

        <User size={20} className="nav-icon" />
    </div>
  )
}

export default NavRightIcons;