import React, { FC } from "react";
import githubIcon from "../../assets/icons/github-icon.png";
import emailIcon from "../../assets/icons/linkedin-icon.png";
import linkedinIcon from "../../assets/icons/email-icon.png";
import prifilePick from "../../assets/images/profile.jpg";
import "./Landing.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => (
  <div className="profile-card-container" id="home">
    <p className="hi-p">Hi, I'm Santiago</p>
    <div className="profile-picture-container">
      <img src={prifilePick} alt="Profile" className="profile-picture" />
    </div>
    <div className="social-icons">
      <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="icon" />
      </a>
      <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        <img src={emailIcon} alt="Email" className="icon" />
      </a>
      <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="icon" />
      </a>
    </div>
  </div>
);

export default Landing;
