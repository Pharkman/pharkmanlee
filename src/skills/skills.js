// export default MainComponent;
import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import { gsap } from "gsap"; // GSAP for scroll-based animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger for scroll-based effects

import "./skills.css";

gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger

// ExperienceItem Component
const ExperienceItem = ({ role, company, startDate, endDate, description }) => {
  useEffect(() => {
    // Using GSAP and ScrollTrigger for scroll-based animation
    gsap.fromTo(
      ".experience-item", // Targeting individual experience items
      {
        opacity: 0,
        y: 60, // Start below the viewport
      },
      {
        opacity: 1,
        y: 0, // End at normal position
        scrollTrigger: {
          trigger: ".experience-item", // Trigger when the element enters the viewport
          start: "top 80%", // Trigger when 80% of the element is visible
          end: "top 40%", // End when it's 40% of the way down the viewport
          scrub: 0.6, // Smooth scroll-based animation
        },
        duration: 0.8, // Animation duration
        ease: "easeOut", // Smooth easing
      }
    );
  }, []);

  return (
    <div className="experience-list experience-item">
      <div className="companyName-role">
        <p className="role-in-comp">{role}</p>
        <p className="companyName">{company}</p>
      </div>

      <div className="duration-roleDesc">
        <div className="duration">
          <p>{startDate}</p>
          <div className="month-year-divider"></div>
          <p>{endDate}</p>
        </div>

        <div className="roleDesc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

// Skills Component
const Skills = () => {
  const skills = [
    "UI Design",
    "UX Design",
    "UX Research",
    "Wireframe",
    "Prototype",
    "Usability Testing",
    "Brand Design",
    "Frontend Dev",
    "Collaboration",
    "Team Leadership",
    "Problem-Solving",
    "Strategic Thinking",
  ];

  useEffect(() => {
    // GSAP animation for the Skills label and list
    gsap.fromTo(
      ".skills-list", 
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".skills", // Trigger the animation when the `.skills` section comes into view
          start: "top 80%", // Start when 80% of the `.skills` section is visible
          end: "top 30%",
          scrub: 0.6, // Smooth scrubbing effect for scrolling
        },
        duration: 1,
        ease: "easeOut",
      }
    );

    // GSAP animation for each individual skill item
    gsap.utils.toArray(".skill-lst").forEach((skill, index) => {
      gsap.fromTo(
        skill,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: skill,
            start: "top 80%", // Start when 80% of the skill item is visible
            end: "top 30%",
            scrub: 0.6,
          },
          duration: 0.6,
          ease: "easeOut",
        }
      );
    });
  }, []);

  return (
    <section className="skills">
      {/* Label Animation: Subtle Scale and Fade */}
      <motion.div
        className="label"
        // initial={{ opacity: 0, scale: 0.2 }} // Start slightly smaller and invisible
        animate={{ opacity: 1, scale: 1 }} // Scale to normal size and fade in
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      >
        <p>Skills</p>
      </motion.div>

      {/* Skills List Animation: Slide up and fade in */}
      <motion.div
        className="skills-list"
        initial={{ opacity: 0, y: 50 }} // Start below and invisible
        animate={{ opacity: 1, y: 0 }} // Slide up to normal position and fade in
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Smooth transition with slight delay
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`skill-lst list-${index + 1}`}
            initial={{ opacity: 0, y: 30 }} // Start from below and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up to normal position
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} // Stagger animation
          >
            <p>{skill}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Tools = () => {
  const tools = [
    { name: "Figma", image: "/images/Figma.png" },
    { name: "VSCode", image: "/images/VSCode.png" },
    { name: "Framer", image: "/images/framer.png" },
    { name: "Illustrator", image: "/images/illustrator.png" },
    { name: "Photoshop", image: "/images/photoshop.png" },
    { name: "Protopie", image: "/images/protopie.png" },
    { name: "Maze", image: "/images/maze.png" },
    { name: "Jitter", image: "/images/jitter.png" },
  ];

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".skills-list",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".skills",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.6,
        },
        duration: 1,
        ease: "easeOut",
      }
    );

    gsap.utils.toArray(".skill-lst").forEach((tool) => {
      gsap.fromTo(
        tool,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: tool,
            start: "top 80%",
            end: "top 30%",
            scrub: 0.6,
          },
          duration: 0.6,
          ease: "easeOut",
        }
      );
    });
  }, []);

  return (
    <section className="skills">
      {/* Label */}
      <motion.div
        className="label"
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>Tools</p>
      </motion.div>

      {/* Skills List */}
      <motion.div
        className="skills-list"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className={`skill-lst list-${index + 1}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            {/* Display image and name */}
            <img src={tool.image} alt={tool.name} className="tool-icon" />
            <p>{tool.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};


// Experience Component
const MyExperience = () => {
  const experiences = [
    {
      role: "Product Designer",
      company: "PinnacleBytes",
      startDate: "Aug 2024",
      endDate: "Present",
      description:
        "Led end-to-end design projects, enhancing user experience and efficiency. Optimized UI elements and design consistency, reducing revision cycles by 15%.",
    },
    {
      role: "UI/UX Designer",
      company: "Collab & Upskill",
      startDate: "Sept 2023",
      endDate: "Jan 2024",
      description:
        "Contributed to the design of web and mobile learning products. Collaborated with engineering teams to implement user-friendly solutions. Designed interfaces for a tech job board platform.",
    },
    {
      role: "UI/UX Designer",
      company: "Zidio Development",
      startDate: "Feb 2024",
      endDate: "Apr 2024",
      description:
        "Designed intuitive mobile and web interfaces, ensuring consistency through design systems and collaboration with cross-functional teams.",
    },
    {
      role: "UI/UX Designer Intern ",
      company: "Stay Media",
      startDate: "May 2023",
      endDate: "Nov 2023",
      description:
        "Designed user interfaces for fitness applications and e-commerce projects. Conducted A/B testing and usability studies. Collaborated with stakeholders to deliver responsive designs.",
    },
  ];

  return (
    <section className="my-experience" id="skills">
      {/* Experience Label Animation: Subtle Scale and Fade */}
      <motion.div
        className="label"
        // initial={{ opacity: 0, scale: 0.9 }} // Start slightly smaller and invisible
        animate={{ opacity: 1, scale: 1 }} // Scale to normal size and fade in
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>Experiences</p>
      </motion.div>

      {/* Experience Items */}
      <div className="experiences-listing">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            role={exp.role}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

// Main Component: Render Skills and Experiences
const MainComponent = () => (
  <div>
    <Skills />
    <Tools />
    <MyExperience />
  </div>
);

export default MainComponent;
