import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryHero from "../components/CategoryHero";
import CategorySidebar from "../components/CategorySideBar";
import CategoryMain from "../components/CategoryMain";
import { Box,Typography, useMediaQuery } from "@mui/material";

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
        <Typography
        variant="h2"
        sx={{
          fontSize: 30,
          color: "#000188",
          fontWeight: "bold",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
        //   justifyContent: "center",
          mt: 2,
          ml: 0,  
          mb: 5,
        }}
      >
        <Box component="span" sx={{ width: "40px", height: "2px", backgroundColor: "#000188", mr: 1 }} />
        Categories
      </Typography>
          <CategoryMain />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Category;
