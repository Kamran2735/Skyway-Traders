import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImg from "../assets/contact-bg.jpg"; // Replace with actual image path

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
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
        }}
      />

      {/* Text Content */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px", px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}>
          GET IN TOUCH WITH US
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", fontStyle: "italic", opacity: 0.9 }}>
          Have a project you're interested in discussing with us?
          <br />
          Drop us a line below, we’d love to talk.
        </Typography>
      </Box>
    </Box>
  );
};

export default GetInTouch;
