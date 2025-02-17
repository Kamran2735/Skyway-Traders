import React from "react";
import { AppBar, Toolbar, Typography, Select, MenuItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public"; // 🌍 World/Map Icon

const TopBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "10px 50px",
        color: "#000",
        height: "55px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "55px", width: "100%" }}>
        
        {/* ✅ Left empty to balance spacing */}
        <Box sx={{ flex: 1 }}></Box> 

        {/* ✅ Centered Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4, textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
            <strong>Skyway Trader Main HQ:</strong> +92 333 3333333
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
            Email:{" "}
            <a href="mailto:st@skytraders.co.pk" style={{ color: "#0056b3", textDecoration: "none" }}>
              st@skytraders.co.pk
            </a>
          </Typography>
        </Box>

        {/* ✅ Country Selector (remains on the right) */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Select
            defaultValue="PK"
            variant="standard"
            disableUnderline
            sx={{
              fontSize: "0.85rem",
              color: "#fff",
              backgroundColor: "#4C4CC4",
              borderRadius: "6px",
              paddingX: "14px",
              minWidth: "150px", // ✅ Ensures minimum width
              maxWidth: "auto", // ✅ Allows dynamic width
              textAlign: "center",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
              "&:hover": { backgroundColor: "#000188" },
            }}
          >
            <MenuItem value="PK">
              <ListItemIcon>
                <PublicIcon fontSize="small" sx={{ color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Pakistan" />
            </MenuItem>
            <MenuItem value="US">
              <ListItemIcon>
                <PublicIcon fontSize="small" sx={{ color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="United States of America" />
            </MenuItem>
            <MenuItem value="EU">
              <ListItemIcon>
                <PublicIcon fontSize="small" sx={{ color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Europe" />
            </MenuItem>
          </Select>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
