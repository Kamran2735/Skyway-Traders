import React from "react";
import { AppBar, Toolbar, Typography, Select, MenuItem, ListItemIcon, ListItemText, Box, useMediaQuery } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // ⬇️ Dropdown Arrow
import EmailIcon from "@mui/icons-material/Email"; // Email Icon
import PhoneIcon from "@mui/icons-material/Phone"; // Phone Icon

const TopBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f1f1f1",
padding: isMobile 
  ? "5px 70px 5px 0px"  // Top 5px, Right 40px, Bottom 5px, Left 10px
  : isTablet 
    ? "5px 70px 5px 10px"  // Top 5px, Right 30px, Bottom 5px, Left 10px
    : "5px 30px",        color: "#000",
        height: isMobile ? "auto" : "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "40px",
          width: "100%",
          flexDirection: "row",
          gap: isMobile ? 1 : 3, // Decrease spacing for mobile
        }}
      >
        {/* ✅ Left spacer to balance layout */}
        <Box sx={{ flex: 1, display: isMobile ? "none" : "block" }} />

        {/* ✅ Centered Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: isMobile ? 1 : 3, textAlign: "center", flexShrink: 0, flexDirection: "row" }}>
          {isMobile ? (
            <>
              <PhoneIcon fontSize="small" sx={{ marginRight: "4px" }} />
              <a href="tel:+923333333333" style={{ color: "#0056b3", textDecoration: "none", fontSize: "0.75rem" }}>
                +92 333 3333333
              </a>
            </>
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
              <strong>Skyway Trader HQ:</strong> +92 333 3333333
            </Typography>
          )}
          <Typography variant="body2" sx={{ fontSize: "0.75rem", display: "flex", alignItems: "center" }}>
            <EmailIcon fontSize="small" sx={{ marginRight: "4px" }} />
            <a href="mailto:st@skytraders.co.pk" style={{ color: "#0056b3", textDecoration: "none" }}>
              st@skytraders.co.pk
            </a>
          </Typography>
        </Box>

        {/* ✅ Right-aligned Country Selector (Fix for Positioning) */}
        <Box
          sx={{
            flex: 1, // ✅ Keeps country selector on the right while info stays centered
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            "&:hover .icon, &:hover .arrow": { color: "#fff" },
          }}
        >
          <Select
            defaultValue="PK"
            variant="standard"
            disableUnderline
            renderValue={isMobile ? () => <PublicIcon className="icon" fontSize="small" sx={{ color: "#fff" }} /> : undefined} // Show only globe icon for mobile
            sx={{
              fontSize: "0.75rem",
              color: "#fff",
              background: "linear-gradient(135deg, #6a11cb,#000188)",
              borderRadius: "4px",
              paddingX: "10px",
              minWidth: isMobile ? "40px" : "120px", // Adjusted width for icon only on mobile
              textAlign: "center",
              height: "28px",
              transition: "background-color 0.3s ease",
              display: "flex",
              alignItems: "center",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center the icon
              },
              "&:hover": { background: "linear-gradient(135deg,#000188,#6a11cb)" },
            }}
            IconComponent={(props) => <ExpandMoreIcon {...props} className="arrow" sx={{ transition: "color 0.3s", color: "#000" }} />}
          >
            <MenuItem value="PK">
              <ListItemIcon>
                <PublicIcon className="icon" fontSize="small" sx={{ transition: "color 0.3s", color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Pakistan" /> {/* Show text in dropdown */}
            </MenuItem>
            <MenuItem value="US">
              <ListItemIcon>
                <PublicIcon className="icon" fontSize="small" sx={{ transition: "color 0.3s", color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="United States" /> {/* Show text in dropdown */}
            </MenuItem>
            <MenuItem value="EU">
              <ListItemIcon>
                <PublicIcon className="icon" fontSize="small" sx={{ transition: "color 0.3s", color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Europe" /> {/* Show text in dropdown */}
            </MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;


