import React, { FC } from "react";
import "./Projects.scss";
import reactIcon from "../../assets/icons/react-icon.svg";
import sqlIcon from "../../assets/icons/sql-server-icon.svg";
import netCoreIcon from "../../assets/icons/net-core-icon.svg";
import typeIcon from "../../assets/icons/typescript-icon.svg";
import expressIcon from "../../assets/icons/express-icon.svg";
import graphIcon from "../../assets/icons/graphql-icon.svg";
import splunkIcon from "../../assets/icons/splunk-icon.svg";
import gitIcon from "../../assets/icons/git-icon.svg";
import apolloIcon from "../../assets/icons/apollo-server-icon.svg";

const projects = [
  {
    title: "Puntos Colombia",
    projectLink: "https://pasarela.puntoscolombia.com/",
    description: `As a full-stack developer at Puntos Colombia, my responsibility was the development and maintenance of the entire "payment gateway" component. This component consisted of a BackEnd built with .Net Core and a SQL database, a middleware implemented in Express, and a front-end developed using React.`,
    technologies: [
      { technology: ".NET Core", imageUrl: netCoreIcon },
      { technology: "Express", imageUrl: expressIcon },
      { technology: "React", imageUrl: reactIcon },
      { technology: "SQL", imageUrl: sqlIcon },
      { technology: "Splunk", imageUrl: splunkIcon },
      { technology: "Git", imageUrl: gitIcon },
      
      
    ],
  },
  {
    title: "Walmart",
    projectLink: "https://www.walmart.com/checkout",
    description: `As a BackEnd developer at Walmart, I was responsible for the maintenance and development of the orchestration layer, which utilizes GraphQL as the framework. In this role, it was essential to ensure that the information sent by the backend was efficiently served to the frontend.`,
    technologies: [
      { technology: "Typescript", imageUrl: typeIcon },
      { technology: "GraphQL", imageUrl: graphIcon },
      { technology: "Apollo Server", imageUrl: apolloIcon },
      { technology: "Splunk", imageUrl: splunkIcon },
      { technology: "Git", imageUrl: gitIcon },
    ],
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
                <button className="button">{'Go to ' + project.title}</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
