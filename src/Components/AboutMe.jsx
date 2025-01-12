import React from "react";
import "../CSS/All.css";
import "../CSS/AboutMe.css";
import "../CSS/MQ.css";
import html from "../images/html5-logo.png";
import css from "../images/css3-logo.png";
import js from "../images/js-logo.png";
import bootstrap from "../images/bootstrap-logo.png";
import reactjs from "../images/react-2.svg";
import tailwind from "../images/tailwind-logo.svg";

function AboutMe() {
  const skills = [
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: js, name: "JavaScript" },
    { image: bootstrap, name: "Bootstrap" },
    { image: reactjs, name: "React JS" },
    { image: tailwind, name: "Tailwind CSS" }
  ];

  return (
    <div id="about" className="container skills-container">
      {/* <!-- Skills Left Section --> */}
      <div className="skill-container-left">
        <h2 className="aboutme-heading">
          <span className="caps">A</span>bout me
        </h2>

        <div className="skill-sub-heading">
          <p>
            Hi, I'm Abhay, a final-year student studying Computer Science and
            Technology with a passion for building visually appealing and
            user-friendly web interfaces. I specialize in frontend development,
            utilizing HTML, CSS, and JavaScript to create interactive elements
            like buttons and menus that enhance user experience.
          </p>
          <p>
            As a frontend-focused web developer, I manage and build the front
            end of websites and web applications, contributing to the overall
            success of digital products. My portfolio showcases a variety of
            projects that reflect my dedication to creating seamless and
            enjoyable user experiences
          </p>
          <p>
            I'm currently open to job opportunities where I can leverage my
            skills, contribute to exciting projects, and grow professionally. If
            you have a role that aligns with my expertise in frontend
            development, I'd love to hear from you.Feel free to connect with me
            for collaboration, job opportunities, or just to discuss all things
            web development.
          </p>
        </div>
      </div>

      <div className="skill-container-right">
        <h2 className="skill-heading">Skill</h2>
        <div className="mylangskill">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skill.image} alt={`${skill.name}-logo`} />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
