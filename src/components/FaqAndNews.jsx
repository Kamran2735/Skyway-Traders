import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardMedia, CardContent, useMediaQuery } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import newsImg1 from "../assets/Home/product-1.jpg"; // Replace with actual image paths
import newsImg2 from "../assets/Categories/Cat2.webp";

const faqs = [
  {
    question: "How Factory Continues To Grow And Expand, Increasing?",
    answer: "Authoritatively integrate alternative outsourcing vis-a-vis market positioning quality vectors. Compellingly iterate diverse e-services before backward-compatible expertise.",
  },
  {
    question: "Completely Facilitate Revolution In Agriculture Processing",
    answer: "Seamlessly empower fully researched growth strategies and interoperable internal sources. Enthusiastically scale B2B content rather than superior innovation.",
  },
  {
    question: "Competently Streamline Progressive Scenarios",
    answer: "Assertively iterate resource maximizing products after user friendly intellectual capital. Distinctively supply cross-media meta-services for highly efficient functionalities.",
  },
  {
    question: "Factory Press Distinctively Synergize Seamless Methods",
    answer: "Proactively harness enterprise-wide vortals without premium interfaces. Interactively strategize scalable infomediaries before user-centric relationships.",
  },
];

const latestNews = [
  {
    title: "Design and Advanced Materials As a Driver of Innovation",
    date: "06 January 2023",
    category: "Chemical",
    description: "There are more questions that need answers before significant disruption to current models, such as the credit card, can occur...",
    image: newsImg1,
  },
  {
    title: "Materials & Manufacturing Service Engineers at Factorypress",
    date: "06 January 2023",
    category: "Agriculture",
    description: "There are more questions that need answers before significant disruption to current models, such as the credit card, can occur...",
    image: newsImg2,
  },
];

const FaqAndNews = () => {
  const [expanded, setExpanded] = useState(0);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const faqRef = useRef(null);
  const newsRef = useRef(null);
  const [equalHeight, setEqualHeight] = useState("auto");

  // Animations for heading
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (faqRef.current && newsRef.current) {
      const maxHeight = Math.max(faqRef.current.clientHeight, newsRef.current.clientHeight);
      setEqualHeight(`${maxHeight}px`);
    }
  }, []);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box sx={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px", display: "flex", gap: 4, flexDirection: isMobile ? "column" : "row" }}>
      {/* FAQ Section */}
      <Box sx={{ flex: 1 }}>
        {/* Heading Animation */}
        <motion.div
          ref={headingRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#000188" }}>
            General Questions
          </Typography>
        </motion.div>

        <Box
          ref={faqRef}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            padding: "25px",
            height: isMobile ? "auto" : equalHeight,
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Accordion
                expanded={expanded === index}
                onChange={() => handleChange(index)}
                sx={{
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  backgroundColor: expanded === index ? "#f9f9f9" : "#fff",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <AccordionSummary
                  expandIcon={expanded === index ? <RemoveIcon sx={{ color: "#000188", fontSize: "24px" }} /> : <AddIcon sx={{ color: "#000188", fontSize: "24px" }} />}
                  sx={{
                    fontWeight: "bold",
                    color: "#000",
                    padding: "15px 20px",
                    "& .MuiAccordionSummary-content": { margin: "0" },
                  }}
                >
                  {faq.question}
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    padding: "20px",
                    background: "linear-gradient(135deg, #000188,#6a11cb)",
                    color: "#fff",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  {faq.answer}
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Latest News Section */}
      <Box sx={{ flex: 1 }}>
        {/* Heading Animation */}
        <motion.div
          ref={headingRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#000188" }}>
            Latest News
          </Typography>
        </motion.div>

        <Box ref={newsRef} sx={{ height: isMobile ? "auto" : equalHeight, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          {latestNews.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  mb: 3,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #6a11cb,#000188)",
                  color: "#fff",
                }}
              >
                <CardMedia component="img" image={news.image} alt={news.title} sx={{ width: isMobile ? "100%" : "40%", objectFit: "cover" }} />

                <CardContent sx={{ width: isMobile ? "100%" : "60%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}>
                    {news.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ddd", mb: 1 }}>
                    {news.date} <span style={{ color: "#4C9BE8", fontWeight: "bold", marginLeft: "5px" }}>{news.category}</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#eee" }}>{news.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqAndNews;
