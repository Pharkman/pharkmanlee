import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./project.css";
import "boxicons/css/boxicons.min.css";
import TiltedCard from "../component/animation/titled";
import { moreProjects } from "../display-project/projectData";
import { useSound } from "../click-sound/ClickSoundButton";

gsap.registerPlugin(ScrollTrigger);

const ProjectCategory = ({ projectIndustry }) => (
  <div className="project-category">
    <p className="category-industry">{projectIndustry}</p>
  </div>
);

const ProjectList = ({ projectIndustry, projectName, link, imageSrc }) => {
  const { playSound } = useSound();

  const handleClick = (e) => {
    e.preventDefault();
    playSound("/sounds/menu-sound.wav");
    window.location.href = link;
  };

  if (!imageSrc || imageSrc.includes("placeholder")) {
    console.warn(`Image missing for: ${projectName}`);
  }

  return (
    <div className="project-list">
      {link.startsWith("http") ? (
        <a href={link} onClick={handleClick} className="project-link">
          <TiltedCard
            imageSrc={imageSrc || "https://via.placeholder.com/300"}
            altText={`${projectName} thumbnail`}
            captionText="View Project"
            rotateAmplitude={5}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <div className="projectName-category-viewPro">
            <div className="projectName-category">
              <ProjectCategory projectIndustry={projectIndustry} />
              <div className="projectName">
                <h1>{projectName}</h1>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 7L27 16L18 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <RouterLink to={link} onClick={handleClick} className="project-link">
          <TiltedCard
            imageSrc={imageSrc || "https://via.placeholder.com/300"}
            altText={`${projectName} thumbnail`}
            captionText="View Project"
            rotateAmplitude={5}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <div className="projectName-category-viewPro">
            <div className="projectName-category">
              <ProjectCategory projectIndustry={projectIndustry} />
              <div className="projectName">
                <h1>{projectName}</h1>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 7L27 16L18 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>
      )}
    </div>
  );
};

const MyProjects = () => {
  const { playSound } = useSound();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      // Heading - animate when section enters view
      gsap.fromTo(
        ".label",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".my-projects",
            start: "top 80%",
            once: true, // Only play once
          },
        }
      );

      // Project cards - stagger in when they enter view
      gsap.fromTo(
        ".project-list",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15, // Beautiful sequential reveal
          scrollTrigger: {
            trigger: ".case-study",
            start: "top 80%",
            once: true,
          },
        }
      );

      // "See all work" button
      gsap.fromTo(
        ".read-more-about",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: 0.4,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".read-more-about",
            start: "top 90%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const featureProjects = moreProjects
    .filter((p) => p.section === "Feature Work")
    .slice(0, 6);

  return (
    <section className="my-projects" id="projects" ref={sectionRef}>
      <div className="label">
        <div className="section-heading">
          <h1>SELECTED WORK</h1>
        </div>
        <div className="section-sub-heading">
          <p>A few meaningful projects that reflect how I think, solve, and design.</p>
        </div>
      </div>

      <div className="case-study">
        {featureProjects.map((project) => (
          <ProjectList
            key={project.link}
            projectIndustry={project.projectIndustry}
            projectName={project.projectName}
            link={project.link}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>

      <motion.div
        className="read-more-about"
        whileHover={{ scale: 1.01, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <RouterLink
          to="/all-projects"
          className="hero-btn cursor-target"
          onClick={(e) => {
            e.preventDefault();
            playSound("/sounds/menu-sound.wav");
            window.location.href = "/all-projects";
          }}
        >
          See all work
          <svg width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.0672 10.9417L30.4422 16.5667C30.3548 16.6542 30.2434 16.7138 30.1221 16.738C30.0008 16.7621 29.875 16.7497 29.7608 16.7024C29.6465 16.6551 29.5488 16.5749 29.4802 16.472C29.4115 16.3691 29.3749 16.2482 29.375 16.1245V11.1245H3.125C2.95924 11.1245 2.80027 11.0587 2.68306 10.9415C2.56585 10.8242 2.5 10.6653 2.5 10.4995C2.5 10.3338 2.56585 10.1748 2.68306 10.0576C2.80027 9.94036 2.95924 9.87452 3.125 9.87452H29.375V4.87452C29.3749 4.75083 29.4115 4.6299 29.4802 4.52703C29.5488 4.42416 29.6465 4.34397 29.7608 4.29663C29.875 4.24928 30.0008 4.2369 30.1221 4.26106C30.2434 4.28522 30.3548 4.34482 30.4422 4.43233L36.0672 10.0573C36.1253 10.1154 36.1714 10.1843 36.2029 10.2602C36.2343 10.3361 36.2505 10.4174 36.2505 10.4995C36.2505 10.5817 36.2343 10.663 36.2029 10.7389C36.1714 10.8147 36.1253 10.8837 36.0672 10.9417Z" fill="currentColor"/>
          </svg>
        </RouterLink>
      </motion.div>
    </section>
  );
};

export default MyProjects;