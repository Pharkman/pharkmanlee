import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./nav-bar.css";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);
  const openDotRef = useRef(null);
  const openDotChildrenRef = useRef([]);

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

  const handleOpenMenuMouseEnter = () => {
    if (
      openDotChildrenRef.current.length === 2 &&
      openDotChildrenRef.current.every((el) => el !== null)
    ) {
      openDotChildrenRef.current.forEach((el, index) => {
        el.style.transform = `translateY(${index === 0 ? -0 : 1}px)`;
      });
    }
  };

  const handleOpenMenuMouseLeave = () => {
    if (
      openDotChildrenRef.current.length === 2 &&
      openDotChildrenRef.current.every((el) => el !== null)
    ) {
      openDotChildrenRef.current.forEach((el) => {
        el.style.transform = "translateY(0)";
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu on navigation
  const { pathname } = useLocation();
  useEffect(() => {
    setIsMenuVisible(false);
  }, [pathname]);

  return (
    <motion.div
      className="nav-container"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="nav-bar">
        <div className="logo">
          <h1>FARUQ</h1>
        </div>

        <div
          className="menu-icon"
          ref={menuIconRef}
          onMouseEnter={handleOpenMenuMouseEnter}
          onMouseLeave={handleOpenMenuMouseLeave}
        >
          {!isMenuVisible && (
            <button className="open-menu" onClick={toggleMenu}>
              menu
              <div className="open-dot" ref={openDotRef}>
                <div
                  ref={(el) => (openDotChildrenRef.current[0] = el)}
                  className="dot"
                ></div>
                <div
                  ref={(el) => (openDotChildrenRef.current[1] = el)}
                  className="dot"
                ></div>
              </div>
            </button>
          )}
          {isMenuVisible && (
            <button className="close-menu" onClick={toggleMenu}>
              Close
              <div className="close-dot">
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </button>
          )}
        </div>
      </div>

      <div className={`menu ${isMenuVisible ? "visible" : ""}`} ref={menuRef}>
        <div className="menu-list">
          <ScrollLink
            to="home"
            className="menu-link"
            activeClass="active"
            spy={true}
            hashSpy={true} 
            smooth={true}
            duration={500}
            offset={-100}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="menu-link"
            activeClass="active"
            spy={true}
            hashSpy={true} 
            smooth={true}
            duration={500}
            offset={-100}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            className="menu-link"
            activeClass="active"
            spy={true}
            hashSpy={true} 
            smooth={true}
            duration={500}
            offset={-100} // Adjust this if needed
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="skills"
            className="menu-link"
            activeClass="active"
            spy={true}
            hashSpy={true} 
            smooth={true}
            duration={500}
            offset={-100}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="menu-link"
            activeClass="active"
            spy={true}
            hashSpy={true} 
            smooth={true}
            duration={500}
            offset={-100}
          >
            Contact
          </ScrollLink>
        </div>

        <a
          href="https://calendly.com/pharkmanlee/30min"
          target="_blank"
          className="book-a-call"
          rel="noopener noreferrer"
        >
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.77762 12.4426C2.8296 10.7895 2.37185 9.43973 2.09584 8.07146C1.68762 6.04783 2.62181 4.07106 4.16938 2.80972C4.82345 2.27663 5.57323 2.45877 5.96 3.15265L6.83318 4.71916C7.52529 5.96082 7.87134 6.58164 7.8027 7.23984C7.73407 7.89804 7.26737 8.43411 6.33397 9.50626L3.77762 12.4426ZM3.77762 12.4426C5.69651 15.7885 8.70784 18.8015 12.0576 20.7226M12.0576 20.7226C13.7107 21.6706 15.0605 22.1284 16.4288 22.4044C18.4524 22.8126 20.4292 21.8784 21.6905 20.3308C22.2236 19.6768 22.0415 18.927 21.3476 18.5402L19.7811 17.667C18.5394 16.9749 17.9186 16.6289 17.2604 16.6975C16.6022 16.7661 16.0661 17.2328 14.994 18.1662L12.0576 20.7226Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
          <p>Book a call</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
