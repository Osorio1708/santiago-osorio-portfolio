import React, { FC, useRef } from "react";
import prifilePick from "../../assets/images/profile.jpg";
import githubIcon from "../../assets/icons/github-icon-2.png";
import linkedinIcon from "../../assets/icons/linkedin-icon-3.png";
import emailIcon from "../../assets/icons/email-icon-2.png";
import cvIcon from "../../assets/icons/cv-icon-2.png";
import cvPDF from "../../assets/docs/santiago_osorio_quintero.pdf"; 
import "./Landing.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const copyToClipboard = () => {
    if (emailRef.current) {
      emailRef.current.select();
      document.execCommand("copy");
      alert("Email is: osorio1708@gmail.com \nEmail was copied to clipboard");
    }
  };

  const openPDF = () => {
    window.open(cvPDF); // Abre el archivo PDF en una nueva ventana del navegador
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
        <div style={{ position: "relative" }}>
          <img
            src={emailIcon}
            alt="Email"
            onClick={copyToClipboard}
            style={{ cursor: "pointer" }}
          />
          <input
            type="text"
            ref={emailRef}
            style={{ position: "absolute", left: "-9999px" }}
            defaultValue="osorio1708@gmail.com"
          />
        </div>
        <a href="#home">
        <img
          src={cvIcon}
          onClick={openPDF}  // Llama a la función openPDF cuando se hace clic en el icono del CV
          alt="Profile"
        />
      </a>
      </div>
    </div>
  );
};

export default Landing;
