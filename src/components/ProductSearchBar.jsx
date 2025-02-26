import React, { useState } from "react";
import { AppBar, Toolbar, Box, Paper, List, ListItem, ListItemText, InputBase, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const categories = [
  "Free Gift Product",
  "Trending Product",
  "Discount Products",
  "Beauty & Health",
  "Women's Fashion",
  "Smart Phones & Tablets",
  "Computing & Gaming",
  "Home & Living",
  "Diamond",
  "Men",
  "Accessories",
];

const ProductsSearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Departments");

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/category/${category.toLowerCase().replace(/\s+/g, "-")}`);
  };

  // Handle search action
  const handleSearch = () => {
    console.log(`Searching for "${searchQuery}" in "${selectedCategory}"`);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000188", // Match navbar background
        padding: "0 100px",
        minHeight: "55px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          minHeight: "55px",
        }}
      >
        {/* ✅ Fixed Sidebar for Categories (Aligned Properly) */}
        <Paper
          sx={{
            width: "230px",
            backgroundColor: "#D32F2F", // Red sidebar
            color: "#fff",
            borderRadius: "5px",
            boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
            marginRight: "15px", // Ensure space between sidebar and search bar
          }}
        >
          <Button
            sx={{
              width: "100%",
              backgroundColor: "#B71C1C",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              padding: "12px",
              fontSize: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&:hover": { backgroundColor: "#9A0007" },
            }}
          >
            All Departments <ArrowDropDownIcon />
          </Button>
          <List>
            {categories.map((category) => (
              <ListItem
                button
                key={category}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "#B71C1C" },
                  padding: "10px 16px",
                }}
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* ✅ Search Bar (Styled Like the Original) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "25px",
            padding: "2px 6px",
            flex: 1,
            maxWidth: "700px",
            height: "45px",
            border: "2px solid #4C4CC4",
            boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* ✅ Dropdown Inside Search Field */}
          <Button
            sx={{
              backgroundColor: "#4C4CC4",
              padding: "10px",
              borderRadius: "25px 0 0 25px",
              color: "#ffffff",
              fontSize: "0.9rem",
              fontWeight: "bold",
              minWidth: "150px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { backgroundColor: "#000188" },
            }}
          >
            {selectedCategory} <ArrowDropDownIcon />
          </Button>

          {/* ✅ Search Input */}
          <InputBase
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search in ${selectedCategory}`}
            sx={{
              flex: 1,
              padding: "4px 8px",
              backgroundColor: "#fff",
              fontSize: "0.9rem",
            }}
          />
          <IconButton onClick={handleSearch}>
            <SearchIcon sx={{ color: "#4C4CC4", fontSize: "1.5rem" }} />
          </IconButton>
        </Box>

        {/* ✅ Cart Button for Consistency */}
        <Button
          variant="text"
          startIcon={<SearchIcon />}
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "0.8rem",
            height: "100%",
            border: "1px solid #4C4CC4",
            boxShadow: "0 0 5px #4C4CC4",
            borderRadius: "25px",
            padding: "8px 16px",
            marginLeft: "15px",
            "&:hover": { backgroundColor: "#4C4CC4" },
          }}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ProductsSearchBar;
