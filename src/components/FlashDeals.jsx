import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import pic1 from "../assets/Products/img_01.png";
import pic2 from "../assets/Products/img_02.png";
import pic3 from "../assets/Products/img_03.png"; 
import pic4 from "../assets/Products/img_04.png";
import pic5 from "../assets/Products/img_05.png";

// Dummy Product Data
const flashDeals = [
  { img: pic1, title: "Baby Shoes", count: "21 Products", discount: "-30%" },
  { img: pic2, title: "Canon Camera", count: "10 Products", discount: "-30%" },
  { img: pic3, title: "Laptop Sleeve", count: "15 Products", discount: "-30%" },
  { img: pic4, title: "Winter Shoes", count: "18 Products", discount: "-30%" },
  { img: pic5, title: "Wireless Keyboard", count: "25 Products", discount: "-30%" },
];

// Number of cards visible at once
const visibleCards = 4;

const FlashDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handles next slide with infinite loop
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flashDeals.length);
  };

  // Handles previous slide with infinite loop
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flashDeals.length) % flashDeals.length);
  };

  return (
    <Box sx={{ width: "100%", padding: "30px 250px", backgroundColor: "#f8f8f8" }}>
      
      {/* Header with Separator & Arrows */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
        
        {/* Left: Title & Separator */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px", flex: 1 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ color: "#4C4CC4", textTransform: "uppercase" }}>
              A Wide Selection of Items
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" ,color:"#000188" }}>
              Top Flash Deal
            </Typography>
          </Box>

          {/* Separator Line (extends towards arrows) */}
          <Box
            sx={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(135deg, #6a11cb,#000188)",
              marginTop: "5px", // Aligns with text
              marginRight: 3
            }}
          ></Box>
        </Box>

        {/* Right: Arrows */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton onClick={prevSlide} sx={{ background: "linear-gradient(135deg, #6a11cb,#000188)" , color:"#fff"  , "&:hover": { background: "linear-gradient(135deg,#000188,#6a11cb)" } }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={nextSlide} sx={{ background: "linear-gradient(135deg, #6a11cb,#000188)" , color:"#fff", "&:hover": { background: "linear-gradient(135deg, #000188,#6a11cb)" } }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>

      {/* Deals Carousel */}
      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden", marginTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: `${visibleCards * 275}px`,
            transform: `translateX(-${(currentIndex % flashDeals.length) * (100 / visibleCards)}%)`,
            transition: "0.5s ease-in-out",
          }}
        >
          {[...flashDeals, ...flashDeals].map((product, index) => (
            <Paper
              key={index}
              sx={{
                width: "260px",
                minWidth: "260px",
                height: "320px",
                textAlign: "center",
                padding: "15px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                position: "relative",
              }}
            >
              {/* Discount Tag */}
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "linear-gradient(135deg, #6a11cb,#000188)",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                {product.discount}
              </Box>

              {/* Product Image */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "180px" }}>
                <img src={product.img} alt={product.title} style={{ width: "90%", height: "100%", objectFit: "contain" }} />
              </Box>

              {/* Product Info */}
              <Typography variant="body2" sx={{ fontWeight: "bold",color:"#000188", fontSize: "14px", marginTop: "10px" }}>
                {product.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "#4C4CC4", fontSize: "12px" }}>
                {product.count}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FlashDeals;
