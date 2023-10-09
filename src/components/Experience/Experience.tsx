import React, { FC } from "react";
import "./Experience.scss";

interface ExperienceProps {}

const events = [
  {
    date: "2023-01-15",
    description: "Completed Bachelor's degree in Computer Science",
  },
  {
    date: "2023-05-20",
    description: "Started working at XYZ Company as a Software Engineer",
  },
  {
    date: "2024-02-10",
    description: "Attended a Web Development Conference",
  },
  {
    date: "2024-08-05",
    description: "Completed an online course on React and Redux",
  },
];

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="grid-container  grid-template-columns">
      <table className="events-table">
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td className="dot-cell">
                <div className="dot"></div>
              </td>
              <td className="event-cell">
                <div className="date">{event.date}</div>
                <div className="description">{event.description}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Experience;
