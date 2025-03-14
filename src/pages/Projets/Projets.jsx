import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import projectsData from "../../assets/projectsData";
import "./projets.css";

function Projets() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projets-container">
      <h2 className="section-title">Mes réalisations</h2>
      <p className="projets-intro">
        Voici une sélection de projets réalisés durant ma formation en
        développement front-end. Chaque projet m’a permis d'approfondir mes
        compétences techniques, ma capacité à intégrer des interfaces modernes,
        responsives et accessibles, et à maîtriser des outils comme Javascript,
        React et Redux.
        <br /> <br />
        <strong>Cliquez sur une réalisation pour découvrir en détail ce que j'ai appris
        et mis en œuvre !</strong>
      </p>

      <div className="projets-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projets;
