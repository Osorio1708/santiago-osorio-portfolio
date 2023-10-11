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
import "./About.scss";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div  id="about">
    <div >
      <h1>Professional Profile</h1>
      <div >
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
    <div >
      <h1>Technologies Known</h1>
      <br></br>
      <div >
        <img src={typeIcon} alt="TypeScript"  />
        <img src={expressIcon} alt="Express.js"  />
        <img src={netCoreIcon} alt=".Net Core"  />
        <img src={graphIcon} alt="GraphQL"  />
        <img src={sqlIcon} alt="SQL Server"  />
        <img src={mongoIcon} alt="Mongo DB"  />
        <img src={reactIcon} alt="React"  />
        <img src={splunkIcon} alt="Splunk"  />
        <img src={gitIcon} alt="Git"  />
        <img src={apolloIcon} alt="Apollo Server"  />
      </div>
    </div>
  </div>
);

export default About;
