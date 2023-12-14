// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import Signup from "./components/Signup";
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <TopNav />
          <Featured />
          <Delivery />
          <TopPicks />
          <Meals />
          <Categories />
          <NewsLetter />
          <Footer />
          <Routes>
          {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
