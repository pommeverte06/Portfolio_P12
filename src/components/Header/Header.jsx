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
              <Link to="/" aria-label="Aller à l'accueil">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/portfolio" aria-label="Voir mes réalisations">
                Réalisations
              </Link>
            </li>
            <li>
              <Link to="/skills" aria-label="Voir mes compétences">
                Compétences
              </Link>
            </li>
            <li>
              <Link to="/about" aria-label="En savoir plus sur moi">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" aria-label="Me contacter">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* ✅ Correction : Garder un <div> mais le rendre accessible */}
        <div
          className="theme-switch"
          onClick={toggleTheme}
          role="button"
          aria-label="Basculer le mode clair/sombre"
          aria-pressed={theme === "dark"}
          tabIndex="0"
          onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
        >
          <div className={`slider ${theme === "dark" ? "dark-mode" : ""}`}>
            <i
              className={`fa-solid ${theme === "light" ? "fa-sun" : "fa-moon"}`}
            ></i>
          </div>
        </div>

        {/* bouton burger */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* tiroir menu mobile */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button
          className="close-menu"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={closeMenu} aria-label="Aller à l'accueil">
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={closeMenu}
              aria-label="Voir mes réalisations"
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={closeMenu}
              aria-label="Voir mes compétences"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              aria-label="En savoir plus sur moi"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} aria-label="Me contacter">
              Contact
            </Link>
          </li>
          {/* ✅ Correction : Garde un <div> mais avec tabIndex="0" pour le clavier */}
          <li>
            <div
              className="mobile-theme-switch"
              onClick={toggleTheme}
              role="button"
              aria-label="Basculer le mode clair/sombre"
              aria-pressed={theme === "dark"}
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
            >
              <div className={`slider ${theme === "dark" ? "dark-mode" : ""}`}>
                <i
                  className={`fa-solid ${
                    theme === "light" ? "fa-sun" : "fa-moon"
                  }`}
                ></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
