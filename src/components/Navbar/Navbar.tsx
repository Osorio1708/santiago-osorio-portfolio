import React, { useState, FC } from "react";
import "./Navbar.scss";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="navbar_container">
      <header>
        <div>
          <div>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </div>
          <div>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </div>
          <div>
            <a href="#experience" onClick={closeMenu}>
              Career
            </a>
          </div>
          <div>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </div>
        </div>
        <div onClick={toggleMenu}>&#9776;</div>
      </header>
    </div>
  );
};

export default Navbar;
