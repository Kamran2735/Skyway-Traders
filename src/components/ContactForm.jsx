import React from "react";
import { Box, Typography, TextField, Button, useMediaQuery, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import backgroundImg from "../assets/Contact/contact-bg.jpg"; // Add your background image

const ContactForm = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  // Animation triggers
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
          backgroundColor: "rgba(0, 0, 0, 0.7)",
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
          justifyContent: "center",
        }}
      >
        {/* Left Section - Contact Info */}
        <Grid item xs={12} md={6}>
          {/* Heading & Subheading Animation */}
          <motion.div
            ref={headingRef}
            initial={{ y: 50, opacity: 0 }}
            animate={headingInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#000188" }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </Typography>
          </motion.div>

          <motion.div
            ref={leftRef}
            initial={{ x: -50, opacity: 0 }}
            animate={leftInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            ref={rightRef}
            initial={{ x: 50, opacity: 0 }}
            animate={rightInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                p: 4,
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                border: "1px solid #ddd",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "#000188" }}>
                Send Message
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                variant="standard"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="standard"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Type your message..."
                multiline
                rows={4}
                variant="standard"
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "linear-gradient(135deg, #000188,#6a11cb)",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  "&:hover": { background: "linear-gradient(135deg,#6a11cb, #000188)" },
                }}
              >
                Send
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
