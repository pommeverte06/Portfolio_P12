import React from "react";
import "./projectcard.css";

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-link">
          <span className="en-savoir-plus">En savoir plus</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
