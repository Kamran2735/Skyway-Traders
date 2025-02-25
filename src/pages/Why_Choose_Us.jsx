import React from "react";
import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";  
import { Box, Typography } from "@mui/material";



const About = () => {
    return (
        <>
        <Header />
        <Typography
        variant="h2"
        sx={{
          padding: "20px",
          fontSize: 30,
          color: "#000188",
          fontWeight: "bold",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          mt: 4,
          ml: 35,  
        }}
      >
        <Box component="span" sx={{ width: "40px", height: "2px", backgroundColor: "#000188", mr: 1 }} />
        Why Choose Us
      </Typography>
        <WhyChooseUs />
        <Footer />
        </>
      );
    };
    
export default About;