import { Search, Heart, ShoppingBag, User } from "lucide-react";

function NavRightIcons() {

  return (

    <div id="nav-right">
        <Search size={20} className="nav-icon" />
        <Heart size={20} className="nav-icon" />
        <ShoppingBag size={20} className="nav-icon" />
        <User size={20} className="nav-icon" />
    </div>
  )
}

export default NavRightIcons;