import React, { FC } from "react";
import "./Experience.scss";

interface ExperienceProps {}

const events = [
  {
    dateStart: "January 2016",
    dateEnd: "June 2021",
    description: "Instituto Tecnologico Metropolitano",
    degree: "System Technologist",
  },
  {
    dateStart: "February 2021",
    dateEnd: "October 2021",
    rol: "RPA Developer",
    description: "Tata Consultancy Services - Bancolombia",
  },
  {
    dateStart: "October 2021",
    dateEnd: "July 2022",
    rol: "Full Stack Developer",
    description: "Xpert Group - Puntos Colombia",
  },
  {
    dateStart: "August 2021",
    description: "Platzi",
    degree: "BackEnd with NodeJS",
  },
  {
    dateStart: "July 2022",
    dateEnd: "October 2023",
    rol: "NodeJS Developer",
    description: "Zemoga - Walmart",
  },
  {
    dateStart: "October 2023",
    description: "Apollo ODYSSEY",
    degree: "Graph Developer - Professional",
    link: "https://www.apollographql.com/tutorials/certifications/9592c9b9-7834-4250-b218-e21d0c2b5419",
  },
];

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="grid-container grid-template-columns" id="experience">
      <div className="events-container">
        <table className="events-table">
          <thead className="head-table">
            <h1>Professional Carrer</h1>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td className="event-cell">
                  <div className="date">
                    {event.dateEnd
                      ? `${event.dateStart} - ${event.dateEnd}`
                      : event.dateStart}
                  </div>
                  <div className="description">{event.description}</div>
                  {event.rol && (
                    <div className="rol">{event.rol}</div>
                  )}
                  {event.degree && <div className="degree">{event.degree}</div>}
                  {event.link && (
                    <a href={event.link} className="event-link">
                      Certification
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;
