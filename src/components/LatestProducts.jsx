import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/product1.webp";
import slide2 from "../assets/product2.jpeg";
import slide3 from "../assets/product3.jpg";
import slide4 from "../assets/product3.jpg";
import slide5 from "../assets/product3.jpg";
import backgroundImg from "../assets/productbackground.jpg"; // Add your background image here

const products = [
  { title: "Product 1", category: "Category 1", img: slide1 },
  { title: "Product 2", category: "Category 1", img: slide2 },
  { title: "Product 3", category: "Category 2", img: slide3 },
  { title: "Product 4", category: "Category 3", img: slide4 },
  { title: "Product 5", category: "Category 3", img: slide5 },
];

const LatestProducts = () => {
  const sliderRef = React.useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    arrows: false, // Disable Slick's default arrows
    afterChange: (current) => setCenterIndex(current),
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 600, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };
  

  return (
<Box
  sx={{
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: 4,
    py: 25, // Added padding on top and bottom
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
          filter: "brightness(20%)", // Darkens the background
          zIndex: -1, // Places it behind content
        }}
      />

      <Typography variant="h4" sx={{ mb: 3, color: "white", zIndex: 2 }}>
        Latest Products
      </Typography>

      <Box sx={{ width: "70%", position: "relative", zIndex: 2 }}>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <Box key={index} sx={{ px: 0, textAlign: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "2 / 3",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 15px #4C4CC4",
                  backgroundColor: "#f8f9fa",
                  transform: index === centerIndex ? "scale(1)" : "scale(0.85)",
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
                  <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "yellow", fontWeight: "500" }}>
                    {product.category}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>

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
      transform: "translateY(-50%) scale(1.4)", // Increase size on hover
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
      transform: "translateY(-50%) scale(1.4)", // Increase size on hover
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
