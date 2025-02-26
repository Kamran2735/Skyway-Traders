import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import slide1 from "../assets/Products/Slide2.jpeg";
import slide2 from "../assets/Products/Slide4.jpg";
import slide3 from "../assets/Products/Slide5.webp";
import slide4 from "../assets/Products/Slide6.webp";

const slides = [
  {
    img: slide1,
    title: "The Gift you are Wishing",
    subtitle: "Sell to get what you love",
    price: "£749.99",
  },
  {
    img: slide2,
    title: "Smart Gadgets for Everyone",
    subtitle: "Upgrade your lifestyle",
    price: "£499.99",
  },
  {
    img: slide3,
    title: "Exclusive Deals on Electronics",
    subtitle: "Hurry up! Limited stock available",
    price: "£299.99",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const carouselRef = useRef(null);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left (Next)
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (touchStartX - touchEndX < -50) {
      // Swipe right (Prev)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        minHeight: "500px",
        marginLeft: "350px",
      }}
    >
      {/* ✅ Main Carousel Banner */}
      <Paper
        ref={carouselRef}
        sx={{
          position: "relative",
          borderRadius: "8px",
          flex: 0.75, // Adjusted width
          minHeight: "500px", // Match right section height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          touchAction: "pan-y",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* ✅ Slide Content */}
        <Box
          sx={{
            backgroundImage: `url(${slides[currentSlide].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "8px",
            transition: "opacity 1s ease-in-out",
          }}
        ></Box>

        {/* ✅ Overlay for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "8px",
          }}
        ></Box>

        {/* ✅ Slide Text */}
        <Box sx={{ position: "relative", zIndex: 2, color: "#fff", textAlign: "left", maxWidth: "50%" }}>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            {slides[currentSlide].subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            {slides[currentSlide].title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            From <span style={{ fontSize: "28px" }}>{slides[currentSlide].price}</span>
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "15px",
              background: "linear-gradient(135deg, #000188, #6a11cb)",
              color: "#fff",
              fontSize: "16px",
              padding: "10px 20px",
              "&:hover": { background: "linear-gradient(135deg,  #6a11cb,#000188)" },
            }}
          >
            Start Buying
          </Button>
        </Box>

        {/* ✅ Pagination Dots (Now Clickable) */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "20px",
            display: "flex",
            gap: "5px",
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: currentSlide === index ? "#fff" : "rgba(255, 255, 255, 0.5)",
                transition: "background-color 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Box>
      </Paper>

      {/* ✅ Right Side Small Banners */}
{/* ✅ Right Side Small Banners with Overlay */}
<Box
  sx={{
    marginLeft: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    flex: 0.25,
    minHeight: "500px",
  }}
>
  {[slide2, slide3, slide4].map((img, index) => (
    <Paper
      key={index}
      sx={{
        position: "relative",
        padding: "15px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        cursor: "pointer",
        width: "100%",
        flex: 1,
        textAlign: "center",
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": { opacity: 0.9 },
      }}
    >
      {/* ✅ Overlay for Text Area Only */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Overlay at bottom of the banner
          left: 0,
          width: "100%",
          padding: "10px 0",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // ✅ Dark overlay on text only
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Smartphone Bestseller
        </Typography>
        <Typography variant="body2">Price: $298.99</Typography>
        <Typography variant="body2" sx={{ color:"#4C4CC4" ,fontWeight: "bold", marginTop: "5px" }}>
          Pre - Order Now →
        </Typography>
      </Box>
    </Paper>
  ))}
</Box>

    </Box>
  );
};

export default HeroSection;
