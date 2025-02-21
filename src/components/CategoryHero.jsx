import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImg from "../assets/cat-bg.webp"; // Replace with actual image path

const GetInTouch = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ Enables Parallax Effect
        height: { xs: "250px", md: "400px" }, // Responsive height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
        }}
      />

      {/* Text Content */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px", px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
          Find What You Need,<br />
          Love What You Get
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", fontStyle: "italic", opacity: 0.9, fontSize: { xs: "0.9rem", md: "1.2rem" } }}>
          Browse through our latest collections and discover top-quality products tailored to your needs
        </Typography>
      </Box>
    </Box>
  );
};

export default GetInTouch;
