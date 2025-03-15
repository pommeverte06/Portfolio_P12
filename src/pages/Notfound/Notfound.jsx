import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";
import notFoundImage from "../../assets/404.webp";

function NotFound() {
  return (
    <div className="not-found-container">
      <img
        src={notFoundImage}
        alt="Illustration d'un petit robot tenant un panneau indiquant Erreur 404"
        className="not-found-image"
      />

      <div className="not-found-content" role="alert">
        <h1>Oups, cette page est introuvable !</h1>
        <p>
          Il semblerait que vous soyez perdu dans l’espace du web... Pas de
          panique, mon petit robot explorateur est là pour vous guider !
        </p>

        <div className="not-found-links">
          <Link
            to="/"
            className="btn-404"
            aria-label="Retourner à la page d'accueil"
          >
            Retour à l’Accueil
          </Link>
          <Link
            to="/portfolio"
            className="btn-404"
            aria-label="Voir mon portfolio"
          >
            Voir mes Réalisations
          </Link>
          <Link
            to="/contact"
            className="btn-404"
            aria-label="Me contacter directement"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
