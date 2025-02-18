import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/product-1.jpg";
import slide2 from "../assets/product-2.jpeg";
import slide3 from "../assets/product-3.jpg";
import slide4 from "../assets/product-1.jpg";
import slide5 from "../assets/product-3.jpg";
import backgroundImg from "../assets/product-bg.jpeg"; // Background image

const products = [
  { title: "Product 1", category: "Category 1", img: slide1, link: "/product/1" },
  { title: "Product 2", category: "Category 1", img: slide2, link: "/product/2" },
  { title: "Product 3", category: "Category 2", img: slide3, link: "/product/3" },
  { title: "Product 4", category: "Category 3", img: slide4, link: "/product/4" },
  { title: "Product 5", category: "Category 3", img: slide5, link: "/product/5" },
];

const LatestProducts = () => {
  const sliderRef = React.useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const navigate = useNavigate(); // React Router navigation

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    afterChange: (current) => setCenterIndex(current),
    customPaging: (i) => (
      <Box
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#D1D5DB",
          transition: "background-color 0.3s ease",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 600, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <Box
      sx={{
        height: "110vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
        py: 15,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(20%)",
          zIndex: -1,
        }}
      />

      {/* Section Heading & Subheading */}
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: "1.1rem",
          color: "#4C9BE8",
          textDecoration: "underline",
          textDecorationColor: "#000188",
          pb: 2,
        }}
      >
        Our Latest Collection
      </Typography>
      <Typography variant="h4" sx={{ pb: 3, fontWeight: "bold", color: "white" }}>
        Explore Our New Arrivals
      </Typography>

      <Box sx={{ width: "70%", position: "relative", zIndex: 2 }}>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                px: 0,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate(product.link)}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "2 / 3",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 15px #4C4CC4",
                  backgroundColor: "#f8f9fa",
                  transform: index === centerIndex ? "scale(1)" : "scale(0.85)", // Center scaling effect remains
                  transition: "transform 0.5s ease-in-out",
                  zIndex: index === centerIndex ? 2 : 1,
                }}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    p: 2,
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)", // Only text raises slightly on hover
                      },
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4C9BE8",
                      fontWeight: "500",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)", // Category text also raises on hover
                      },
                    }}
                  >
                    {product.category}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <IconButton
          onClick={() => sliderRef.current.slickPrev()}
          sx={{
            position: "absolute",
            left: "-50px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "transparent",
            transition: "transform 0.3s ease-in-out, scale 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-50%) scale(1.4)",
            },
          }}
        >
          <ArrowBackIos sx={{ fontSize: "36px" }} />
        </IconButton>

        <IconButton
          onClick={() => sliderRef.current.slickNext()}
          sx={{
            position: "absolute",
            right: "-50px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "transparent",
            transition: "transform 0.3s ease-in-out, scale 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-50%) scale(1.4)",
            },
          }}
        >
          <ArrowForwardIos sx={{ fontSize: "36px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LatestProducts;

