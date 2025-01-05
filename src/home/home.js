import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./home.css";
import CustomCursor from "../component/customCursor"; // Corrected import path

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set interval to update time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Update the time every second
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time and date for display, ensuring Osogbo (WAT - UTC +1) time zone is used
  const osogboTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos", // Nigeria's time zone
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentTime);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    weekday: "short", // e.g., 'Sun'
    day: "2-digit", // e.g., '23'
    month: "short", // e.g., 'Jan'
  }).format(currentTime);

  const currentYear = currentTime.getFullYear(); // Get the current year dynamically

  return (
    <motion.section 
      id="home"
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="my-name"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <h1>FARUQ AROWOLO</h1>
      </motion.div>
      <motion.div
        className="profilePic-location"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      >
      
        <div className="myName-role">
          <p className="myRole">
            I’m a dedicated UX/UI Designer with 4+ years of experience helping businesses create intuitive, user-friendly digital solutions. I’m passionate about delivering seamless, innovative designs that drive success.
          </p>
        </div>

        <div className="location">
          <img className="time-image" src="./images/time-04.svg" alt="Time Icon" />
          <div className="time-country">
            <div className="time-date">
              <p className="time">{osogboTime}</p> {/* Display Osogbo time */}
              <p className="date-month">{formattedDate}</p> {/* Display formatted date */}
            </div>
            <div className="country">
              <p>Osogbo, Nigeria</p>
              <div className="copyright">
                <img src="./images/copyright.svg" alt="Copyright" />
                <p>{currentYear}</p> {/* Display the current year dynamically */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
