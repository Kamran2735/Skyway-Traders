import React from "react";
import { Box, List, ListItem, ListItemText, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", path: "/category/electronics" },
  { name: "Fashion", path: "/category/fashion" },
  { name: "Home & Kitchen", path: "/category/home-kitchen" },
  { name: "Beauty & Personal Care", path: "/category/beauty-care" },
  { name: "Sports & Outdoors", path: "/category/sports-outdoors" },
  { name: "Automotive", path: "/category/automotive" },
];

const CategorySidebar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTabletOrLaptop = useMediaQuery("(max-width: 1024px)");

  if (isMobile) {
    return null; // Do not render the sidebar on small screens
  }

  return (
    <Box
      sx={{
        width: isTabletOrLaptop ? "250px" : "400px", // Adjust width for tablets and laptops below 1024px
        backgroundColor: "#000188",
        padding: "20px",
        borderRadius: "0px",
        position: "relative",
        top: "0", // Ensures it remains at the top
        minHeight: "100vh", // Takes full height till the footer
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Sidebar Heading */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#ffff",
          textAlign: "center",
          mb: 2,
          borderBottom: "2px solid #ffff",
          paddingBottom: "5px",
        }}
      >
        Categories
      </Typography>

      {/* Category List */}
      <List>
        {categories.map((category, index) => (
          <ListItem
            key={index}
            component={Link}
            to={category.path}
            sx={{
              padding: "10px",
              paddingLeft: isTabletOrLaptop ? "20px" : "125px", // Decrease padding for tablets and laptops below 1024px
              borderRadius: "0px",
              transition: "background 0.3s ease",
              "&:hover": { backgroundColor: "#4C4CC4", color: "white" },
              textDecoration: "none",
            }}
          >
            <ListItemText primary={category.name} sx={{ color: "#ffff" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategorySidebar;
