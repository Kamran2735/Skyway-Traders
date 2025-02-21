import React from "react";
import { Box, Typography } from "@mui/material";

import banner1 from "../assets/NABanner1.webp"; // First Banner Image
import banner2 from "../assets/NABanner2.webp"; // Second Banner Image

const BannerSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1200px",
        mx: "auto",
        gap: 2, // Adds spacing between banners
        mt: 2, // Adds margin at the top
        mb: 2, // Adds margin at the bottom
      }}
    >
      {/* Left Banner (30%) */}
      <Box
        sx={{
          flex: "2.5", // 30% width
          height: "150px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Scalable Background Image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${banner1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "transform 0.3s ease-in-out", // ✅ Smooth scaling effect
            "&:hover": {
              transform: "scale(1.05)", // ✅ Image scales slightly on hover
            },
          }}
        />

        {/* Text Overlay (Vertically Centered, Left-Aligned) */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)", // ✅ Centers text vertically
            color: "black",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Great Vibes", fontWeight: "bold", fontSize: "2rem" }}>
            Modern Sofa
          </Typography>
          <Typography
  variant="body2"
  sx={{
    fontFamily: "Playfair Display", // ✅ Modern & clean font
    fontSize: "1rem",
    fontWeight: "600", // ✅ Slightly bolder for better visibility
    cursor: "pointer",
    mt: 1,
    color: "#000188",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "#4C4CC4",
    },
  }}
>
  Shop Now
</Typography>
        </Box>
      </Box>

      {/* Right Banner (70%) */}
      <Box
        sx={{
          flex: "7.5", // 70% width
          height: "150px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Scalable Background Image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${banner2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "transform 0.3s ease-in-out", // ✅ Smooth scaling effect
            "&:hover": {
              transform: "scale(1.05)", // ✅ Image scales slightly on hover
            },
          }}
        />

        {/* Text Overlay (Fully Centered) */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // ✅ Fully centers text
            color: "black",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Great Vibes", fontWeight: "bold", fontSize: "2.2rem" }}>
            Exceptional Furniture Set
          </Typography>
          <Typography
  variant="body2"
  sx={{
    fontFamily: "Playfair Display", // ✅ Modern & clean font
    fontSize: "1rem",
    fontWeight: "600", // ✅ Slightly bolder for better visibility
    cursor: "pointer",
    mt: 1,
    color: "#000188",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "#4C4CC4",
    },
  }}
>
  Shop Now
</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerSection;
