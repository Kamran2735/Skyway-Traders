import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home"; // ✅ Import the Home component
import Overview from "./pages/Overview"; // ✅ Import the Overview component
import Contact from "./pages/Contact"; // ✅ Import the Contact component

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Overview" element={<Overview />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
