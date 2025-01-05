import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css"; // Include your custom styles

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null); // Reference for the preloader
  const numberRef = useRef(null); // Reference for the sliding number container

  useEffect(() => {
    const numberHeight = 6.23; // Height of each number in `rem`
    const totalNumbers = 101; // Total count from 000 to 100
    const timePerSlide = 0.2; // Time for each number to slide in seconds
    const totalDuration = totalNumbers * timePerSlide; // Total animation duration

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide the preloader out of view after counting completes
        gsap.to(preloaderRef.current, {
          y: "100%",
          duration: 1.5,
          ease: "power3.inOut",
          onComplete: onComplete, // Notify the parent component
        });
      },
    });

    // Animate the number container to slide up
    tl.to(numberRef.current, {
      y: `-${numberHeight * (totalNumbers - 1)}rem`, // Move up for all numbers
      duration: totalDuration,
      ease: "power1.inOut", // Smooth easing for a better visual effect
    });
  }, [onComplete]);

  return (
    <div
      id="preloader"
      ref={preloaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#DFD9CD",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Number Container at Bottom Left */}
      <div className="preloader-number">
        <div
          ref={numberRef}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Render numbers from 000 to 100 */}
          {[...Array(101)].map((_, i) => (
            <div
              key={i}
              style={{
                height: `${6.23}rem`, // Same height as container
                textAlign: "center",
              }}
            >
              {i.toString().padStart(3, "0")}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="center-content">
        <h1>FARUQ</h1>
      </div> */}
    </div>
  );
};

export default Preloader;
