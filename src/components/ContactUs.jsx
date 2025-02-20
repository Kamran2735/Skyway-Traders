import React from "react";
import { Box, Typography, TextField, Button, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, WhatsApp, Instagram } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box sx={{ maxWidth: "1100px", mx: "auto", py: 8, px: { xs: 3, md: 6 } }}>
      {/* Contact Us Heading */}
      <Typography
        variant="H2"
        sx={{ fontSize: 30,  color: "#000188", fontWeight: "bold", textTransform: "uppercase", display: "flex", alignItems: "center", mb: 1 }}>
        <Box component="span" sx={{ width: "40px", height: "2px", backgroundColor: "#000188", mr: 1 }} />
        Contact Us
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4, alignItems: "stretch" }}>
        {/* Left Section - Contact Form */}
        <Grid item xs={12} md={7}> {/* Shrinked from 8 to 7 */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Full name"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    "& fieldset": { borderColor: "#ccc" },
                    "&:hover fieldset": { borderColor: "#000188" },
                    "&.Mui-focused fieldset": { borderColor: "#000188" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Phone"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    "& fieldset": { borderColor: "#ccc" },
                    "&:hover fieldset": { borderColor: "#000188" },
                    "&.Mui-focused fieldset": { borderColor: "#000188" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Email Address"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    "& fieldset": { borderColor: "#ccc" },
                    "&:hover fieldset": { borderColor: "#000188" },
                    "&.Mui-focused fieldset": { borderColor: "#000188" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    "& fieldset": { borderColor: "#ccc" },
                    "&:hover fieldset": { borderColor: "#000188" },
                    "&.Mui-focused fieldset": { borderColor: "#000188" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000188",
                  color: "#ffffff",
                  fontWeight: "bold",
                  borderRadius: 0,
                  padding: "12px 24px",
                  "&:hover": { backgroundColor: "#4C4CC4" },
                }}
              >
                SEND MESSAGE
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Section - Contact Info */}
        <Grid
          item
          xs={12}
          md={4} // Adjusted from 4 to 5
          sx={{
            backgroundColor: "#000188",
            p: 4,
            borderRadius: 0,
            color: "#ffffff",
            ml: { xs: 0, md: 6 }, // Increased margin-left to create spacing
            mt: { xs: 4, md: 0 }, // Add margin-top for mobile to separate sections
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}>
            Address
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
            2047 Cyrus Viaduct East, Jadynchester
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}>
            Email
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            info@skywaytraders.com
            <br />
            support@skywaytraders.com
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}>
            Phone
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            +1 313-645-3395
            <br />
            +1 469-970-2609
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "#fff", backgroundColor: "transparent", "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" } }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "#fff", backgroundColor: "transparent", "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" } }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: "#fff", backgroundColor: "transparent", "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" } }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "#fff", backgroundColor: "transparent", "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" } }}>
              <WhatsApp />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
