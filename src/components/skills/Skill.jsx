import React from 'react'
import './Skill.css'
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Skill = () => {
  return (
    <div className='Skill'>
      <h2>Skills</h2>
        <div className="skill-list">
          <div className="logo">
            <SiJavascript />
            <h4>Javascript</h4>
          </div>
          <div className="logo">
            <FaHtml5 />
            <h4>HTML</h4>
          </div>
          <div className="logo">
            <FaCss3Alt />
            <h4>CSS</h4>
          </div>
          <div className="logo">
            <FaReact />
            <h4>React</h4>
          </div>
          <div className="logo">
            <SiMongodb />
            <h4>MongoDB</h4>
          </div>
          <div className="logo">
            <FaNode />
            <h4>NodeJs</h4>
          </div>
          <div className="logo">
            <SiExpress />
            <h4>Express</h4>
          </div>
          <div className="logo">
            <FaGithub />
            <h4>Git</h4>
          </div>
        </div>
    </div>
  )
}

export default Skill
