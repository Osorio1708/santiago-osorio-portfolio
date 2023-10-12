import React, { FC } from "react";
import "./Projects.scss";
import { ProjectsList } from "./Constants.js";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="projects_container" id="projects">
      <h1>Projects</h1>
      <div className="projects_box_container" >
        {ProjectsList.map((project, index) => (
          <div className="project_container" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h2>Technologies</h2>
            <div className="technologies_project_container">
              {project.technologies.map((tech, techIndex) => (
                <img
                  key={techIndex}
                  src={tech.imageUrl}
                  alt={tech.technology}
                />
              ))}
            </div>
            <h2>Skills</h2>
            <div className="skills_project_container">
              <ul>
                {project.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
