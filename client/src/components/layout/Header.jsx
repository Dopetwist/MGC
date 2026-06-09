import { useState, useEffect } from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavRightIcons from "./NavRightIcons";
import { X, TextAlignJustify } from 'lucide-react';


function Header({ cart }) {

  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
      const nav = document.querySelector(".nav-links");
      const navBar = document.getElementById("navbar");
      const menuIcon = document.getElementById("menu-icon");

      const handleMousedown = (event) => {
          // Close sidebar on outside click, but do not treat the hamburger icon as outside
          if (
              nav &&
              navBar &&
              !navBar.contains(event.target) &&
              !nav.contains(event.target) &&
              !(menuIcon && menuIcon.contains(event.target))
          ) {
              setIsOpen(false);
          }
      }

      const removeXandNavbar = () => {
          setIsOpen(false);
      }

      const handleNavLinkClick = (event) => {
          // Close sidebar when any link inside nav is clicked
          if (event.target.closest('a')) {
              setIsOpen(false);
          }
      }

      window.addEventListener("scroll", removeXandNavbar);
      nav?.addEventListener("click", handleNavLinkClick);
      window.addEventListener("mousedown", handleMousedown);

      return () => {
          window.removeEventListener("mousedown", handleMousedown);
          window.removeEventListener("scroll", removeXandNavbar);
          nav?.removeEventListener("click", handleNavLinkClick);
      }
  }, [isOpen]);

  return (

    <header id="header">
        <Logo />
        <Navbar isOpen={isOpen} />

        <div className="header-inner-container">
          <NavRightIcons cart={cart} />

          <div
          id="menu-icon"
          onClick={() => setIsOpen(prev => !prev)} 
          >
              { isOpen ? 
                  <X className="inner-icon"/> 
                  : <TextAlignJustify className="inner-icon" /> 
              }

          </div>
        </div>
    </header>
  )
}

export default Header;