import React from "react";
import "./App.scss";
import About from "./components/About/About.tsx";
import Landing from "./components/Landing/Landing.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
