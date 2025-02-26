import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import backgroundImg from "../assets/Team/team-bg.jpg"; // Replace with actual image path

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 2, maxWidth: "800px", padding: "0 16px" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            mb: 1,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // ✅ Responsive font sizes
          }}
        >
          Meet Our Expert Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontStyle: "italic",
            opacity: 0.9,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // ✅ Smaller font on mobile
          }}
        >
          Have a project you're interested in discussing with us?
          <br />
          Drop us a line below, we’d love to talk.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default GetInTouch;
