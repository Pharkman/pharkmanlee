import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./nav-bar.css";
import { useSound } from "../click-sound/ClickSoundButton";
import TargetCursor from "../component/animation/target-cursor";
import "../component/animation/TargetCursor.css";
import StaggeredMenu from "../component/animation/menuStag";
import ScrollLink from "react-scroll/modules/components/Link";

const Navbar = () => {
  const { isSoundOn, toggleSound, playSound } = useSound();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
    playSound("/sounds/menu-pop.mp3");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
    playSound("/sounds/menu-pop.mp3");
  };

  const handleLinkClick = () => {
    setIsMenuVisible(false);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuIconRef.current &&
      !menuIconRef.current.contains(event.target)
    ) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuVisible(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
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

  const menuVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { y: "-100%", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 1.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="nav-container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <div className="nav-bar">
        <div className="logo-time">
          <div className="logo cursor-target">
            <RouterLink
              to="/"
              aria-label="Navigate to home page"
              onClick={(e) => {
                console.log("Logo clicked, reloading to /");
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              <svg width="98" height="46" viewBox="0 0 98 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1783_9234)">
                  <path d="M44.8855 0.611328V45.3874H0.109375V0.611328H17.0168V5.4673C9.55266 7.7979 4.13475 14.7673 4.13475 22.9994C4.13475 33.1412 12.3556 41.3621 22.4974 41.3621C32.6392 41.3621 40.8601 33.1412 40.8601 22.9994C40.8601 14.7673 35.4422 7.7979 27.978 5.4673V0.611328H44.8855Z" fill="CurrentColor" />
                </g>
                <path d="M53.198 33.2839V20.5039H57.968C59.432 20.5039 60.572 20.8579 61.388 21.5659C62.204 22.2619 62.612 23.2339 62.612 24.4819C62.612 25.3099 62.426 26.0299 62.054 26.6419C61.682 27.2419 61.148 27.7039 60.452 28.0279C59.768 28.3399 58.94 28.4959 57.968 28.4959H55.142V33.2839H53.198ZM55.142 26.7319H57.914C58.79 26.7319 59.456 26.5459 59.912 26.1739C60.368 25.7899 60.596 25.2259 60.596 24.4819C60.596 23.7499 60.368 23.2039 59.912 22.8439C59.456 22.4719 58.79 22.2859 57.914 22.2859H55.142V26.7319Z" fill="CurrentColor" />
                <path d="M63.7585 33.2839V20.5039H65.6665V25.8679L65.4325 25.8319C65.5405 25.2919 65.7385 24.8539 66.0265 24.5179C66.3145 24.1699 66.6685 23.9119 67.0885 23.7439C67.5085 23.5759 67.9705 23.4919 68.4745 23.4919C69.1705 23.4919 69.7585 23.6479 70.2385 23.9599C70.7185 24.2599 71.0785 24.6859 71.3185 25.2379C71.5705 25.7899 71.6965 26.4199 71.6965 27.1279V33.2839H69.7885V27.6319C69.7885 26.7679 69.6385 26.1319 69.3385 25.7239C69.0505 25.3039 68.5945 25.0939 67.9705 25.0939C67.2745 25.0939 66.7165 25.3159 66.2965 25.7599C65.8765 26.1919 65.6665 26.8279 65.6665 27.6679V33.2839H63.7585Z" fill="CurrentColor" />
                <path d="M76.1619 33.4999C75.1659 33.4999 74.3679 33.2719 73.7679 32.8159C73.1799 32.3599 72.8859 31.7179 72.8859 30.8899C72.8859 30.0619 73.1319 29.4199 73.6239 28.9639C74.1279 28.4959 74.9019 28.1599 75.9459 27.9559L79.2399 27.3259C79.2399 26.5819 79.0659 26.0299 78.7179 25.6699C78.3699 25.2979 77.8539 25.1119 77.1699 25.1119C76.5579 25.1119 76.0779 25.2499 75.7299 25.5259C75.3819 25.7899 75.1419 26.1859 75.0099 26.7139L73.0479 26.5879C73.2279 25.6279 73.6719 24.8719 74.3799 24.3199C75.0999 23.7679 76.0299 23.4919 77.1699 23.4919C78.4659 23.4919 79.4499 23.8399 80.1219 24.5359C80.8059 25.2199 81.1479 26.1859 81.1479 27.4339V31.1599C81.1479 31.3879 81.1839 31.5499 81.2559 31.6459C81.3399 31.7299 81.4719 31.7719 81.6519 31.7719H81.9939V33.2839C81.9339 33.2959 81.8379 33.3079 81.7059 33.3199C81.5739 33.3319 81.4359 33.3379 81.2919 33.3379C80.8839 33.3379 80.5299 33.2719 80.2299 33.1399C79.9419 33.0079 79.7259 32.7919 79.5819 32.4919C79.4379 32.1799 79.3659 31.7659 79.3659 31.2499L79.5639 31.3399C79.4679 31.7599 79.2579 32.1319 78.9339 32.4559C78.6219 32.7799 78.2199 33.0379 77.7279 33.2299C77.2479 33.4099 76.7259 33.4999 76.1619 33.4999ZM76.4679 31.9879C77.0439 31.9879 77.5359 31.8799 77.9439 31.6639C78.3519 31.4359 78.6699 31.1239 78.8979 30.7279C79.1259 30.3319 79.2399 29.8819 79.2399 29.3779V28.7659L76.4319 29.3059C75.8559 29.4139 75.4479 29.5879 75.2079 29.8279C74.9799 30.0559 74.8659 30.3499 74.8659 30.7099C74.8659 31.1179 75.0039 31.4359 75.2799 31.6639C75.5679 31.8799 75.9639 31.9879 76.4679 31.9879Z" fill="CurrentColor" />
                <path d="M82.8849 33.2839V23.7079H84.6309L84.7029 26.2459L84.5409 26.1919C84.6729 25.3279 84.9369 24.6979 85.3329 24.3019C85.7409 23.9059 86.2869 23.7079 86.9709 23.7079H87.8889V25.4179H86.9709C86.4909 25.4179 86.0889 25.4959 85.7649 25.6519C85.4409 25.8079 85.1949 26.0479 85.0269 26.3719C84.8709 26.6959 84.7929 27.1159 84.7929 27.6319V33.2839H82.8849Z" fill="CurrentColor" />
                <path d="M88.7391 33.2839V20.5039H90.6471V28.4419L94.9491 23.7079H97.3611L93.6171 27.7399L97.5051 33.2839H95.3091L92.3391 28.9279L90.6471 30.7279V33.2839H88.7391Z" fill="CurrentColor" />
                <path d="M53 45.2839V35.7079H54.746L54.8 38.0839L54.584 38.0119C54.692 37.4839 54.878 37.0339 55.142 36.6619C55.418 36.2899 55.754 36.0019 56.15 35.7979C56.546 35.5939 56.978 35.4919 57.446 35.4919C58.262 35.4919 58.928 35.7259 59.444 36.1939C59.96 36.6499 60.284 37.2799 60.416 38.0839H60.11C60.218 37.5199 60.398 37.0519 60.65 36.6799C60.914 36.2959 61.25 36.0019 61.658 35.7979C62.066 35.5939 62.528 35.4919 63.044 35.4919C63.716 35.4919 64.286 35.6359 64.754 35.9239C65.234 36.1999 65.594 36.6079 65.834 37.1479C66.086 37.6879 66.212 38.3479 66.212 39.1279V45.2839H64.304V39.5959C64.304 38.7679 64.154 38.1439 63.854 37.7239C63.554 37.3039 62.486 37.0939 62.486 37.0939C62.09 37.0939 61.742 37.1959 61.442 37.3999C61.142 37.6039 60.908 37.8979 60.74 38.2819C60.584 38.6659 60.506 39.1279 60.506 39.6679V45.2839H58.688V39.6679C58.688 38.8519 58.55 38.2219 58.274 37.7779C58.01 37.3219 57.554 37.0939 56.906 37.0939C56.498 37.0939 56.144 37.1959 55.844 37.3999C55.556 37.6039 55.328 37.9039 55.16 38.2999C54.992 38.6839 54.908 39.1399 54.908 39.6679V45.2839H53Z" fill="CurrentColor" />
                <path d="M70.6944 45.4999C69.6984 45.4999 68.9004 45.2719 68.3004 44.8159C67.7124 44.3599 67.4184 43.7179 67.4184 42.8899C67.4184 42.0619 67.6644 41.4199 68.1564 40.9639C68.6604 40.4959 69.4344 40.1599 70.4784 39.9559L73.7724 39.3259C73.7724 38.5819 73.5984 38.0299 73.2504 37.6699C72.9024 37.2979 72.3864 37.1119 71.7024 37.1119C71.0904 37.1119 70.6104 37.2499 70.2624 37.5259C69.9144 37.7899 69.6744 38.1859 69.5424 38.7139L67.5804 38.5879C67.7604 37.6279 68.2044 36.8719 68.9124 36.3199C69.6324 35.7679 70.5624 35.4919 71.7024 35.4919C72.9984 35.4919 73.9824 35.8399 74.6544 36.5359C75.3384 37.2199 75.6804 38.1859 75.6804 39.4339V43.1599C75.6804 43.3879 75.7164 43.5499 75.7884 43.6459C75.8724 43.7299 76.0044 43.7719 76.1844 43.7719H76.5264V45.2839C76.4664 45.2959 76.3704 45.3079 76.2384 45.3199C76.1064 45.3319 75.9684 45.3379 75.8244 45.3379C75.4164 45.3379 75.0624 45.2719 74.7624 45.1399C74.4744 45.0079 74.2584 44.7919 74.1144 44.4919C73.9704 44.1799 73.8984 43.7659 73.8984 43.2499L74.0964 43.3399C74.0004 43.7599 73.7904 44.1319 73.4664 44.4559C73.1544 44.7799 72.7524 45.0379 72.2604 45.2299C71.7804 45.4099 71.2584 45.4999 70.6944 45.4999ZM71.0004 43.9879C71.5764 43.9879 72.0684 43.8799 72.4764 43.6639C72.8844 43.4359 73.2024 43.1239 73.4304 42.7279C73.6584 42.3319 73.7724 41.8819 73.7724 41.3779V40.7659L70.9644 41.3059C70.3884 41.4139 69.9804 41.5879 69.7404 41.8279C69.5124 42.0559 69.3984 42.3499 69.3984 42.7099C69.3984 43.1179 69.5364 43.4359 69.8124 43.6639C70.1004 43.8799 70.4964 43.9879 71.0004 43.9879Z" fill="CurrentColor" />
                <path d="M77.4174 45.2839V35.7079H79.1634L79.2354 38.2639L79.0014 38.1379C79.1094 37.5139 79.3134 37.0099 79.6134 36.6259C79.9134 36.2419 80.2794 35.9599 80.7114 35.7799C81.1434 35.5879 81.6114 35.4919 82.1154 35.4919C82.8354 35.4919 83.4294 35.6539 83.8974 35.9779C84.3774 36.2899 84.7374 36.7219 84.9774 37.2739C85.2294 37.8139 85.3554 38.4319 85.3554 39.1279V45.2839H83.4474V39.7039C83.4474 39.1399 83.3874 38.6659 83.2674 38.2819C83.1474 37.8979 82.9494 37.6039 82.6734 37.3999C82.3974 37.1959 82.0374 37.0939 81.5934 37.0939C80.9214 37.0939 80.3754 37.3159 79.9554 37.7599C79.5354 38.2039 79.3254 38.8519 79.3254 39.7039V45.2839H77.4174Z" fill="CurrentColor" />
                <defs>
                  <clipPath id="clip0_1783_9234">
                    <rect width="45" height="45" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </RouterLink>
          </div>
        </div>
        <div className="mode-menu">
          <TargetCursor spinDuration={2} hideDefaultCursor={true} />
          <div className="menu-icon" ref={menuIconRef} onClick={toggleMenu}>
            {!isMenuVisible && (
              <div className="open-menu cursor-target">
                <svg width="54" height="20" viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4H54" stroke="CurrentColor" stroke-width="2" />
                  <path d="M0 16H54" stroke="CurrentColor" stroke-width="2" />
                </svg>
              </div>
            )}
            {isMenuVisible && (
              <div className="close-menu cursor-target">
                <svg width="54" height="20" viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L50 18" stroke="CurrentColor" stroke-width="2" />
                  <path d="M50 3L5 18" stroke="CurrentColor" stroke-width="2" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            className="menu"
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="menu-list">
              {[
                { to: "home", label: "Home" },
                { to: "about", label: "About" },
                { to: "projects", label: "Projects" },
                { to: "skills", label: "Skills" },
                { to: "contact", label: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.to}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className="menu-item"
                >
                  <span>{`0${index + 1}`}</span>
                  {location.pathname === "/" ? (
                    <ScrollLink
                      to={item.to}
                      className="menu-link cursor-target"
                      activeClass="active"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${item.to}`}
                      className="menu-link cursor-target"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </RouterLink>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;