import React, { useState } from "react";
import "./skills.css";
import reduxLogo from "../../assets/redux.svg"; 

const skillsData = [
  { name: "HTML", icon: "fa-html5" },
  { name: "CSS", icon: "fa-css3-alt" },
  { name: "JavaScript", icon: "fa-js" },
  { name: "React", icon: "fa-react" },
  { name: "Redux", icon: reduxLogo }, 
  { name: "Sass", icon: "fa-sass" },
  { name: "Git", icon: "fa-git-alt" },
  { name: "GitHub", icon: "fa-github" },
];

function Skills() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="skills-container">
      <h2>Mes compétences</h2>
      <div
        className={`skills-banner-wrapper ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="skills-banner">
          {skillsData.concat(skillsData).map((skill, index) => (
            <div key={index} className="skill-item">
              {/* vérification si l'icône est un chemin d'image ou une icône FontAwesome */}
              {typeof skill.icon === "string" &&
              skill.icon.startsWith("fa-") ? (
                <i className={`fab ${skill.icon}`}></i> // icone FontAwesome
              ) : (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon-svg"
                /> // image SVG pour Redux
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
