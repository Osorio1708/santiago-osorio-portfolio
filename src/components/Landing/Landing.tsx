import React, { FC, useRef } from "react";
import githubIcon from "../../assets/icons/github-icon.png";
import linkedinIcon from "../../assets/icons/linkedin-icon.png";
import emailIcon from "../../assets/icons/email-icon.png";
import cvIcon from "../../assets/icons/cv-icon.png";
import prifilePick from "../../assets/images/profile.jpg";
import cvDoc from "../../assets/docs/cv.pdf";
import "./Landing.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    if (emailRef.current) {
      emailRef.current.select();
      document.execCommand('copy');
    }
    alert('Email was copied on clipboard');
  };

  return (
    <div className="profile-card-container" id="home">
      <p className="hi-p">Hi, I'm Santiago</p>
      <p className="hi-p-2">Are you looking for a software developer?</p>
      <div className="profile-picture-container">
        <img src={prifilePick} alt="Profile" className="profile-picture" />
      </div>
      <div className="social-icons">
        <a href="https://github.com/Osorio1708" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
        <input
          ref={emailRef}
          type="text"
          defaultValue="osorio1708@gmail.com"
          style={{ position: "absolute", left: "-9999px" }}
        />
        <img
          src={emailIcon}
          alt="Email"
          className="icon"
          onClick={copyToClipboard} 
          style={{ cursor: "pointer" }}
        />
        <a
          href="https://www.linkedin.com/in/osorio1708"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href={cvDoc}>
        <img 
          src={cvIcon}
          alt="CV"
          className="icon"
          style={{ cursor: "pointer" }}
        />
        </a>
      </div>
    </div>
  );
};

export default Landing;
