import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import profilePic from "../../assets/accueil.webp";

function Home() {
  return (
    <main className="home-container" role="main">
      <section className="home-content">
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
          <Link
            to="/portfolio"
            className="btn-primary"
            aria-label="Voir mon portfolio contenant mes réalisations en développement web"
          >
            Voir mes réalisations
          </Link>
          <Link
            to="/contact"
            className="btn-secondary"
            aria-label="Accéder à la page contact pour me joindre"
          >
            Me contacter
          </Link>
        </div>
      </section>

      <figure className="home-image">
        <img
          src={profilePic}
          alt="illustration d'un environnement de travail"
        />
        <figcaption className="sr-only">
          Stéphanie Paitre, intégratrice web spécialisée en accessibilité et
          performance.
        </figcaption>
      </figure>
    </main>
  );
}

export default Home;
