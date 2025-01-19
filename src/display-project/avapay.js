import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename `Link` from react-scroll
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./display-project.css";

const AvaPay = ({ project }) => {
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
      <div className="project-content" id="avapay">
        <div className="project-note">
          <p>An extended version of this project is on <a href="https://www.behance.net/faruqsola" target="_blank" rel="noopener noreferrer">
            Behance
          </a> and <a href="https://dribbble.com/Pharkmanlee" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>.</p>
        </div>
        <div className="project-desc">
          <h1 className="project-name">Avapay</h1>
          <p className="project-short-desc">Cross border Fintech app</p>

          <div className="designer-year">
            <div className="picture-cont">
              <img src="./images/picture2.png" alt="faruq" />
            </div>
            <p className="designer-name">Faruq Arowolo</p>
            <p className="published-date">Published on dec 2024</p>
          </div>
        </div>

        <div className="project-cover">
          <img src="./images/avapay/avapay-cover.png" alt="avapay" />
        </div>
        <div className="introduction">
          <h1>Introduction</h1>
          <p>AvaPay is a high-performance payment platform designed for seamless, real-time transactions. With unmatched speed, reliability, and security, it simplifies financial operations and ensures smooth, efficient payments for businesses and individuals alike.</p>
          <img src="./images/avapay/avapay-intro.png" alt="avapay" />
        </div>

        <div className="problem">
          
          <h1>Problem Statement</h1>
          <p>In today’s fast-paced financial world, businesses and individuals face challenges with slow, unreliable, and insecure payment systems that hinder seamless transactions and disrupt operations.</p>
          <img src="./images/avapay/avapay-pro.jpg" alt="avapay" />
        </div>

        <div className="problem">
          
          <h1>Solution</h1>
          <p>AvaPay offers a seamless, high-performance payment platform that ensures fast, real-time transactions with top-tier security and reliability, empowering businesses to streamline their financial operations.</p>
           <img src="./images/avapay/avapay-solu.png" alt="avapay" />
        </div>

        <div className="problem">
          <h1>UI Screens</h1>
          <p>I designed high-fidelity screens for Avapay, focusing on a clean, user-friendly interface for a seamless and engaging experience.</p>
          <img src="./images/avapay/avapay-1.png" alt="avapay" />
          <img src="./images/avapay/avapay-2.png" alt="avapay" />
          <img src="./images/avapay/avapay-3.png" alt="avapay" />
          <img src="./images/avapay/avapay-4.png" alt="avapay" />
          <img src="./images/avapay/avapay-5.png" alt="avapay" />
          <img src="./images/avapay/avapay-6.png" alt="avapay" />
          <img src="./images/avapay/avapay-7.png" alt="avapay" />
          
        </div>
      </div>

      <div className="next-prev-button">
        <RouterLink to="/ava-laundry" target="_self">
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>Avalaundry</p>
        </RouterLink>
        <RouterLink to="/match-single" target="_self">
          <p>Matchsignle</p>
          <img src="./images/next.png" alt="next-prev"></img>
        </RouterLink>
      </div>
      </div>
      
    </section>
  );
};

export default AvaPay;