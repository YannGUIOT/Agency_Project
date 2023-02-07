
import React, { useState } from 'react';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
    root.classList.toggle("dark-mode");
  };

  return (
    <img
      id="slide"
      src={`../src/assets/img/slide-${darkMode ? 0 : 1}.png`}
      alt="slide"
      height="24px"
      onClick={changeMode}
    />
  );
};

export default DarkModeButton;