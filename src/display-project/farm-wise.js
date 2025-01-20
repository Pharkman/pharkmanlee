import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename `Link` from react-scroll
import { Link as RouterLink } from "react-router-dom"; // Rename `Link` from react-router-dom
import { motion } from "framer-motion"; // Import Framer Motion
import "./display-project.css";

const FarmWise = ({ project }) => {
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

      <div className="project-content" id="farmwise">
        <div className="project-desc">
          <div className="project-note">
          <p>An extended version of this project is on <a href="https://www.behance.net/faruqsola" target="_blank" rel="noopener noreferrer">
            Behance
          </a> and <a href="https://dribbble.com/Pharkmanlee" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>.</p>
        </div>
          <h1 className="project-name">FarmWise</h1>
          <p className="project-short-desc">Agriculture app for farmers</p>

          <div className="designer-year">
            <div className="picture-cont">
              <img src="./images/picture2.png" alt="faruq" />
            </div>
            <p className="designer-name">Faruq Arowolo</p>
            <p className="published-date">Published on Nov 2023</p>
          </div>
        </div>

        <div className="project-cover">
          <img src="./images/farmer-cover.png" alt="faruq" />
        </div>
        <div className="introduction">
          <h1>Introduction</h1>
          <p>FarmWise transcends the role of a mere application; it emerges as a transformative force in the agricultural sector. By synergizing farmer networking, weather intelligence, news updates, marketplace capabilities, farm tracking functionalities, and the added ability to hire tools and workers, FarmWise elevates farming methodologies, encourages progressive thinking, and enables effortless communication within the farming community. With FarmWise, agriculture's future is readily accessible to farmers, poised to reshape their practices, outcomes, and the way they manage resources.</p>
          <img src="./images/farmer-intr.png" alt="faruq" />
        </div>

        <div className="problem">
          
          <h1>Problem Statement</h1>
          <p>Traditional agricultural practices often leave farmers isolated and lacking access to essential resources and information. Farmers struggle to connect with peers, receive accurate weather forecasts, stay informed about industry news, access fair market prices, track their farm activities, and efficiently manage their operations. The absence of a comprehensive solution results in reduced productivity, uninformed decision-making, and limited growth opportunities within the agricultural sector.</p>
          <img src="./images/farmerpro.webp" alt="problem" />
        </div>

        <div className="problem">
          
          <h1>Solution</h1>
          <p>FarmWise addresses these challenges by introducing an all-encompassing mobile application that empowers farmers with a unified platform. The application facilitates networking among farmers, providing a space for collaboration and knowledge-sharing. Real-time weather updates offer accurate forecasts, enabling farmers to optimize their tasks based on weather conditions. Current news updates keep farmers informed about industry trends and innovations, promoting modernization. The buy and sell feature establishes a direct marketplace, connecting farmers with consumers and ensuring equitable pricing.</p>
          <img src="./images/farmersolu.jpeg" alt="problem" />
        </div>

        <div className="problem">
          <h1>Wireframe</h1>
          <p>I designed wireframes to outline FarmWise’s structure and features, ensuring a clear vision for the app before moving to high-fidelity designs.</p>
          <img src="./images/farmer-wire.png" alt="problem" />
        </div>

        <div className="problem">
          <h1>UI Screens</h1>
          <p>I designed high-fidelity screens for MedicScan, focusing on a clean, user-friendly interface for a seamless and engaging experience.</p>
          <img src="./images/farmwise/farmer-1.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-2.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-3.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-4.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-5.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-6.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-7.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-8.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-9.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-10.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-11.png" alt="farmwise-project" />
          <img src="./images/farmwise/farmer-12.png" alt="farmwise-project" />
          
        </div>
      </div>

      <div className="next-prev-button">
        <RouterLink to="/gadget-fix" >
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>Avalaundry</p>
        </RouterLink>
        <RouterLink to="/mediscan" className="your-button-class">
          <p>Mediscan</p>
          <img src="./images/next.png" alt="next-prev" />
        </RouterLink>
      </div>
      </div>
      
    </section>
  );
};

export default FarmWise;