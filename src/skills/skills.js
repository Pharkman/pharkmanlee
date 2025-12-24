import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./skills.css";
import ImageTrail from "../component/animation/imagetrail";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills = [
    {
      name: "Product Design",
      image: "https://ik.imagekit.io/pharkman/Handyman%20web/Mockup%2018.png?updatedAt=1760938291142",
    },
    {
      name: "UI/UX Audits",
      image: "https://ik.imagekit.io/pharkman/General%20Asset/ux-audit-1707763290320-2x.jpg",
    },
    {
      name: "Illustration",
      image: "https://ik.imagekit.io/pharkman/General%20Asset/Frame%202147228558%201.png",
    },
    {
      name: "Design Systems",
      image: "https://ik.imagekit.io/pharkman/General%20Asset/image14.avif",
    },
    {
      name: "Email Template Design",
      image: "https://ik.imagekit.io/pharkman/General%20Asset/Frame%202147228258.png",
    },
    {
      name: "Prototyping & Testing",
      image: "https://ik.imagekit.io/pharkman/General%20Asset/388c0b0a8960812a755bc322ba7264c97e797e40-2138x1200.jpg",
    },
    {
      name: "Frontend Development",
      image: "https://ik.imagekit.io/pharkman/General%20Asset/computer-program-coding-screen_53876-138060.avif",
    },
  ];

  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      // Heading + subheading
      gsap.fromTo(
        [".skills .section-heading", ".skills .section-sub-heading"],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".skills .label",
            start: "top 80%",
            once: true,
          },
        }
      );

      // All skill items - staggered reveal when section enters
      gsap.fromTo(
        ".skills .expertise-list",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".skills-list",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="label">
        <div className="section-heading">
          <h1>My Expertise</h1>
        </div>
        <div className="section-sub-heading">
          <p>What I rely on to turn messy ideas into clean, thoughtful experiences.</p>
        </div>
      </div>

      <div className="skills-list">
        <div className="expertise-cont">
          <div className="expertise-list-cont">
            {skills.map((skill, index) => (
              <div className="expertise-list" key={index}>
                <ImageTrail items={[skill.image]} variant={1} />
                <div className="skill-content">
                  <p className="skill-p">{skill.name}</p>
                  <span>{`0${index + 1}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MyExperience = () => {
  const experiences = [
    {
      role: "Product Designer",
      company: "Decklo",
      startDate: "Jul 2025",
      endDate: "Present",
      description: "Led end-to-end design projects, enhancing user experience and efficiency. Optimized UI elements and design consistency, reducing revision cycles by 15%.",
      images: ["https://ik.imagekit.io/pharkman/Gidipitch/Mockup%204.png?updatedAt=1760883185060"],
    },
    {
      role: "UI Designer",
      company: "Bloc Social",
      startDate: "Feb 2025",
      endDate: "Jul 2025",
      description: "Led end-to-end design projects, enhancing user experience and efficiency. Optimized UI elements and design consistency, reducing revision cycles by 15%.",
      images: ["https://ik.imagekit.io/pharkman/Beam%201/Mockup%205.png?updatedAt=1760882128669"],
    },
    {
      role: "Product Designer",
      company: "PinnacleBytes",
      startDate: "Aug 2024",
      endDate: "Jan 2025",
      description: "Led end-to-end design projects, enhancing user experience and efficiency. Optimized UI elements and design consistency, reducing revision cycles by 15%.",
      images: ["https://ik.imagekit.io/pharkman/Paypro/Mockup%203.png?updatedAt=1760882433240"],
    },
    {
      role: "UI/UX Designer",
      company: "Zidio Development",
      startDate: "Feb 2024",
      endDate: "Apr 2024",
      description: "Designed intuitive mobile and web interfaces, ensuring consistency through design systems and collaboration with cross-functional teams.",
      images: ["https://ik.imagekit.io/pharkman/General%20Asset/Frame%202147225305j.png?updatedAt=1760938584579"],
    },
    {
      role: "UI/UX Designer",
      company: "Collab & Upskill",
      startDate: "Sept 2023",
      endDate: "Jan 2024",
      description: "Contributed to the design of web and mobile learning products. Collaborated with engineering teams to implement user-friendly solutions.",
      images: ["https://ik.imagekit.io/pharkman/Tresta/Mockup%207.png?updatedAt=1760882029741"],
    },
    {
      role: "UI/UX Designer Intern",
      company: "Stay Media",
      startDate: "May 2023",
      endDate: "Nov 2023",
      description: "Designed user interfaces for fitness applications and e-commerce projects. Conducted A/B testing and usability studies.",
      images: ["https://ik.imagekit.io/pharkman/Wellivo/Mockup%206.png?updatedAt=1760938247542"],
    },
  ];

  const expRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      // Experience heading
      gsap.fromTo(
        ".my-experience .section-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".my-experience .label",
            start: "top 80%",
            once: true,
          },
        }
      );

      // All experience items - staggered when list enters view
      gsap.fromTo(
        ".my-experience .exp-list",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".expertise-cont",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, expRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="my-experience" id="experience" ref={expRef}>
      <div className="label">
        <div className="section-heading">
          <h1>Experiences</h1>
        </div>
        <div className="section-sub-heading">
          <p>Moments, teams, and lessons that made me the designer I am today.</p>
        </div>
      </div>

      <div className="expertise-cont">
        <div className="expertise-list-cont">
          {experiences.map((exp, index) => (
            <div className="exp-list" key={index}>
              <ImageTrail items={exp.images} variant={1} />
              <div className="exp-list-cont">
                <div className="role-company-name">
                  <p className="role-exp">{exp.role}</p>
                  <p className="company-exp">{exp.company}</p>
                </div>
                <span>{exp.startDate} – {exp.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MainComponent = () => (
  <div>
    <Skills />
    <MyExperience />
  </div>
);

export default MainComponent;