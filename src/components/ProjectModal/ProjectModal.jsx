import React from "react";
import "./projectmodal.css";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>

        <img src={project.image} alt={project.title} className="modal-image" />

        <div className="modal-text">
          <p>{project.fullDescription}</p>
        </div>

        <div className="modal-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-globe"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
