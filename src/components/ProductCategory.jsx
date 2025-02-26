import React from "react";
import { Box, Typography, Card, CardMedia, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import StorefrontIcon from "@mui/icons-material/Storefront";

// Sample category images
import Cat3 from "../assets/Categories/Cat1.jpg";
import Cat2 from "../assets/Categories/Cat2.webp";
import Cat1 from "../assets/Categories/Cat3.webp";
import BgImage from "../assets/Home/bg1.jpg"; // Background image

// Sample category data
const categories = [
  { title: "Industrial Equipment", img: Cat1, icon: <InventoryIcon sx={{ color: "#fff" }} /> },
  { title: "Electronic Components", img: Cat2, icon: <CategoryIcon sx={{ color: "#fff" }} /> },
  { title: "Retail & Wholesale", img: Cat3, icon: <StorefrontIcon sx={{ color: "#fff" }} /> },
  { title: "Electronic Components", img: Cat2, icon: <CategoryIcon sx={{ color: "#fff" }} /> },
  { title: "Retail & Wholesale", img: Cat3, icon: <StorefrontIcon sx={{ color: "#fff" }} /> },
];

const ProductCategory = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        py: 8,
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
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
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content Wrapper */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Heading & Subheading Animation */}
        <motion.div
          ref={headingRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: "1.2rem",
              color: "#4C9BE8",
              pb: 2,
            }}
          >
            Product Categories
          </Typography>
          <Typography variant="h4" sx={{ pb: 2, fontWeight: "bold", mb: 2 }}>
            Browse Our Product Sectors
          </Typography>
        </motion.div>

        {/* Swiper Carousel */}
        <Box sx={{ width: "85%", margin: "0 auto", position: "relative", pb: 4 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              960: { slidesPerView: 3 },
              600: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {categories.map((category, index) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

              return (
                <SwiperSlide key={index}>
                  {/* Flip Animation for Cards - Now triggers when in view */}
                  <motion.div
                    ref={ref}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={inView ? { rotateY: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Box sx={{ px: 1 }}>
                      <Card
                        sx={{
                          position: "relative",
                          borderRadius: "12px",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                          overflow: "hidden",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": { transform: "scale(1.05)" },
                        }}
                      >
                        <CardMedia component="img" height="200" image={category.img} alt={category.title} />

                        {/* Custom Title Strip - Fixed Placement */}
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "20px",
                            left: 0, // Strip starts from left
                            width: "80%", // Ends before reaching the right
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 16px",
                            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
                            borderRadius: "0px 8px 8px 0px",
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
                            {category.title}
                          </Typography>
                          <IconButton
                            sx={{
                              background: "linear-gradient(135deg,#6a11cb,#000188)",
                              padding: "6px",
                              borderRadius: "4px",
                              "&:hover": { background: "linear-gradient(135deg,#000188,#6a11cb)" },
                            }}
                          >
                            {category.icon}
                          </IconButton>
                        </Box>
                      </Card>
                    </Box>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>

        {/* Contact Section - Slide in from Top */}
        <motion.div
          ref={contentRef}
          initial={{ y: -50, opacity: 0 }}
          animate={contentInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="body1" sx={{ mt: 0, fontWeight: "bold" }}>
            Since 1964, We provide the best solutions for our valuable customers.
          </Typography>
          <Typography variant="body1" sx={{ color: "#4C9BE8", mt: 1 }}>
            ✉ Getaquote@SkyWayTraders.com
          </Typography>
        </motion.div>
      </Box>

      {/* Custom Styles for Pagination Dots */}
      <style>
        {`
          .swiper-pagination {
            position: relative !important;
            margin-top: 15px !important;
          }
          .swiper-pagination-bullet {
            background: linear-gradient(135deg,#6a11cb, #000188) !important; 
          }
          .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #6a11cb,#000188);
          }
        `}
      </style>
    </Box>
  );
};

export default ProductCategory;
