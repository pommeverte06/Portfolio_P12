import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import profilePic from "../../assets/404.webp"; // ne pas oublier de remplacer par ma vraie photo

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Intégratrice web</h1>
        <p>
          Je conçois des interfaces web modernes, responsives et accessibles,
          centrées sur l'expérience utilisateur.
        </p>
        <p className="highlight">
          Mon objectif ? Vous livrer un site fluide, rapide et optimisé pour
          tous les supports, adapté à vos besoins.
        </p>
        <div className="cta-buttons">
          <Link to="/portfolio" className="btn-primary">
            Voir mes réalisations
          </Link>
          <Link to="/contact" className="btn-secondary">
            Me contacter
          </Link>
        </div>
      </div>

      <div className="home-image">
        <img src={profilePic} alt="Stéphanie Paitre, intégratrice web" />
      </div>
    </div>
  );
}

export default Home;
