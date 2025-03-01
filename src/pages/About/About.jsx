


import React from "react";
import "./about.css"; 

function About() {
  const handleOpenCV = () => {
    window.open("/CV_3.pdf", "_blank");
  };

  return (
    
    <div className="about-container">
      <h1>À propos de moi</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ea quod doloribus eveniet alias nostrum, rem, maiores repudiandae labore voluptatum est explicabo eius dolor? Id fugit accusantium ipsa omnis!
      </p>

      <div className="cv-section">
        <button onClick={handleOpenCV} className="cv-button">
          Voir mon CV
        </button>
      </div>
    </div>
  );
}

export default About;
