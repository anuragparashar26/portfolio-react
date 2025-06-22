import React from 'react';

const AboutSection = () => {
  const socialButtons = [
    { href: 'https://www.x.com/binarycomposer', icon: 'fab fa-x-twitter', tooltip: 'X', class: 'twitter' },
    { href: 'https://www.linkedin.com/in/anuragparashar26', icon: 'fab fa-linkedin', tooltip: 'LinkedIn', class: 'linkedin' },
    { href: 'https://www.github.com/anuragparashar26/', icon: 'fab fa-github', tooltip: 'Github', class: 'github' },
    { href: 'https://leetcode.com/anuragparashar', icon: 'fas fa-code', tooltip: 'LeetCode', class: 'leetcode' }
  ];

  return (
    <div className="pg2" id="pg2">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="dash"></div>
        <p className="section-description">
          Get to know who I am, my passion and what drives me to excel in the field of web development and technology.
        </p>
      </div>

      <div className="about-section">
        <div className="about-image" data-aos="zoom-in">
          <img src="static/dp.png" alt="About Me" className="about-img" />
        </div>
        <div className="about-text" data-aos="fade-up">
          <p>
            I am a web development enthusiast from India with a strong passion for open-source projects, AI/ML, design, and cybersecurity.
            <br /><br />
            I specialize in creating and managing intuitive user interfaces for websites and web applications, contributing to the overall success of digital products.
            You can explore some of my featured work in the Projects section.
            <br /><br />
            Driven by problem-solving and continuous learning, I'm always open to opportunities where I can contribute my skills, expand my knowledge, and grow professionally. Let's connect!
          </p>
          <div className="social-buttons" data-aos="zoom-in">
            <ul className="wrapper">
              {socialButtons.map((button, index) => (
                <li key={index} className={`icon ${button.class}`}>
                  <span className="tooltip">{button.tooltip}</span>
                  <a href={button.href} target="_blank" rel="noopener noreferrer" className="hide-link">
                    <span><i className={button.icon}></i></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="contact-resume-buttons">
              <a href="#pg5" className="button contact-button">Contact</a>
              <a href="./Resume.pdf" className="button resume-button">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;