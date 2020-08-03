import React from "react";
import logo from "../img/TJ_Logo@2x.png";

function NavBar() {
  const navLinks = document.querySelectorAll(".nav__link");

  function handleClick(e) {
    document.body.classList.toggle("nav-open");
  }

  function closeDrawer(e) {
    document.body.classList.remove("nav-open");
  }

  return (
    <header id="home">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={handleClick}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={closeDrawer}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link" onClick={closeDrawer}>
              What I do
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={closeDrawer}>
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={closeDrawer}>
              My Work
            </a>
          </li>
          <footer className="footer nav__nobackground">
            <p>Social Media</p>
            <ul className="social-list">
              <li className="social-list__item">
                <a
                  className="social-list__link"
                  href="mailto:taloncjones@gmail.com"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a
                  className="social-list__link"
                  href="https://linkedin.com/in/taloncjones/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a
                  className="social-list__link"
                  href="https://github.com/taloncjones"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </footer>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
