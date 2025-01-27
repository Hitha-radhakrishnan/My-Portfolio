import React from 'react';
import './Education.css';
import sreeBuddhaLogo from '../../assets/sbcelogo.png'; 
import techmaghiLogo from '../../assets/Techmaghi-logo.png';

const Education = () => {
  return (
    <div className='education'>
      <h2>Education</h2>
      <div className="education-details">
        <div className='first-detail'>
          <div className="sbce">
              <img src={sreeBuddhaLogo} alt="Sree Buddha College Logo" className="education-logo" />
              <h3>Sree Buddha College Of Engineering</h3>
          </div>
          <p>Bachelor of Technology in Computer Science</p>
          <p>2020-2024</p>
        </div>
        <div className='second-detail'>
          <div className='techmaghi'>
            <img src={techmaghiLogo} alt="Techmaghi Logo" className="education-logo" />
            <h3>Techmaghi</h3>
          </div>
          <p>MERN Stack development</p>
          <p>2024-2025</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
