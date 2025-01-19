import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename `Link` from react-scroll
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./display-project.css";

const GadgetFix = ({ project }) => {
  return (
    <section className="display-project-cont">
      <div className="display-project">
      <div className="back-button">
        <RouterLink to="/" className="go-back-btn">
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>Back home</p>
        </RouterLink>
        <h1>Faruq Arowolo</h1>
      </div>

      <div className="project-content" id="gadgetfix">
        <div className="project-note">
          <p>An extended version of this project is on <a href="https://www.behance.net/faruqsola" target="_blank" rel="noopener noreferrer">
            Behance
          </a> and <a href="https://dribbble.com/Pharkmanlee" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>.</p>
        </div>
        <div className="project-desc">
          <h1 className="project-name">Gadgetfix</h1>
          <p className="project-short-desc">gadgetfix service app</p>

          <div className="designer-year">
            <div className="picture-cont">
              <img src="./images/picture2.png" alt="faruq" />
            </div>
            <p className="designer-name">Faruq Arowolo</p>
            <p className="published-date">Published on aug 2023</p>
          </div>
        </div>

        <div className="project-cover">
          <img src="./images/gadgetfix/gadgetfix-cover.png" alt="gadgetfix" />
        </div>
        <div className="introduction">
          <h1>Introduction</h1>
          <p>The Gadget Repair Application project aims to create a user-friendly mobile app that connects users seeking gadget repairs with skilled technicians. The app streamlines the repair process, offering convenience and transparency to users while empowering technicians to efficiently manage repair requests. Through intuitive features and real-time updates, the app aims to provide a seamless experience for users to have their devices repaired quickly and professionally.</p>
          <img src="./images/gadgetfix/gadgetfix-intro.png" alt="gadgetfix" />
        </div>

        <div className="problem">
          
          <h1>Problem Statement</h1>
          <p>In today's digital age, individuals often encounter challenges when seeking professional repairs for their gadgets. The process of finding skilled technicians, tracking repair progress, and obtaining reliable information can be convoluted and time-consuming. Users face a lack of transparency, delayed updates, and limited communication channels, leading to frustration and inconvenience. As a result, the current gadget repair landscape falls short in providing a streamlined and user-friendly experience for both users and technicians.</p>
          <img src="./images/gadgetfix/gadgetfix-pro.avif" alt="matchsignle" />
        </div>

        <div className="problem">
          
          <h1>Solution</h1>
          <p>The Gadget Repair Application presents a transformative solution to address the existing shortcomings in the gadget repair industry. By offering a user-friendly mobile app, this solution bridges the gap between users and skilled technicians, creating a cohesive ecosystem. The app streamlines the repair process by enabling users to easily request repairs, track progress in real time, and communicate directly with technicians. With an intuitive interface and consistent updates, users gain transparency and confidence in the repair journey. Technicians benefit from efficient management of repair requests, enhancing their ability to provide timely, high-quality service.</p>
           <img src="./images/gadgetfix/gadgetfix-solu.avif" alt="matchsignle" />
        </div>

        <div className="problem">
          <h1>Wireframe</h1>
          <p>I designed wireframes to outline FarmWise’s structure and features, ensuring a clear vision for the app before moving to high-fidelity designs.</p>
          <img src="./images/gadgetfix/gadget-wire.png" alt="problem" />
        </div>

        <div className="problem">
          <h1>UI Screens</h1>
          <p>I designed high-fidelity screens for Gadgetfix, focusing on a clean, user-friendly interface for a seamless and engaging experience.</p>
          <img src="./images/gadgetfix/gadget-1.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-2.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-3.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-4.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-5.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-6.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-7.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-8.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-9.png" alt="farmwise-project" />
          <img src="./images/gadgetfix/gadget-10.png" alt="farmwise-project" />
          
        </div>
      </div>

      <div className="next-prev-button">
        <RouterLink to="/match-single" target="_self">
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>Matchsingle</p>
        </RouterLink>
        <RouterLink to="/farm-wise" target="_self">
          <p>farmwise</p>
          <img src="./images/next.png" alt="next-prev"></img>
        </RouterLink>
      </div>
      </div>
      
    </section>
  );
};

export default GadgetFix;