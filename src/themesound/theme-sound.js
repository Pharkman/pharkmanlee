// src/context/ThemeSoundContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import "./theme-sound.css";

const ThemeSoundContext = createContext();

export const ThemeSoundProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isSoundOn, setIsSoundOn] = useState(() => {
    return localStorage.getItem("soundOn") === "true";
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    localStorage.setItem("soundOn", isSoundOn);
  }, [isSoundOn]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };

  const playSound = (soundPath) => {
    if (isSoundOn && soundPath) {
      const audio = new Audio(soundPath);
      audio.play().catch((error) => console.log("Audio play failed:", error));
    }
  };

  return (
    <ThemeSoundContext.Provider value={{ isDarkTheme, toggleTheme, isSoundOn, toggleSound, playSound }}>
      {children}
    </ThemeSoundContext.Provider>
  );
};

export const useThemeSound = () => useContext(ThemeSoundContext);