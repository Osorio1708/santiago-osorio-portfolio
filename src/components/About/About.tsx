import React, { FC } from "react";
import reactIcon from "../../assets/icons/react-icon.png";
import sqlIcon from "../../assets/icons/sql-server-icon.png";
import mongoIcon from "../../assets/icons/mongodb-icon.png";
import netCoreIcon from "../../assets/icons/net-core-icon.png";
import typeIcon from "../../assets/icons/typescript-icon.png";
import expressIcon from "../../assets/icons/express-icon.png";
import graphIcon from "../../assets/icons/graphql-icon.png";
import "./About.scss";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="grid-container double-grid-container about-container">
    <div className="profile">
      <h2>Professional Profile</h2>
      <p> I am a dedicated software developer with a passion for crafting innovative and efficient solutions. 
          I thrive in dynamic work environments, leveraging my adaptability to swiftly integrate into diverse teams. 
          My technical expertise is complemented by excellent interpersonal skills, allowing me to collaborate 
          seamlessly with colleagues and stakeholders. With a strong commitment to continuous learning, I embrace 
          challenges and approach them with creativity and enthusiasm. I excel at transforming complex concepts 
          into user-friendly applications and am driven by the desire to contribute positively to every project I undertake.</p>
    </div>
    <div className="technologies">
      <h2>Technologies Known</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={typeIcon} alt="TypeScript" className="tech-icon" />
            </td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>
              <img src={expressIcon} alt="Express.js" className="tech-icon" />
            </td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>
              <img src={netCoreIcon} alt=".Net Core" className="tech-icon" />
            </td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>
              <img src={graphIcon} alt="GraphQL" className="tech-icon" />
            </td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>
              <img src={sqlIcon} alt="SQL Server" className="tech-icon" />
            </td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>
              <img src={mongoIcon} alt="Mongo DB" className="tech-icon" />
            </td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>
              <img src={reactIcon} alt="React" className="tech-icon" />
            </td>
            <td>Intermediate</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default About;
