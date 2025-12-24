import React, { useEffect, useRef } from "react";
import "./more-about-me.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomCursor from "../component/customCursor";
import TargetCursor from "../component/animation/target-cursor";
import BlurText from "../component/animation/blur";
import Footer from "../footer/footer";
import Navbar from "../nav-bar/nav-bar";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import TiltedCard from "../component/animation/titled";
import FallingText from "../component/animation/falling-text";

gsap.registerPlugin(ScrollTrigger);

const MoreAboutMe = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const aboutTextRef = useRef(null);
  const readMoreRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth fade and slide for heading
      gsap.fromTo(
        headingRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Subheading fade in slightly after heading
      gsap.fromTo(
        subHeadingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: subHeadingRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
      ".read-more-about",
      { opacity: 0, scale: 0.1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".read-more-about",
          start: "top 95%",
        },
      }
    );


      // About paragraph – soft fade-in and upward slide
      gsap.fromTo(
        aboutTextRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: aboutTextRef.current,
            start: "top 90%",
          },
        }
      );

      // Image – gentle scale and fade
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
          },
        }
      );

      // "Read My Story" button – smooth rise and subtle hover emphasis
      gsap.fromTo(
        readMoreRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: readMoreRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (

    <div className="more-about-me">
      <Navbar />
      <section className="about-me-more" id="about-more" ref={sectionRef}>
        
        <div className="about-me-text-more">
          <div className="section-heading-more">
            <h1 ref={headingRef}>ABOUT FARUQ AROWOLO</h1>
          </div>

        </div>

        <div className="short-about-me-more">
          
          <div className="about-image-converse">

            <div className="other-image-2-more" ref={imageRef}>
              <img src="./images/faruq.jpg" alt="faruq" />
            </div>

            <motion.div 
              className="expertise-list-cont-more"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              
              >
              <div className="experience-list-more">
                <div className="project-number">
                  <p>25+</p>
                </div>
                <div className="number-desc">
                  <p>Projects shipped for clients around the world</p>
                </div>    
              </div>

              <div className="experience-list-more">
                <div className="project-number">
                  <p>100%</p>
                </div>
                <div className="number-desc">
                  <p>Successful projects delivered worldwide</p>
                </div>    
              </div>

              <div className="experience-list-more">
                <div className="project-number">
                  <p>4+</p>
                </div>
                <div className="number-desc">
                  <p>Turning real problems into real solutions</p>
                </div>    
              </div>
            </motion.div>
          </div>
          

          <div className="about-read-btn-more">
            <div className="about-me-p-more" ref={aboutTextRef}>
              <p>
                I’m Faruq Arowolo, a product designer with over four years of experience designing SaaS, fintech, and marketplace products.
              </p>
              
              <p>
                My love for tech started early. I was the kid who’d take apart family computers just to see what was inside, sometimes breaking them, but always learning. That curiosity led me to train as a computer technician in 2016, and by 2018, I began exploring frontend development. I spent countless nights bringing ideas to life with code.
              </p>

              <p>
                But over time, I realized what excited me most wasn’t just making things work, it was shaping how people felt when using them. I became drawn to that intersection of logic and emotion, where functionality meets human experience. That’s when I made the switch to product design.
              </p>

              <p>
                Since then, I’ve designed across fintech, SaaS, and marketplace products, turning complex problems into clean, usable experiences. I see design as storytelling with purpose, every color, layout, and interaction guiding someone toward clarity and confidence.
              </p>

              <p>
                Outside work, I’m a Manchester United fan, a music lover, and a weekend basketball player because rhythm, flow, and teamwork exist both on and off the screen.
              </p>
            </div>
          </div>
        </div>

          <div className="tools-cont">
            <div className="label">
              <div className="section-heading">
                <h1>Tools</h1>
              </div>

              <div className="section-sub-heading-more">
                <p>
                  The technologies that power my design and frontend workflow.
                </p>
              </div>
            </div>

            <div className="tools-use">
              <FallingText
                text={`Figma
                VSCode
                Framer
                Illustrator
                Photoshop
                Protopie
                ChatGPT
                Slack

                Vercel
                Git & GitHub
                React.js
                HTML&CSS
                Rive
                LottieFiles
                Adobe XD

                AfterEffect
                Affinity
                Jitter`}
                highlightWords={["Figma", "VSCode", "Framer", "Illustrator", "Photoshop", "Vercel", "Git & GitHub", "React.js", "HTML&CSS", "Rive", "LottieFiles", "Adobe XD", "ChatGPT",  "Slack", "AfterEffect", "Affinity",   "Protopie", "Maze", "Jitter",]}
                highlightClass="highlighted"
                trigger="scroll"
                backgroundColor="transparent"
                wireframes={false}
                gravity={2}
                fontSize="2rem"
                borderRadius="0rem"
                mouseConstraintStiffness={0.9}
              />
            </div>
          </div>

          <div className="tools">
            <div className="interest-list">
              <div className="tool-qoute">
                <div className="interest-head">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="27"
                    viewBox="0 0 26 19"
                    fill="none"
                  >
                    <path
                      d="M11.5 2V13C11.4983 14.5908 10.8657 16.116 9.74081 17.2408C8.61595 18.3657 7.09079 18.9983 5.5 19C5.23478 19 4.98043 18.8946 4.79289 18.7071C4.60536 18.5196 4.5 18.2652 4.5 18C4.5 17.7348 4.60536 17.4804 4.79289 17.2929C4.98043 17.1054 5.23478 17 5.5 17C6.56087 17 7.57828 16.5786 8.32843 15.8284C9.07857 15.0783 9.5 14.0609 9.5 13V12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H9.5C10.0304 0 10.5391 0.210714 10.9142 0.585786C11.2893 0.960859 11.5 1.46957 11.5 2ZM24 0H16.5C15.9696 0 15.4609 0.210714 15.0858 0.585786C14.7107 0.960859 14.5 1.46957 14.5 2V10C14.5 10.5304 14.7107 11.0391 15.0858 11.4142C15.4609 11.7893 15.9696 12 16.5 12H24V13C24 14.0609 23.5786 15.0783 22.8284 15.8284C22.0783 16.5786 21.0609 17 20 17C19.7348 17 19.4804 17.1054 19.2929 17.2929C19.1054 17.4804 19 17.7348 19 18C19 18.2652 19.1054 18.5196 19.2929 18.7071C19.4804 18.8946 19.7348 19 20 19C21.5908 18.9983 23.116 18.3657 24.2408 17.2408C25.3657 16.116 25.9983 14.5908 26 13V2C26 1.46957 25.7893 0.960859 25.4142 0.585786C25.0391 0.210714 24.5304 0 24 0Z"
                      fill="#868686"
                      fillOpacity="0.3"
                    />
                  </svg>

                  <div className="interest-label">
                    <p>Favorite Quote</p>
                  </div>
                </div>
                
              </div>

              <div className="interest-quote">
                <p className="fav-qoute">
                  إِنَّ مَعَ الْعُسْرِ يُسْرًا
                </p>

                <div className="interest-texts">
                  <p className="interest-text-1">Innama al-'usri yusra</p>
                  <p className="sub-interest">Indeed, with hardship comes ease.</p>
                </div>
              </div>
            </div>

            <div className="interest-list">
              <div className="tool-qoute">
                <div className="interest-label">
                  <p>Currently Reading</p>
                </div>                
              </div>
              
              <div className="interest-fav">
                <p className="fav-interest">
                  Atomic Habits
                </p>

                <div className="interest-fav-cont">
                  <a href="https://www.goodreads.com/book/show/40121378-atomic-habits" target="_blank" rel="noopener noreferrer" className="interest-fav-cont">

                    <img src="https://ik.imagekit.io/pharkman/General%20Asset/atomic-habits-book-photo.png"></img>

                  </a>

                </div>

              </div>

            </div>

            <div className="interest-list">
              <div className="tool-qoute">
                <div className="interest-label">
                  <p>Favorite Podcast</p>
                </div>                
              </div>
                
                <div className="interest-fav">
                  <p className="fav-interest">
                    UI Narrative
                  </p>

                  <div className="interest-fav-cont">
                    <iframe
                      data-testid="embed-iframe"
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/show/2xkjCA8a40WMxq90w3fm1j?utm_source=generator"
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>

                  </div>

                </div>

            </div>
          </div>
        
      </section>
      <Footer />
    </div>
    
  );
};

export default MoreAboutMe;