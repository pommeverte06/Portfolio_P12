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
      <div className="projets-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* affichage de la modale */}
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
