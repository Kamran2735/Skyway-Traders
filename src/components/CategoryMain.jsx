import React from "react";
import { Box, Typography, Card, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Images
import product1 from "../assets/Cat1.jpg";
import product2 from "../assets/Cat2.webp";
import product3 from "../assets/Cat3.webp";
import product4 from "../assets/NAProduct-2.webp";
import product5 from "../assets/NAProduct-3.webp";
import product6 from "../assets/NAProduct-4.webp";

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
        {categories.map((category, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                backgroundColor: "#4C4CC4",
                padding: "0px",
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
                  transition: "transform 0.3s ease-in-out", // ✅ Light hover effect
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

              {/* Product Showcase (Expanded by default) */}
              <Box
                sx={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "#4C4CC4",
                  display: "flex",
                  flexDirection: "column", // ✅ Ensures proper alignment
                  alignItems: "center",
                  justifyContent: "center", // ✅ Center everything vertically
                  padding: "15px",
                  paddingLeft: { xs: "15px", md: "40px" },
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  {category.products.map((product) => (
                    <Grid item xs={12} sm={4} key={product.id}>
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
                              height: { xs: "120px", sm: "140px", md: "160px" }, // Fixed heights for different screen sizes
                              objectFit: "cover",
                              borderRadius: "0px",
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

                {/* Browse More Link (Centered in Expanded Section) */}
                <MuiLink
                  component={Link}
                  to={category.path}
                  sx={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "10px",
                    justifyContent: "center", // ✅ Centered horizontally
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    mt: 2, // ✅ Adds spacing from product items
                    "&:hover": { color: "#000188" }, // ✅ Gold hover effect
                  }}
                >
                  Browse More <ArrowForwardIosIcon sx={{ fontSize: "16px", ml: 1 }} />
                </MuiLink>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryMain;
