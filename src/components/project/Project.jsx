import React from 'react';
import './Project.css';
import contactmanager from '../../assets/ContactManager.png'
import ecommerce from '../../assets/E-commerce.png'
const projects = [
  {
    title: "Contact Manager Application",
    description: "A simple Contact Manager application that allows users to manage their contacts effectively. The app is built using React for the frontend, Node.js/Express for the backend, and MongoDB for the database.",
    link: "https://contact-manager99.netlify.app/",
    image: contactmanager,
    tools: ["React", "CSS", "JavaScript","MongoDB","NodeJs","Express"],
  },

  {
    title:"E-Commerce Clothing website",
    description:"A fully responsive e-commerce website for an online clothing store using React, Node.js, Express.js, and MongoDB with features like user login, product management, and a dynamic shopping cart.",
    link:"https://e-commerce-web07.netlify.app/",
    image:ecommerce,
    tools:["React","CSS","JavaScript","MongoDB","NodeJS","Express"],
  }
];

const Project = () => {
  return (
    <section className="projects-section">
      <h2>Check out my latest work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="project-tool">
                  {tool}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
