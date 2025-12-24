// import React, { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";
// import "./sliding.css";

// const words = ["experiences", "interfaces", "solutions", "products", "journeys"];
// const images = [
//   "./images/1.png",
//   "./images/2.png",
//   "./images/3.png",
//   "./images/5.png",
//   "./images/6.png",
//   "./images/7.png",
//   "./images/8.png",
//   "./images/9.png",
//   "./images/10.png",
// ];

// const Sliding = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(sliderRef.current, {
//         x: () => -(sliderRef.current.scrollWidth / 2), // Move half the track width (since images are duplicated)
//         duration: images.length * 4, // Adjust duration based on number of images (e.g., 18s for 9 images)
//         ease: "none", // Linear for continuous motion
//         repeat: -1, // Infinite loop
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % -(sliderRef.current.scrollWidth / 2)), // Seamless loop
//         },
//       });
//     }, sliderRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="sliding-cont">
//       <div className="headin-txt">
//         <h1>My Work in Action</h1>
//         <p>
//           From ideas to impactful{" "}
//           <span className="changing-word">{words[currentWordIndex]}</span>
//         </p>
//       </div>

//       <div className="highlight-works">
//         <div className="slider-track" ref={sliderRef}>
//           {[...images, ...images].map((src, i) => (
//             <img key={i} src={src} alt={`slide-${i}`} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sliding;

// import React, { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";
// import "./sliding.css";

// const words = ["experiences", "interfaces", "solutions", "products", "journeys"];
// const images = [
//   "./images/1.png",
//   "./images/2.png",
//   "./images/3.png",
//   "./images/5.png",
//   "./images/6.png",
//   "./images/7.png",
//   "./images/8.png",
//   "./images/9.png",
//   "./images/10.png",
// ];

// const Sliding = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!sliderRef.current) return;

//     const imagesInSlider = sliderRef.current.querySelectorAll("img");
//     let loadedImages = 0;
//     const totalImages = imagesInSlider.length;

//     const onImageLoad = () => {
//       loadedImages++;
//       if (loadedImages === totalImages) {
//         const trackWidth = sliderRef.current.scrollWidth / 2;

//         const ctx = gsap.context(() => {
//           gsap.to(sliderRef.current, {
//             x: -trackWidth,
//             duration: images.length * 4,
//             ease: "none",
//             repeat: -1,
//             modifiers: {
//               x: gsap.utils.unitize((x) => parseFloat(x) % -trackWidth),
//             },
//           });
//         }, sliderRef);

//         return () => ctx.revert();
//       }
//     };

//     imagesInSlider.forEach((img) => {
//       if (img.complete) {
//         onImageLoad();
//       } else {
//         img.addEventListener("load", onImageLoad);
//         img.addEventListener("error", onImageLoad);
//       }
//     });

//     return () => {
//       imagesInSlider.forEach((img) => {
//         img.removeEventListener("load", onImageLoad);
//         img.removeEventListener("error", onImageLoad);
//       });
//     };
//   }, []);

//   return (
//     <div className="sliding-cont">
//       <div className="headin-txt">
//         <h1>My Work in Action</h1>
//         <p>
//           From ideas to impactful{" "}
//           <span className="changing-word">{words[currentWordIndex]}</span>
//         </p>
//       </div>

//       <div className="highlight-works">
//         <div className="slider-track" ref={sliderRef}>
//           {[...images, ...images].map((src, i) => (
//             <img key={i} src={src} alt={`slide-${i}`} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sliding;