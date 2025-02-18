import React from "react";
import { AppBar, Toolbar, Typography, Select, MenuItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // ⬇️ Dropdown Arrow

const TopBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "5px 30px",
        color: "#000",
        height: "40px",
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
        }}
      >
        {/* ✅ Left spacer to balance layout */}
        <Box sx={{ flex: 1 }} />

        {/* ✅ Centered Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, textAlign: "center", flexShrink: 0 }}>
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            <strong>Skyway Trader HQ:</strong> +92 333 3333333
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            Email:{" "}
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
            sx={{
              fontSize: "0.75rem",
              color: "#fff",
              backgroundColor: "#4C4CC4",
              borderRadius: "4px",
              paddingX: "10px",
              minWidth: "120px",
              textAlign: "center",
              height: "28px",
              transition: "background-color 0.3s ease",
              display: "flex",
              alignItems: "center",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
              "&:hover": { backgroundColor: "#000188" },
            }}
            IconComponent={(props) => <ExpandMoreIcon {...props} className="arrow" sx={{ transition: "color 0.3s", color: "#000" }} />}
          >
            <MenuItem value="PK">
              <ListItemIcon>
                <PublicIcon className="icon" fontSize="small" sx={{ transition: "color 0.3s", color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Pakistan" />
            </MenuItem>
            <MenuItem value="US">
              <ListItemIcon>
                <PublicIcon className="icon" fontSize="small" sx={{ transition: "color 0.3s", color: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="United States" />
            </MenuItem>
            <MenuItem value="EU">
              <ListItemIcon>
                <PublicIcon className="icon" fontSize="small" sx={{ transition: "color 0.3s", color: "#000" }} />
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
