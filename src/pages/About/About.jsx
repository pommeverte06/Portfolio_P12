import React from "react";
import "./about.css";

function About() {
  const handleOpenCV = () => {
    window.open("/cv_dev.pdf", "_blank");
  };

  return (
    <div className="about-container">
      <h1>À propos de moi</h1>
      <p>
        Après plusieurs années en tant qu'infirmière diplômée d'État, j'ai
        décidé de me reconvertir dans le développement front-end, domaine dans
        lequel je m'épanouis pleinement. Actuellement en formation, je développe
        mes compétences en HTML, CSS, JavaScript et React, avec une attention
        particulière portée à l'accessibilité, aux performances et à
        l'optimisation du code.
      </p>
      <p>
        Ma précédente carrière dans le secteur paramédical m'a apporté{" "}
        <strong>
          rigueur, autonomie, sens du détail et capacité à gérer efficacement
          des situations complexes.
        </strong>{" "}
        Aujourd'hui, je mets ces qualités au service de la création d'interfaces
        web intuitives, fluides et agréables à utiliser.
      </p>
      <p>
        Je suis particulièrement sensible à la qualité du code, aux bonnes
        pratiques en matière de "Green Code" et au travail en équipe,
        compétences essentielles pour proposer des solutions web durables et
        performantes.
      </p>

      <div className="cv-section">
        <button onClick={handleOpenCV} className="cv-button">
          Voir mon CV
        </button>
      </div>
      <br />
      <div className="social-links">
        <p>Retrouvez-moi aussi sur</p>
        <div className="social-icons">
          <a
            href="https://github.com/pommeverte06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/stephanie-paitre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
