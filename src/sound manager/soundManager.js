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