import React, { useState } from "react";
import "./skills.css";

const skillsData = [
  { name: "HTML", icon: "fa-html5", level: 90 },
  { name: "CSS", icon: "fa-css3-alt", level: 80 },
  { name: "JavaScript", icon: "fa-js", level: 55 },
  { name: "React", icon: "fa-react", level: 55 },
  { name: "Redux", icon: "fa-npm", level: 55 },
  { name: "Sass", icon: "fa-sass", level: 80 },
  { name: "Git", icon: "fa-git-alt", level: 70 },
  { name: "GitHub", icon: "fa-github", level: 70 },
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="skills-container">
      <h2>Compétences</h2>
      <div
        className={`skills-banner-wrapper ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="skills-banner">
          {skillsData.concat(skillsData).map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <i className={`fab ${skill.icon}`}></i>
              <span>{skill.name}</span>
              {hoveredSkill === skill.name && (
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="progress-percentage">{skill.level}%</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
