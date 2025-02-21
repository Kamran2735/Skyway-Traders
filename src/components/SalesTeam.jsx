import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Add, Remove, Facebook, Twitter, Instagram } from "@mui/icons-material";
import Slider from "react-slick";

import person1 from "../assets/SPerson1.jpg";
import person2 from "../assets/SPerson2.png";
import person3 from "../assets/SPerson3.png";
import person4 from "../assets/SPerson4.png";

const teamMembers = [
  {
    name: "Danny Russell",
    role: "Founder & CEO",
    image: person1,
    bgColor: "#F8C8DC",
    bio: "Danny is a visionary leader with over a decade of industry experience, driving innovation and strategic growth. With a strong entrepreneurial mindset and a passion for excellence, they have built a dynamic team and a thriving organization. Their leadership fosters creativity, collaboration, and a commitment to delivering impactful solutions.",
  },
  {
    name: "Deli Yanky",
    role: "Consulting Officer",
    image: person2,
    bgColor: "#F8E79B",
    bio: "Deli is a seasoned strategist with a keen eye for business growth and operational efficiency. With years of experience in consulting, they excel at identifying challenges, optimizing processes, and driving impactful solutions. Their expertise in strategic planning and problem-solving makes them a valuable asset to the team ",
  },
  {
    name: "Maurice Craig",
    role: "Financial Manager",
    image: person3,
    bgColor: "#A5E6C2",
    bio: "Maurice is a detail-oriented financial expert with a strong track record in managing budgets, optimizing financial strategies, and ensuring long-term stability. With a deep understanding of financial planning and risk management, they play a key role in driving the company’s fiscal health and sustainable growth.",
  },
  {
    name: "Anna Lin",
    role: "Product Designer",
    image: person4,
    bgColor: "#F4C0A5",
    bio: "Anna is a creative and user-focused designer passionate about crafting intuitive and visually compelling experiences. With a keen eye for detail and a deep understanding of user behavior, she transforms ideas into seamless, functional designs that enhance engagement and usability.",
  },
];

const SalesTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true, // ✅ Enable autoplay
    autoplaySpeed: 5000, // ✅ Moves every 3 seconds
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true } },
    ],
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center", position: "relative", overflow: "hidden", py: 5 }}>
      {/* Section Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: 30,
          color: "#000188",
          fontWeight: "bold",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
        //   justifyContent: "center",
          ml: 10,  
          mb: 10,
        }}
      >
        <Box component="span" sx={{ width: "40px", height: "2px", backgroundColor: "#000188", mr: 1 }} />
        Sales Team
      </Typography>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 8,
            }}
          >
            {/* Teardrop Shape Container */}
            <Box
              sx={{
                width: "280px",
                height: "300px",
                backgroundColor: member.bgColor,
                position: "relative",
                borderRadius: hoveredIndex === index ? "10px" : "50% 10% 50% 50%",
                overflow: "hidden",
                transition: "border-radius 0.3s ease-in-out",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Profile Image */}
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Plus Icon & Social Links */}
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#000188",
                  borderRadius: "25px",
                  overflow: "hidden",
                  transition: "height 0.3s ease-in-out",
                  height: hoveredIndex === index ? "130px" : "40px",
                  width: "40px",
                  justifyContent: hoveredIndex === index ? "space-evenly" : "center",
                }}
              >
                <IconButton sx={{ color: "white", p: 0 }}>
                  {hoveredIndex === index ? <Remove fontSize="small" /> : <Add fontSize="small" />}
                </IconButton>
                {hoveredIndex === index && (
                  <>
<IconButton
  sx={{
    color: "white",
    p: 0,
    transition: "color 0.3s ease",
    "&:hover": { color: "#4C4CC4" }, // ✅ Changes color on hover
  }}
>
  <Facebook fontSize="small" />
</IconButton>

<IconButton
  sx={{
    color: "white",
    p: 0,
    transition: "color 0.3s ease",
    "&:hover": { color: "#4C4CC4" }, // ✅ Changes color on hover
  }}
>
  <Twitter fontSize="small" />
</IconButton>

<IconButton
  sx={{
    color: "white",
    p: 0,
    transition: "color 0.3s ease",
    "&:hover": { color: "#4C4CC4" }, // ✅ Changes color on hover
  }}
>
  <Instagram fontSize="small" />
</IconButton>
                  </>
                )}
              </Box>
            </Box>

            {/* Name & Role */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
              {member.name}
            </Typography>
            <Typography variant="body1" sx={{ color: "#666" }}>
              {member.role}
            </Typography>

            {/* Bio Section with Full Card Width */}
            <Typography
              variant="body2"
              sx={{
                backgroundColor: "#000188", // ✅ Dark Blue Background
                color: "white", // ✅ White Text
                mt: 2,
                width: "280px", // ✅ Matches Card Width
                px: 3,
                py: 2,
                borderRadius: "8px", // ✅ Slightly Rounded Edges
                fontSize: "14px",
              }}
            >
              {member.bio}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SalesTeam;
