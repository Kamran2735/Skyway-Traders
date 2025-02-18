import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/STLogo.png";

const MainNav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  // Common styles for navbar items
  const navItemStyles = {
    cursor: "pointer",
    fontSize: "18px", // ✅ Reduced from 23px
    fontWeight: "bold",
    transition: "color 0.3s",
    "&:hover": { color: "#4C4CC4" },
  };

  // Common styles for dropdown items
  const menuItemStyles = {
    fontSize: "16px", // ✅ Reduced from 20px
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": { backgroundColor: "#000188", color: "white" },
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "#000188", padding: "0 100px", height: "55px" }}> {/* ✅ Reduced padding & height */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "55px" }}> {/* ✅ Adjusted minHeight */}
        
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Skyway Traders Logo" style={{ height: 60, width: "auto" }} /> {/* ✅ Reduced from 100px */}
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}> {/* ✅ Reduced gap */}
          {/* Overview - Shows dropdown on hover */}
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Typography variant="h6" sx={navItemStyles}>Overview</Typography>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMouseLeave}>
              <MenuItem onClick={() => { navigate("/about"); handleMouseLeave(); }} sx={menuItemStyles}>About Us</MenuItem>
              <MenuItem onClick={() => { navigate("/services"); handleMouseLeave(); }} sx={menuItemStyles}>Services</MenuItem>
              <MenuItem onClick={() => { navigate("/team"); handleMouseLeave(); }} sx={menuItemStyles}>Team</MenuItem>
            </Menu>
          </Box>

          <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/new-arrivals")}>
            New Arrivals
          </Typography>
          <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/products")}>
            Products
          </Typography>
          <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/contact")}>
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
