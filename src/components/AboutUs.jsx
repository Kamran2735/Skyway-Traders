import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"; // MUI Check Icon
import aboutImage from "../assets/bg1.jpg"; // Change path to actual image

const aboutStats = [
  { value: "247+", label: "Completed Projects" },
  { value: "54+", label: "Satisfied Customers" },
  { value: "43+", label: "Winning Awards" },
];

const aboutFeatures = [
  "Boost Your Business",
  "Marketing Support",
  "Talented Teams",
  "24/7 Strong Support",
];

const AboutUs = () => {
  return (
    <Box
      sx={{
        py: 10,
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={6} sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Left Side - Image */}
        <Grid item xs={12} md={6}>
          <img
            src={aboutImage}
            alt="About Us"
            style={{
              width: "100%",
              borderRadius: "12px",
              display: "block",
            }}
          />
        </Grid>

        {/* Right Side - Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ color: "#000188", fontWeight: "bold", textTransform: "uppercase" }}>
            About Us
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
              <Grid item xs={12} sm={6} key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckIcon sx={{ color: "#000188", fontSize: "1.8rem" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {feature}
                </Typography>
              </Grid>
            ))}
          </Grid>

          {/* Stats Section */}
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 3,
              mt: 5,
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {aboutStats.map((stat, index) => (
              <CardContent key={index} sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
                  {stat.label}
                </Typography>
              </CardContent>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
