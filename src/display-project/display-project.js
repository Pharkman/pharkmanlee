import React, { useMemo, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, moreProjects } from "./projectData";
import Navbar from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import TiltedCard from "../component/animation/titled";
import "./display-project.css";

gsap.registerPlugin(ScrollTrigger);

const DisplayProject = () => {
  const { id } = useParams();
  const projectRef = useRef(null);

  const project = useMemo(() => projectsData.find((p) => p.id === id), [id]);

  const filteredMoreProjects = useMemo(() => {
    const featureProjects = moreProjects.filter((p) => p.section === "Feature Work");
    const currentIndex = featureProjects.findIndex((p) => p.id === id);
    if (currentIndex === -1) return [];
    const nextProjects = [];
    for (let i = 1; i <= 2; i++) {
      const nextIndex = (currentIndex + i) % featureProjects.length;
      if (featureProjects[nextIndex]) {
        nextProjects.push(featureProjects[nextIndex]);
      }
    }
    return nextProjects;
  }, [id]);

  // Your GSAP animations stay exactly the same
  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context((self) => {
      gsap.fromTo(".problem-statement", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2,
        scrollTrigger: { trigger: ".display-project", start: "top 80%", once: true }
      });
      gsap.fromTo(".UI-design-display > div", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.25,
        scrollTrigger: { trigger: ".UI-design-display", start: "top 80%", once: true }
      });
      gsap.fromTo(".more-projects-heading", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".more-projects", start: "top 85%", once: true }
      });
      gsap.fromTo(".more-project-slide", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2,
        scrollTrigger: { trigger: ".case-study", start: "top 80%", once: true }
      });
    }, projectRef);
    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <motion.div className="project-not-found" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Navbar />
        <div className="not-found-content">
          <h1>Project Not Found</h1>
          <p>Sorry, the project you're looking for doesn't exist.</p>
          <a href="/" className="back-home">Back to Home</a>
        </div>
        <Footer />
      </motion.div>
    );
  }

  const fallbackImage = "https://ik.imagekit.io/pharkman/General%20Asset/33417721_7974143.jpg?updatedAt=1761043442739";

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  return (
    <motion.div
      className="project-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      ref={projectRef}
    >
      <Navbar />
      <section className="display-project-cont">
        <div className="display-project">
          <div className="project-content" id={project.id}>
            {/* Header part stays the same */}
            <motion.div className="project-desc" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="project-cover-name">
                <h1 className="project-name">{project.name}</h1>
                {project.shortDesc && <p className="project-short-desc">{project.shortDesc}</p>}
                <div className="role-date-cont">
                  <div className="project-year"><span>Year</span><p>{project.year}</p></div>
                  <div className="project-industry"><span>Industry</span><p>{project.industry}</p></div>
                  <div className="project-type"><span>Type</span><p>{project.type}</p></div>
                  <div className="project-role">
                    <span>Role</span>
                    <div className="roles">
                      {project.roles.map((role, index) => (<p key={index}>{role}</p>))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="project-cover" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <img src={project.coverImage || fallbackImage} alt={project.coverAlt} loading="lazy" />
            </motion.div>

            {/* Sections and problem statements stay the same */}
            {project.sections && project.sections.length > 0 && project.sections.map((section, index) => (
              <div key={index} className="problem-statement">
                <div className="problem-txts">
                  <h1>{section.title}</h1>
                  <p>{section.text}</p>
                </div>
                {section.image && (
                  <div className="problem-img">
                    <img src={section.image || fallbackImage} alt={section.alt} loading="lazy" />
                  </div>
                )}
              </div>
            ))}

            {/* UI Screens – this is where we improved the video part */}
            {project.uiScreens && project.uiScreens.length > 0 && (
              <div className="UI-design-display">
                {project.uiScreens.map((screen, index) => (
                  <motion.div
                    key={index}
                    className={screen.class}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    {screen.image ? (
                      isVideo(screen.image) ? (
                        <video
                          src={screen.image}
                          poster={fallbackImage}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          style={{ width: "100%", height: "auto" }}
                        />
                      ) : (
                        <img src={screen.image || fallbackImage} alt={screen.alt} loading="lazy" />
                      )
                    ) : (
                      screen.images && screen.images.map((img, idx) => (
                        <div key={idx} className={img.class}>
                          {isVideo(img.image) ? (
                            <video
                              src={img.image}
                              poster={fallbackImage}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="metadata"
                              style={{ width: "100%", height: "auto" }}
                            />
                          ) : (
                            <img src={img.image || fallbackImage} alt={img.alt} loading="lazy" />
                          )}
                        </div>
                      ))
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* More Projects section stays the same */}
            <motion.div className="more-projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
              <div className="more-projects-heading">
                <h1>More Projects</h1>
              </div>
              <div className="case-study">
                {filteredMoreProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="more-project-slide"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  >
                    <a href={project.link} target={project.link.startsWith("http") ? "_blank" : "_self"} rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined} className="project-link">
                      <TiltedCard
                        imageSrc={project.imageSrc || fallbackImage}
                        altText={`${project.projectName} thumbnail`}
                        captionText="View Project"
                        rotateAmplitude={5}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                      />
                      <div className="projectName-category">
                        <p className="category-industry">{project.projectIndustry}</p>
                        <div className="projectName">
                          <h1>{project.projectName}</h1>
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 16H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 7L27 16L18 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default DisplayProject;