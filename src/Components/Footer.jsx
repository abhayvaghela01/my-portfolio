import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";

import "../CSS/All.css";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-wrapper">
          <div className="footer-faded-text">Abhay Vaghela</div>

          <div className="uparrow-logo">
            <a href="#home">
              <FontAwesomeIcon icon={faAnglesUp} />
            </a>
          </div>

          <div className="link-wrapper">
            <div>
              <a href="#projects">Projects</a>
            </div>
            <div>
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#contactme">Contact Me</a>
            </div>
          </div>

          <div className="icon-wrapper">
            <a
              href="https://www.linkedin.com/in/abhayvaghela01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/abhayvaghela01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://www.instagram.com/iam_abhayyy01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="mailto:vaghelaabhay01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
