import React, { useEffect, useRef } from "react";
import "./about-me.css";
import gsap from "gsap";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link as RouterLink } from "react-router-dom";
import TargetCursor from "../component/animation/target-cursor";
import "../component/animation/TargetCursor.css";
import BlurText from "../component/animation/blur";
import { useSound } from "../click-sound/ClickSoundButton";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
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

  const { isSoundOn, toggleSound, playSound } = useSound();
  const handleToggleSound = () => {
    toggleSound();
    playSound('/sounds/theme-sound.wav'); // Sound for sound toggle
  };

  const handleLinkClick = (sound) => {
    playSound(sound); // Play specified sound on link click
  };

  return (
    <section className="about-me" id="about" ref={sectionRef}>
      <div className="about-me-text">
        <div className="section-heading">
          <h1 ref={headingRef}>ABOUT ME</h1>
        </div>

        <div className="section-sub-heading" ref={subHeadingRef}>
          <p>
            The story behind my craft and what truly drives my design decisions.
          </p>
        </div>
      </div>

      <div className="short-about-me">
        <div className="about-read-btn">
          <div className="about-me-p" ref={aboutTextRef}>
            <p>
              I’m a multidisciplinary UX/UI Designer with over four years of
              experience creating intuitive digital experiences across fintech,
              SaaS, e-commerce, health, agriculture, and web3. My focus is on
              building user-centered, innovative solutions that align with
              business goals while enhancing usability and engagement.
            </p>
          </div>

          <motion.div 
            className="read-more-about" 
            ref={readMoreRef}
            whileHover={{ scale: 1.01, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* <TargetCursor spinDuration={2} hideDefaultCursor={true} /> */}
            <RouterLink
              to="/more-about-me"
              className="read-about-btn cursor-target"
               onClick={() => handleLinkClick('/sounds/menu-sound.wav')}
            >
              Read My Story
              <svg
                width="39"
                height="21"
                viewBox="0 0 39 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Arrow icon for read more link"
              >
                <path
                  d="M36.0672 10.9417L30.4422 16.5667C30.3548 16.6542 30.2434 16.7138 30.1221 16.738C30.0008 16.7621 29.875 16.7497 29.7608 16.7024C29.6465 16.6551 29.5488 16.5749 29.4802 16.472C29.4115 16.3691 29.3749 16.2482 29.375 16.1245V11.1245H3.125C2.95924 11.1245 2.80027 11.0587 2.68306 10.9415C2.56585 10.8242 2.5 10.6653 2.5 10.4995C2.5 10.3338 2.56585 10.1748 2.68306 10.0576C2.80027 9.94036 2.95924 9.87452 3.125 9.87452H29.375V4.87452C29.3749 4.75083 29.4115 4.6299 29.4802 4.52703C29.5488 4.42416 29.6465 4.34397 29.7608 4.29663C29.875 4.24928 30.0008 4.2369 30.1221 4.26106C30.2434 4.28522 30.3548 4.34482 30.4422 4.43233L36.0672 10.0573C36.1253 10.1154 36.1714 10.1843 36.2029 10.2602C36.2343 10.3361 36.2505 10.4174 36.2505 10.4995C36.2505 10.5817 36.2343 10.663 36.2029 10.7389C36.1714 10.8147 36.1253 10.8837 36.0672 10.9417Z"
                  fill="currentColor"
                />
              </svg>
            </RouterLink>
          </motion.div>
        </div>

        <div className="other-image-2" ref={imageRef}>
          <img src="https://ik.imagekit.io/pharkman/General%20Asset/faruq.jpg" alt="faruq" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;