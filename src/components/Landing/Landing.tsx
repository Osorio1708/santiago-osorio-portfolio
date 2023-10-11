import React, { FC } from "react";
import prifilePick from "../../assets/images/profile.jpg";
import "./Landing.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="landing_container" id="home">
      <div className="landing_profile_text">
        <h1>Hi, I'm Santiago</h1>
        <p>
          <strong>{"<"}</strong>BackEnd Developer<strong>{"/>"}</strong>
        </p>
        <p><strong>{"<"}</strong>FullStack Developer<strong>{"/>"}</strong></p>
      </div>
      <div>
        <img
          className="landing_profile_image"
          src={prifilePick}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Landing;
