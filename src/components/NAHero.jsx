import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
import slide1 from "../assets/NA1.webp";
import slide2 from "../assets/NA2.jpg";
import slide3 from "../assets/NA3.jpg";
import bannerImg from "../assets/NA4.webp";

const slides = [slide1, slide2, slide3];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "15px",
        right: "70px",
        zIndex: 2,
        backgroundColor: "#000188",
        border: "1px solid #4C4CC4",
        width: "45px",
        height: "45px",
        borderRadius: "0px", // ✅ Makes it square
        "&:hover": { backgroundColor: "#4C4CC4", border: "1px solid #000188", color: "white" },
      }}
    >
      <ChevronLeft sx={{ fontSize: 28, color: "white", }} />
    </IconButton>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "15px",
        right: "15px",
        zIndex: 2,
        backgroundColor: "#000188",
        border: "1px solid #4C4CC4",
        width: "45px",
        height: "45px",
        borderRadius: "0px", // ✅ Makes it square
        "&:hover": { backgroundColor: "#4C4CC4", border: "1px solid #000188", color: "white" },
      }}
    >
      <ChevronRight sx={{ fontSize: 28, color: "white", }} />
    </IconButton>
  );
};

const HeroSection = () => {
  // React-Slick Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1200px",
        mx: "auto",
        mt: 1.5, 
        mb: 1.5, 
      }}
    >
      {/* Left Side - Image Slider */}
      <Box
        sx={{
          flex: "1",
          maxWidth: "50%",
          minWidth: "400px",
          height: "500px",
          overflow: "hidden",
          borderRadius: "0px",
          pr: 2,
          position: "relative",
        }}
      >
        <Slider {...settings}>
          {slides.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "500px",
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

           {/* Right Side - Background Image with Hover Scale Effect */}
      <Box
        sx={{
          flex: "1",
          maxWidth: "50%",
          minWidth: "400px",
          height: "500px",
          position: "relative",
          borderRadius: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
          "::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.3s ease-in-out",
            zIndex: -1, // ✅ Keeps it behind the text and button
          },
          "&:hover::after": {
            transform: "scale(1.1)", // ✅ Scales only the image
          },
        }}
      >
        {/* Text at Top Center */}
        <Box sx={{ textAlign: "center", width: "100%", mt: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "serif" }}>
            Exceptional
          </Typography>
          <Typography variant="h6" sx={{ color: "#000188" }}>
            OFFICE CHAIR
          </Typography>
        </Box>

        {/* Button at Bottom Right */}
        <Box
          sx={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000188",
              color: "white",
              "&:hover": { backgroundColor: "#4C4CC4" },
            }}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;