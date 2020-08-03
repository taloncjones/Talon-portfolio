import React from "react";
import "./css/style.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <MySkills />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
