import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from "../../assets/projectsData";
import "./projets.css";

function Projets() {
  return (
    <div className="projets-container container">
      <h2 className="section-title">Mes réalisations</h2>
      <div className="projets-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projets;
