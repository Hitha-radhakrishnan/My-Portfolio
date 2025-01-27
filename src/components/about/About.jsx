import React from "react";
import "./About.css";
import profilepic from "../../assets/profile-pic.jpg";


function About() {
  return (
    <section id="about" className="about">
      <div className="aboutme">
        <h2>About Me</h2>
        <p>I'm a skilled Web Developer with a strong foundation in software development and modern web technologies. Holding a degree in computer science and engineering, I enjoy building clean, responsive, and scalable websites and applications. With hands-on experience in both frontend and backend, I focus on crafting smooth, efficient, and reliable web experiences.</p>
      </div>
      <div className="profile-photo">
        <img src={profilepic} alt="My Profile" />
      </div>
      
    </section>
  );
}

export default About;
