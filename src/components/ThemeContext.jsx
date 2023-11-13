// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect,useReducer } from "react";
import Categories from "./Categories";
import Delivery from "./Delivery";
import Featured from "./Featured";
import Footer from "./Footer";
import Meals from "./Meals";
import NewsLetter from "./NewsLetter";
import TopNav from "./TopNav";
import TopPicks from "./TopPicks";
import { operationContext, operationReducer } from "./operationReducer";


const ThemeContext = createContext();



export function ThemeProvider() {
  const savedThemeMode = localStorage.getItem("themeMode");
  const [isDarkTheme, setIsDarkTheme] = useState(savedThemeMode === "dark");
  const [themeMode, setThemeMode] = useState(
    savedThemeMode || "light"
  );

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", isDarkTheme ? "dark" : "light");
    setThemeMode(isDarkTheme ? "light" : "dark");
  }, [isDarkTheme]);

  return (
    <>
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeMode }}>
    <operationContext.Provider value={useReducer(operationReducer, { isDialogOpen: false })}>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meals />
      <Categories />
      <NewsLetter />
      <Footer />
    </operationContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
