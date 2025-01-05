import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./nav-bar/nav-bar";
import Home from "./home/home";
import AboutMe from "./about-me/about-me";
import Skills from "./skills/skills";
import MyProjects from "./projects/projects";
import Footer from "./footer/footer";
import CustomCursor from "./component/customCursor";
import Preloader from "./component/Preloader";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <Navbar />
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <AboutMe />
          </div>
          <div id="projects">
            <MyProjects />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
