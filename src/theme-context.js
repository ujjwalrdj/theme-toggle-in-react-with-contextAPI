import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleThemeHandler = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
