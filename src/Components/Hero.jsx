import React, { useEffect } from "react";
import Typed from "typed.js";
import "../CSS/Hero.css";
import "../CSS/All.css";
import "../CSS/MQ.css";
import dots from "../images/dots.png";
import cube from "../images/cube.png";
import circle from "../images/circle.png";
import zigzags from "../images/zigzags.png";
import plus from "../images/plus.png";
import myPhoto from "../images/myPhoto.jpg";

function Hero() {
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: ["Front-End Developer.", "Programmer.", "Coder."],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000
    });

    return () => {
      typeData.destroy();
    };
  }, []);

  return (
    <div className="hero-section">
      {/* Hero Section Left Part */}
      <div className="hero-section-left">
        <div className="hero-section-heading">
          Hi! My Name is <br />
          <span>Abhay Vaghela.</span>
        </div>

        <div className="hero-section-heading hero-section-sub-heading">
          I am a <span className="role"></span>
        </div>

        <div className="hero-section-description">
          I'm a Web Developer and here is my portfolio website. Here you'll
          learn about my journey as a web developer.
        </div>

        {/* Button to download the resume */}
        <a href="../public/assets/Abhay-Vaghela-Resume.pdf" download>
          <div className="btn-pink" id="btn">
            Download Resume
          </div>
        </a>
      </div>

      {/* Hero Section Right Part */}
      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src={dots} alt="Dots" />
        </div>

        <div className="absolute icons icon-cube">
          <img src={cube} alt="Cube" />
        </div>

        <div className="absolute icons icon-circle">
          <img src={circle} alt="Circle" />
        </div>

        <div className="absolute icons icon-zigzag">
          <img src={zigzags} alt="Zigzags" />
        </div>

        <div className="absolute icons icon-plus">
          <img src={plus} alt="Plus" />
        </div>

        <div className="user-image">
          <img src={myPhoto} alt="User" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
