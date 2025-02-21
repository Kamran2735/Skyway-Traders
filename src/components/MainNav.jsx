import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Menu, MenuItem, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/STLogo.png";

const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];
const navOptions = ["Overview", "New Arrivals", "Products", "Contact"];
const overviewOptions = [
  { label: "Company Overview", path: "/Overview" },
  { label: "About Us", path: "/About" },
  { label: "Services", path: "/Services" },
  { label: "Team", path: "/Team" }
];

const MainNav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Common styles
  const navItemStyles = {
    cursor: "pointer",
    fontSize: isMobile ? "14px" : "18px",
    fontWeight: "bold",
    transition: "color 0.3s",
    "&:hover": { color: "#4C4CC4" }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#000188",
        padding: isMobile ? "0 10px" : isTablet ? "0 20px" : "0 100px",
        height: isMobile ? "auto" : "55px"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "55px", flexDirection: "row" }}>
        {/* Mobile View */}
        {isMobile ? (
          <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <img src={logo} alt="Skyway Traders Logo" style={{ height: 40, cursor: "pointer" }} onClick={() => navigate("/")} />
              <IconButton edge="end" color="inherit" aria-label="cart" onClick={() => navigate("/cart")}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                <ListItem button onClick={() => { navigate("/overview"); setDrawerOpen(false); }}>
                  <ListItemText primary="Overview" />
                </ListItem>
                {overviewOptions.map(({ label, path }) => (
                  <ListItem button key={label} onClick={() => { navigate(path); setDrawerOpen(false); }} sx={{ pl: 4 }}>
                    <ListItemText primary={label} />
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="Skyway Traders Logo" style={{ height: 60, cursor: "pointer" }} onClick={() => navigate("/")} />
            </Box>
            <Box sx={{ display: "flex", gap: isTablet ? 2 : 2, flexDirection: "row", alignItems: "center" }}>
              {/* ✅ "Overview" is now a clickable element */}
              <Box sx={{ position: "relative", display: "flex", alignItems: "center" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/overview")}>
                  Overview
                </Typography>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMouseLeave} disableAutoFocusItem>
                  {overviewOptions.map(({ label, path }) => (
                    <MenuItem key={label} onClick={() => { navigate(path); handleMouseLeave(); }} sx={{ fontSize: "16px", "&:hover": { backgroundColor: "#000188", color: "white" } }}>
                      {label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/New_Arrivals")}>
                New Arrivals
              </Typography>
              <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/Products")}>
                Products
              </Typography>
              <Typography variant="h6" sx={navItemStyles} onClick={() => navigate("/Contact")}>
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
