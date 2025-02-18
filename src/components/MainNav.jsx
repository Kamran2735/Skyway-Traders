import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Menu, MenuItem, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, ListSubheader, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/STLogo.png";

const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];
const navOptions = ["Overview", "New Arrivals", "Products", "Contact"];
const overviewOptions = ["About Us", "Services", "Team"];

const MainNav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Common styles for navbar items
  const navItemStyles = {
    cursor: "pointer",
    fontSize: isMobile ? "14px" : "18px", // ✅ Adjusted font size for mobile
    fontWeight: "bold",
    transition: "color 0.3s",
    "&:hover": { color: "#4C4CC4" },
  };

  // Common styles for dropdown items
  const menuItemStyles = {
    fontSize: isMobile ? "14px" : "16px", // ✅ Adjusted font size for mobile
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": { backgroundColor: "#000188", color: "white" },
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "#000188", padding: isMobile ? "0 10px" : isTablet ? "0 20px" : "0 100px", height: isMobile ? "auto" : "55px" }}> {/* ✅ Adjusted padding & height for mobile and tablet */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: isMobile ? "auto" : "55px", flexDirection: "row" }}> {/* ✅ Adjusted minHeight and flexDirection for mobile */}
        
        {/* Navigation Links */}
        {isMobile ? (
          <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <img src={logo} alt="Skyway Traders Logo" style={{ height: 40, width: "auto", cursor: "pointer" }} onClick={() => navigate("/")} /> {/* ✅ Clickable logo */}
              <IconButton edge="end" color="inherit" aria-label="cart" onClick={() => navigate("/cart")}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                <ListItem button onClick={() => { navigate("/overview"); setDrawerOpen(false); }}>
                  <ListItemText primary="Overview" />
                </ListItem>
                {overviewOptions.map((option) => (
                  <ListItem button key={option} onClick={() => { navigate(`/${option.toLowerCase().replace(" ", "-")}`); setDrawerOpen(false); }} sx={{ pl: 4 }}>
                    <ListItemText primary={option} />
                  </ListItem>
                ))}
                {navOptions.slice(1).map((option) => (
                  <ListItem button key={option} onClick={() => { navigate(`/${option.toLowerCase().replace(" ", "-")}`); setDrawerOpen(false); }}>
                    <ListItemText primary={option} />
                  </ListItem>
                ))}
                <ListSubheader>Categories</ListSubheader>
                {categories.map((category) => (
                  <ListItem button key={category} onClick={() => { navigate(`/category/${category.toLowerCase().replace(" ", "-")}`); setDrawerOpen(false); }} sx={{ pl: 4 }}>
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}> {/* ✅ Adjusted margin for mobile */}
              <img src={logo} alt="Skyway Traders Logo" style={{ height: isMobile ? 40 : 60, width: "auto", cursor: "pointer" }} onClick={() => navigate("/")} /> {/* ✅ Clickable logo */}
            </Box>
            <Box sx={{ display: "flex", gap: isTablet ? 2 : 2, flexDirection: "row", alignItems: "center" }}> {/* ✅ Adjusted gap and flexDirection for tablet */}
              {/* Overview - Shows dropdown on hover */}
              <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/overview")}>Overview</Typography>
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
