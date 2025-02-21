import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryHero from "../components/CategoryHero";
import CategorySidebar from "../components/CategorySideBar";
import CategoryMain from "../components/CategoryMain";
import { Box, useMediaQuery } from "@mui/material";

const Category = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Header />
      <CategoryHero />

      {/* Main Content Wrapper */}
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "calc(100vh - 350px)" }}>
        {/* Sidebar */}
        {!isMobile && <CategorySidebar />}

        {/* Main Content */}
        <Box sx={{ flex: 1, padding: "20px", marginLeft: isMobile ? 0 : "20px" }}>
          <CategoryMain />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Category;
