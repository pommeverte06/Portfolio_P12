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
              {/* verification : icone FA ou image SVG */}
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
              {/* <span>{skill.name}</span> */}
              <span className="sr-only">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="skills-description">
        <h2>
          <strong>
            Au fil de ma formation, j’ai consolidé mes bases et développé
            une vraie maîtrise des outils et bonnes pratiques du développement
            front-end.
          </strong>
        </h2>
        <br></br>
        <div className="skills-description-block">
        <article>
          <h2>HTML, CSS & Sass</h2>{" "}
          <p>
            {" "}
            Structurer des interfaces <strong>claires et responsives</strong>,
            optimiser l'organisation des styles avec Sass. Avec une attention
            particulière à l'ergonomie et aux animations pour{" "}
            <strong>améliorer l’expérience utilisateur</strong>.
          </p>
        </article>
        <br></br>
        <article>
          <h2>JavaScript & React </h2>{" "}
          <p>
            Développement de sites <strong>dynamiques</strong> avec des
            composants <strong>modulaires et réutilisables</strong>. React m’a
            appris à optimiser le rendu et la gestion des états pour des
            applications <strong>fluides et performantes.</strong>
          </p>
        </article>
        <br></br>
        <article>
          <h2>Redux </h2>{" "}
          <p>
            Gérer <strong>l’état global d’une application</strong> de manière
            efficace, surtout pour des projets plus complexes nécessitant une
            bonne organisation des données.
          </p>
        </article>
        <br></br>
        <article>
          <h2>Git & GitHub</h2>
          <p>
            Versionner mon code proprement,{" "}
            <strong>travailler en équipe</strong> et assurer un suivi{" "}
            <strong>rigoureux du développement</strong>.
          </p>
        </article>
        <br></br>
        <article>
          <h2>Optimisation & Green Code</h2>{" "}
          <p>
            Réduction du poids des ressources,{" "}
            <strong>amélioration des performances</strong> et respect des bonnes
            pratiques pour un développement web plus <strong>durable.</strong>
          </p>
        </article>{" "}
        </div>
        <br></br>
        <h2>
          <p>
            <strong>
              Je suis capable de concevoir et développer une application web de
              A à Z , en alliant performance, accessibilité et esthétisme.
              Toujours curieuse d’apprendre, je suis prête à relever de nouveaux
              défis techniques et créatifs !
            </strong>
          </p>
        </h2>
        <br></br>
      </section>
    </div>
  );
}

export default Skills;
