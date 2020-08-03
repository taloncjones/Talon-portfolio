import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>Social Media</p>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="mailto:taloncjones@gmail.com">
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
  );
}

export default Footer;
