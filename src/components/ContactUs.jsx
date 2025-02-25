import React from "react";
import { Box, Typography, TextField, Button, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, WhatsApp, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box sx={{ maxWidth: "1100px", mx: "auto", py: 8, px: { xs: 3, md: 6 } }}>
        {/* Contact Us Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: 30,
              color: "#000188",
              fontWeight: "bold",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Box component="span" sx={{ width: "40px", height: "2px", backgroundColor: "#000188", mr: 1 }} />
            Contact Us
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4, alignItems: "stretch" }}>
          {/* Left Section - Contact Form */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {["Full name", "Phone", "Email Address", "Message"].map((placeholder, index) => (
                <Grid item xs={12} sm={placeholder === "Message" ? 12 : 6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
                  >
                    <TextField
                      fullWidth
                      placeholder={placeholder}
                      variant="outlined"
                      multiline={placeholder === "Message"}
                      rows={placeholder === "Message" ? 4 : 1}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 0,
                          "& fieldset": { borderColor: "#ccc" },
                          "&:hover fieldset": { borderColor: "#000188" },
                          "&.Mui-focused fieldset": { borderColor: "#000188" },
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}

              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(135deg, #000188,#6a11cb)",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: 0,
                      padding: "12px 24px",
                      "&:hover": {
                        background: "linear-gradient(135deg, #6a11cb,#000188)",
                        transform: "scale(1.05)", // Button bounce effect
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                  >
                    SEND MESSAGE
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Section - Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Box
                sx={{
                  background: "linear-gradient(135deg, #000188,#6a11cb)",
                  p: 4,
                  borderRadius: 0,
                  color: "#ffffff",
                  ml: { xs: 0, md: 6 },
                  mt: { xs: 4, md: 0 },
                }}
              >
                {[
                  { title: "Address", text: "2047 Cyrus Viaduct East, Jadynchester" },
                  { title: "Email", text: "info@skywaytraders.com\nsupport@skywaytraders.com" },
                  { title: "Phone", text: "+1 313-645-3395\n+1 469-970-2609" },
                ].map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1">{item.text}</Typography>
                  </Box>
                ))}

                {/* Social Icons */}
                <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
                  {[Facebook, Instagram, Twitter, WhatsApp].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconButton
                        sx={{
                          color: "#fff",
                          backgroundColor: "transparent",
                          "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                        }}
                      >
                        <Icon />
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default ContactUs;
