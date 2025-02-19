import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
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
  const navigate = useNavigate(); // React Router navigation
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 960px)");

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        py: 4,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
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
            fontSize: "1.2rem",
            color: "#4C9BE8",
            pb: 2,
          }}
        >
          Our Latest Collection
        </Typography>
        <Typography variant="h4" sx={{ pb: 0, fontWeight: "bold" }}>
          Explore Our New Arrivals
        </Typography>

        {/* Slider Section */}
        <Box sx={{ width: isMobile ? "100%" : "80%", margin: "0 auto", position: "relative", pb: 0 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0} // Decreased space between cards
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            // navigation={!isMobile && !isTablet} // Arrows only for desktop
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            style={{ paddingBottom: "40px" }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    px: 1,
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
                      borderRadius: "12px",
                      overflow: "hidden",
                      backgroundColor: "#f8f9fa",
                      transform: "scale(0.85)",
                      transition: "transform 0.5s ease-in-out",
                      zIndex: 1,
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Normal shadow
                      "&:hover": {
                        transform: "scale(1)",
                        boxShadow: "0px 0px 15px 4px #4C4CC4", // Neon Outline Effect
                      },
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
                            transform: "translateY(-5px)",
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
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        {product.category}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

     </Box>

      {/* Custom Styles for Pagination Dots */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #ffffff !important; /* Inactive dot color */
          }
          .swiper-pagination-bullet-active {
            background-color: #000188 !important; /* Active dot color */
          }
        `}
      </style>
    </Box>
  );
};

export default LatestProducts;
