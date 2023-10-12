import React, { FC } from "react";
import reactIcon from "../../assets/icons/react-icon.svg";
import sqlIcon from "../../assets/icons/sql-server-icon.svg";
import mongoIcon from "../../assets/icons/mongodb-icon.svg";
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
import "./About.scss";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="about_container" id="about">
    <div>
      <h1>Professional Profile</h1>
      <div className="professional_text">
        <p>
        I'm a dedicated software developer passionate about crafting innovative solutions. 
        Thrive in dynamic environments, and adapt well to diverse teams: technical expertise, 
        excellent interpersonal skills, seamless collaboration with colleagues and stakeholders. 
        I am committed to continuous learning, a creative problem solver, excelling in user-friendly 
        applications, and driven to contribute positively to every project.
        </p>
      </div>
    </div>
    <div>
      <h1>Technologies Known</h1>
      <br></br>
      <div className="about_skills_container">
        <div className="about_skill_container">
          <img src={typeIcon} alt="TypeScript" />
          <p>Typescript</p>
        </div>
        <div className="about_skill_container">
          <img src={expressIcon} alt="Express.js" />
          <p>Express.js</p>
        </div>
        <div className="about_skill_container">
          <img src={netCoreIcon} alt=".Net Core" />
          <p>.Net Core</p>
        </div>
        <div className="about_skill_container">
          <img src={graphIcon} alt="GraphQL" />
          <p>GraphQL</p>
        </div>
        <div className="about_skill_container">
          <img src={sqlIcon} alt="SQL Server" />
          <p>SQL Server</p>
        </div>
        <div className="about_skill_container">
          <img src={mongoIcon} alt="Mongo DB" />
          <p>Mongo DB</p>
        </div>
        <div className="about_skill_container">
          <img src={reactIcon} alt="React" />
          <p>React</p>
        </div>
        <div className="about_skill_container">
          <img src={dockerIcon} alt="Docker" />
          <p>Docker</p>
        </div>
        <div className="about_skill_container">
          <img src={azureIcon} alt="Azure" />
          <p>Azure</p>
        </div>
        <div className="about_skill_container">
          <img src={jenkinsIcon} alt="Jenkins" />
          <p>Jenkins</p>
        </div>
        <div className="about_skill_container">
          <img src={splunkIcon} alt="Splunk" />
          <p>Splunk</p>
        </div>
        <div className="about_skill_container">
          <img src={gitIcon} alt="Git" />
          <p>Git</p>
        </div>
        <div className="about_skill_container">
          <img src={apolloIcon} alt="Apollo Server" />
          <p>Apollo Server</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
