import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, Button, IconButton } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Import images
import product1 from "../assets/Products/img_07.png";
import product2 from "../assets/Products/img_08.png";
import product3 from "../assets/Products/img_09.png";
import product4 from "../assets/Products/img_01.png";
import product5 from "../assets/Products/img_02.png";
import product6 from "../assets/Products/img_03.png";

// Product Data with Image Arrays for Carousel
const allProducts = {
  top: [
    { id: 1, images: [product1, product2, product3], title: "Relogio Masculino Watches", rating: 4.0, orders: 1327 },
    { id: 3, images: [product2, product3, product4], title: "Relogio Masculino Watches", rating: 4.8, orders: 1327 },
    { id: 2, images: [product4, product5, product6], title: "Relogio Masculino Watches", rating: 3.5, orders: 1327 },
    { id: 3, images: [product2, product3, product4], title: "Relogio Masculino Watches", rating: 4.8, orders: 1327 },
  ],
  phones: [
    { id: 4, images: [product3, product1, product5], title: "Smartphone Pro", rating: 4.5, orders: 1420 },
    { id: 5, images: [product6, product2, product4], title: "Android Flagship", rating: 4.7, orders: 980 },
  ],
  laptops: [
    { id: 6, images: [product4, product3, product1], title: "Gaming Laptop X", rating: 4.8, orders: 723 },
  ],
  cameras: [
    { id: 7, images: [product5, product6, product2], title: "4K HD Camera", rating: 4.2, orders: 832 },
  ],
};

const Bestseller = () => {
  const [selectedTab, setSelectedTab] = useState("top");
  const [imageIndexes, setImageIndexes] = useState(
    Object.keys(allProducts).reduce((acc, key) => {
      allProducts[key].forEach((product) => {
        acc[product.id] = 0;
      });
      return acc;
    }, {})
  );
  const [wishlist, setWishlist] = useState({});

  // Auto-change images every 3 seconds inside each card
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) => {
        const newIndexes = { ...prevIndexes };
        allProducts[selectedTab]?.forEach((product) => {
          newIndexes[product.id] = (prevIndexes[product.id] + 1) % product.images.length;
        });
        return newIndexes;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedTab]);

  return (
    <Box sx={{ width: "100%", padding: "30px 250px", backgroundColor: "#f8f8f8" }}>
      
      {/* ✅ Header with Separator & Category Tabs */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
        
        {/* Left: Title & Separator */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px", flex: 1 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ color: "#888", textTransform: "uppercase" }}>
              A Wide Selection of Items
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Bestseller Products
            </Typography>
          </Box>

          {/* Separator Line */}
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#ddd", marginTop: "5px", marginRight: 3 }}></Box>
        </Box>

        {/* ✅ Tabs Styled Correctly */}
        <Tabs
          value={selectedTab}
          onChange={(event, newValue) => setSelectedTab(newValue)}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": { fontWeight: "bold", color: "#777", textTransform: "uppercase" },
            "& .Mui-selected": { color: "#007bff", fontWeight: "bold" },
            "& .MuiTabs-indicator": { backgroundColor: "#007bff", height: "3px" }, // Blue Underline
          }}
        >
          <Tab label="Top" value="top" />
          <Tab label="Phones & Tablets" value="phones" />
          <Tab label="Laptops & Computers" value="laptops" />
          <Tab label="Video Cameras" value="cameras" />
        </Tabs>
      </Box>

      {/* ✅ Product Grid */}
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {allProducts[selectedTab]?.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper
              sx={{
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                position: "relative",
                textAlign: "left",
              }}
            >
              {/* ✅ Image Carousel (ONLY for Images) */}
              <Box sx={{ textAlign: "center", position: "relative", width: "100%", marginBottom: "15px" }}>
                <img
                  src={product.images[imageIndexes[product.id]]}
                  alt={product.title}
                  style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "8px" }}
                />
              </Box>

              {/* ✅ Wishlist Button (Default Look) */}
              <IconButton
                onClick={() => setWishlist((prev) => ({ ...prev, [product.id]: !prev[product.id] }))}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                {wishlist[product.id] ? <Favorite color="error" /> : <FavoriteBorder />}
              </IconButton>

              
            {/* ✅ Start Buying Button (Horizontally Centered) */}
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <Button variant="contained"  sx={{ borderRadius: "20px", fontWeight: "bold", fontSize: "12px", width: "150px" ,background: "linear-gradient(135deg, #6a11cb,#000188)"}}>
                Start Buying
            </Button>
            </Box>


              {/* ✅ Dynamic Rating Stars */}
        
              <Box sx={{ display: "flex", justifyContent:"center"  ,alignItems: "center", color: "#FFA500", fontSize: "14px", marginBottom: "5px" }}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} fontSize="small" sx={{ color: index < Math.round(product.rating) ? "#FFA500" : "#ddd" }} />
                ))}
              </Box>

              {/* ✅ Delivery & Orders Info */}
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#4C4CC4", marginBottom: "5px" }}>
                <CalendarMonthIcon fontSize="small" sx={{ marginRight: "5px" }} /> Estimated Delivery Time: 21-39 days
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#4C4CC4" }}>
                <LocalShippingIcon fontSize="small" sx={{ marginRight: "5px" }} /> Total: {product.orders} orders
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bestseller;
