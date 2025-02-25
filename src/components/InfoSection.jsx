import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InfoSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "auto", padding: { xs: "20px", md: "40px 20px" } }}>
        <Grid container spacing={4} columnSpacing={8} alignItems="stretch">
          {/* Left Column */}
          <Grid item xs={12} md={7} sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: { xs: "20px", md: "30px" },
                  borderRadius: "8px",
                  flex: 1,
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight={700}
                  gutterBottom
                  sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }} // Responsive font size
                >
                  BUY USED AND REFURBISHED EQUIPMENT
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
                  color="text.secondary"
                  gutterBottom
                >
                  Since 1932, we have been selling high-quality used equipment worldwide.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, fontWeight: 600 }}
                  gutterBottom
                >
                  Our vision is to supply high-quality used process equipment for a competitive price.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} gutterBottom>
                  We help your company save time and money on processing machinery.
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  mt={2}
                  sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
                >
                  The benefits we offer our customers include:
                </Typography>
                <List sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
                  <ListItem>✅ Immediate equipment availability</ListItem>
                  <ListItem>✅ Cost savings of 50-70%</ListItem>
                  <ListItem>✅ Mechanical refurbishment services</ListItem>
                  <ListItem>✅ Worldwide delivery</ListItem>
                  <ListItem>✅ Flexible payment terms</ListItem>
                </List>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={5} sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Box
                sx={{
                  background: "linear-gradient(135deg, #000188,#6a11cb)",
                  color: "white",
                  padding: { xs: "20px", md: "30px" },
                  borderRadius: "8px",
                  boxShadow: "0 0 15px 10px #4C4CC4",
                  flex: 1,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  gutterBottom
                  sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }} // Responsive font size
                >
                  Sky-Way Traders
                </Typography>
                <Typography
                  variant="h6"
                  fontStyle="italic"
                  gutterBottom
                  sx={{ fontSize: { xs: "1rem", md: "1.3rem" } }}
                >
                  Offices and Representatives
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
                  gutterBottom
                >
                  Skyway Traders have experienced professionals in multiple regions, including the US, UK, Poland, and more.
                </Typography>
                <Divider sx={{ backgroundColor: "white", margin: "10px 0" }} />
                <List>
                  {["United Kingdom", "United States", "Poland", "France", "Germany"].map((location) => (
                    <ListItem key={location}>
                      <ListItemIcon>
                        <PlaceIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={location}
                        primaryTypographyProps={{
                          color: "white",
                          fontSize: { xs: "1rem", md: "1.2rem" }, // Responsive font size
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default InfoSection;
