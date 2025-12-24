import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./nav-bar/nav-bar";
import Home from "./home/home";
import AboutMe from "./about-me/about-me";
import Skills from "./skills/skills";
import Testmonials from "./Reviews/reviews";
import MyProjects from "./projects/projects";
import Footer from "./footer/footer";
import Preloader from "./component/Preloader";
import DisplayProject from "./display-project/display-project";
import AllMyProjects from "./all-project/all-projects";
import MoreAboutMe from "./more baout me/more-about-me";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(sessionStorage.getItem("loaded") ? false : true);

  useEffect(() => {
    if (!sessionStorage.getItem("loaded")) {
      setLoading(true);
      sessionStorage.setItem("loaded", "true");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                  <div id="reviews">
                    <Testmonials />
                  </div>
                  <div id="contact">
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/projects/:id" element={<DisplayProject />} />
            <Route path="/all-projects" element={<AllMyProjects />} />
            <Route path="/more-about-me" element={<MoreAboutMe />} />
          </Routes>
        </>
      )}
    </>
  );
};


export default App;
