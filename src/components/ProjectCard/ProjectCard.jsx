import React from "react";
import "./projectcard.css";

const ProjectCard = ({ image, title, description, github, live }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> 
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> 
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
