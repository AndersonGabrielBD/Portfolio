import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    
    </div>
  );
};

export default App;
