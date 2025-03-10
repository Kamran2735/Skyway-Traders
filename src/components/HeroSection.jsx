import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/Home/slide-2.jpg";
import slide2 from "../assets/Home/slide-1.jpg";
import slide3 from "../assets/Home/slide-3.jpg";

const slides = [
  { image: slide1, text: "Discover Our Latest Collection", link: "/products" },
  { image: slide2, text: "Special Offers Just for You – Don’t Miss Out", link: "/offers" },
  { image: slide3, text: "New Arrivals You Can't Miss", link: "/new-arrivals" },
];

const HeroSection = () => {
  const sliderRef = useRef(null); // Reference for Slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
      {/* Custom Left Arrow */}
      <IconButton
        onClick={() => sliderRef.current.slickPrev()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "450px", md: "650px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* Background Image with Zoom Effect */}
            <motion.img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Overlay with Hover Effect */}
            <Box
              component="a"
              href={slide.link}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                },
              }}
            >
              {/* Animated Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    px: { xs: 4, md: 40 }, // Adjust horizontal padding for responsiveness
                    py: 2, // Vertical padding
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.1)" },
                    fontSize: { xs: "1.5rem", md: "2.5rem" }, // Responsive font sizes
                  }}
                >
                  {slide.text}
                </Typography>
              </motion.div>
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Custom Right Arrow */}
      <IconButton
        onClick={() => sliderRef.current.slickNext()}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default HeroSection;
