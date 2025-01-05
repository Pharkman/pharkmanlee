import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import "./nav-bar.css";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuIconRef.current &&
      !menuIconRef.current.contains(event.target)
    ) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div className="logo">
          <h1>FARUQ</h1>
        </div>

        <div className="menu-icon" ref={menuIconRef}>
          {!isMenuVisible && (
            <img
              className="open-menu"
              src="images/menu-icon.svg"
              alt="Menu Icon"
              onClick={toggleMenu}
            />
          )}
          {isMenuVisible && (
            <button className="close-menu" onClick={toggleMenu}>
              Close
            </button>
          )}
        </div>
      </div>

      <div className={`menu ${isMenuVisible ? "visible" : ""}`} ref={menuRef}>
        <div className="menu-list">
          <Link
            to="home"
            className="menu-link"
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Home
          </Link>
          <Link
            to="about"
            className="menu-link"
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            About
          </Link>
          <Link
            to="projects"
            className="menu-link"
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Projects
          </Link>
          <Link
            to="skills"
            className="menu-link"
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Skills
          </Link>
          <Link
            to="contact"
            className="menu-link"
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Contact
          </Link>
        </div>

        <a
          href="https://calendly.com/pharkmanlee/30min"
          target="_blank"
          className="book-a-call"
          rel="noopener noreferrer"
        >
          <img src="./images/call.svg" alt="Call Icon" />
          <p>Book a call</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
