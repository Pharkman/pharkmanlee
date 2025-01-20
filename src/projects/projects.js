// import React, { useEffect } from "react";
// import { Link as ScrollLink } from "react-scroll"; // Rename `Link` from react-scroll
// import { Link as RouterLink } from "react-router-dom";
// import { motion } from "framer-motion"; // Importing Framer Motion for animations
// import { gsap } from "gsap"; // Import GSAP
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
// import "./project.css"; // Assuming you have a CSS file for styles
// import "boxicons/css/boxicons.min.css";

// gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

// const projects = [
//   {
//     thumbnailClass: "project-1",
//     categories: ["Agric", "Case Study", "Jan 2023"],
//     projectName: "Farmwise App",
//     link: "/farm-wise",
//     section: "Feature Work",
//     id: "farmwise",
//     target: "_self",
//   },
//   {
//     thumbnailClass: "project-2",
//     categories: ["Health", "Case Study", "Apr 2024"],
//     projectName: "MedicScan App",
//     link: "/mediscan",
//     section: "Feature Work",
//     id: "mediscan",
//     target: "_self",
//   },
//   {
//     thumbnailClass: "project-3",
//     categories: ["Service", "Web Design", "Dec 2024"],
//     projectName: "AVA Laundry",
//     link: "/ava-laundry",
//     section: "Feature Work",
//     id: "avalaundry",
//     target: "_self",
//   },
//   {
//     thumbnailClass: "project-4",
//     categories: ["Fintech", "Web Design", "Dec 2024"],
//     projectName: "Ava Pay",
//     link: "/avapay",
//     section: "Feature Work",
//     id: "avapay",
//     target: "_self",
//   },
//   {
//     thumbnailClass: "project-5",
//     categories: ["E-commerce", "Web Design", "Nov 2024"],
//     projectName: "CarStar",
//     link: "https://www.behance.net/gallery/215563689/Luxury-Car-Rental-Website?",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-6",
//     categories: ["E-commerce", "Web design", "NOV 2024"],
//     projectName: "AVAStyle",
//     link: "https://www.behance.net/gallery/215563867/E-commerce-Website",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-7",
//     categories: ["Dating", "Case study", "Jan 2023"],
//     projectName: "MatchSingle App",
//     link: "/match-single",
//     section: "Feature Work",
//     id: "matchsingle",
//     target: "_self",
//   },
//   {
//     thumbnailClass: "project-8",
//     categories: ["Service", "Case study", "aug 2023"],
//     projectName: "GadgetFix App",
//     link: "/gadget-fix",
//     section: "Feature Work",
//     id: "gadgetfix",
//     target: "_self",
//   },
//   {
//     thumbnailClass: "project-9",
//     categories: ["service", "Web design", "Dec 2024"],
//     projectName: "FitFly",
//     link: "https://www.behance.net/gallery/215564177/FitFly-Travel-Landing-Page",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-10",
//     categories: ["Fintech", "UI shot", "Sep 2024"],
//     projectName: "Fintech App",
//     link: "https://www.behance.net/gallery/215564349/Fintech-App-UI",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-11",
//     categories: ["Dating", "UI Shot", "Nov 2024"],
//     projectName: "Dating App",
//     link: "https://www.behance.net/gallery/215564469/Dating-App-UI",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-12",
//     categories: ["Portfolio", "Web design", "Nov 2024"],
//     projectName: "Architect Portfolio",
//     link: "https://dribbble.com/shots/25414623-Architect-portfolio-Website",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-13",
//     categories: ["E-commerce", "UI Shot", "Nov 2024"],
//     projectName: "E-commerce App",
//     link: "https://www.behance.net/gallery/215565857/E-commerce-App-UI",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-14",
//     categories: ["Energy", "Web Design", "Dec 2024"],
//     projectName: "Ava Power",
//     link: "https://www.behance.net/gallery/215565391/AVA-Power-Landing-Page",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-15",
//     categories: ["Fitness", "Web Design", "Nov 2024"],
//     projectName: "Fittrack",
//     link: "https://www.behance.net/gallery/215566137/Fitness-Website",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-16",
//     categories: ["Pet", "Web Design", "Nov 2024"],
//     projectName: "Petpal Care",
//     link: "https://www.behance.net/gallery/215565529/Pet-Care-Hero-Section",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-17",
//     categories: ["Portfolio", "Web Design", "Jan 2024"],
//     projectName: "Portfolio Showcase",
//     link: "https://dribbble.com/shots/25414670-Portfolio-Website",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-18",
//     categories: ["Fintech", "UI Shot", "Oct 2024"],
//     projectName: "Fintech App",
//     link: "https://dribbble.com/shots/25415117-Fintech-App",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-19",
//     categories: ["E-commerce", "UI shot", "Oct 2024"],
//     projectName: "Auction Dashboard",
//     link: "https://dribbble.com/shots/25415143-Auction-App",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-20",
//     categories: ["Food", "Web Design", "Oct 2024"],
//     projectName: "BiteBliss",
//     link: "https://dribbble.com/shots/25415200-Food-ordering-website",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-21",
//     categories: ["Health", "UI Shot", "Dec 2024"],
//     projectName: "Doctor Appointment",
//     link: "https://dribbble.com/shots/25415222-Book-Doctor-Appointment-App",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-22",
//     categories: ["Automobile", "UI Shot", "Jan 2025"],
//     projectName: "Ridehub",
//     link: "https://dribbble.com/shots/25415234-Ridehub-Autompbile-website",
//     section: "UI Shot",
//     target: "_blank",
//   },
//   {
//     thumbnailClass: "project-23",
//     categories: ["Web3", "UI Shot", "Jan 2025"],
//     projectName: "Web3 App",
//     link: "https://dribbble.com/shots/25426963-Crypto-Wallet-App",
//     section: "UI Shot",
//     target: "_blank",
//   },
// ];

// const ProjectCategory = ({ categories }) => (
//   <div className="project-category">
//     {categories.map((category, index) => (
//       <React.Fragment key={index}>
//         <p>{category}</p>
//         {index < categories.length - 1 && <div className="projectCat-divider"></div>}
//       </React.Fragment>
//     ))}
//   </div>
// );

// const ProjectList = ({ thumbnailClass, categories, projectName, link, target }) => (
//   <motion.div
//     className="project-list"
//     initial={{ opacity: 0, y: 50 }} // Start position
//     animate={{ opacity: 1, y: 0 }} // End position
//     transition={{ duration: 1, ease: "easeOut" }} // Smooth animation on load
//   >
//     <RouterLink to={link} target={target} className="project-link">
//       <div className={`project-thumbnail ${thumbnailClass}`}></div>

//       <div className="projectName-category-viewPro">
//         <div className="projectName-category">
//           <ProjectCategory categories={categories} />

//           <div className="projectName">
//             <img src="./images/arrow-right.svg" alt="Arrow" />
//             <h1>{projectName}</h1>
//           </div>
//         </div>
//       </div>
//     </RouterLink>
//   </motion.div>
// );

// const MyProjects = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       ".label",
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         scrollTrigger: {
//           trigger: ".my-projects",
//           start: "top 80%",
//           end: "top 30%",
//           scrub: 1,
//         },
//         duration: 0.6,
//         ease: "easeOut",
//       }
//     );

//     gsap.utils.toArray(".project-list").forEach((project) => {
//       gsap.fromTo(
//         project,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: project,
//             start: "top 80%",
//             end: "top 50%",
//             scrub: 1,
//           },
//           duration: 1,
//           ease: "easeOut",
//         }
//       );
//     });
//   }, []);

//   const featureProjects = projects.filter(
//     (project) => project.section === "Feature Work"
//   );
//   const uiShotProjects = projects.filter((project) => project.section === "UI Shot");

//   return (
//     <section className="my-projects" id="projects">
//       <motion.div
//         className="label"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <p>Feature Work</p>
//         <span>A curated collection of my most passionate projects, showcasing my creativity and expertise.</span>
//       </motion.div>

//       <div className="case-study">
//         {featureProjects.map((project, index) => (
//           <ProjectList
//             key={index}
//             thumbnailClass={project.thumbnailClass}
//             categories={project.categories}
//             projectName={project.projectName}
//             link={project.link}
//           />
//         ))}
//       </div>

//       <motion.div
//         className="label ui-shot"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <p>UI Shot</p>
//       </motion.div>

//       <div className="case-study">
//         {uiShotProjects.map((project, index) => (
//           <ProjectList
//             key={index}
//             thumbnailClass={project.thumbnailClass}
//             categories={project.categories}
//             projectName={project.projectName}
//             link={project.link}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MyProjects;

// import React, { useEffect } from "react";
// import { motion } from "framer-motion"; // Importing Framer Motion for animations
// import { gsap } from "gsap"; // Import GSAP
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
// import "./project.css"; // Assuming you have a CSS file for styles
// import "boxicons/css/boxicons.min.css";

// gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

// const projects = [
//   {
//     thumbnailClass: "project-1",
//     categories: ["Agric", "Case Study", "Jan 2023"],
//     projectName: "Farmwise App",
//     link: "https://www.behance.net/gallery/178082215/FarmWise-UIUX",
//     section: "Feature Work",
//     id: "farmwise",
//   },
//   {
//     thumbnailClass: "project-2",
//     categories: ["Health", "Case Study", "Apr 2024"],
//     projectName: "MedicScan App",
//     link: "https://www.behance.net/gallery/215514549/MediSca-A-health-solutions-exploration",
//     section: "Feature Work",
//     id: "mediscan",
//   },
//   {
//     thumbnailClass: "project-3",
//     categories: ["Service", "Web Design", "Dec 2024"],
//     projectName: "AVA Laundry",
//     link: "https://dribbble.com/shots/25379753-AVA-Laudry-Service-Booking-Platform-Website",
//     section: "Feature Work",
//     id: "avalaundry",
//   },
//   {
//     thumbnailClass: "project-10",
//     categories: ["Fintech", "UI Shot", "Sep 2024"],
//     projectName: "Fintech App",
//     link: "https://www.behance.net/gallery/215564349/Fintech-App-UI",
//     section: "UI Shot",
//   },
//   {
//     thumbnailClass: "project-12",
//     categories: ["Portfolio", "Web design", "Nov 2024"],
//     projectName: "Architect Portfolio",
//     link: "https://dribbble.com/shots/25414623-Architect-portfolio-Website",
//     section: "UI Shot",
//   },
// ];

// const displayProjectId = "mediscan"; // Set the ID of the project to display

// const ProjectCategory = ({ categories }) => (
//   <div className="project-category">
//     {categories.map((category, index) => (
//       <React.Fragment key={index}>
//         <p>{category}</p>
//         {index < categories.length - 1 && <div className="projectCat-divider"></div>}
//       </React.Fragment>
//     ))}
//   </div>
// );

// const ProjectList = ({ thumbnailClass, categories, projectName, link }) => (
//   <motion.div
//     className="project-list"
//     initial={{ opacity: 0, y: 50 }} // Start position
//     animate={{ opacity: 1, y: 0 }} // End position
//     transition={{ duration: 1, ease: "easeOut" }} // Smooth animation on load
//   >
//     <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
//       <div className={`project-thumbnail ${thumbnailClass}`}></div>

//       <div className="projectName-category-viewPro">
//         <div className="projectName-category">
//           <ProjectCategory categories={categories} />

//           <div className="projectName">
//             <img src="./images/arrow-right.svg" alt="Arrow" />
//             <h1>{projectName}</h1>
//           </div>
//         </div>
//       </div>
//     </a>
//   </motion.div>
// );

// const MyProjects = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       ".label",
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         scrollTrigger: {
//           trigger: ".my-projects",
//           start: "top 80%",
//           end: "top 30%",
//           scrub: 1,
//         },
//         duration: 0.6,
//         ease: "easeOut",
//       }
//     );

//     gsap.utils.toArray(".project-list").forEach((project) => {
//       gsap.fromTo(
//         project,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: project,
//             start: "top 80%",
//             end: "top 50%",
//             scrub: 1,
//           },
//           duration: 1,
//           ease: "easeOut",
//         }
//       );
//     });
//   }, []);

//   // Filter the projects based on the selected ID and section
//   const featureProjects = projects.filter(
//     (project) => project.section === "Feature Work" && project.id === displayProjectId
//   );

//   const uiShotProjects = projects.filter((project) => project.section === "UI Shot");

//   return (
//     <section className="my-projects" id="projects">
//       {/* Featured Work Section */}
//       <motion.div
//         className="label"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <p>Feature Work</p>
//         <span>A curated collection of my most passionate projects, showcasing my creativity and expertise.</span>
//       </motion.div>

//       <div className="case-study">
//         {featureProjects.map((project, index) => (
//           <ProjectList
//             key={index}
//             thumbnailClass={project.thumbnailClass}
//             categories={project.categories}
//             projectName={project.projectName}
//             link={project.link}
//           />
//         ))}
//       </div>

//       {/* UI Shot Section */}
//       <motion.div
//         className="label ui-shot"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <p>UI Shot</p>
//       </motion.div>

//       <div className="case-study">
//         {uiShotProjects.map((project, index) => (
//           <ProjectList
//             key={index}
//             thumbnailClass={project.thumbnailClass}
//             categories={project.categories}
//             projectName={project.projectName}
//             link={project.link}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MyProjects;

import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./project.css";
import "boxicons/css/boxicons.min.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    thumbnailClass: "project-1",
    categories: ["Agric", "Case Study", "Jan 2023"],
    projectName: "Farmwise App",
    link: "/farm-wise",
    section: "Feature Work",
    id: "farmwise",
    target: "_self",
  },
  {
    thumbnailClass: "project-2",
    categories: ["Health", "Case Study", "Apr 2024"],
    projectName: "MedicScan App",
    link: "/mediscan",
    section: "Feature Work",
    id: "mediscan",
    target: "_self",
  },
  {
    thumbnailClass: "project-3",
    categories: ["Service", "Web Design", "Dec 2024"],
    projectName: "AVA Laundry",
    link: "/ava-laundry",
    section: "Feature Work",
    id: "avalaundry",
    target: "_self",
  },
  {
    thumbnailClass: "project-4",
    categories: ["Fintech", "Web Design", "Dec 2024"],
    projectName: "Ava Pay",
    link: "/avapay",
    section: "Feature Work",
    id: "avapay",
    target: "_self",
  },
  {
    thumbnailClass: "project-5",
    categories: ["E-commerce", "Web Design", "Nov 2024"],
    projectName: "CarStar",
    link: "https://www.behance.net/gallery/215563689/Luxury-Car-Rental-Website?",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-6",
    categories: ["E-commerce", "Web design", "NOV 2024"],
    projectName: "AVAStyle",
    link: "https://www.behance.net/gallery/215563867/E-commerce-Website",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-7",
    categories: ["Dating", "Case study", "Jan 2023"],
    projectName: "MatchSingle App",
    link: "/match-single",
    section: "Feature Work",
    id: "matchsingle",
    target: "_self",
  },
  {
    thumbnailClass: "project-8",
    categories: ["Service", "Case study", "aug 2023"],
    projectName: "GadgetFix App",
    link: "/gadget-fix",
    section: "Feature Work",
    id: "gadgetfix",
    target: "_self",
  },
  {
    thumbnailClass: "project-9",
    categories: ["service", "Web design", "Dec 2024"],
    projectName: "FitFly",
    link: "https://www.behance.net/gallery/215564177/FitFly-Travel-Landing-Page",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-10",
    categories: ["Fintech", "UI shot", "Sep 2024"],
    projectName: "Fintech App",
    link: "https://www.behance.net/gallery/215564349/Fintech-App-UI",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-11",
    categories: ["Dating", "UI Shot", "Nov 2024"],
    projectName: "Dating App",
    link: "https://www.behance.net/gallery/215564469/Dating-App-UI",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-12",
    categories: ["Portfolio", "Web design", "Nov 2024"],
    projectName: "Architect Portfolio",
    link: "https://dribbble.com/shots/25414623-Architect-portfolio-Website",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-13",
    categories: ["E-commerce", "UI Shot", "Nov 2024"],
    projectName: "E-commerce App",
    link: "https://www.behance.net/gallery/215565857/E-commerce-App-UI",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-14",
    categories: ["Energy", "Web Design", "Dec 2024"],
    projectName: "Ava Power",
    link: "https://www.behance.net/gallery/215565391/AVA-Power-Landing-Page",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-15",
    categories: ["Fitness", "Web Design", "Nov 2024"],
    projectName: "Fittrack",
    link: "https://www.behance.net/gallery/215566137/Fitness-Website",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-16",
    categories: ["Pet", "Web Design", "Nov 2024"],
    projectName: "Petpal Care",
    link: "https://www.behance.net/gallery/215565529/Pet-Care-Hero-Section",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-17",
    categories: ["Portfolio", "Web Design", "Jan 2024"],
    projectName: "Portfolio Showcase",
    link: "https://dribbble.com/shots/25414670-Portfolio-Website",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-18",
    categories: ["Fintech", "UI Shot", "Oct 2024"],
    projectName: "Fintech App",
    link: "https://dribbble.com/shots/25415117-Fintech-App",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-19",
    categories: ["E-commerce", "UI shot", "Oct 2024"],
    projectName: "Auction Dashboard",
    link: "https://dribbble.com/shots/25415143-Auction-App",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-20",
    categories: ["Food", "Web Design", "Oct 2024"],
    projectName: "BiteBliss",
    link: "https://dribbble.com/shots/25415200-Food-ordering-website",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-21",
    categories: ["Health", "UI Shot", "Dec 2024"],
    projectName: "Doctor Appointment",
    link: "https://dribbble.com/shots/25415222-Book-Doctor-Appointment-App",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-22",
    categories: ["Automobile", "UI Shot", "Jan 2025"],
    projectName: "Ridehub",
    link: "https://dribbble.com/shots/25415234-Ridehub-Autompbile-website",
    section: "UI Shot",
    target: "_blank",
  },
  {
    thumbnailClass: "project-23",
    categories: ["Web3", "UI Shot", "Jan 2025"],
    projectName: "Web3 App",
    link: "https://dribbble.com/shots/25426963-Crypto-Wallet-App",
    section: "UI Shot",
    target: "_blank",
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

const ProjectList = ({ thumbnailClass, categories, projectName, link, target }) => (
  <motion.div
    className="project-list"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {link.startsWith("http") ? (
      // External Link
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
    ) : (
      // Internal Link
      <RouterLink to={link} className="project-link">
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
      </RouterLink>
    )}
  </motion.div>
);

const MyProjects = () => {
  useEffect(() => {
    gsap.fromTo(
      ".label",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".my-projects",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        duration: 0.6,
        ease: "easeOut",
      }
    );

    gsap.utils.toArray(".project-list").forEach((project) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          duration: 1,
          ease: "easeOut",
        }
      );
    });
  }, []);

  const featureProjects = projects.filter(
    (project) => project.section === "Feature Work"
  );
  const uiShotProjects = projects.filter((project) => project.section === "UI Shot");

  return (
    <section className="my-projects" id="projects">
      <motion.div
        className="label"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p>Feature Work</p>
        <span>A curated collection of my most passionate projects, showcasing my creativity and expertise.</span>
      </motion.div>

      <div className="case-study">
        {featureProjects.map((project, index) => (
          <ProjectList
            key={index}
            thumbnailClass={project.thumbnailClass}
            categories={project.categories}
            projectName={project.projectName}
            link={project.link}
            target={project.target}
          />
        ))}
      </div>

      <motion.div
        className="label ui-shot"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p>UI Shot</p>
      </motion.div>

      <div className="case-study">
        {uiShotProjects.map((project, index) => (
          <ProjectList
            key={index}
            thumbnailClass={project.thumbnailClass}
            categories={project.categories}
            projectName={project.projectName}
            link={project.link}
            target={project.target}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
