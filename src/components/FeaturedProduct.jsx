import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import images
import bgImage from "../assets/Products/bg.jpg"; // Background Image
import product1 from "../assets/Products/img_10.png";
import product2 from "../assets/Products/img_10.png";

const slides = [
  {
    id: 1,
    productImage: product1,
    price: "£99.00",
    label: "ALL-NEW-SPORT",
    spec: "5K",
    specLabel: "STARTING AT",
    specDetail: "OS Tablet",
    title: "Acer Chromebook Tab 10 Is Official",
    buttonLabel: "Shop Now",
  },
  {
    id: 2,
    productImage: product2,
    price: "£89.99",
    label: "LIMITED DEAL",
    spec: "6K",
    specLabel: "ULTRA HD SCREEN",
    specDetail: "",
    title: "Samsung Galaxy Tab S9 Ultra",
    buttonLabel: "Shop Deals",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
        vertical: true,
        el: ".swiper-pagination",
      }}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="hero-slider"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
<Box
  sx={{
    height: "70vh", // Total section height remains the same
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "0 5%",
  }}
>
  {/* ✅ Background Image (70% height, Centered Vertically) */}
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      height: "80%", // ✅ Only takes 70% height
      background: `url(${bgImage}) center/cover no-repeat`,
      transform: "translateY(-50%)", // ✅ Centers it vertically
      zIndex: 1,
    }}
  />

  {/* Left: Product Image (Extends OUTSIDE Background) */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
      zIndex: 2, // Ensures it's above background
    }}
  >
    <img
      src={slide.productImage}
      alt="product"
      style={{
        width: "100%",
        objectFit: "contain",
      }}
    />
  </Box>

  {/* Right: Content (Inside Background) */}
  <Box
    sx={{
      flex: 1,
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "5%",
      zIndex: 3, // Ensures text is above everything
    }}
  >
    <Typography sx={{ color: "#4C4CC4", fontSize: "22px", fontWeight: "bold" }}>
      {slide.price} <span style={{ fontSize: "14px" }}>{slide.label}</span>
    </Typography>

    <Typography
      sx={{
        fontSize: "36px",
        fontWeight: "bold",
        margin: "10px 0",
      }}
    >
      {slide.title}
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
      <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#4C4CC4" }}>
        {slide.spec}
      </Typography>
      <Box>
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>{slide.specLabel}</Typography>
        <Typography sx={{ fontSize: "14px" }}>{slide.specDetail}</Typography>
      </Box>
    </Box>

    <Button
      variant="contained"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        padding: "10px 20px",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "5px",
        width: "150px",
        "&:hover": { backgroundColor: "#ddd" },
      }}
    >
      {slide.buttonLabel}
    </Button>
  </Box>

</Box>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
