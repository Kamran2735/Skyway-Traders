import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home"; // ✅ Import the Home component
import Overview from "./pages/Overview"; // ✅ Import the Overview component
import New_Arrivals from "./pages/New_Arrivals";
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
          <Route path="/New_Arrivals" element={<New_Arrivals />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Team" element={<Team />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
