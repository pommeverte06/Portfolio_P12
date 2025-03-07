import React from "react";
import { Link } from "react-router-dom";
import useThemeStore from "../../store/themeStore"; // store zustand
import "./header.css";

function Header() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Stéphanie Paitre</h1>

        <nav>
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

        <div className="header-toggle">
          <div className="theme-switch" onClick={toggleTheme}>
            <div className={`slider ${theme === "dark" ? "dark-mode" : ""}`}>
              <i
                className={`fa-solid ${
                  theme === "light" ? "fa-sun" : "fa-moon"
                }`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
