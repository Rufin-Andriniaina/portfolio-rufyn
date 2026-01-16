import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(     () => JSON.parse(localStorage.getItem('darkMode')) || false
)

  useEffect(() => {
    const root = document.documentElement;

    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  const toogleDarkMode = () => {
    setDarkMode((prev) => !prev)
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toogleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
