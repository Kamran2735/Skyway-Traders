import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import MainNav from "./components/MainNav";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import LatestProducts from "./components/LatestProducts";
import Testimonials from "./components/Testimonials";
import ProductCategory from "./components/ProductCategory";

const App = () => {
  return (
    <Router>
      <TopBar />
      <MainNav />
      <SearchBar />
      <HeroSection />
      <InfoSection />
      <LatestProducts />
      <Testimonials />
      <ProductCategory />
      {/* Define your routes here if needed */}
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/stock-arrivals" element={<div>Stock Arrivals</div>} />
        <Route path="/refurbished-equipment" element={<div>Refurbished Equipment</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
