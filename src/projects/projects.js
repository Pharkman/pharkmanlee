import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import { gsap } from "gsap";  // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";  // Import ScrollTrigger
import "./project.css";  // Assuming you have a CSS file for styles
import 'boxicons/css/boxicons.min.css';

gsap.registerPlugin(ScrollTrigger);  // Register the ScrollTrigger plugin

const projects = [
  {
    thumbnailClass: "project-1",
    categories: ["Agric", "Case Study", "Jan 2023"],
    projectName: "Farmwise App",
    link: "https://www.behance.net/gallery/178082215/FarmWise-UIUX",
  },
  {
    thumbnailClass: "project-2",
    categories: ["Health", "Case Study", "Apr 2024"],
    projectName: "MedicScan App",
    link: "https://www.behance.net/gallery/215514549/MediSca-A-health-solutions-exploration",
  },
  {
    thumbnailClass: "project-3",
    categories: ["Service", "Web Design", "Dec 2024"],
    projectName: "AVA Laundry",
    link: "https://dribbble.com/shots/25379753-AVA-Laudry-Service-Booking-Platform-Website",
  },
  {
    thumbnailClass: "project-4",
    categories: ["Fintech", "Web Design", "Dec 2024"],
    projectName: "Ava Pay",
    link: "https://www.behance.net/gallery/215550667/WEBSITE-FOR-A-FINTECH-APP",
  },
  {
    thumbnailClass: "project-5",
    categories: ["E-commerce", "Web Design", "Nov 2024"],
    projectName: "CarStar",
    link: "https://www.behance.net/gallery/215563689/Luxury-Car-Rental-Website?",
  },
  {
    thumbnailClass: "project-6",
    categories: ["E-commerce", "Web design", "NOV 2024"],
    projectName: "AVAStyle",
    link: "https://www.behance.net/gallery/215563867/E-commerce-Website",
  },
  {
    thumbnailClass: "project-7",
    categories: ["Dating", "Case study", "Jan 2023"],
    projectName: "MatchSingle App",
    link: "https://www.behance.net/gallery/183193631/Matchsingle-Dating-App-Case-Study",
  },
  {
    thumbnailClass: "project-8",
    categories: ["Service", "Case study", "Jan 2024"],
    projectName: "GadgetFix App",
    link: "https://www.behance.net/gallery/178941613/Gadget-Repair-App",
  },
  {
    thumbnailClass: "project-9",
    categories: ["service", "Web design", "Dec 2024"],
    projectName: "FitFly",
    link: "https://www.behance.net/gallery/215564177/FitFly-Travel-Landing-Page",
  },
  {
    thumbnailClass: "project-10",
    categories: ["Fintech", "UI shot", "Sep 2024"],
    projectName: "Fintech App",
    link: "https://www.behance.net/gallery/215564349/Fintech-App-UI",
  },
  {
    thumbnailClass: "project-11",
    categories: ["Dating", "UI Shot", "Nov 2024"],
    projectName: "Dating App",
    link: "https://www.behance.net/gallery/215564469/Dating-App-UI",
  },
  {
    thumbnailClass: "project-12",
    categories: ["Portfolio", "Web design", "Nov 2024"],
    projectName: "Architect Portfolio",
    link: "https://dribbble.com/shots/25414623-Architect-portfolio-Website",
  },
  {
    thumbnailClass: "project-13",
    categories: ["E-commerce", "UI Shot", "Nov 2024"],
    projectName: "E-commerce App",
    link: "https://www.behance.net/gallery/215565857/E-commerce-App-UI",
  },
  {
    thumbnailClass: "project-14",
    categories: ["Energy", "Web Design", "Dec 2024"],
    projectName: "Ava Power",
    link: "https://www.behance.net/gallery/215565391/AVA-Power-Landing-Page",
  },
  {
    thumbnailClass: "project-15",
    categories: ["Fitness", "Web Design", "Nov 2024"],
    projectName: "Fittrack",
    link: "https://www.behance.net/gallery/215566137/Fitness-Website",
  },
  {
    thumbnailClass: "project-16",
    categories: ["Pet", "Web Design", "Nov 2024"],
    projectName: "Petpal Care",
    link: "https://www.behance.net/gallery/215565529/Pet-Care-Hero-Section",
  },
  {
    thumbnailClass: "project-17",
    categories: ["Portfolio", "Web Design", "Jan 2024"],
    projectName: "Portfolio Showcase",
    link: "https://dribbble.com/shots/25414670-Portfolio-Website",
  },
  {
    thumbnailClass: "project-18",
    categories: ["Fintech", "UI Shot", "Oct 2024"],
    projectName: "Fintech App",
    link: "https://dribbble.com/shots/25415117-Fintech-App",
  },
  {
    thumbnailClass: "project-19",
    categories: ["E-commerce", "UI shot", "Oct 2024"],
    projectName: "Auction Dashboard",
    link: "https://dribbble.com/shots/25415143-Auction-App",
  },
  {
    thumbnailClass: "project-20",
    categories: ["Food", "Web Design", "Oct 2024"],
    projectName: "BiteBliss",
    link: "https://dribbble.com/shots/25415200-Food-ordering-website",
  },
  {
    thumbnailClass: "project-21",
    categories: ["Health", "UI Shot", "Dec 2024"],
    projectName: "Doctor Appointment",
    link: "https://dribbble.com/shots/25415222-Book-Doctor-Appointment-App",
  },
  {
    thumbnailClass: "project-22",
    categories: ["Automobile", "UI Shot", "Jan 2025"],
    projectName: "Ridehub",
    link: "https://dribbble.com/shots/25415234-Ridehub-Autompbile-website",
  },
  {
    thumbnailClass: "project-23",
    categories: ["Web3", "UI Shot", "Jan 2025"],
    projectName: "Web3 App",
    link: "https://dribbble.com/shots/25426963-Crypto-Wallet-App",
  },
];

const ProjectCategory = ({ categories }) => (
  <div className="project-category">
    {categories.map((category, index) => (
      <React.Fragment key={index}>
        <p>{category}</p>
        {index < categories.length - 1 && <div className="projectCat-divider"></div>}
      </React.Fragment>
    ))}
  </div>
);

const ProjectList = ({ thumbnailClass, categories, projectName, link }) => (
  <motion.div 
    className="project-list"
    initial={{ opacity: 0, y: 50 }} // Start position
    animate={{ opacity: 1, y: 0 }}  // End position
    transition={{ duration: 1, ease: "easeOut" }} // Smooth animation on load
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className={`project-thumbnail ${thumbnailClass}`}></div>

      <div className="projectName-category-viewPro">
        <div className="projectName-category">
          <ProjectCategory categories={categories} />

          <div className="projectName">
            <img src="./images/arrow-right.svg" alt="Arrow" />
            <h1>{projectName}</h1>
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);

const MyProjects = () => {
  useEffect(() => {
    // Animate the label on scroll (using GSAP and ScrollTrigger)
    gsap.fromTo(
      ".label", // Targeting the label element
      {
        y: 50,  // Start position (50px below)
        opacity: 0  // Start as invisible
      },
      {
        y: 0,  // End position (normal position)
        opacity: 1,  // End as visible
        scrollTrigger: {
          trigger: ".my-projects",  // When the .my-projects section hits the viewport
          start: "top 80%",  // Start the animation when 80% of the section is visible
          end: "top 30%",  // End the animation when it's 30% visible
          scrub: 1  // Makes the animation smooth when scrolling
        },
        duration: 0.6,  // Animation duration
        ease: "easeOut" // Ease-out for smooth transition
      }
    );
    
    // Animate project list items with a smooth transition
    gsap.utils.toArray(".project-list").forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          opacity: 0,  // Start as invisible
          y: 50  // Start with a downward offset
        },
        {
          opacity: 1,  // End as visible
          y: 0,  // End with normal position
          scrollTrigger: {
            trigger: project,  // Target the current project list item
            start: "top 80%",  // Start when 80% of the project list is visible
            end: "top 50%",  // End when it's 50% visible
            scrub: 1  // Smooth animation on scroll
          },
          duration: 1,  // Animation duration for each item
          ease: "easeOut"  // Smooth ease-out transition
        }
      );
    });
  }, []);

  return (
    <section className="my-projects" id="projects">
      <motion.div
        className="label"
        initial={{ opacity: 0, y: 50 }}  // Label starts off-screen
        animate={{ opacity: 1, y: 0 }}   // Label slides in
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth slide-up effect
      >
        <p>Feature Work</p>
        <span>A curated collection of my most passionate projects, showcasing my creativity and expertise.</span>
      </motion.div>

      <div className="case-study">
        {projects.map((project, index) => (
          <ProjectList
            key={index}
            thumbnailClass={project.thumbnailClass}
            categories={project.categories}
            projectName={project.projectName}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
