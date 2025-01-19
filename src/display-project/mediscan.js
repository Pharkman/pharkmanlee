import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename `Link` from react-scroll
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./display-project.css";

const MediScan = ({ project }) => {
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

      <div className="project-content" id="mediscan">
        <div className="project-note">
          <p>An extended version of this project is on <a href="https://www.behance.net/faruqsola" target="_blank" rel="noopener noreferrer">
            Behance
          </a> and <a href="https://dribbble.com/Pharkmanlee" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>.</p>
        </div>
        <div className="project-desc">
          <h1 className="project-name">Mediscan</h1>
          <p className="project-short-desc">Healthcare app</p>

          <div className="designer-year">
            <div className="picture-cont">
              <img src="./images/picture2.png" alt="faruq" />
            </div>
            <p className="designer-name">Faruq Arowolo</p>
            <p className="published-date">Published on APR 2024</p>
          </div>
        </div>

        <div className="project-cover">
          <img src="./images/mediscan/mediscan-cover.png" alt="faruq" />
        </div>
        <div className="introduction">
          <h1>Introduction</h1>
          <p>The "MediScan" project aims to develop a user-friendly mobile application to simplify medication management. By leveraging image recognition technology, users can quickly identify medications and access comprehensive drug information. The application prioritizes inclusivity and accessibility, catering to individuals of all ages and abilities. Through collaboration with healthcare professionals and user feedback, the project strives to enhance medication safety and improve health outcomes in today's fast-paced world.</p>
          <img src="./images/mediscan/mediscan-intr.png" alt="faruq" />
        </div>

        <div className="problem">
          
          <h1>Problem Statement</h1>
          <p>In today's fast-paced world, individuals often consume multiple  medications, leading to confusion and potential health risks due to  difficulties in recognizing specific drugs or deciphering faded labels.  Additionally, older adults face challenges in accessing and  comprehending drug information due to visual impairments or cognitive  decline. These issues underscore the need for a solution that simplifies  drug identification and information retrieval, ensuring medication  safety and accessibility for all users.</p>
          <img src="./images/mediscan/mediscanpro.jpg" alt="problem" />
        </div>

        <div className="problem">
          
          <h1>Solution</h1>
          <p>Introducing MediScan, a user-friendly mobile application aimed at tackling the identified challenges. By harnessing advanced image recognition technology, MediScan allows users to effortlessly identify medications by scanning either the packaging or pills. Additionally, the app offers comprehensive drug information, encompassing dosage instructions, potential side effects, and drug interactions, all presented in a clear and understandable format. With intuitive navigation and accessibility features customized for users of all ages, MediScan promotes medication safety and empowers individuals to make informed decisions about their health.</p>
          <img src="/images/mediscan/mediscansolu.jpg" alt="problem" />
        </div>

        <div className="problem">
          <h1>Challenges and Pain Points</h1>
          <ul>
            <li>Confusion from multiple medications increases dosage errors and adverse reactions.</li>
            <li>Difficulty in identifying drugs due to faded labels leads to potential mix-ups.</li>
            <li>Limited accessibility to drug information hinders independent medication management for older adults with visual impairments or cognitive decline.</li>
            <li>Misinterpretation of instructions poses health risks, especially with complex medication regimens.</li>
            <li>Vulnerability to medication errors heightens, particularly among older adults.</li>
            <li>Dependency on external assistance delays timely medication administration and limits autonomy.</li>
          </ul>
          <img src="./images/mediscan/mediscanchan.jpg" alt="problem" />
        </div>

        <div className="problem">
          <h1>Design Process</h1>
          <p>I focused on understanding the problem, generating ideas, testing prototypes, and refining the design based on feedback.</p>
          <img src="./images/mediscan/mediscan-8.png" alt="problem" />
        </div>

        <div className="problem">
          <h1>Wireframe</h1>
          <p>I designed wireframes to outline mediscan’s structure and features, ensuring a clear vision for the app before moving to high-fidelity designs.</p>
          <img src="./images/mediscan/mediscan-wire.png" alt="problem" />
        </div>

        <div className="problem">
          <h1>UI Screens</h1>
          <p>I designed high-fidelity screens for mediscan, focusing on a clean, user-friendly interface for a seamless and engaging experience.</p>
          <img src="./images/mediscan/mediscan-1.png" alt="farmwise-project" />
          <img src="./images/mediscan/mediscan-2.png" alt="farmwise-project" />
          <img src="./images/mediscan/mediscan-3.png" alt="farmwise-project" />
          <img src="./images/mediscan/mediscan-4.png" alt="farmwise-project" />
          <img src="./images/mediscan/mediscan-5.png" alt="farmwise-project" />
          <img src="./images/mediscan/mediscan-6.png" alt="farmwise-project" />
          <img src="./images/mediscan/mediscan-7.png" alt="farmwise-project" />
          
        </div>
      </div>

      <div className="next-prev-button">
        <RouterLink to="/farm-wise" target="_self">
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>Farmwise</p>
        </RouterLink>
        <RouterLink to="/ava-laundry" target="_self">
          <p>AvaLaundry</p>
          <img src="./images/next.png" alt="next-prev"></img>
        </RouterLink>
      </div>
      </div>
      
    </section>
  );
};

export default MediScan;