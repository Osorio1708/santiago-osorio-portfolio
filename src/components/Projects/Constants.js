import reactIcon from "../../assets/icons/react-icon.svg";
import sqlIcon from "../../assets/icons/sql-server-icon.svg";
import netCoreIcon from "../../assets/icons/net-core-icon.svg";
import typeIcon from "../../assets/icons/typescript-icon.svg";
import expressIcon from "../../assets/icons/express-icon.svg";
import graphIcon from "../../assets/icons/graphql-icon.svg";
import splunkIcon from "../../assets/icons/splunk-icon.svg";
import gitIcon from "../../assets/icons/git-icon.svg";
import apolloIcon from "../../assets/icons/apollo-server-icon.svg";
import dockerIcon from "../../assets/icons/docker-icon.svg";
import jenkinsIcon from "../../assets/icons/jenkins-icon.svg";
import azureIcon from "../../assets/icons/azure-icon.svg";

export const ProjectsList = [
  {
    title: "Puntos Colombia",
    description:
      'As a full-stack developer at Puntos Colombia, my responsibility was the development and maintenance of the entire "payment gateway" component. This component consisted of a BackEnd built with .Net Core and a SQL database, a middleware implemented in Express, and a front-end developed using React.',
    technologies: [
      { technology: ".NET Core", imageUrl: netCoreIcon },
      { technology: "Express", imageUrl: expressIcon },
      { technology: "React", imageUrl: reactIcon },
      { technology: "SQL", imageUrl: sqlIcon },
      { technology: "Splunk", imageUrl: splunkIcon },
      { technology: "Azure", imageUrl: azureIcon },
      { technology: "Docker", imageUrl: dockerIcon },
      { technology: "Git", imageUrl: gitIcon },
    ],
    skills: [
      "SQL and Transact-SQL",
      "Stored Procedures",
      "E2E Testing",
      "Monitoring with Splunk",
      "Azure DevOps",
      "Docker",
      "Scrum",
    ],
  },
  {
    title: "Walmart",
    description: `As a BackEnd developer at Walmart, I was responsible for the maintenance and development of the orchestration layer, which utilizes GraphQL as the framework. In this role, it was essential to ensure that the information sent by the backend was efficiently served to the frontend.`,
    technologies: [
      { technology: "Typescript", imageUrl: typeIcon },
      { technology: "GraphQL", imageUrl: graphIcon },
      { technology: "Apollo Server", imageUrl: apolloIcon },
      { technology: "Jenkins", imageUrl: jenkinsIcon },
      { technology: "Splunk", imageUrl: splunkIcon },
      { technology: "Git", imageUrl: gitIcon },
    ],
    skills: [
      "Backend clients",
      "PlugIn",
      "Jenkins",
      "Orchestration Layer",
      "Automation Tests",
      "E2E Testing",
      "Monitoring with Splunk",
      "Azure DevOps",
      "Docker",
      "Scrum",
    ],
  },
];
