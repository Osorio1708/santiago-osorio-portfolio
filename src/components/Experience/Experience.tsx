import React, { FC } from "react";
import "./Experience.scss";
import jobICon from "../../assets/icons/job-icon-2.png";
import studentIcon from "../../assets/icons/student-icon-4.png";

interface ExperienceProps {}

const events = [
  {
    dateStart: "January 2016",
    dateEnd: "June 2021",
    description: "Instituto Tecnologico Metropolitano",
    degree: "System Technologist",
    type: 1,
  },
  {
    dateStart: "February 2021",
    dateEnd: "October 2021",
    rol: "RPA Developer",
    description: "Tata Consultancy Services - Bancolombia",
    type: 0,
  },
  {
    dateStart: "October 2021",
    dateEnd: "July 2022",
    rol: "Full Stack Developer",
    description: "Xpert Group - Puntos Colombia",
    type: 0,
  },
  {
    dateStart: "August 2021",
    description: "Platzi",
    degree: "BackEnd with NodeJS",
    type: 1,
  },
  {
    dateStart: "July 2022",
    dateEnd: "October 2023",
    rol: "NodeJS Developer",
    description: "Zemoga - Walmart",
    type: 0,
  },
  {
    dateStart: "October 2023",
    description: "Apollo ODYSSEY",
    degree: "Graph Developer - Professional",
    link: "https://www.apollographql.com/tutorials/certifications/9592c9b9-7834-4250-b218-e21d0c2b5419",
    type: 1,
  },
];

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="experience_container" id="experience">
      <h1>Professional Carrer</h1>
      <div className="experience_events_container">
        {events.map((event, index) => (
          <div className="experience_event_container">
            <div className="img_container">
              <img
                src={event.type === 0 ? jobICon : studentIcon}
                alt={event.type === 0 ? "Job Icon" : "Student Icon"}
              />
            </div>
            <div className="p_text">
              <p className="p_date">
                {event.dateEnd
                  ? `${event.dateStart} - ${event.dateEnd}`
                  : event.dateStart}
              </p>
              <p>{event.description}</p>
              {event.rol && <p>{event.rol}</p>}
              {event.degree && <p>{event.degree}</p>}
              {event.link && (
                <a href={event.link}>
                  <p>Certification</p>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
