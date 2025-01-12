// React Component
import React from "react";
import "../CSS/All.css";
import "../CSS/Projects.css";
import "../CSS/MQ.css";
// import html from "../images/html5-logo.png";
// import css from "../images/css3-logo.png";
// import js from "../images/js-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const projectsData = [
  {
    id: 1,
    projectId: "project1",
    title: "Study Hub",
    description:
      "StudyHub is a web application that I created as group project to help students that are pursuing BTech in CSE or IT field can access their study materials from anywhere.",
    githubLink: "https://github.com/abhayvaghela01/Study-hub",
    liveLink: "https://studyhub-gtu.netlify.app/",
    alignment: "right",
    side: "left"
  },
  {
    id: 2,
    projectId: "project2",
    title: "Fresh Flower",
    description:
      "This is a flower website I created using front-end development tools.",
    githubLink: "https://github.com/abhayvaghela01/floradise",
    liveLink: "https://abhayvaghela01.github.io/floradise/",
    alignment: "left",
    side: "right"
  },
  {
    id: 3,
    projectId: "project3",
    title: "Coffee Shop",
    description:
      "This is a coffee website I created using front-end development tools.",
    // skills: [html, css, js],
    githubLink: "https://github.com/abhayvaghela01/OneCoffeeHub",
    liveLink: "https://abhayvaghela01.github.io/OneCoffeeHub/",
    alignment: "right",
    side: "left"
  },
  {
    id: 4,
    projectId: "project4",
    title: "Shopper",
    description:
      "This is a shopping website I created using front-end development tools.",
    githubLink: "https://github.com/abhayvaghela01/shopper",
    liveLink: "https://abhayvaghela01.github.io/shopper/",
    alignment: "left",
    side: "right"
  }
];

function Projects() {
  return (
    <div className="container project-section" id="projects">
      <h2 className="page-header">Projects</h2>
      <div className="project-container">
        {projectsData.map((project) => (
          <div
            className="project-card projects"
            id={project.projectId}
            key={project.id}
          >
            <div
              className={`project-number project-number-${project.alignment}`}
            >
              {project.id.toString().padStart(2, "0")}
            </div>
            <div
              className={`project-content ${
                project.alignment === "right"
                  ? "project-content-left"
                  : "project-content-right"
              }`}
            >
              <div className="project-skills-container">
                {/* {project.skills.map((skill, index) => (
                  // <img
                  //   className="project-skill"
                  //   src={skill}
                  //   alt={`${project.title} skill ${index + 1}`}
                  //   key={index}
                  // />
                ))} */}
              </div>
              <h2 className="project-heading">{project.title}</h2>
              <p className="project-sub-heading">{project.description}</p>
              <div className="btn-group">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <i title="GitHubLink" className="fa-brands fa-github icon">
                    {" "}
                    <FontAwesomeIcon icon={faGithub} />
                  </i>
                </a>
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <i title="Live Link" className="fa-solid fa-link icon">
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
