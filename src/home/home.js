import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./home.css";
import { useSound } from "../click-sound/ClickSoundButton";
import gsap from "gsap";
import SplitText from "../component/animation/split-text";
import TargetCursor from "../component/animation/target-cursor";
import "../component/animation/TargetCursor.css";
import BlurText from "../component/animation/blur";

const Home = () => {
  const from = { opacity: 0, y: 40 };
  const to = { opacity: 1, y: 0 };
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const showreelRef = useRef(null);

  useEffect(() => {
    // Showreel slide-up (kept exactly as you had it)
    if (showreelRef.current) {
      gsap.fromTo(
        showreelRef.current,
        { y: "100%" },
        {
          y: "0%",
          duration: 2.5,
          ease: "power3.out",
        }
      );
    }

    // Simple smooth on-load animation for both buttons
    gsap.fromTo(
      [".startpro-btn", ".resumedow-btn"],
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.4)",
        delay: 0.8,
        stagger: 0.15, // resume comes just after start project
      }
    );
  }, []);

  const { isSoundOn, toggleSound, playSound } = useSound();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
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

  const handleOpenModal = () => {
    setShowModal(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
    playSound("/sounds/menu-sound.wav");
  };

  const handleCloseModal = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
    setShowModal(false);
    playSound("/sounds/menu-sound.wav");
  };

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    if (isDarkTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    playSound("/sounds/theme-sound.wav");
  };

  const handleToggleSound = () => {
    toggleSound();
    playSound("/sounds/theme-sound.wav");
  };

  const handleLinkClick = (sound) => {
    playSound(sound);
  };

  return (
    <section id="home" className="home">
      <div className="profilePic-location">
        <div className="myName-role">
          <div className="profile-summary">
            <div className="hero-text">
              <BlurText
                text="I turn complex ideas into clarity."
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="hero-h1"
              />
            </div>
            <div className="summary-abt">
              <SplitText
                className=""
                text="I design digital products that feel simple, intentional, and built for real people — not just users."
                delay={20}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={from}
                to={to}
                textAlign="start"
                tag="p"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>

          <div className="call-to-action-btns">
            <TargetCursor spinDuration={2} hideDefaultCursor={true} />

            <motion.div
              className="startpro-btn"
              whileHover={{ scale: 1.01, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                className="hero-btn cursor-target"
                href="mailto:pharkmanlee@gmail.com"
                onClick={() => handleLinkClick("/sounds/menu-sound.wav")}
              >
                Start a project
                <svg width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.0672 10.9417L30.4422 16.5667C30.3548 16.6542 30.2434 16.7138 30.1221 16.738C30.0008 16.7621 29.875 16.7497 29.7608 16.7024C29.6465 16.6551 29.5488 16.5749 29.4802 16.472C29.4115 16.3691 29.3749 16.2482 29.375 16.1245V11.1245H3.125C2.95924 11.1245 2.80027 11.0587 2.68306 10.9415C2.56585 10.8242 2.5 10.6653 2.5 10.4995C2.5 10.3338 2.56585 10.1748 2.68306 10.0576C2.80027 9.94036 2.95924 9.87452 3.125 9.87452H29.375V4.87452C29.3749 4.75083 29.4115 4.6299 29.4802 4.52703C29.5488 4.42416 29.6465 4.34397 29.7608 4.29663C29.875 4.24928 30.0008 4.2369 30.1221 4.26106C30.2434 4.28522 30.3548 4.34482 30.4422 4.43233L36.0672 10.0573C36.1253 10.1154 36.1714 10.1843 36.2029 10.2602C36.2343 10.3361 36.2505 10.4174 36.2505 10.4995C36.2505 10.5817 36.2343 10.663 36.2029 10.7389C36.1714 10.8147 36.1253 10.8837 36.0672 10.9417Z" fill="CurrentColor"/>
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="resumedow-btn"
              whileHover={{ scale: 1.01, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                className="resume-btn cursor-target"
                href="https://drive.google.com/file/d/1joSetmHuHoXUGA6puausdmiwtnYecQUw/view?usp=drive_link"
                onClick={() => handleLinkClick("/sounds/menu-sound.wav")}
              >
                Download Resume
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1728_8357)">
                    <path d="M18.25 11.75V16.75C18.25 16.9158 18.1842 17.0747 18.0669 17.1919C17.9497 17.3092 17.7908 17.375 17.625 17.375H3.875C3.70924 17.375 3.55027 17.3092 3.43306 17.1919C3.31585 17.0747 3.25 16.9158 3.25 16.75V11.75C3.25 11.5842 3.31585 11.4253 3.43306 11.3081C3.55027 11.1908 3.70924 11.125 3.875 11.125C4.04076 11.125 4.19973 11.1908 4.31694 11.3081C4.43415 11.4253 4.5 11.5842 4.5 11.75V16.125H17V11.75C17 11.5842 17.0658 11.4253 17.1831 11.3081C17.3003 11.1908 17.4592 11.125 17.625 11.125C17.7908 11.125 17.9497 11.1908 18.0669 11.3081C18.1842 11.4253 18.25 11.5842 18.25 11.75ZM10.3078 12.1922C10.3659 12.2503 10.4348 12.2964 10.5107 12.3279C10.5865 12.3593 10.6679 12.3755 10.75 12.3755C10.8321 12.3755 10.9135 12.3593 10.9893 12.3279C11.0652 12.2964 11.1341 12.2503 11.1922 12.1922L14.3172 9.06719C14.4047 8.97978 14.4643 8.86837 14.4885 8.74707C14.5126 8.62576 14.5002 8.50002 14.4529 8.38576C14.4055 8.27149 14.3254 8.17384 14.2225 8.10517C14.1196 8.03651 13.9987 7.9999 13.875 8H11.375V3C11.375 2.83424 11.3092 2.67527 11.1919 2.55806C11.0747 2.44085 10.9158 2.375 10.75 2.375C10.5842 2.375 10.4253 2.44085 10.3081 2.55806C10.1908 2.67527 10.125 2.83424 10.125 3V8H7.625C7.50132 7.9999 7.38038 8.03651 7.27751 8.10517C7.17464 8.17384 7.09446 8.27149 7.04711 8.38576C6.99977 8.50002 6.98739 8.62576 7.01154 8.74707C7.0357 8.86837 7.09531 8.97978 7.18281 9.06719L10.3078 12.1922Z" fill="CurrentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1728_8357">
                      <rect width="20" height="20" fill="CurrentColor" transform="translate(0.75 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="showreel">
          <div className="showreel-video" onClick={handleOpenModal} ref={showreelRef}>
            <img
              src="https://ik.imagekit.io/pharkman/General%20Asset/Frame%202147225305j.png?updatedAt=1760938584579"
              alt="Showreel Thumbnail"
              className="thumbnail"
              width="100%"
              height="100%"
              loading="lazy"
              onError={(e) => (e.target.src = "https://res.cloudinary.com/dxg3pq0ma/image/upload/v1760689066/980_1x_shots_so_iwmfx4.png")}
            />
            <div className="linear-grey"></div>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="43" height="43" rx="21.5" stroke="CurrentColor" strokeWidth="2"/>
              <path d="M17.25 14.239V30.7615C17.2524 30.8933 17.2896 31.0222 17.3578 31.1351C17.4259 31.248 17.5226 31.341 17.6381 31.4046C17.7536 31.4682 17.8839 31.5002 18.0157 31.4974C18.1476 31.4946 18.2763 31.4571 18.3891 31.3887L31.8966 23.1274C32.0045 23.0621 32.0937 22.9701 32.1556 22.8602C32.2175 22.7504 32.2501 22.6264 32.2501 22.5003C32.2501 22.3741 32.2175 22.2501 32.1556 22.1403C32.0937 22.0304 32.0045 21.9384 31.8966 21.8731L18.3891 13.6118C18.2763 13.5434 18.1476 13.5059 18.0157 13.5031C17.8839 13.5003 17.7536 13.5323 17.6381 13.5959C17.5226 13.6595 17.4259 13.7525 17.3578 13.8654C17.2896 13.9783 17.2524 14.1072 17.25 14.239Z" fill="CurrentColor" stroke="CurrentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="reel-text">
            <p>Watch Showreel</p>
          </div>
        </div>

        {/* Theme & Sound buttons - FULL and untouched */}
        <div className="theme-sound">
          <div className="sound-btn cursor-target" onClick={handleToggleSound}>
            {isSoundOn ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11.8125 2.24958V15.7496C11.8124 15.8548 11.7828 15.958 11.727 16.0472C11.6713 16.1365 11.5916 16.2083 11.497 16.2545C11.4024 16.3007 11.2968 16.3195 11.1921 16.3087C11.0874 16.2978 10.9879 16.2578 10.9048 16.1933L5.99414 12.3746H2.8125C2.51413 12.3746 2.22798 12.2561 2.017 12.0451C1.80603 11.8341 1.6875 11.5479 1.6875 11.2496V6.74958C1.6875 6.45121 1.80603 6.16506 2.017 5.95408C2.22798 5.74311 2.51413 5.62458 2.8125 5.62458H5.99414L10.9048 1.80591C10.9879 1.74131 11.0874 1.70132 11.1921 1.69049C11.2968 1.67966 11.4024 1.69842 11.497 1.74464C11.5916 1.79085 11.6713 1.86268 11.727 1.95194C11.7828 2.0412 11.8124 2.14432 11.8125 2.24958ZM14.0625 6.74958C13.9133 6.74958 13.7702 6.80884 13.6648 6.91433C13.5593 7.01982 13.5 7.16289 13.5 7.31208V10.6871C13.5 10.8363 13.5593 10.9793 13.6648 11.0848C13.7702 11.1903 13.9133 11.2496 14.0625 11.2496C14.2117 11.2496 14.3548 11.1903 14.4602 11.0848C14.5657 10.9793 14.625 10.8363 14.625 10.6871V7.31208C14.625 7.16289 14.5657 7.01982 14.4602 6.91433C14.3548 6.80884 14.2117 6.74958 14.0625 6.74958ZM16.3125 5.62458C16.1633 5.62458 16.0202 5.68384 15.9148 5.78933C15.8093 5.89482 15.75 6.03789 15.75 6.18708V11.8121C15.75 11.9613 15.8093 12.1043 15.9148 12.2098C16.0202 12.3153 16.1633 12.3746 16.3125 12.3746C16.4617 12.3746 16.6048 12.3153 16.7102 12.2098C16.8157 12.1043 16.875 11.9613 16.875 11.8121V6.18708C16.875 6.03789 16.8157 5.89482 16.7102 5.78933C16.6048 5.68384 16.4617 5.62458 16.3125 5.62458Z" fill="CurrentColor"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_1815_7790)">
                  <path d="M11.4975 1.74455C11.4028 1.69831 11.2971 1.6796 11.1923 1.69054C11.0875 1.70148 10.9879 1.74163 10.9048 1.80643L5.99414 5.6251H2.8125C2.51413 5.6251 2.22798 5.74362 2.017 5.9546C1.80603 6.16558 1.6875 6.45173 1.6875 6.7501V11.2501C1.6875 11.5485 1.80603 11.8346 2.017 12.0456C2.22798 12.2566 2.51413 12.3751 2.8125 12.3751H5.99414L10.9048 16.1938C11.0033 16.271 11.1249 16.3128 11.25 16.3126C11.3992 16.3126 11.5423 16.2533 11.6477 16.1478C11.7532 16.0424 11.8125 15.8993 11.8125 15.7501V2.2501C11.8126 2.14479 11.7831 2.04158 11.7274 1.95221C11.6717 1.86283 11.5921 1.79088 11.4975 1.74455Z" fill="CurrentColor"/>
                  <path d="M16.5455 9.00031L17.8358 7.71078C17.9413 7.60523 18.0006 7.46208 18.0006 7.31281C18.0006 7.16355 17.9413 7.02039 17.8358 6.91484C17.7302 6.8093 17.5871 6.75 17.4378 6.75C17.2885 6.75 17.1454 6.8093 17.0398 6.91484L15.7503 8.20508L14.4608 6.91484C14.3552 6.8093 14.2121 6.75 14.0628 6.75C13.9135 6.75 13.7704 6.8093 13.6648 6.91484C13.5593 7.02039 13.5 7.16355 13.5 7.31281C13.5 7.46208 13.5593 7.60523 13.6648 7.71078L14.9551 9.00031L13.6648 10.2898C13.5593 10.3954 13.5 10.5385 13.5 10.6878C13.5 10.8371 13.5593 10.9802 13.6648 11.0858C13.7704 11.1913 13.9135 11.2506 14.0628 11.2506C14.2121 11.2506 14.3552 11.1913 14.4608 11.0858L15.7503 9.79555L17.0398 11.0858C17.1454 11.1913 17.2885 11.2506 17.4378 11.2506C17.5871 11.2506 17.7302 11.1913 17.8358 11.0858C17.9413 10.9802 18.0006 10.8371 18.0006 10.6878C18.0006 10.5385 17.9413 10.3954 17.8358 10.2898L16.5455 9.00031Z" fill="CurrentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_1815_7790">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>

          <div className="theme-btn cursor-target" onClick={toggleTheme}>
            {isDarkTheme ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.68652C10.4463 1.68652 11.8601 2.11539 13.0626 2.9189C14.2651 3.72241 15.2024 4.86447 15.7559 6.20065C16.3093 7.53684 16.4541 9.00714 16.172 10.4256C15.8898 11.8441 15.1934 13.1471 14.1707 14.1697C13.148 15.1924 11.8451 15.8889 10.4266 16.171C9.00811 16.4532 7.53781 16.3084 6.20162 15.7549C4.86544 15.2014 3.72338 14.2642 2.91988 13.0616C2.11637 11.8591 1.6875 10.4453 1.6875 8.99902C1.68954 7.06026 2.46062 5.20148 3.83154 3.83057C5.20246 2.45965 7.06123 1.68857 9 1.68652ZM15.1875 8.99902C15.1856 7.35857 14.5331 5.78583 13.3732 4.62586C12.2132 3.46588 10.6405 2.81338 9 2.81152V15.1865C10.6405 15.1847 12.2132 14.5322 13.3732 13.3722C14.5331 12.2122 15.1856 10.6395 15.1875 8.99902Z" fill="CurrentColor"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.68652C7.55373 1.68652 6.13993 2.11539 4.9374 2.9189C3.73486 3.72241 2.7976 4.86447 2.24413 6.20065C1.69067 7.53684 1.54586 9.00714 1.82801 10.4256C2.11017 11.8441 2.80661 13.1471 3.82928 14.1697C4.85196 15.1924 6.15492 15.8889 7.57341 16.171C8.99189 16.4532 10.4622 16.3084 11.7984 15.7549C13.1346 15.2014 14.2766 14.2642 15.0801 13.0616C15.8836 11.8591 16.3125 10.4453 16.3125 8.99902C16.3105 7.06026 15.5394 5.20148 14.1685 3.83057C12.7975 2.45965 10.9388 1.68857 9 1.68652ZM2.8125 8.99902C2.81436 7.35857 3.46686 5.78583 4.62684 4.62586C5.78681 3.46588 7.35955 2.81338 9 2.81152V15.1865C7.35955 15.1847 5.78681 14.5322 4.62684 13.3722C3.46686 12.2122 2.81436 10.6395 2.8125 8.99902Z" fill="CurrentColor"/>
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Modal - unchanged */}
      {showModal && (
        <div className="video-modal">
          <div className="video-overlay" onClick={handleCloseModal}></div>
          <div className="video-content">
            <button className="close-btn-v cursor-target" onClick={handleCloseModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_1803_8328)">
                  <path d="M18.75 5.25L5.25 18.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.75 18.75L5.25 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_1803_8328">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
            <video ref={videoRef} controls className="video-player">
              <source src="https://ik.imagekit.io/pharkman/General%20Asset/Showreel(1).mp4?updatedAt=1760938585192" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;