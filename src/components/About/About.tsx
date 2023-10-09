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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus quisquam, facilis nobis vel quae 
         voluptatibus velit ipsam debitis. Iure sint nemo perspiciatis placeat fuga corporis voluptas, nostrum distinctio! Atque.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus quisquam, facilis nobis vel quae 
         voluptatibus velit ipsam debitis. Iure sint nemo perspiciatis placeat fuga corporis voluptas, nostrum distinctio! Atque
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus quisquam, facilis nobis vel quae 
         voluptatibus velit ipsam debitis. Iure sint nemo perspiciatis placeat fuga corporis voluptas, nostrum distinctio! Atque
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus quisquam, facilis nobis vel quae 
         voluptatibus velit ipsam debitis. Iure sint nemo perspiciatis placeat fuga corporis voluptas, nostrum distinctio! Atque
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus quisquam, facilis nobis vel quae 
         voluptatibus velit ipsam debitis. Iure sint nemo perspiciatis placeat fuga corporis voluptas, nostrum distinctio! Atque</p>
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
