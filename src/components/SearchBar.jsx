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
    <AppBar position="static" sx={{ backgroundColor: "#000188", padding: "10px 150px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        {/* Categories Dropdown */}
        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Button
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1.2rem",
              padding: "10px 20px",
              border: "2px solid #4C4CC4",
              boxShadow: "0 0 10px #4C4CC4",
              borderRadius: "5px",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#4C4CC4" },
            }}
          >
            Product Categories
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
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#000188",
                    color: "#ffffff"
                  }
                }}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#ddd", borderRadius: "5px", padding: "4px 12px", width: "60%" }}>
          <Button
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              backgroundColor: "#4C4CC4",
              padding: "8px 12px",
              borderRadius: "5px 0 0 5px",
              color: "#ffffff",
              fontSize: "1.2rem",
              fontWeight: "bold",
              minWidth: "140px",
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
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#000188",
                    color: "#ffffff"
                  }
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
              padding: "6px 12px",
              backgroundColor: "#fff",
              fontSize: "1.2rem",
            }}
          />
          <IconButton
            onClick={handleSearch}
            sx={{
              backgroundColor: "#4C4CC4",
              borderRadius: "0 5px 5px 0",
              padding: "10px",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#000188" },
            }}
          >
            <SearchIcon sx={{ color: "#fff", fontSize: "2rem" }} />
          </IconButton>
        </Box>

        {/* Quote Cart Button */}
        <Button
          variant="text"
          startIcon={<ShoppingCartIcon fontSize="large" />}
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "1.2rem",
            height: "100%",
            border: "2px solid #4C4CC4",
            boxShadow: "0 0 10px #4C4CC4",
            borderRadius: "5px",
            padding: "10px 20px",
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
