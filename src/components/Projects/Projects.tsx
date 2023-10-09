import React, { FC } from "react";
import "./Projects.scss";

const projects = [
  { title: "Project 1", description: "Description for Project 1..." },
  { title: "Project 2", description: "Description for Project 2..." },
  { title: "Project 3", description: "Description for Project 3..." },
];

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="grid-container grid-container-single-colum">
      <div className="projects-container">
        <div className="column">
          {projects
            .slice(0, Math.ceil(projects.length / 2))
            .map((project, index) => (
              <div className="card" key={index}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            ))}
        </div>
        <div className="column">
          {projects
            .slice(Math.ceil(projects.length / 2))
            .map((project, index) => (
              <div className="card" key={index}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
