import React, { FC, useRef } from "react";
import prifilePick from "../../assets/images/profile.jpg";
import githubIcon from "../../assets/icons/github-icon-2.png";
import linkedinIcon from "../../assets/icons/linkedin-icon-3.png";
import emailIcon from "../../assets/icons/email-icon-2.png";
import cvIcon from "../../assets/icons/cv-icon-2.png";
import "./Landing.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    if (emailRef.current) {
      emailRef.current.select();
      document.execCommand("copy");
    }
    alert("Email is: osorio1708@gmail.com \nEmail was copied on clipboard");
  };
  return (
    <div className="landing_container" id="home">
      <div className="landing_profile_text">
        <h1>Hi, I'm Santiago</h1>
        <p>
          {"<"}BackEnd Developer{"/>"}
        </p>
        <p>
          {"<"}FullStack Developer{"/>"}
        </p>
      </div>
      <div>
        <img
          className="landing_profile_image"
          src={prifilePick}
          alt="Profile"
        />
      </div>
      <div className="social_icons">
        <a
          href="https://www.linkedin.com/in/osorio1708"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="Profile" />
        </a>
        <a
          href="https://github.com/Osorio1708"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="Profile" />
        </a>
        <div>
          <img
            src={emailIcon}
            alt="Email"
            onClick={copyToClipboard}
            style={{ cursor: "pointer" }}
          />
        </div>

        <a href="#">
          <img
            src={cvIcon}
            onClick={() => alert("It'll be available soon")}
            alt="Profile"
          />
        </a>
      </div>
    </div>
  );
};

export default Landing;
