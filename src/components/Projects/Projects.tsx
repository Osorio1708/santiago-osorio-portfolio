import React, { FC } from "react";
import "./Projects.scss";
import reactIcon from "../../assets/icons/react-icon.svg";
import sqlIcon from "../../assets/icons/sql-server-icon.svg";
import mongoIcon from "../../assets/icons/mongodb-icon.svg";
import netCoreIcon from "../../assets/icons/net-core-icon.svg";
import typeIcon from "../../assets/icons/typescript-icon.svg";
import expressIcon from "../../assets/icons/express-icon.svg";
import graphIcon from "../../assets/icons/graphql-icon.svg";
import splunkIcon from "../../assets/icons/splunk-icon.svg";
import gitIcon from "../../assets/icons/git-icon.svg";

const projects = [
  {
    title: "Puntos Colombia",
    projectLink: "https://www.puntoscolombia.com/personas/inicio",
    description: `Among my responsibilities was the maintenance and development of the checkout component, using .NET Core as 
        the backend technology, an Express middleware, and a React frontend.`,
    technologies: [
      { technology: ".NET Core", imageUrl: netCoreIcon },
      { technology: "Express", imageUrl: expressIcon },
      { technology: "React", imageUrl: reactIcon },
    ],
  },
  {
    title: "Walmart",
    projectLink: "https://www.walmart.com/",
    description: `Among my responsibilities was the development and maintenance of the orchestration 
        layer for the checkout application, which utilized GraphQL as the framework on the backend.`,
    technologies: [{ technology: "GraphQL", imageUrl: graphIcon }],
  },
];

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="grid-container " id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="cards-container">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="technologies-list">
                {project.technologies.map((tech, techIndex) => (
                  <img
                    key={techIndex}
                    src={tech.imageUrl}
                    alt={tech.technology}
                    className="technology-icon"
                  />
                ))}
              </div>
              <a href={project.projectLink} className="button-link">
                <button className="button">Go To</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
