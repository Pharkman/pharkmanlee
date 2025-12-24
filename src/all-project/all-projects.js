// import React, { useEffect, useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./all-project.css";
// import "boxicons/css/boxicons.min.css";
// import TargetCursor from "../component/animation/target-cursor";
// import "../component/animation/TargetCursor.css";
// import TiltedCard from "../component/animation/titled";
// import Navbar from "../nav-bar/nav-bar";
// import Footer from "../footer/footer";
// import { moreProjects } from "../display-project/projectData";

// gsap.registerPlugin(ScrollTrigger);

// const ProjectCategory = ({ projectIndustry, projectType, projectYear }) => (
//   <div className="project-category">
//     <p className="category-industry">{projectIndustry}</p>
//     <p>{projectType}</p>
//     <p>{projectYear}</p>
//   </div>
// );

// const ProjectList = ({ projectIndustry, projectType, projectYear, projectName, link, target, imageSrc, section, onUIShotClick }) => {
//   // Debug: Warn if imageSrc is a placeholder or missing
//   if (!imageSrc || imageSrc.includes("placeholder")) {
//     console.warn(`Image missing for project: ${projectName}. Using fallback image.`);
//   }

//   // Handle click to force page reload for internal links (Feature Work)
//   const handleLinkClick = (e) => {
//     if (!link.startsWith("http")) {
//       e.preventDefault();
//       console.log(`Navigating to ${link} with reload`);
//       window.location.href = link;
//     }
//   };

//   // Handle click for UI Shot projects to open modal
//   const handleUIShotClick = () => {
//     if (section === "UI Shot") {
//       console.log(`Opening modal for UI Shot: ${projectName}`);
//       onUIShotClick({ projectName, projectIndustry, projectType, projectYear, imageSrc });
//     }
//   };

//   return (
//     <motion.div
//       className="project-list"
//       initial={{ opacity: 0, y: 70 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//     >
//       {section === "UI Shot" ? (
//         <div className="project-link" onClick={handleUIShotClick}>
//           <TiltedCard
//             imageSrc={imageSrc || "https://via.placeholder.com/300"}
//             altText={`${projectName} thumbnail`}
//             captionText="View Project"
//             rotateAmplitude={5}
//             scaleOnHover={1.05}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//           />
//           <div className="projectName-category-viewPro">
//             <div className="projectName-category">
//               <ProjectCategory
//                 projectIndustry={projectIndustry}
//               />
//               <div className="projectName">
//                 <h1>{projectName}</h1>
//                 <svg
//                   width="32"
//                   height="32"
//                   viewBox="0 0 32 32"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-label="Arrow icon for project link"
//                 >
//                   <path
//                     d="M5 16H27"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M18 7L27 16L18 25"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : link.startsWith("http") ? (
//         <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
//           <TiltedCard
//             imageSrc={imageSrc || "https://via.placeholder.com/300"}
//             altText={`${projectName} thumbnail`}
//             captionText="View Project"
//             rotateAmplitude={5}
//             scaleOnHover={1.05}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//           />
//           <div className="projectName-category-viewPro">
//             <div className="projectName-category">
//               <ProjectCategory
//                 projectIndustry={projectIndustry}
//               />
//               <div className="projectName">
//                 <h1>{projectName}</h1>
//                 <svg
//                   width="32"
//                   height="32"
//                   viewBox="0 0 32 32"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-label="Arrow icon for project link"
//                 >
//                   <path
//                     d="M5 16H27"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M18 7L27 16L18 25"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </a>
//       ) : (
//         <RouterLink to={link} onClick={handleLinkClick} className="project-link">
//           <TiltedCard
//             imageSrc={imageSrc || "https://via.placeholder.com/300"}
//             altText={`${projectName} thumbnail`}
//             captionText="View Project"
//             rotateAmplitude={5}
//             scaleOnHover={1.05}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//           />
//           <div className="projectName-category-viewPro">
//             <div className="projectName-category">
//               <ProjectCategory
//                 projectIndustry={projectIndustry}
//               />
//               <div className="projectName">
//                 <h1>{projectName}</h1>
//                 <svg
//                   width="32"
//                   height="32"
//                   viewBox="0 0 32 32"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-label="Arrow icon for project link"
//                 >
//                   <path
//                     d="M5 16H27"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M18 7L27 16L18 25"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </RouterLink>
//       )}
//     </motion.div>
//   );
// };

// const AllMyProjects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     console.log("moreProjects:", moreProjects); // Debug data

//     gsap.fromTo(
//       ".label",
//       { y: 70, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         scrollTrigger: {
//           trigger: ".my-projects",
//           start: "top 80%",
//           end: "top 30%",
//           scrub: 1,
//         },
//         duration: 0.9,
//         ease: "power3.out",
//       }
//     );

//     gsap.fromTo(
//       ".read-more-about",
//       { opacity: 0, scale: 0.9 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         delay: 0.3,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ".read-more-about",
//           start: "top 95%",
//         },
//       }
//     );

//     gsap.utils.toArray(".project-list").forEach((project) => {
//       gsap.fromTo(
//         project,
//         { opacity: 0, y: 70 },
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

//   const featureProjects = moreProjects.filter((project) => project.section === "Feature Work");
//   const uiShotProjects = moreProjects.filter((project) => project.section === "UI Shot");

//   // Handle modal close
//   const handleCloseModal = () => {
//     console.log("Closing modal via button or overlay");
//     setSelectedProject(null);
//   };

//   return (
//     <div className="all-project">
//       <Navbar />
//       <section className="my-projects" id="projects">
//         <motion.div
//           className="label"
//           initial={{ opacity: 0, y: 70 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <div className="section-heading">
//             <h1>SELECTED WORK</h1>
//           </div>
//           <div className="section-sub-heading">
//             <p>A few meaningful projects that reflect how I think, solve, and design.</p>
//           </div>
//         </motion.div>

//         <div className="case-study">
//           {featureProjects.map((project, index) => (
//             <ProjectList
//               key={index}
//               projectIndustry={project.projectIndustry}
//               projectType={project.projectType}
//               projectYear={project.projectYear}
//               projectName={project.projectName}
//               link={project.link}
//               target={project.target}
//               imageSrc={project.imageSrc}
//               section={project.section}
//               onUIShotClick={() => {}}
//             />
//           ))}
//         </div>

//         <motion.div
//           className="label ui-shot"
//           initial={{ opacity: 0, y: 70 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <div className="section-heading">
//             <h1>UI SHOTS</h1>
//           </div>
//           <div className="section-sub-heading">
//             <p>Quick creative peeks into my daily explorations and visual experiments.</p>
//           </div>
//         </motion.div>

//         <div className="case-study">
//           {uiShotProjects.map((project, index) => (
//             <ProjectList
//               key={index}
//               projectIndustry={project.projectIndustry}
//               projectType={project.projectType}
//               projectYear={project.projectYear}
//               projectName={project.projectName}
//               link={project.link}
//               target={project.target}
//               imageSrc={project.imageSrc}
//               section={project.section}
//               onUIShotClick={setSelectedProject}
//             />
//           ))}
//         </div>
//       </section>

      

//       <Footer />
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="modal-overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={handleCloseModal}
//           >
//             <motion.div
//               className="modal-content"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <TargetCursor spinDuration={2} hideDefaultCursor={true} />
//               <button className="close-btn 
//               cursor-target" onClick={handleCloseModal}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <g clip-path="url(#clip0_1803_8328)">
//                   <path d="M18.75 5.25L5.25 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                   <path d="M18.75 18.75L5.25 5.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1803_8328">
//                     <rect width="24" height="24" fill="white"/>
//                   </clipPath>
//                 </defs>
//               </svg>
//             </button>

//               <div className="modal-details">
//                 <h1>{selectedProject.projectName}</h1>
//               </div>
              
//               <img
//                 src={selectedProject.imageSrc || "https://via.placeholder.com/600"}
//                 alt={selectedProject.projectName}
//                 className="modal-image"
//                 onError={(e) => {
//                   console.warn(`Failed to load modal image: ${selectedProject.imageSrc}`);
//                   e.target.src = "https://via.placeholder.com/600";
//                 }}
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default AllMyProjects;

import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./all-project.css";
import "boxicons/css/boxicons.min.css";
import TargetCursor from "../component/animation/target-cursor";
import "../component/animation/TargetCursor.css";
import TiltedCard from "../component/animation/titled";
import Navbar from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import { moreProjects } from "../display-project/projectData";

gsap.registerPlugin(ScrollTrigger);

const ProjectCategory = ({ projectIndustry}) => (
  <div className="project-category">
    <p className="category-industry">{projectIndustry}</p>
  </div>
);

const ProjectList = ({
  projectIndustry,
  projectType,
  projectYear,
  projectName,
  link,
  target,
  imageSrc,
  section,
  onUIShotClick,
}) => {
  if (!imageSrc || imageSrc.includes("placeholder")) {
    console.warn(`Image missing for project: ${projectName}. Using fallback image.`);
  }

  const handleLinkClick = (e) => {
    if (!link.startsWith("http")) {
      e.preventDefault();
      window.location.href = link;
    }
  };

  const handleUIShotClick = () => {
    if (section === "UI Shot") {
      onUIShotClick({ projectName, projectIndustry, projectType, projectYear, imageSrc });
    }
  };

  return (
    // Changed from motion.div → normal div (GSAP will handle animation)
    <div className="project-list">
      {section === "UI Shot" ? (
        <div className="project-link" onClick={handleUIShotClick}>
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
              <ProjectCategory
                projectIndustry={projectIndustry}
              />
              <div className="projectName">
                <h1>{projectName}</h1>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 7L27 16L18 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : link.startsWith("http") ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
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
              <ProjectCategory
                projectIndustry={projectIndustry}
              />
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
        <RouterLink to={link} onClick={handleLinkClick} className="project-link">
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
              <ProjectCategory
                projectIndustry={projectIndustry}
              />
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

const AllMyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Heading animation (kept simple)
    gsap.fromTo(
      ".label",
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".my-projects",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    // Project cards – animate once with stagger
    gsap.utils.toArray(".project-list").forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.08, // light stagger
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none none", // play once and stay
          },
        }
      );
    });
  }, []);

  const featureProjects = moreProjects.filter((project) => project.section === "Feature Work");
  const uiShotProjects = moreProjects.filter((project) => project.section === "UI Shot");

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="all-project">
      <Navbar />

      <section className="my-projects" id="projects">
        {/* Selected Work Heading */}
        <motion.div
          className="label"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="section-heading">
            <h1>SELECTED WORK</h1>
          </div>
          <div className="section-sub-heading">
            <p>A few meaningful projects that reflect how I think, solve, and design.</p>
          </div>
        </motion.div>

        {/* Feature Projects Grid */}
        <div className="case-study">
          {featureProjects.map((project, index) => (
            <ProjectList
              key={index}
              projectIndustry={project.projectIndustry}
              projectType={project.projectType}
              projectYear={project.projectYear}
              projectName={project.projectName}
              link={project.link}
              target={project.target}
              imageSrc={project.imageSrc}
              section={project.section}
              onUIShotClick={() => {}} // no-op for feature
            />
          ))}
        </div>

        {/* UI Shots Heading */}
        <motion.div
          className="label ui-shot"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="section-heading">
            <h1>UI SHOTS</h1>
          </div>
          <div className="section-sub-heading">
            <p>Quick creative peeks into my daily explorations and visual experiments.</p>
          </div>
        </motion.div>

        {/* UI Shots Grid */}
        <div className="case-study">
          {uiShotProjects.map((project, index) => (
            <ProjectList
              key={index}
              projectIndustry={project.projectIndustry}
              projectType={project.projectType}
              projectYear={project.projectYear}
              projectName={project.projectName}
              link={project.link}
              target={project.target}
              imageSrc={project.imageSrc}
              section={project.section}
              onUIShotClick={setSelectedProject}
            />
          ))}
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <TargetCursor spinDuration={2} hideDefaultCursor={true} />
              <button className="close-btn cursor-target" onClick={handleCloseModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_1803_8328)">
                    <path d="M18.75 5.25L5.25 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.75 18.75L5.25 5.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1803_8328">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <div className="modal-details">
                <h1>{selectedProject.projectName}</h1>
              </div>
              <img
                src={selectedProject.imageSrc || "https://via.placeholder.com/600"}
                alt={selectedProject.projectName}
                className="modal-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600";
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllMyProjects;


