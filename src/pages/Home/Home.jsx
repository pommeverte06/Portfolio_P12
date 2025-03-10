


import React from "react";
import "./home.css";
import profilePic from "../../assets/404.webp"; // Remplace par ta photo

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
     
        <h1>Intégratrice web & passionnée du front-end</h1>
        <p>
          Je conçois des interfaces modernes, responsives et accessibles en utilisant HTML, CSS, 
          JavaScript et React. Mon objectif ? Un site performant, fluide et optimisé pour tous les supports.
        </p>
        <p className="highlight">
          Pixel-perfect, performance et accessibilité sont au cœur de mon travail !
        </p>
        <div className="cta-buttons">
          <a href="#portfolio" className="btn-primary">Voir mes réalisations</a>
          <a href="#contact" className="btn-secondary">Me contacter</a>
        </div>
      </div>
      <div className="home-image">
        <img src={profilePic} alt="Stéphanie Paitre - Intégratrice Web" />
      </div>
    </div>
  );
}

export default Home;
