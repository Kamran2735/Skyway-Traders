import React from "react";
import { Box, Typography, Card, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Images
import product1 from "../assets/Categories/Cat1.jpg";
import product2 from "../assets/Categories/Cat2.webp";
import product3 from "../assets/Categories/Cat3.webp";
import product4 from "../assets/New_Arrivals/NAProduct-2.webp";
import product5 from "../assets/New_Arrivals/NAProduct-3.webp";
import product6 from "../assets/New_Arrivals/NAProduct-4.webp";

// Dummy Category Data (Replace with API Data)
const categories = [
  {
    name: "Electronics",
    path: "/category/electronics",
    bgImg: product1,
    products: [
      { id: 1, name: "Smartphone", img: product1, path: "/product/smartphone" },
      { id: 2, name: "Laptop", img: product2, path: "/product/laptop" },
      { id: 3, name: "Smartwatch", img: product3, path: "/product/smartwatch" },
    ],
  },
  {
    name: "Fashion",
    path: "/category/fashion",
    bgImg: product4,
    products: [
      { id: 1, name: "Jacket", img: product4, path: "/product/jacket" },
      { id: 2, name: "Sneakers", img: product5, path: "/product/sneakers" },
      { id: 3, name: "Handbag", img: product6, path: "/product/handbag" },
    ],
  },
  {
    name: "Electronics",
    path: "/category/electronics",
    bgImg: product1,
    products: [
      { id: 1, name: "Smartphone", img: product1, path: "/product/smartphone" },
      { id: 2, name: "Laptop", img: product2, path: "/product/laptop" },
      { id: 3, name: "Smartwatch", img: product3, path: "/product/smartwatch" },
    ],
  },
  {
    name: "Fashion",
    path: "/category/fashion",
    bgImg: product4,
    products: [
      { id: 1, name: "Jacket", img: product4, path: "/product/jacket" },
      { id: 2, name: "Sneakers", img: product5, path: "/product/sneakers" },
      { id: 3, name: "Handbag", img: product6, path: "/product/handbag" },
    ],
  },
];

const CategoryMain = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 5, px: { xs: 2, md: 3 } }}>
      <Grid container spacing={2}>
        {categories.map((category, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

          return (
            <Grid item xs={12} key={index} ref={ref}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} // Alternate directions
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    backgroundColor: "#000188",
                    overflow: "hidden",
                    height: { xs: "auto", md: "220px" },
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  {/* Category Image & Name */}
                  <Box
                    component={Link}
                    to={category.path}
                    sx={{
                      width: { xs: "100%", md: "300px" },
                      height: { xs: "200px", md: "100%" },
                      backgroundImage: `url(${category.bgImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    {/* Category Name Overlay */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        textAlign: "center",
                      }}
                    >
                      {category.name}
                    </Typography>
                  </Box>

                  {/* Product Showcase */}
                  <Box
                    sx={{
                      flex: 1,
                      background: "linear-gradient(135deg, #000188,#6a11cb)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: { xs: "15px", md: "40px" },
                    }}
                  >
                    <Grid container spacing={2} justifyContent="center">
                      {category.products.map((product) => (
                        <Grid item xs={4} sm={4} key={product.id}>
                          <Link to={product.path} style={{ textDecoration: "none", color: "black" }}>
                            <Box
                              sx={{
                                textAlign: "center",
                                position: "relative",
                                "&:hover img": { transform: "scale(1.05)" },
                              }}
                            >
                              {/* Product Image */}
                              <img
                                src={product.img}
                                alt={product.name}
                                style={{
                                  width: "100%",
                                  height: "120px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                  transition: "transform 0.3s ease",
                                }}
                              />
                              {/* Product Name Overlay */}
                              <Typography
                                variant="body2"
                                sx={{
                                  position: "absolute",
                                  bottom: "-15px",
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                                  color: "white",
                                  padding: "3px 8px",
                                  borderRadius: "4px",
                                  fontSize: "12px",
                                }}
                              >
                                {product.name}
                              </Typography>
                            </Box>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>

                    {/* Browse More Link (Centered) */}
                    <MuiLink
                      component={Link}
                      to={category.path}
                      sx={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        mt: 3,
                        "&:hover": { color: "#4C4CC4" },
                      }}
                    >
                      Browse More <ArrowForwardIosIcon sx={{ fontSize: "16px", ml: 1 }} />
                    </MuiLink>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategoryMain;
