import React, { FC } from "react";
import "./Experience.scss";

interface ExperienceProps {}

const events = [
  {
    date: "2021-05-15",
    description: "Instituto Tecnologico Metropolitano",
    degree: "System Technologist",
  },
  {
    date: "2021-06-01",
    description: "RPA Developer",
    company: "Tata Consultancy Services - Bancolombiiia",
  },
  {
    date: "2021-10-01",
    description: "Full Stack Developer",
    company: "Xpert Group - Puntos Colombia",
  },
  {
    date: "2022-04-01",
    description: "Platzi",
    degree: "BackEnd with NodeJS",
  },
  {
    date: "2022-06-25",
    description: "NodeJS Developer",
    company: "Zemoga - Walmart",
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
                  <div className="date">{event.date}</div>
                  <div className="description">{event.description}</div>
                  {event.degree && (
                    <div className="degree">Degree: {event.degree}</div>
                  )}
                  {event.company && (
                    <div className="company">Company: {event.company}</div>
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
