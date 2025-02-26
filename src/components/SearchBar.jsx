import React, { useState } from "react";
import { AppBar, Toolbar, Box, Menu, MenuItem, Button, InputBase, IconButton, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];

const SearchBar = () => {
  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState(null); // For "Product Categories"
  const [searchMenuAnchor, setSearchMenuAnchor] = useState(null); // For dropdown in search field
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:960px)");

  // ✅ Handle first dropdown menu (Product Categories)
  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = (category) => {
    setSelectedCategory(category);
    setMenuAnchor(null);

    // ✅ Navigate based on selection
    if (category === "All") {
      navigate("/category");
    } else {
      navigate(`/category/${category.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  // ✅ Handle search dropdown menu
  const handleSearchMenuOpen = (event) => {
    setSearchMenuAnchor(event.currentTarget);
  };

  const handleSearchMenuClose = (category) => {
    if (category) {
      setSelectedCategory(category);
    }
    setSearchMenuAnchor(null);
  };

  // ✅ Handle search action
  const handleSearch = () => {
    console.log(`Searching for "${searchQuery}" in "${selectedCategory}" category`);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000188",
        padding: isMobile ? "0px 10px" : isTablet ? "0px 20px" : "0px 100px",
        minHeight: "40px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "40px",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 1 : 0,
        }}
      >
        {/* ✅ First Dropdown: Product Categories */}
        {!isMobile && (
          <Button
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              color: "#fff",
              background: "linear-gradient(135deg, #000188, #6a11cb)",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "0.8rem",
              padding: "4px 8px",
              border: "1px solid #4C4CC4",
              boxShadow: "0 0 5px #4C4CC4",
              borderRadius: "4px",
              transition: "all 0.3s ease",
              "&:hover": { background: "linear-gradient(135deg,  #6a11cb,#000188)" },
            }}
          >
            Product Categories
          </Button>
        )}

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => setMenuAnchor(null)}
          sx={{ "& .MuiPaper-root": { minWidth: menuAnchor ? menuAnchor.offsetWidth : "auto" } }}
        >
          {categories.map((category) => (
            <MenuItem
              key={category}
              onClick={() => handleMenuClose(category)}
              sx={{
                fontSize: "0.8rem",
                transition: "all 0.3s ease",
                "&:hover": {  background: "linear-gradient(135deg, #6a11cb,#000188)", color: "#ffffff" },
              }}
            >
              {category}
            </MenuItem>
          ))}
        </Menu>

        {/* ✅ Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ddd",
            borderRadius: "4px",
            padding: "2px 6px",
            width: isMobile ? "100%" : "50%",
          }}
        >
          {/* ✅ Dropdown inside Search Field */}
          <Button
            onClick={handleSearchMenuOpen}
            endIcon={<ArrowDropDownIcon sx={{ fontSize: "14px" }} />}
            sx={{
              background: "linear-gradient(135deg,#6a11cb, #000188)",
              padding: "4px 8px",
              borderRadius: "4px 0 0 4px",
              color: "#ffffff",
              fontSize: "0.8rem",
              fontWeight: "bold",
              minWidth: "90px",
              transition: "all 0.3s ease",
              "&:hover": { background: "linear-gradient(135deg, #000188,#6a11cb)" },
            }}
          >
            {selectedCategory}
          </Button>

          <Menu
            anchorEl={searchMenuAnchor}
            open={Boolean(searchMenuAnchor)}
            onClose={() => setSearchMenuAnchor(null)}
            sx={{ "& .MuiPaper-root": { minWidth: searchMenuAnchor ? searchMenuAnchor.offsetWidth : "auto" } }}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                onClick={() => handleSearchMenuClose(category)}
                sx={{
                  fontSize: "0.8rem",
                  transition: "all 0.3s ease",
                  "&:hover": { background: "linear-gradient(135deg, #000188,#6a11cb)", color: "#ffffff" },
                }}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>

          {/* ✅ Search Input */}
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
              background: "linear-gradient(135deg, #6a11cb,#000188)",
              borderRadius: "0 4px 4px 0",
              padding: "6px",
              transition: "all 0.3s ease",
              "&:hover": { background: "linear-gradient(135deg, #000188,#6a11cb)" },
            }}
          >
            <SearchIcon sx={{ color: "#fff", fontSize: "1.3rem" }} />
          </IconButton>
        </Box>

        {/* ✅ Cart Button (Hidden on Mobile) */}
        {!isMobile && (
          <Button
            variant="text"
            startIcon={<ShoppingCartIcon fontSize="small" />}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #000188,#6a11cb)",
              textTransform: "none",
              fontSize: "0.8rem",
              height: "100%",
              border: "1px solid #4C4CC4",
              boxShadow: "0 0 5px #4C4CC4",
              borderRadius: "4px",
              padding: "4px 8px",
              transition: "all 0.3s ease",
              "&:hover": { background: "linear-gradient(135deg,#6a11cb, #000188)" },
            }}
          >
            Cart
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
