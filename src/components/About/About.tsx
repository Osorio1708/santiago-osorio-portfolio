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
import "./About.scss";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="grid-container about-container" id="about">
    <div className="profile">
      <h2>Professional Profile</h2>
      <div className="content">
        <p>
          I am a dedicated software developer with a passion for crafting
          innovative and efficient solutions. I thrive in dynamic work
          environments, leveraging my adaptability to swiftly integrate into
          diverse teams. My technical expertise is complemented by excellent
          interpersonal skills, allowing me to collaborate seamlessly with
          colleagues and stakeholders. With a strong commitment to continuous
          learning, I embrace challenges and approach them with creativity and
          enthusiasm. I excel at transforming complex concepts into
          user-friendly applications and am driven by the desire to contribute
          positively to every project I undertake.
        </p>
      </div>
    </div>
    <div className="technologies">
      <h2>Technologies Known</h2>
      <br></br>
      <div className="tech-icons">
        <img src={typeIcon} alt="TypeScript" className="tech-icon" />
        <img src={expressIcon} alt="Express.js" className="tech-icon" />
        <img src={netCoreIcon} alt=".Net Core" className="tech-icon" />
        <img src={graphIcon} alt="GraphQL" className="tech-icon" />
        <img src={sqlIcon} alt="SQL Server" className="tech-icon" />
        <img src={mongoIcon} alt="Mongo DB" className="tech-icon" />
        <img src={reactIcon} alt="React" className="tech-icon" />
        <img src={splunkIcon} alt="Splunk" className="tech-icon" />
        <img src={gitIcon} alt="Git" className="tech-icon" />
      </div>
    </div>
  </div>
);

export default About;
