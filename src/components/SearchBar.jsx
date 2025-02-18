import React, { useState } from "react";
import { AppBar, Toolbar, Box, Menu, MenuItem, Button, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (category) => {
    setSelectedCategory(category);
    setAnchorEl(null);
  };

  const handleSearch = () => {
    console.log(`Searching for "${searchQuery}" in "${selectedCategory}" category`);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000188", padding: "0px 100px", minHeight: "40px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "40x" }}>

        {/* Categories Dropdown */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon sx={{ fontSize: "14px" }} />}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "0.8rem",
              padding: "4px 10px",
              border: "1px solid #4C4CC4",
              boxShadow: "0 0 5px #4C4CC4",
              borderRadius: "4px",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#4C4CC4" },
            }}
          >
            Categories
          </Button>

          {/* Categories Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            sx={{ "& .MuiPaper-root": { minWidth: anchorEl ? anchorEl.offsetWidth : "auto" } }}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                onClick={() => handleMenuClose(category)}
                sx={{
                  fontSize: "0.8rem",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#000188", color: "#ffffff" },
                }}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Search Bar - Slimmer & Shorter */}
        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#ddd", borderRadius: "4px", padding: "2px 6px", width: "50%" }}>
          <Button
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon sx={{ fontSize: "14px" }} />}
            sx={{
              backgroundColor: "#4C4CC4",
              padding: "4px 8px",
              borderRadius: "4px 0 0 4px",
              color: "#ffffff",
              fontSize: "0.8rem",
              fontWeight: "bold",
              minWidth: "90px",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#000188" },
            }}
          >
            {selectedCategory}
          </Button>

          {/* Search Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            sx={{ "& .MuiPaper-root": { minWidth: anchorEl ? anchorEl.offsetWidth : "auto" } }}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                onClick={() => handleMenuClose(category)}
                sx={{
                  fontSize: "0.8rem",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#000188", color: "#ffffff" },
                }}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>

          <InputBase
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search in ${selectedCategory}`}
            sx={{
              flex: 1,
              padding: "2px 8px",
              backgroundColor: "#fff",
              fontSize: "0.8rem",
            }}
          />
          <IconButton
            onClick={handleSearch}
            sx={{
              backgroundColor: "#4C4CC4",
              borderRadius: "0 4px 4px 0",
              padding: "6px",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#000188" },
            }}
          >
            <SearchIcon sx={{ color: "#fff", fontSize: "1.3rem" }} />
          </IconButton>
        </Box>

        {/* Quote Cart Button */}
        <Button
          variant="text"
          startIcon={<ShoppingCartIcon fontSize="small" />}
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "0.8rem",
            height: "100%",
            border: "1px solid #4C4CC4",
            boxShadow: "0 0 5px #4C4CC4",
            borderRadius: "4px",
            padding: "4px 8px",
            transition: "all 0.3s ease",
            "&:hover": { backgroundColor: "#4C4CC4" },
          }}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
