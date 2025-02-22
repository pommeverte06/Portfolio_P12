import React from "react";

import "./footer.css";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Stéphanie Paitre. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:contact@stephanie.dev">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  