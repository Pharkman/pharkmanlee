// import React from "react";
// import { Link } from "react-router-dom";
// import clickSound from "./click.wav";

// const ClickSoundLink = ({ to, children, ...props }) => {
//   const playSound = () => {
//     const audio = new Audio(clickSound);
//     audio.currentTime = 0;
//     audio.play().catch(() => {});
//   };

//   return (
//     <Link
//       to={to}
//       onClick={playSound}
//       {...props}
//     >
//       {children}
//     </Link>
//   );
// };

// export default ClickSoundLink;


// SoundManager.js
import React, { createContext, useState, useEffect } from 'react';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(() => {
    const savedSound = localStorage.getItem('sound');
    return savedSound ? savedSound === 'on' : true;
  });

  useEffect(() => {
    localStorage.setItem('sound', isSoundOn ? 'on' : 'off');
  }, [isSoundOn]);

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };

  const playSound = (soundSrc) => {
    if (isSoundOn) {
      const audio = new Audio(soundSrc);
      audio.play().catch(() => {});
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => React.useContext(SoundContext);