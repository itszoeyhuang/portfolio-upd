import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = () => {
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark').matches;
    };

    const [isDarkMode, setDarkMode] = useState(getInitialTheme());

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        } else {
            document.documentElement.classList.add('light-mode');
            document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [ isDarkMode ]);
  
    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
    };
  
    return (
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        sunColor="#F6F2EC"
        moonColor="#F6F2EC"
        size={25}
      />
    );
  };

export default ThemeToggle;