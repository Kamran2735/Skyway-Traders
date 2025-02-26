import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home"; // ✅ Import the Home component
import Overview from "./pages/Overview"; // ✅ Import the Overview component
import About from "./pages/About"; // ✅ Import the About component
import Why_Choose_Us from "./pages/Why_Choose_Us"; // ✅ Import the Why_Choose_Us component
import Category from "./pages/Category"; // ✅ Import the Category component
import Products from "./pages/Products"; // ✅ Import the Products component
import Single_Product from "./pages/Single_Product"; // ✅ Import the Single_Product component
import New_Arrivals from "./pages/New_Arrivals"; // ✅ Import the New_Arrivals component
import Contact from "./pages/Contact"; // ✅ Import the Contact component
import Team from "./pages/Team"; // ✅ Import the Team component

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Overview" element={<Overview />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Why_Choose_Us" element={<Why_Choose_Us />}/>
          <Route path="/Category" element={<Category />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/Single_Product" element={<Single_Product />}/>
          <Route path="/New_Arrivals" element={<New_Arrivals />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Team" element={<Team />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
