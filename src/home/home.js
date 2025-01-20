import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./home.css";
const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Update the time every second
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  
  const osogboTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos", 
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentTime);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    weekday: "short", 
    day: "2-digit",
    month: "short", 
  }).format(currentTime);

  const currentYear = currentTime.getFullYear(); 

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
