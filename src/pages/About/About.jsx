import React from "react";
import DownloadCV from "../../components/MyPDF/MyPDF"; //  bouton de téléchargement du CV
import "./about.css"; 

function About() {
  return (
    <div className="about-container">
      <h1>À propos de moi</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ea quod doloribus eveniet alias nostrum, rem, maiores repudiandae labore voluptatum est explicabo eius dolor? Id fugit accusantium ipsa omnis!
      </p>

      <div className="cv-section">
        {/* <h2>Téléchargez mon CV</h2> */}
        <DownloadCV />
      </div>
    </div>

    




  );
}

export default About;
