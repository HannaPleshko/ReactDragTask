import React, { useContext, useState, createContext } from 'react';
import { themes } from '../styles/themes';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(0);

  const currentTheme = themes[theme];

  return (
    <ThemeContext.Provider value={currentTheme}>
      <ThemeUpdateContext.Provider value={setTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
};
