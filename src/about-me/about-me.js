// import React, { useEffect, useRef, useState } from "react";
// import "./about-me.css";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import CustomCursor from "../component/customCursor";

// gsap.registerPlugin(ScrollTrigger);

// const AboutMe = () => {
//   const imagesRef = useRef(null);
//   const textRef = useRef(null);
//   const [displayText, setDisplayText] = useState("");
//   const fullText = "I’m a multidisciplinary UX/UI Designer with over 4 years of experience in crafting intuitive, user-focused interfaces for mobile and web applications. My passion lies in creating seamless, engaging experiences that are not only functional but also aligned with the mission of delivering sustainable and innovative digital solutions. With a strong emphasis on usability and design thinking, I strive to create products that resonate with users while meeting business goals. Outside of work, I’m an avid Manchester United supporter, enjoy listening to music, and love playing basketball.";

//   useEffect(() => {
//     // Animation for "my-images" (slide up slowly)
//     gsap.fromTo(
//       imagesRef.current,
//       { opacity: 0, y: 150 }, // Start from opacity 0 and 150px below
//       {
//         opacity: 1,
//         y: 0, // Slide up to its normal position
//         duration: 3, // Increase duration for slower slide
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: imagesRef.current,
//           start: "top 80%", // Start animation when element enters 80% of the viewport
//           end: "top 60%",
//           scrub: true,
//         },
//       }
//     );

//     // Text typing effect
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       if (i < fullText.length) {
//         setDisplayText((prev) => prev + fullText[i]);
//         i++;
//       } else {
//         clearInterval(typingInterval); 
//       }
//     }, 50); 

//     return () => clearInterval(typingInterval); 
//   }, [fullText]);

//   return (
//     <section className="about-me" id="about">
//       <div className="my-images" ref={imagesRef}>
//         <div className="image-1"></div>
//       </div>
//       <div className="about-me-text" ref={textRef}>
//         <p>{displayText}</p>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;


import React, { useEffect, useRef, useState } from "react";
import "./about-me.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomCursor from "../component/customCursor";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const imagesRef = useRef(null);
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "I’m a multidisciplinary UX/UI Designer with over 4 years of experience in crafting intuitive, user-focused interfaces for mobile and web applications. My passion lies in creating seamless, engaging experiences that are not only functional but also aligned with the mission of delivering sustainable and innovative digital solutions. With a strong emphasis on usability and design thinking, I strive to create products that resonate with users while meeting business goals. Outside of work, I’m an avid Manchester United supporter, enjoy listening to music, and love playing basketball.";

  useEffect(() => {
    // New Image Animation: Zoom-In and Fade-In
    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, scale: 0.8 }, // Start with reduced opacity and scale
      {
        opacity: 1,
        scale: 1, // Zoom back to normal scale
        duration: 2, // Duration of animation
        ease: "power3.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // Text Typing Effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(typingInterval); // Stop the interval when the text is complete
      }
    }, 50);

    // Cleanup Function
    return () => {
      clearInterval(typingInterval); // Clear interval on unmount
    };
  }, []);

  return (
    <section className="about-me" id="about">
      <div className="my-images" ref={imagesRef}>
        <div className="image-1"></div>
      </div>
      <div className="about-me-text" ref={textRef}>
        <p>{displayText}</p>
      </div>
    </section>
  );
};

export default AboutMe;
