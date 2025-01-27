import React from "react";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Project from "./components/project/project";
import "./App.css";
import Education from "./components/education/education";
import Skill from "./components/skills/Skill";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Education/>
      <Skill/>
      <Experience/>
      <Project />
      <Footer/>
    </div>
  );
}

export default App;


