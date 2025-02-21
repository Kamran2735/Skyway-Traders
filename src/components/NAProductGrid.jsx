import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Import Product Images
import product1 from "../assets/NAproduct-1.webp";
import product2 from "../assets/NAproduct-2.webp";
import product3 from "../assets/NAproduct-3.webp";
import product4 from "../assets/NAproduct-4.webp";
import product5 from "../assets/NAproduct-5.webp";

const products = [
  { id: 1, name: "Easy Modern Chair", price: "$40.00", oldPrice: "$45.00", discount: "-10%", image: product1, size: "large" },
  { id: 2, name: "New Modern Chair", price: "$40.00", oldPrice: "$45.00", discount: "-10%", image: product2, size: "small" },
  { id: 3, name: "Awesome Light", price: "$40.00", oldPrice: "$45.00", discount: "-10%", image: product3, size: "small" },
  { id: 4, name: "Modern Sofa Set", price: "$40.00", oldPrice: "$45.00", discount: "-10%", image: product4, size: "small" },
  { id: 5, name: "New Modern Chair", price: "$40.00", oldPrice: "$45.00", discount: "-10%", image: product5, size: "small" },
];

const ProductGrid = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 2, pb: 2 }}>
      <Grid container spacing={2}>
        {/* Large Card on the Left */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "0px",
              height: "500px", // Fixed height for large card
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              "&:hover img": {
                transform: "scale(1.05)", // Image Scales on Hover
              },
              "&:hover .product-info": {
                opacity: 1, // Text Appears on Hover
              },
            }}
          >
            {/* Product Image */}
            <img
              src={products[0].image}
              alt={products[0].name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures image covers the card space
                transition: "transform 0.3s ease-in-out",
                backgroundColor: "#f9f9f9",
              }}
            />

            {/* Discount Badge */}
            <Box
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#000188",
                color: "white",
                padding: "4px 8px",
                fontSize: "0.8rem",
                fontWeight: "bold",
                borderRadius: "0px",
              }}
            >
              {products[0].discount}
            </Box>

            {/* Product Info (Hidden by Default) */}
            <Box
              className="product-info"
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "6px 12px",
                borderRadius: "0px",
                textAlign: "left",
                opacity: 0, // Initially Hidden
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>{products[0].name}</Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#666", textDecoration: "line-through" }}>
                {products[0].oldPrice}
              </Typography>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#E53935" }}>
                {products[0].price}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* 2x2 Small Cards on the Right */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {products.slice(1).map((product) => (
              <Grid item xs={12} sm={6} key={product.id}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "0px",
                    height: "240px", // Fixed height for small cards
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover img": {
                      transform: "scale(1.05)", // Image Scales on Hover
                    },
                    "&:hover .product-info": {
                      opacity: 1, // Text Appears on Hover
                    },
                  }}
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensures image covers the card space
                      transition: "transform 0.3s ease-in-out",
                      backgroundColor: "#f9f9f9",
                    }}
                  />

                  {/* Discount Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#000188",
                      color: "white",
                      padding: "4px 8px",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      borderRadius: "0px",
                    }}
                  >
                    {product.discount}
                  </Box>

                  {/* Product Info (Hidden by Default) */}
                  <Box
                    className="product-info"
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      padding: "6px 12px",
                      borderRadius: "0px",
                      textAlign: "left",
                      opacity: 0, // Initially Hidden
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>{product.name}</Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", textDecoration: "line-through" }}>
                      {product.oldPrice}
                    </Typography>
                    <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#E53935" }}>
                      {product.price}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductGrid;