import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Assuming a CSS file named ContactPage.css

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/hitha-r-2067622a4",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Hitha-radhakrishnan",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "mailto:hitha.rk62@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <div className="contact-page">
      <h1 className="heading">Connect with Me</h1>
      <p className="quote">Great things happen when people connect. Let's build something amazing together!</p>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
