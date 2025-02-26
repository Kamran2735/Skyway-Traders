import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper, Grid } from "@mui/material";

import product1 from "../assets/Products/img_03.png";
import product2 from "../assets/Products/img_04.png";
import product3 from "../assets/Products/img_05.png";
import product4 from "../assets/Products/img_06.png";
import product5 from "../assets/Products/img_07.png";
import product6 from "../assets/Products/img_08.png";

const productData = {
  featured: [
    { img: product1, title: "Wireless Audio System Multiroom 360", price: "$685.00", discount: "-$30", category: "Speakers" },
    { img: product2, title: "Smart Tablet Pro", price: "$599.00", discount: "-$50", category: "Tablets" },
    { img: product3, title: "Sony Action Camera", price: "$329.00", discount: "-$25", category: "Cameras" },
    { img: product4, title: "Wireless Headphones", price: "$199.00", discount: "-$15", category: "Audio" },
    { img: product5, title: "Gaming Console Pro", price: "$499.00", discount: "-$40", category: "Gaming" },
    { img: product6, title: "DSLR Camera", price: "$999.00", discount: "-$75", category: "Cameras" },
  ],
  onSale: [
    { img: product4, title: "Gaming Headset", price: "$150.00", discount: "-$20", category: "Audio" },
    { img: product6, title: "Professional Camera Lens", price: "$799.00", discount: "-$60", category: "Cameras" },
    { img: product2, title: "4K Smart Tablet", price: "$799.00", discount: "-$100", category: "Tablets" },
  ],
  topRated: [
    { img: product3, title: "Premium Action Camera", price: "$379.00", discount: "-$35", category: "Cameras" },
    { img: product5, title: "Ultimate Gaming Console", price: "$459.00", discount: "-$30", category: "Gaming" },
  ],
};

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState("featured");

  return (
    <Paper
      sx={{
        flex: 1, 
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
    >
      {/* Tabs Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "10px" }}>
        <Tabs
          value={selectedTab}
          onChange={(event, newValue) => setSelectedTab(newValue)}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Featured" value="featured" sx={{ fontWeight: selectedTab === "featured" ? "bold" : "normal" }} />
          <Tab label="On Sale" value="onSale" sx={{ fontWeight: selectedTab === "onSale" ? "bold" : "normal" }} />
          <Tab label="Top Rated" value="topRated" sx={{ fontWeight: selectedTab === "topRated" ? "bold" : "normal" }} />
        </Tabs>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={1}>
        {productData[selectedTab].map((product, index) => (
          <Grid item xs={4} key={index}>
            <Paper
              sx={{
                padding: "5px",
                textAlign: "center",
                boxShadow: "none",
                border: "1px solid #ddd",
                minHeight: "250px", // ✅ Adjusted height for better layout
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                "&:hover": { boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
              }}
            >
              {/* Product Image Container */}
              <Box sx={{ position: "relative", width: "100%", height: "160px" }}> {/* ✅ Increased height */}
                {/* Discount Badge Positioned On Image */}
                {product.discount && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      background: "linear-gradient(135deg, #6a11cb,#000188)",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      zIndex: 2, // Ensures it's above the image
                    }}
                  >
                    {product.discount}
                  </Box>
                )}

                {/* Product Image */}
{/* ✅ Centered Image */}
<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "180px" }}>
  <img
    src={product.img}
    alt={product.title}
    style={{
      width: "60%",  // ✅ Reduced size
      height: "85%",
      borderRadius: "5px",
    }}
  />
</Box>

              </Box>

              {/* Product Info */}
              <Typography variant="caption" sx={{ color: "#4C4CC4", marginTop: "1.5px", lineHeight: "1.2" }}> {/* ✅ Reduced spacing */}
                {product.category}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#000188", cursor: "pointer", fontSize: "13px", lineHeight: "1.2" }}
              >
                {product.title}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: "1.5px", fontSize: "14px" }}> {/* ✅ Less spacing */}
                {product.price}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ProductGrid;
