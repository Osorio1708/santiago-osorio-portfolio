import React, { FC } from "react";
import "./Projects.scss";

const projects = [
  {
    title: "Puntos Colombia",
    projectLink: "https://www.puntoscolombia.com/personas/inicio",
    description: `Among my responsibilities was the maintenance and development of the checkout component, using .NET Core as 
        the backend technology, an Express middleware, and a React frontend.`,
  },
  {
    title: "Walmart",
    projectLink: "https://www.walmart.com/",
    description: `Among my responsibilities was the development and maintenance of the orchestration 
        layer for the checkout application, which utilized GraphQL as the framework on the backend.`,
  },
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
                <a href={project.projectLink}><button>Go To</button></a>
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
                <a href={project.projectLink}><button>Go To</button></a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
