import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)",
  ).matches;
  return prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("night");

  const toggleDarkTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);
  return (
    <AppContext.Provider
      value={{ isDark, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
