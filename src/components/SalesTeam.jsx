import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Add, Remove, Facebook, Twitter, Instagram } from "@mui/icons-material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    bio: "Danny is a visionary leader with over a decade of industry experience, driving innovation and strategic growth.",
  },
  {
    name: "Deli Yanky",
    role: "Consulting Officer",
    image: person2,
    bgColor: "#F8E79B",
    bio: "Deli is a seasoned strategist with a keen eye for business growth and operational efficiency.",
  },
  {
    name: "Maurice Craig",
    role: "Financial Manager",
    image: person3,
    bgColor: "#A5E6C2",
    bio: "Maurice is a detail-oriented financial expert with a strong track record in managing budgets.",
  },
  {
    name: "Anna Lin",
    role: "Product Designer",
    image: person4,
    bgColor: "#F4C0A5",
    bio: "Anna is a creative and user-focused designer passionate about crafting intuitive experiences.",
  },
];

const SalesTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true } },
    ],
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center", overflow: "hidden", py: 5 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: 30,
            color: "#000188",
            fontWeight: "bold",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            ml: 10,
            mb: 10,
          }}
        >
          <Box component="span" sx={{ width: "40px", height: "2px", backgroundColor: "#000188", mr: 1 }} />
          Sales Team
        </Typography>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  px: 8,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
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

                    <Box
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        background: "linear-gradient(135deg,#6a11cb, #000188)",
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
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <IconButton sx={{ color: "white", p: 0, "&:hover": { color: "#4C4CC4" } }}>
                              <Facebook fontSize="small" />
                            </IconButton>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <IconButton sx={{ color: "white", p: 0, "&:hover": { color: "#4C4CC4" } }}>
                              <Twitter fontSize="small" />
                            </IconButton>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <IconButton sx={{ color: "white", p: 0, "&:hover": { color: "#4C4CC4" } }}>
                              <Instagram fontSize="small" />
                            </IconButton>
                          </motion.div>
                        </>
                      )}
                    </Box>
                  </Box>
                </motion.div>

                <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
                  {member.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666" }}>
                  {member.role}
                </Typography>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      background: "linear-gradient(135deg, #000188,#6a11cb)",
                      color: "white",
                      mt: 2,
                      width: "280px",
                      px: 3,
                      py: 2,
                      borderRadius: "8px",
                      fontSize: "14px",
                    }}
                  >
                    {member.bio}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          ))}
        </Slider>
      </Box>
    </motion.div>
  );
};

export default SalesTeam;
