import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import StorefrontIcon from "@mui/icons-material/Storefront";

// Sample category images
import Cat3 from "../assets/Cat1.jpg";
import Cat2 from "../assets/Cat2.webp";
import Cat1 from "../assets/Cat3.webp";
import BgImage from "../assets/bg1.jpg"; // Background image

// Sample category data
const categories = [
  { title: "Industrial Equipment", img: Cat1, icon: <InventoryIcon sx={{ color: "#fff" }} /> },
  { title: "Electronic Components", img: Cat2, icon: <CategoryIcon sx={{ color: "#fff" }} /> },
  { title: "Retail & Wholesale", img: Cat3, icon: <StorefrontIcon sx={{ color: "#fff" }} /> },
  { title: "Electronic Components", img: Cat2, icon: <CategoryIcon sx={{ color: "#fff" }} /> },
  { title: "Retail & Wholesale", img: Cat3, icon: <StorefrontIcon sx={{ color: "#fff" }} /> },
];

const ProductCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Removes navigation arrows
    customPaging: (i) => (
      <Box
        sx={{
          width: "10px", // Slightly smaller dots
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#D1D5DB", // Default grey color
          transition: "background-color 0.3s ease",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots", // Custom class for styling
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        py: 8, // Keeping good spacing
        backgroundImage: `url(${BgImage})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff", // White text for contrast
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
          zIndex: 1,
        }}
      />

      {/* Content Wrapper */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Section Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: "1.1rem",
            color: "#4C9BE8", // Light Blue for visibility
            textDecoration: "underline",
            textDecorationColor: "#000188", // Changed to dark blue
            pb: 2,
          }}
        >
          Product Categories
        </Typography>
        <Typography variant="h4" sx={{ pb: 2, fontWeight: "bold", mb: 2 }}>
          Browse Our Product Sectors
        </Typography>

        {/* Slider Section */}
        <Box sx={{ width: "80%", margin: "0 auto", position: "relative", pb: 8 }}>
          <Slider {...settings}>
            {categories.map((category, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia component="img" height="180" image={category.img} alt={category.title} />

                  {/* Custom Title Strip */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      left: 0,
                      width: "75%",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px 16px",
                      borderRadius: "0px 8px 8px 0px",
                      boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
                      {category.title}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#000188",
                        padding: "6px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {category.icon}
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Contact Section */}
        <Typography variant="body1" sx={{ mt: 0, fontWeight: "bold" }}>
          Since 1964, We provide the best solutions for our valuable customers.
        </Typography>
        <Typography variant="body1" sx={{ color: "#4C9BE8", mt: 1 }}> {/* Light Blue for visibility */}
          ✉ Getaquote@SkyWayTraders.com
        </Typography>

        {/* Custom Styles for Pagination Dots */}
        <style>
          {`
            .custom-dots {
              display: flex !important;
              justify-content: center;
              gap: 8px; /* Increased spacing between dots */
              position: relative;
              top: 25px; /* Moves dots lower */
            }
            .custom-dots li {
              width: auto;
              height: auto;
            }
            .custom-dots li.slick-active div {
              background-color: #000188 !important; /* Active dot color */
              width: 12px !important; /* Slightly bigger active dot */
              height: 12px !important;
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default ProductCategory;
