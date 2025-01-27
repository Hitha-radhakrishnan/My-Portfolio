import React from 'react';
import './Experience.css'
const experiences = [
  {
    company: "Techmaghi",
    role: "MERN Stack Developer Intern",
    duration: "July 2024 - January 2025",
    description: "Worked on developing scalable web applications using React and Node.js."
  },
];
const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className='exp-head'>My Experience</h1>
      <ul className="experience-list">
        {experiences.map((experience, index) => (
          <li key={index} className="experience-item">
            <h2>{experience.role} at {experience.company}</h2>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
