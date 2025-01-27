import React from "react";
import "./Home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

// import Resume from "../resume/resume";

const Home = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-name">Hitha R</h1>
      <h3 className="head-tag blinking">Full Stack Developer</h3>
      <div className="social-icons">
        <a 
          href="https://github.com/Hitha-radhakrishnan" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/hitha-r-2067622a4" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="mailto:hitha.rk62@gmail.com" 
          aria-label="Send an email"
        >
          <IoMdMail />
        </a>
      </div>
      {/* <Resume/> */}
    </div>
  );
};

export default Home;

