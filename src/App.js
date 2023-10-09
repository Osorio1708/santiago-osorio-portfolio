import "./App.css";
import About from "./components/About/About.tsx";
import Landing from "./components/Landing/Landing.tsx";
import Experience from "./components/Experience/Experience.tsx";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="menu">
          <div className="menu-item">Home</div>
          <div className="menu-item">About Me</div>
          <div className="menu-item">Professional Career</div>
        </div>
        <div className="hamburger-menu">&#9776;</div>
      </nav>
      <section className="section-container">
        <Landing />
        <About />
        <Experience />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
