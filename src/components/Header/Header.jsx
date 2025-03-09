import React from "react";
import { Link } from "react-router-dom";
import useThemeStore from "../../store/themeStore"; // store du mode clair/sombre
import useMenuStore from "../../store/menuStore"; // store du menu
import "./header.css";

function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const { isOpen, toggleMenu, closeMenu } = useMenuStore();

  return (
    <header className="header" data-theme={theme}>
      <div className="header-container">
        <h1 className="logo">Stéphanie Paitre</h1>

        {/* menu desktop */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/portfolio">Réalisations</Link>
            </li>
            <li>
              <Link to="/skills">Compétences</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* bouton mode clair/sombre en version desktop */}
        <div className="theme-switch" onClick={toggleTheme}>
          <div className={`slider ${theme === "dark" ? "dark-mode" : ""}`}>
            <i
              className={`fa-solid ${theme === "light" ? "fa-sun" : "fa-moon"}`}
            ></i>
          </div>
        </div>

        {/* bouton burger */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* tiroir menu mobile */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={closeMenu}>
              Réalisations
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeMenu}>
              Compétences
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          {/* bouton mode clair/sombre idem version desktop */}
          <li className="mobile-theme-switch" onClick={toggleTheme}>
            <div className={`slider ${theme === "dark" ? "dark-mode" : ""}`}>
              <i
                className={`fa-solid ${
                  theme === "light" ? "fa-sun" : "fa-moon"
                }`}
              ></i>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
