import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
import slide1 from "../assets/New_Arrivals/NA1.jpg";
import slide2 from "../assets/New_Arrivals/NA2.jpg";
import bannerImg from "../assets/New_Arrivals/NA4.webp";

const slides = [slide1, slide2];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "15px",
        right: "70px",
        zIndex: 2,
        background: "linear-gradient(135deg,#000188,#6a11cb)",
        border: "1px solid #4C4CC4",
        width: "45px",
        height: "45px",
        borderRadius: "0px",
        "&:hover": { background: "linear-gradient(135deg, #6a11cb,#000188)", border: "1px solid #000188", color: "white" },
      }}
    >
      <ChevronLeft sx={{ fontSize: 28, color: "white" }} />
    </IconButton>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "15px",
        right: "15px",
        zIndex: 2,
        background: "linear-gradient(135deg,#000188,#6a11cb)",
        border: "1px solid #4C4CC4",
        width: "45px",
        height: "45px",
        borderRadius: "0px",
        "&:hover": { background: "linear-gradient(135deg, #6a11cb,#000188)", border: "1px solid #000188", color: "white" },
      }}
    >
      <ChevronRight sx={{ fontSize: 28, color: "white" }} />
    </IconButton>
  );
};

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // ✅ Only shows ONE image per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          mx: "auto",
          mt: 2,
          mb: 2,
          gap: "20px",
        }}
      >
        {/* Left Side - Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: "1", maxWidth: "50%" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "500px",
              overflow: "hidden",
              borderRadius: "0px",
              position: "relative",
            }}
          >
            <Slider {...settings}>
              {slides.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    minWidth: "100%", // ✅ Ensures each slide is 100% width
                    height: "500px",
                    overflow: "hidden",
                    padding: 0, // ✅ Removes unwanted spacing
                  }}
                >
                  <img
                    src={image}
                    alt={`slide-${index}`}
                    style={{
                      width: "100%", // ✅ Ensures full width usage
                      height: "100%",
                      objectFit: "cover", // ✅ Prevents white gaps & second image peeking
                      display: "block",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </motion.div>

        {/* Right Side - Background Image with Hover Scale Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ flex: "1", maxWidth: "50%" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "500px",
              position: "relative",
              borderRadius: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              "::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.3s ease-in-out",
                zIndex: -1,
              },
              "&:hover::after": {
                transform: "scale(1.1)",
              },
            }}
          >
            {/* Text at Top Center */}
            <Box sx={{ textAlign: "center", width: "100%", mt: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                Exceptional
              </Typography>
              <Typography variant="h6" sx={{ color: "#000188" }}>
                OFFICE CHAIR
              </Typography>
            </Box>

            {/* Button at Bottom Right */}
            <Box
              sx={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg,#000188,#6a11cb)",
                    color: "white",
                    "&:hover": { background: "linear-gradient(135deg, #6a11cb,#000188)" },
                  }}
                >
                  SHOP NOW
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HeroSection;
