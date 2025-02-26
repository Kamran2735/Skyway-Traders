import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CountUp from "react-countup"; // Import CountUp
import { motion } from "framer-motion"; // Import Framer Motion
import aboutImage from "../assets/About/aboutus_bg.png"; // Update with actual image path

const aboutStats = [
  { value: 247, label: "Completed Projects" },
  { value: 54, label: "Satisfied Customers" },
  { value: 43, label: "Winning Awards" },
];

const aboutFeatures = [
  "Boost Your Business",
  "Marketing Support",
  "Talented Teams",
  "24/7 Strong Support",
];

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          py: 10,
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={6} sx={{ maxWidth: "1200px", mx: "auto", position: "relative" }}>
          {/* Left Side - Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={aboutImage}
                  alt="About Us"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: 30,
                  color: "#000188",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  ml: 0,  
                  mb: 5,
                }}
              >
                <Box component="span" sx={{ width: "40px", height: "2px", backgroundColor: "#000188", mr: 1 }} />
                About US
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                Adding The Word Called Success to Your Brand
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "gray", fontSize: "1.1rem" }}>
                Sed ut perspiciatis unde omnis error sit voluptatem accusantium doloremque laudantium totam rem
                aperiam eaque ipsa quae ab illo inventore veritatis.
              </Typography>

              {/* Features List */}
              <Grid container spacing={2} sx={{ mt: 4 }}>
                {aboutFeatures.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <CheckIcon sx={{ color: "#000188", fontSize: "1.8rem" }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {feature}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Stats Section (Overlapping the Image) */}
          <Grid
            item
            xs={12}
            sx={{
              position: { xs: "static", md: "absolute" }, // Only overlap on larger screens
              bottom: { md: "50px" },
            
              left: { md: "350px" },
              width: { xs: "100%", md: "65%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  p: 3,
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(135deg, #000188,#6a11cb)"
                }}
              >
                {aboutStats.map((stat, index) => (
                  <CardContent key={index} sx={{ textAlign: "center", color: "white" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      <CountUp start={0} end={stat.value} duration={2} separator="," />+
                    </Typography>
                    <Typography variant="body1" sx={{ color: "color", mt: 1 }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                ))}
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default AboutUs;
