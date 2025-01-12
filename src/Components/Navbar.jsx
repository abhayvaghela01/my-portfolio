import React, { useEffect, useRef, useState } from "react";
import "../CSS/Navbar.css";
import "../CSS/All.css";
import "../CSS/MQ.css";
import navLogo from "../images/NavLogo3.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navItemsRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".container");
    const navItems = document.querySelectorAll(".nav-items div a");

    const options = {
      threshold: 0.22
    };

    const observer = new IntersectionObserver(navCheck, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    function navCheck(entries) {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navItem = document.querySelector(
          `.nav-items div a[href="#${id}"]`
        );
        if (entry.isIntersecting && navItem) {
          console.log(`Section ${id} is intersecting`);
          navItems.forEach((item) => {
            item.classList.remove("active");
          });
          navItem.classList.add("active");
        }
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMenuClick = () => {
    setIsActive((prev) => !prev);
    if (navItemsRef.current) {
      navItemsRef.current.style.backgroundColor = "#fff";
    }
  };

  return (
    <div className="header">
      <div className="navbar">
        {/* <!-- Nav Logo--> */}
        <div className="logo-container">
          <img src={navLogo} className="logo" alt="Logo" />
          <div className="logo-text">bhay Vaghela</div>
        </div>

        {/* <!--Nav Items--> */}
        <div
          className={`nav-items ${isActive ? "active" : ""}`}
          ref={navItemsRef}
        >
          <div>
            <a href="#home" id="nav-home">
              Home
            </a>
          </div>
          <div>
            <a href="#about" id="nav-about">
              About
            </a>
          </div>
          <div>
            <a href="#projects" id="nav-projects">
              Projects
            </a>
          </div>
          <div>
            <a href="#contactme" id="nav-contact">
              Contact
            </a>
          </div>
        </div>

        <div className="icon" onClick={handleMenuClick}>
          <div className="fas fa-bars" id="menu-btn"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
