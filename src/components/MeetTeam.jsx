import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Add, Remove, Facebook, Twitter, Instagram } from "@mui/icons-material";
import Slider from "react-slick";

import person1 from "../assets/Person1.png";
import person2 from "../assets/Person2.png";
import person3 from "../assets/Person3.png";
import person4 from "../assets/Person4.png";

const teamMembers = [
  {
    name: "Bruce Wayne",
    role: "CEO & Strategic Director",
    image: person1,
    bgColor: "#F8C8DC",
    bio: "A visionary leader with an unparalleled strategic mind, Bruce ensures precision, resilience, and excellence in every endeavor. With a commitment to innovation and justice, he drives the team toward a future built on strength and integrity. 🦇",
  },
  {
    name: "Charles Xavier",
    role: "Founder & Visionary Mentor",
    image: person2,
    bgColor: "#F8E79B",
    bio: "A brilliant mind and compassionate leader, Charles inspires innovation and unity. With a deep commitment to progress and potential, he fosters growth, collaboration, and a future shaped by knowledge and understanding. 🧠✨",
  },
  {
    name: "Tony Stark",
    role: "Founder & Chief Innovator",
    image: person3,
    bgColor: "#A5E6C2",
    bio: "A visionary genius and entrepreneur, Tony leads with cutting-edge technology and bold innovation. With a knack for problem-solving and a passion for the future, he drives our team to push boundaries and redefine possibilities. 🚀",
  },
  {
    name: "Natasha Romanoff",
    role: "Strategic Operations Lead",
    image: person4,
    bgColor: "#F4C0A5",
    bio: "A master strategist and elite problem-solver, Natasha brings precision, adaptability, and leadership to every mission. With a sharp mind and unwavering dedication, she ensures success in even the most high-stakes situations. 🕵️‍♀️",
  },
];

const MeetTeam = () => {
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
        SuperHero Team
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

export default MeetTeam;
