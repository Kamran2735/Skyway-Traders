import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import banner1 from "../assets/New_Arrivals/NABanner1.webp"; // First Banner Image
import banner2 from "../assets/New_Arrivals/NABanner2.webp"; // Second Banner Image

const BannerSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
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
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: "2.5" }}
        >
          <Box
            sx={{
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
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />

            {/* Text Overlay (Left-Aligned) */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
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
                  fontFamily: "Playfair Display",
                  fontSize: "1rem",
                  fontWeight: "600",
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
        </motion.div>

        {/* Right Banner (70%) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ flex: "7.5" }}
        >
          <Box
            sx={{
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
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />

            {/* Text Overlay (Centered) */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
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
                  fontFamily: "Playfair Display",
                  fontSize: "1rem",
                  fontWeight: "600",
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
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default BannerSection;
