import React from "react";
import { Box, Typography, TextField, Button, useMediaQuery, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import backgroundImg from "../assets/contact-bg.jpg"; // Add your background image

const ContactForm = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 960px)");

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
        py: 8,
        px: 3,
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
          zIndex: 1,
        }}
      />

      {/* Content Wrapper */}
      <Grid
        container
        spacing={4}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          mx: "auto",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center", // Center content
        }}
      >
        {/* Left Section - Contact Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#000188" }} textAlign={isMobile ? "center" : "left"}>
            Contact Us
          </Typography>
          <Typography variant="body1" textAlign={isMobile ? "center" : "left"} sx={{ opacity: 0.8, mb: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </Typography>

          {/* Contact Details */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <LocationOnIcon sx={{ fontSize: 30, color: "#000188", mr: 2 }} />
            <Box>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#000188" }}>Address</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                4671 Sugar Camp Road, Owatonna, Minnesota, 55060
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <PhoneIcon sx={{ fontSize: 30, color: "#000188", mr: 2 }} />
            <Box>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#000188" }}>Phone</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>507-475-60945-6094</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <EmailIcon sx={{ fontSize: 30, color: "#000188", mr: 2 }} />
            <Box>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#000188" }}>Email</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>contact@skywaytraders.com</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              p: 4,
              borderRadius: "8px", // Rounded corners
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Light shadow
              border: "1px solid #ddd", // Light gray border
              width: "100%", // Ensure full width on mobile
              maxWidth: "500px", // Limit width for better centering
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "#000188" }}>
              Send Message
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              variant="standard"
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": { color: "#000188" }, // ✅ Focus color
                },
              }}
              sx={{
                mb: 2,
                "& .MuiInput-underline:before": { borderBottom: "2px solid #000" }, // Black underline
                "& .MuiInput-underline:hover:before": { borderBottom: "2px solid #000" }, // Hover effect
                "& .MuiInput-underline:after": { borderBottom: "2px solid #000188" }, // ✅ Active focus color
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="standard"
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": { color: "#000188" }, // ✅ Focus color
                },
              }}
              sx={{
                mb: 2,
                "& .MuiInput-underline:before": { borderBottom: "2px solid #000" },
                "& .MuiInput-underline:hover:before": { borderBottom: "2px solid #000" },
                "& .MuiInput-underline:after": { borderBottom: "2px solid #000188" }, // ✅ Active focus color
              }}
            />
            <TextField
              fullWidth
              label="Type your message..."
              multiline
              rows={4}
              variant="standard"
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": { color: "#000188" }, // ✅ Focus color
                },
              }}
              sx={{
                mb: 2,
                "& .MuiInput-underline:before": { borderBottom: "2px solid #000" },
                "& .MuiInput-underline:hover:before": { borderBottom: "2px solid #000" },
                "& .MuiInput-underline:after": { borderBottom: "2px solid #000188" }, // ✅ Active focus color
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(135deg, #000188,#6a11cb)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Light shadow
                "&:hover": { background: "linear-gradient(135deg,#6a11cb, #000188)" }, // 
              }}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
