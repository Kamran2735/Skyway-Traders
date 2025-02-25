import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import TimerIcon from "@mui/icons-material/Timer";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    { icon: <DiamondIcon />, title: "Premium Quality", description: "We ensure top-notch quality in every aspect." },
    { icon: <TimerIcon />, title: "Fast Service", description: "Quick and efficient services delivered on time." },
    { icon: <TouchAppIcon />, title: "User Friendly", description: "Easy to use interface for a seamless experience." },
    { icon: <FavoriteIcon />, title: "Customer Satisfaction", description: "Our priority is your happiness and success." },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "relative",
        p: 3,
        overflow: "hidden",
        minHeight: "450px",
        gap: 1,
      }}
    >
      {/* Left Circle (WHY CHOOSE US) with z-index */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ zIndex: 2, position: "relative", left: "0%" }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #000188,#6a11cb)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            boxShadow: 3,
          }}
        >
          <Typography variant="h6">WHY <br /> CHOOSE <br /> US</Typography>
        </Box>
      </motion.div>
      
      {/* Right Circle with Description */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ position: "relative", left: "-3%" }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 3,
            boxShadow: 2,
          }}
        >
          <Typography variant="body1" sx={{ maxWidth: "80%", textAlign: "center", fontSize: "1.2rem" }}>
            We are dedicated to providing the best service possible, ensuring quality and satisfaction.
          </Typography>
        </Box>
      </motion.div>

      {/* Features List - Icons & Text */}
      <Box sx={{ position: "relative", display: "flex", flexDirection: "column", gap: 1, ml: 1 }}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                <Avatar
                  sx={{
                    background: "linear-gradient(135deg, #000188,#6a11cb)",
                    color: "white",
                    width: 45,
                    height: 45,
                  }}
                >
                  {feature.icon}
                </Avatar>
              </motion.div>
              <Divider sx={{ width: 30, height: 3, background: "linear-gradient(135deg,#6a11cb,#000188)" }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1rem" }}>
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
