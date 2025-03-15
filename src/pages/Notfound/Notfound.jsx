import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";
import notFoundImage from "../../assets/404.webp";

function NotFound() {
  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="Erreur 404" className="not-found-image" />

      <div className="not-found-content">
        <h2>Oups, cette page est introuvable ! </h2>
        <p>
          Il semblerait que vous soyez perdu dans l’espace du web... Pas de
          panique, mon petit robot explorateur est là pour vous guider !
        </p>
        <div className="not-found-links">
          <Link to="/" className="btn-404">
            {" "}
            Retour à l’Accueil
          </Link>
          <Link to="/portfolio" className="btn-404">
            {" "}
            Voir mes Réalisations
          </Link>
          <Link to="/contact" className="btn-404">
            {" "}
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
