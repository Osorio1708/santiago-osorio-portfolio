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
    <div id="experience">
      <div>
        <table>
          <thead>
            <h1>Professional Carrer</h1>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>
                  <div>
                    {event.dateEnd
                      ? `${event.dateStart} - ${event.dateEnd}`
                      : event.dateStart}
                  </div>
                  <div>{event.description}</div>
                  {event.rol && <div>{event.rol}</div>}
                  {event.degree && <div>{event.degree}</div>}
                  {event.link && <a href={event.link}>Certification</a>}
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
