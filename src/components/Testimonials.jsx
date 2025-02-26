import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, Typography, Avatar, Box, Rating, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import pic1 from "../assets/Testimonials/person-1.png";
import pic2 from "../assets/Testimonials/person-2.png";
import pic3 from "../assets/Testimonials/person-3.png";
import pic4 from "../assets/Testimonials/person-4.png";

import logopic1 from "../assets/Testimonials/cl1.png";
import logopic2 from "../assets/Testimonials/cl2.png";
import logopic3 from "../assets/Testimonials/cl3.png";
import logopic4 from "../assets/Testimonials/cl4.png";

const testimonials = [
  {
    name: "Vanita Scheve",
    position: "Manager, Nalashaa",
    image: pic1,
    text: "On the other hand, we give denounced with righteous indignation and dislike",
    logo: logopic1,
    rating: 5,
  },
  {
    name: "Isaias Gencarelli",
    position: "Manager, Chargity",
    image: pic2,
    text: "Prevents our being blame done what we likes best",
    logo: logopic2,
    rating: 4,
  },
  {
    name: "Justin Sweeny",
    position: "Manager, GenoLogics",
    image: pic3,
    text: "Idea of denouncing and serve praising pain was born. This service exceeded my expectations and I will definitely use it again in the future!",
    logo: logopic3,
    rating: 4.5,
  },
  {
    name: "Alex Morgan",
    position: "CEO, Techwave",
    image: pic4,
    text: "The best service I have ever used! Highly recommended for all businesses looking to streamline their operations and maximize efficiency.",
    logo: logopic4,
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 960px)");

  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box sx={{ py: 8, textAlign: "center", maxWidth: "1200px", mx: "auto", position: "relative" }}>
      {/* Heading and Subheading Animation */}
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
            fontSize: "1.1rem",
            color: "#000188",
            textDecoration: "underline",
            textDecorationColor: "#000188",
            paddingBottom: "10px",
          }}
        >
          Testimonials
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ paddingBottom: "20px" }}>
          Words From Our Customers
        </Typography>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        pagination={{ clickable: true }}
        loop={true}
        style={{ paddingBottom: "50px" }}
      >
        {testimonials.map((testimonial, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

          // New animation sequence:
          const animationVariants = [
            { initial: { x: 50, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // First: Slide from Right
            { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } }, // Second: Slide from Below
            { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Third: Slide from Left
          ];
          const variant = animationVariants[index % 3]; // Rotates the animations

          return (
            <SwiperSlide key={index}>
              <motion.div ref={ref} initial={variant.initial} animate={inView ? variant.animate : {}} transition={{ duration: 0.8 }}>
                <Card
                  sx={{
                    minHeight: isMobile ? 300 : 350,
                    height: isMobile ? 300 : 350,
                    display: "flex",
                    background: "linear-gradient(135deg, #000188,#6a11cb)",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 3,
                  }}
                >
                  <Avatar src={testimonial.image} sx={{ width: 70, height: 70, mb: 2 }} />
                  <Typography variant="h6" color="white" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="#4C9BE8" sx={{ mb: 1 }}>
                    {testimonial.position}
                  </Typography>

                  {/* Remark with fixed space allocation */}
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      mb: 2,
                      flexGrow: 1,
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {testimonial.text}
                  </Typography>

                  {/* Stars always in the same position */}
                  <Rating value={testimonial.rating} precision={0.5} readOnly sx={{ mb: 2 }} />

                  {/* Company Logo - no cropping */}
                  <Box
                    component="img"
                    src={testimonial.logo}
                    alt="Company Logo"
                    sx={{
                      width: 80,
                      height: 50,
                      objectFit: "contain",
                      mt: "auto",
                    }}
                  />
                </Card>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Styles for Pagination Dots */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: linear-gradient(135deg,#6a11cb, #000188); !important; /* Matches arrow color */
          }
          .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #6a11cb,#000188); /* Active dot color */
          }
        `}
      </style>
    </Box>
  );
}
