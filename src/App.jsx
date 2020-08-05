import React from "react";
import "./css/style.css";
import ReactGA from "react-ga";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

function App() {
  ReactGA.initialize("GA_CODE");
  ReactGA.pageview(window.location.pathname + window.location.search);

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
