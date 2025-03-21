import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import projectsData from "../../assets/projectsData";
import "./projets.css";

function Projets() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      const closeButton = document.getElementById("close-modal-button");
      if (closeButton) {
        closeButton.focus();
      }
    }
  }, [selectedProject]);

  return (
    <div className="projets-container" aria-labelledby="projets-title">
      <h2 id="projets-title" className="section-title">
        Mes réalisations
      </h2>
      <p className="projets-intro">
        Voici une sélection de projets réalisés durant ma formation en
        développement front-end. Chaque projet m’a permis d'approfondir mes
        compétences techniques, ma capacité à intégrer des interfaces modernes,
        responsives et accessibles, et à maîtriser des outils comme Javascript,
        React et Redux.
        <br /> <br />
        <strong>
          Cliquez sur une réalisation pour découvrir en détail ce que j'ai
          appris et mis en œuvre !
        </strong>
      </p>

      <div className="projets-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            role="button"
            tabIndex="0"
            aria-label={`Voir le projet ${project.title}`}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedProject(project);
              }
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          aria-modal="true"
          role="dialog"
        >
          <button
            id="close-modal-button"
            onClick={() => setSelectedProject(null)}
            aria-label="Fermer le projet"
          >
            Fermer
          </button>
        </ProjectModal>
      )}
    </div>
  );
}

export default Projets;
