import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css"; // Include your custom styles

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null); // Reference for the preloader
  const numberRef = useRef(null); // Reference for the sliding number container
  const sliderRef = useRef(null); // Reference for the loading slider

  useEffect(() => {
    const numberHeight = 6.23; // Height of each number in `rem`
    const totalNumbers = 101; // Total count from 000 to 100
    const timePerSlide = 0.09; // Time for each number to slide in seconds
    const totalDuration = totalNumbers * timePerSlide; // Total animation duration

    const tl = gsap.timeline({
      onComplete: () => {
        // Instead of sliding down, use a zoom-out effect
        gsap.to(preloaderRef.current, {
          scale: 0, // Shrinks down to 0
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: onComplete, // Notify the parent component
        });
      },
    });

    // Animate the number container to slide up
    tl.to(numberRef.current, {
      y: `-${numberHeight * (totalNumbers - 1)}rem`, // Move up for all numbers
      duration: totalDuration,
      ease: "power1.inOut",
    });

    // Animate the inner-slider width (progress bar effect)
    tl.to(
      sliderRef.current,
      {
        width: "100%", // Expands from 0% to 100%
        duration: totalDuration,
        ease: "power1.inOut",
      },
      "<" // Start this animation at the same time as the number animation
    );
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
        backgroundColor: "#000",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "column",
        transformOrigin: "center", // Ensures it zooms out from the center
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

      {/* Center Loading Slider */}
      <div className="center-slider">
        <div
          className="inner-slider"
          ref={sliderRef}
          style={{
            width: "0%", // Start with no width
            height: "100%", // Adjust thickness
            backgroundColor: "#DFD9CD",
            transition: "width 0.1s linear",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
