// ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import Categories from "./Categories";
import Delivery from "./Delivery";
import Featured from "./Featured";
import Footer from "./Footer";
import Meals from "./Meals";
import NewsLetter from "./NewsLetter";
import TopPicks from "./TopPicks";
import { operationContext, operationReducer } from "./operationReducer";
import TopNav from "./TopNav"; // Include TopNav here if needed

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const savedThemeMode = localStorage.getItem("themeMode");
  const [isDarkTheme, setIsDarkTheme] = useState(savedThemeMode === "dark");
  const [themeMode, setThemeMode] = useState(savedThemeMode || "light");

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", isDarkTheme ? "dark" : "light");
    setThemeMode(isDarkTheme ? "light" : "dark");
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeMode }}>
      <operationContext.Provider value={useReducer(operationReducer, { isDialogOpen: false })}>
        {children}
      </operationContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
