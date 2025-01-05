import React, { useEffect, useState } from "react";
import { gsap } from "gsap"; // GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger
import { motion } from "framer-motion";
import "../index.css";
import "./footer.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Footer Animation
    gsap.fromTo(
      ".footer",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%", // Trigger earlier (5% of the viewport visible)
          end: "top 40%", // Ends sooner
          toggleActions: "play none none reverse",
        },
      }
    );

    // "Let’s work together" Animation
    gsap.fromTo(
      ".let-work h1",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".let-work",
          start: "top 95%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Social Media Links (Entire container) Slide-Up Animation
    gsap.fromTo(
      ".social-accounts",
      { opacity: 0, y: 30, pointerEvents: "none" }, // Ensure they are non-interactive only during animation
      {
        opacity: 1,
        y: 0,
        pointerEvents: "auto", // Restore interactivity after animation
        duration: 1.2,
        scrollTrigger: {
          trigger: ".social-accounts",
          start: "top 95%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Copyright & Design Info Animation
    gsap.fromTo(
      ".who-design-develop p",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".who-design-develop",
          start: "top 95%",
          end: "top 80%", // Closer end point
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <motion.footer className="footer" id="footer">
      <div className="let-work-accounts">
        <div className="let-work">
          <h1>Let’s work together</h1>
        </div>

        <div className="social-accounts">
          <a className="social-accounts-link" href="mailto:Pharkmanlee@gmail.com">
            Pharkmanlee@gmail.com
          </a>
          <a className="social-accounts-link" href="https://drive.google.com/file/d/1CCtBL_307tOhDb8a7mEwwHrctvY9c4Rz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a className="social-accounts-link" href="https://twitter.com/Pharkman_" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a className="social-accounts-link" href="https://www.linkedin.com/in/faruq-arowolo-331611329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkwS6P3OKQm2a%2BvpBQ7KECQ%3D%3D" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="social-accounts-link" href="https://dribbble.com/Pharkmanlee" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>
          <a className="social-accounts-link" href="https://www.behance.net/faruqsola" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
          <a className="social-accounts-link" href="https://github.com/Pharkman" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a className="social-accounts-link" href="https://www.instagram.com/pharkmanlee27/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="who-design-develop">
        <p>© {currentYear} Faruq Arowolo. All Rights Reserved.</p>
        <p>Designed & built by <span className="my-name-footer">Faruq</span></p>
      </div>
    </motion.footer>
  );
};

export default Footer;
