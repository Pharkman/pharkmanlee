import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename `Link` from react-scroll
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./display-project.css";

const MatchSingle = ({ project }) => {
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

      <div className="project-content" id="matchsingle">
        <div className="project-note">
          <p>An extended version of this project is on <a href="https://www.behance.net/faruqsola" target="_blank" rel="noopener noreferrer">
            Behance
          </a> and <a href="https://dribbble.com/Pharkmanlee" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>.</p>
        </div>
        <div className="project-desc">
          <h1 className="project-name">Matchsignle</h1>
          <p className="project-short-desc">Dating app</p>

          <div className="designer-year">
            <div className="picture-cont">
              <img src="./images/picture2.png" alt="faruq" />
            </div>
            <p className="designer-name">Faruq Arowolo</p>
            <p className="published-date">Published on jan 2023</p>
          </div>
        </div>

        <div className="project-cover">
          <img src="./images/matchsingle/matchsinglec-over.png" alt="matchsignle" />
        </div>
        <div className="introduction">
          <h1>Introduction</h1>
          <p>The MatchSingle UI/UX case study explores the development of a contemporary dating app that prioritizes user-centric design to facilitate genuine connections in the digital era. MatchSingle is more than a dating platform; it's a heartfelt mission to unite people, guided by thoughtful design and exceptional user experiences.</p>
          <img src="./images/matchsingle/matchsingle-intro.png" alt="matchsignle" />
        </div>

        <div className="problem">
          
          <h1>Problem Statement</h1>
          <p>In the realm of online dating, individuals often struggle to find genuine and lasting connections. Users face issues such as difficulty in discerning sincerity in online profiles, the overwhelming volume of potential matches, and a lack of effective tools to foster meaningful interactions. These challenges hinder the pursuit of true love and leave users frustrated with the online dating experience.</p>
          <img src="./images/matchsingle/matchsingle-pro.jpg" alt="matchsignle" />
        </div>

        <div className="problem">
          
          <h1>Solution</h1>
          <p>My solution focuses on revolutionizing the online dating experience to help users overcome challenges in finding true love. I enhanced the matching process by considering deep compatibility factors, provide a user-friendly exploration interface, and facilitate meaningful conversations through intuitive chat features. This holistic approach aims to create a more user-centric, secure, and effective platform, ultimately increasing the likelihood of users finding genuine and lasting connections.</p>
           <img src="./images/matchsingle/matchsingle-solu.jpg" alt="matchsignle" />
        </div>

        <div className="problem">
          <h1>Wireframe</h1>
          <p>I designed wireframes to outline FarmWise’s structure and features, ensuring a clear vision for the app before moving to high-fidelity designs.</p>
          <img src="./images/matchsingle/matchsingle-wire.png" alt="problem" />
        </div>

        <div className="problem">
          <h1>UI Screens</h1>
          <p>I designed high-fidelity screens for Matchsignle, focusing on a clean, user-friendly interface for a seamless and engaging experience.</p>
          <img src="./images/matchsingle/matchsingle-1.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-2.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-3.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-4.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-5.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-6.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-7.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-8.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-9.png" alt="farmwise-project" />
          <img src="./images/matchsingle/matchsingle-10.png" alt="farmwise-project" />
          
        </div>
      </div>

      <div className="next-prev-button">
        <RouterLink to="/avapay" target="_self">
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>Avapay</p>
        </RouterLink >
        <RouterLink to="/gadget-fix" target="_self">
          <p>GadgetFix</p>
          <img src="./images/next.png" alt="next-prev"></img>
        </RouterLink >
      </div>
      </div>
      
    </section>
  );
};

export default MatchSingle;