// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "../index.css";

// const Preloader = ({ onComplete }) => {
//   const preloaderRef = useRef(null);
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const path = pathRef.current;
//     const length = path.getTotalLength();

//     gsap.set(path, {
//       strokeDasharray: length,
//       strokeDashoffset: length,
//     });

//     const tl = gsap.timeline({
//       onComplete: () => {
//         gsap.to(preloaderRef.current, {
//           y: "-100vh",
//           duration: 15,
//           ease: "power2.inOut",
//           onComplete,
//         });
//       },
//     });

//     tl.to(path, {
//       strokeDashoffset: 0,
//       duration: 2,
//       ease: "power2.inOut",
//     })
//       .to(path, { fill: "#000", duration: 0.5, ease: "power2.in" })
//       .to(preloaderRef.current, {
//         y: "-100vh",
//         duration: 1,
//         ease: "power2.inOut",
//       }, "+=0.5");
//   }, [onComplete]);

//   return (
//     <div
//       id="preloader"
//       ref={preloaderRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         zIndex: 9999,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         overflow: "hidden",
//         backgroundColor: "#fff",
//       }}
//     >
//       <svg
//         width="140"
//         height="140"
//         viewBox="0 0 140 140"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           ref={pathRef}
//           d="M139.643 0.34668V139.65H0.339844V0.34668H52.9408V15.4541C29.7189 22.7049 12.8632 44.3875 12.8632 69.9984C12.8632 101.551 38.4393 127.127 69.9916 127.127C101.544 127.127 127.12 101.551 127.12 69.9984C127.12 44.3875 110.264 22.7049 87.0423 15.4541V0.34668H139.643Z"
//           fill="none"
//           stroke="#000"
//           strokeWidth="2"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Preloader;


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css";

const Preloader = ({ onComplete }) => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const pathRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.set(numberRef.current, { textContent: "0%" });

    const tl = gsap.timeline({
      onComplete: () => {
        // Split reveal animation
        const splitTl = gsap.timeline({ onComplete });

        splitTl
          .to(topRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power4.inOut",
          })
          .to(
            bottomRef.current,
            {
              y: "100%",
              duration: 1.2,
              ease: "power4.inOut",
            },
            "<"
          );
      },
    });

    // Smooth SVG drawing
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 5,
      ease: "power4.inOut",
    });

    // Percentage counter
    tl.to(
      numberRef.current,
      {
        duration: 5,
        textContent: 100,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        onUpdate: () => {
          const value = Math.round(numberRef.current.textContent);
          numberRef.current.textContent = `${value}%`;
        },
      },
      "<"
    );

    // Fill logo after drawing
    tl.to(
      path,
      {
        fill: "#000",
        duration: 1.2,
        ease: "power2.inOut",
      },
      "+=0.3"
    );
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Top half */}
      <div
        ref={topRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M139.643 0.34668V139.65H0.339844V0.34668H52.9408V15.4541C29.7189 22.7049 12.8632 44.3875 12.8632 69.9984C12.8632 101.551 38.4393 127.127 69.9916 127.127C101.544 127.127 127.12 101.551 127.12 69.9984C127.12 44.3875 110.264 22.7049 87.0423 15.4541V0.34668H139.643Z"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Bottom half */}
      <div
        ref={bottomRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <div
          className="number-loading"
        >
          <p ref={numberRef} className="number-loading" > </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;


