import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pic1 from "../assets/person-1.png";
import pic2 from "../assets/person-2.png";
import pic3 from "../assets/person-3.png";
import pic4 from "../assets/person-4.png";

import logopic1 from "../assets/cl1.png";
import logopic2 from "../assets/cl2.png";
import logopic3 from "../assets/cl3.png";
import logopic4 from "../assets/cl4.png";

import { Card, Typography, Avatar, Box, Rating } from "@mui/material";

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
  const swiperRef = React.useRef(null); // Create a reference to the swiper instance

  return (
    <Box sx={{ py: 8, textAlign: "center", maxWidth: "1200px", mx: "auto", position: "relative" }}>
      <Typography
        variant="h6" 
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: '1.1rem',
          color: '#000188',
          textDecoration: 'underline',
          textDecorationColor: '#000188',
          paddingBottom: '10px',
        }}
      >
        Testimonials
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ paddingBottom: '20px' }}>
        Words From Our Customers
      </Typography>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ paddingBottom: "50px" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                minHeight: 350,
                height: 350,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 3,
                boxShadow: 3,
                borderRadius: 3,
              }}
            >
              <Avatar src={testimonial.image} sx={{ width: 70, height: 70, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="#000188" sx={{ mb: 1 }}>
                {testimonial.position}
              </Typography>

              {/* Remark with fixed space allocation */}
              <Typography
                variant="body2"
                color="text.secondary"
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows outside of Swiper */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
        }}
      >
        <Box
          className="swiper-button-prev"
          sx={{
            color: "#000188",
            position: "absolute",
            left: "-100px",
            zIndex: 10,
            cursor: "pointer",
          }}
        />
        <Box
          className="swiper-button-next"
          sx={{
            color: "#000188",
            position: "absolute",
            right: "-100px",
            zIndex: 10,
            cursor: "pointer",
          }}
        />
      </Box>

      {/* Custom Styles for Pagination Dots */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #000188 !important; /* Matches arrow color */
          }
          .swiper-pagination-bullet-active {
            background-color: #000188 !important; /* Active dot color */
          }
        `}
      </style>
    </Box>
  );
}
