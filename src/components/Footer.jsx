import React from "react";
import { Box, Typography, TextField, IconButton, Link, Divider, useMediaQuery } from "@mui/material";
import { Email, Facebook, Twitter, WhatsApp, Pinterest, ArrowForward } from "@mui/icons-material";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #000188 60%, #12123D 100%)",
        color: "#fff",
        py: 6,
        px: isMobile ? 3 : 5, // ✅ Reduced padding to keep inline
      }}
    >
      {/* Content Wrapper */}
      <Box
        sx={{
          maxWidth: "1200px", // ✅ Increased max-width for better inline layout
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "space-between",
          gap: 3, // ✅ Decreased spacing between sections
        }}
      >
        {/* Left Section - About */}
        <Box sx={{ maxWidth: "250px", flex: 1, minWidth: "200px", textAlign: isMobile ? "center" : "left" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            SkyWay Traders
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mt: 4 }}>
            Subscribe to our newsletter to get the latest updates and insights into our industry.
          </Typography>
        </Box>

        {/* Middle Section - Office Info */}
        <Box sx={{ maxWidth: "250px", flex: 1, minWidth: "200px", textAlign: isMobile ? "center" : "left" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Office
          </Typography>
          <Box sx={{ width: "40px", height: "4px", backgroundColor: "#fff", mb: 2, mx: isMobile ? "auto" : 0 }} />
          <Typography variant="body2" sx={{ opacity: 0.8, mt: 3 }}>
            4671 Sugar Camp Road, Owatonna, Minnesota, 55060
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
            contact@skywaytraders.com
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
            +92 333 3333333
          </Typography>
        </Box>

        {/* New Section - Company Links */}
        <Box sx={{ maxWidth: "180px", flex: 1, minWidth: "150px", textAlign: isMobile ? "center" : "left" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Company
          </Typography>
          <Box sx={{ width: "40px", height: "4px", backgroundColor: "#fff", mb: 2, mx: isMobile ? "auto" : 0 }} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
            <Link href="#" underline="none" sx={{ color: "#fff", opacity: 0.8 }}>
              Home
            </Link>
            <Link href="#" underline="none" sx={{ color: "#fff", opacity: 0.8 }}>
              About Us
            </Link>
            <Link href="#" underline="none" sx={{ color: "#fff", opacity: 0.8 }}>
              Services
            </Link>
            <Link href="#" underline="none" sx={{ color: "#fff", opacity: 0.8 }}>
              Contacts
            </Link>
          </Box>
        </Box>

        {/* New Section - Product Links */}
        <Box sx={{ maxWidth: "180px", flex: 1, minWidth: "150px", textAlign: isMobile ? "center" : "left" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Products
          </Typography>
          <Box sx={{ width: "40px", height: "4px", backgroundColor: "#fff", mb: 2, mx: isMobile ? "auto" : 0 }} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
            <Link href="#" underline="none" sx={{ color: "#fff", opacity: 0.8 }}>
              Products
            </Link>
            <Link href="#" underline="none" sx={{ color: "#fff", opacity: 0.8 }}>
              New Arrivals
            </Link>
            <Link href="#" underline="none" sx={{ color: "#fff", opacity: 0.8 }}>
              Categories
            </Link>
          </Box>
        </Box>

        {/* Right Section - Newsletter (Now inline) */}
        <Box sx={{ maxWidth: "270px", flex: 1, minWidth: "200px", textAlign: isMobile ? "center" : "left" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Newsletter
          </Typography>
          <Box sx={{ width: "40px", height: "4px", backgroundColor: "#fff", mb: 2, mx: isMobile ? "auto" : 0 }} />
          <Box sx={{ display: "flex", alignItems: "center", borderBottom: "1px solid #fff", mt: 3 }}>
            <Email sx={{ color: "#fff", mr: 1 }} />
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff" },
              }}
            />
            <IconButton sx={{ color: "#fff" }}>
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Social Icons (Below Newsletter & Centered) */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <IconButton sx={{ color: "#fff", mx: 1 }}>
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: "#fff", mx: 1 }}>
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: "#fff", mx: 1 }}>
          <WhatsApp />
        </IconButton>
        <IconButton sx={{ color: "#fff", mx: 1 }}>
          <Pinterest />
        </IconButton>
      </Box>

      {/* Shortened Divider Line */}
      <Divider sx={{ backgroundColor: "#fff", opacity: 1, my: 4, width: "70%", mx: "auto" }} />

      {/* Footer Text */}
      <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.8 }}>
        SkyWay Traders © {new Date().getFullYear()} - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
