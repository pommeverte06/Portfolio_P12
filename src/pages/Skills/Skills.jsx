import React from "react";
import "./skills.css";
import reduxLogo from "../../assets/redux.svg";

const skillsData = [
  { name: "HTML", icon: "fa-html5" },
  { name: "CSS", icon: "fa-css3-alt" },
  { name: "JavaScript", icon: "fa-js" },
  { name: "React", icon: "fa-react" },
  { name: "Redux", icon: reduxLogo },
  { name: "Sass", icon: "fa-sass" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "Git", icon: "fa-git-alt" },
  { name: "GitHub", icon: "fa-github" },
];

function Skills() {
  return (
    <div className="skills-container">
      <h1>Mes compétences</h1>
      <div className="skills-banner-wrapper">
        <div className="skills-banner">
          {skillsData.concat(skillsData).map((skill, index) => (
            <div key={index} className="skill-item">
              {/* vérification : icône FontAwesome ou image SVG */}
              {typeof skill.icon === "string" &&
              skill.icon.startsWith("fa-") ? (
                <i className={`fab ${skill.icon}`}></i>
              ) : (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon-svg"
                />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="skills-description">
      <h2>Au fil de ma formation, j’ai consolidé mes bases et développé une vraie <strong>maîtrise des outils et bonnes pratiques du développement front-end.</strong></h2><br></br>
 <h2>HTML, CSS & Sass</h2> <p> Structurer des interfaces claires et responsives, optimiser l'organisation des styles avec Sass. Avec une attention particulière à l'ergonomie et aux animations pour améliorer l’expérience utilisateur.</p>

 <h2>JavaScript & React </h2> <p>Développement de sites dynamiques avec des composants modulaires et réutilisables. React m’a appris à optimiser le rendu et la gestion des états pour des applications fluides et performantes.</p>

 <h2>Redux </h2> <p>Gérer l’état global d’une application de manière efficace, surtout pour des projets plus complexes nécessitant une bonne organisation des données.</p>

 <h2>Git & GitHub</h2><p>Versionner mon code proprement, travailler en équipe et assurer un suivi rigoureux du développement.</p>

 <h2>Optimisation & Green Code</h2> <p>Réduction du poids des ressources, amélioration des performances et respect des bonnes pratiques pour un développement web plus durable.</p> 

<p>Aujourd’hui, je suis capable de concevoir et développer une application web de A à Z, en alliant performance, accessibilité et esthétisme. Toujours curieuse d’apprendre, je suis prête à relever de nouveaux défis techniques et créatifs !</p>
      </section>
    </div>
  );
}

export default Skills;
