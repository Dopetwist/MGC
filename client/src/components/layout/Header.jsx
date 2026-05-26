
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavRightIcons from "./NavRightIcons";


function Header({ cart }) {

  return (

    <header id="header">
        <Logo />
        <Navbar />
        <NavRightIcons cart={cart} />
    </header>
  )
}

export default Header;