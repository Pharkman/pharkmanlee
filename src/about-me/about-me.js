import React, { useEffect, useRef } from "react";
import "./about-me.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomCursor from "../component/customCursor";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const paraRefs = useRef([]);
  const buttonRef = useRef(null);

  const aboutmep1 =
    "I’m a multidisciplinary UX/UI Designer with over four years of experience creating intuitive digital experiences across fintech, SaaS, e-commerce, health, agriculture, and web3. My focus is on building user-centered, innovative solutions that align with business goals while enhancing usability and engagement.";

  const aboutmep2 =
    "Passionate about design thinking and collaboration, I work closely with teams to craft scalable and functional products for mobile and web applications. I thrive in solving complex problems and delivering seamless user experiences.";

  const aboutmep3 =
    "Outside of work, I’m a Manchester United supporter who enjoys music and playing basketball. I'm always eager to learn, explore new trends, and create impactful digital solutions.";

  useEffect(() => {
    // Heading Animation - Fade-In & Slide-Up
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "top 75%",
          scrub: false,
        },
      }
    );

    // Paragraphs Animation - Fade-In One by One
    paraRefs.current.forEach((para, index) => {
      gsap.fromTo(
        para,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.3, // Delay each paragraph slightly
          scrollTrigger: {
            trigger: para,
            start: "top 95%",
            end: "top 80%",
            scrub: false,
          },
        }
      );
    });

    // Buttons Animation - Fade-In & Scale Up
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
          end: "top 85%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section className="about-me" id="about">
      <div className="my-images">
        <div className="image-1"></div>

        <div className="social-medias" ref={buttonRef}>
          <a
            href="https://calendly.com/pharkmanlee/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="book-call"
          >
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.77762 12.4426C2.8296 10.7895 2.37185 9.43973 2.09584 8.07146C1.68762 6.04783 2.62181 4.07106 4.16938 2.80972C4.82345 2.27663 5.57323 2.45877 5.96 3.15265L6.83318 4.71916C7.52529 5.96082 7.87134 6.58164 7.8027 7.23984C7.73407 7.89804 7.26737 8.43411 6.33397 9.50626L3.77762 12.4426ZM3.77762 12.4426C5.69651 15.7885 8.70784 18.8015 12.0576 20.7226M12.0576 20.7226C13.7107 21.6706 15.0605 22.1284 16.4288 22.4044C18.4524 22.8126 20.4292 21.8784 21.6905 20.3308C22.2236 19.6768 22.0415 18.927 21.3476 18.5402L19.7811 17.667C18.5394 16.9749 17.9186 16.6289 17.2604 16.6975C16.6022 16.7661 16.0661 17.2328 14.994 18.1662L12.0576 20.7226Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            <p>Book a call</p>
          </a>

          <a
            href="https://drive.google.com/file/d/1CCtBL_307tOhDb8a7mEwwHrctvY9c4Rz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 19H12.5C9.67157 19 8.25736 19 7.37868 18.1213C6.5 17.2426 6.5 15.8284 6.5 13V8C6.5 5.17157 6.5 3.75736 7.37868 2.87868C8.25736 2 9.67157 2 12.5 2H13.8432C14.6607 2 15.0694 2 15.437 2.15224C15.8045 2.30448 16.0935 2.59351 16.6716 3.17157L19.3284 5.82843C19.9065 6.40648 20.1955 6.69552 20.3478 7.06306C20.5 7.4306 20.5 7.83935 20.5 8.65685V13C20.5 15.8284 20.5 17.2426 19.6213 18.1213C18.7427 19 17.3284 19 14.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 2.5V3.5C15 5.38562 15 6.32843 15.5858 6.91421C16.1716 7.5 17.1144 7.5 19 7.5H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 5C4.84315 5 3.5 6.34315 3.5 8V16C3.5 18.8285 3.5 20.2427 4.37868 21.1213C5.25736 22 6.67157 22 9.5 22H14.5004C16.1572 22 17.5004 20.6568 17.5004 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 11H14M10 15H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p>Download Resume</p>
          </a>
        </div>
      </div>

      <div className="about-me-text" ref={textRef}>
        <div className="about-me-heading">
          <h1 ref={headingRef}>
            I'm Faruq, a multidisciplinary Designer and Developer
          </h1>
        </div>
        <div className="about-me-para">
          <p ref={(el) => (paraRefs.current[0] = el)}>{aboutmep1}</p>
          <p ref={(el) => (paraRefs.current[1] = el)}>{aboutmep2}</p>
          <p ref={(el) => (paraRefs.current[2] = el)}>{aboutmep3}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
