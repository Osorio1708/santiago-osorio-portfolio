import React, { useState } from "react";
import "./App.scss";
import About from "./components/About/About.tsx";
import Landing from "./components/Landing/Landing.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Projects from "./components/Projects/Projects.tsx";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className={`menu ${menuVisible ? "mobile" : ""}`}>
          <div className="menu-item">
            <a href="#home" onClick={closeMenu}>Home</a>
          </div>
          <div className="menu-item">
            <a href="#about" onClick={closeMenu}>About Me</a>
          </div>
          <div className="menu-item">
            <a href="#experience" onClick={closeMenu}>Career</a>
          </div>
          <div className="menu-item">
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </header>
      <section className="section-container">
        <Landing />
        <About />
        <Experience />
        <Projects />
      </section>
    </div>
  );
}

export default App;
