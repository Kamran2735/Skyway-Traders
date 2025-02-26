import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

import product1 from "../assets/Home/product-1.jpg";
import product2 from "../assets/Home/product-2.jpeg";
import product3 from "../assets/Home/product-3.jpg";

const deals = [
  {
    img: product1,
    title: "Tablet Red EliteBook Revolve",
    originalPrice: "$239.99",
    discountPrice: "$425.89",
    discountAmount: "$120",
    timeLeft: 3600, // Example: 1 hour in seconds
  },
  {
    img: product2,
    title: "Smart Watch Pro Series",
    originalPrice: "$199.99",
    discountPrice: "$159.99",
    discountAmount: "$40",
    timeLeft: 7200, // Example: 2 hours
  },
  {
    img: product3,
    title: "Wireless Headphones",
    originalPrice: "$99.99",
    discountPrice: "$79.99",
    discountAmount: "$20",
    timeLeft: 1800, // Example: 30 minutes
  },
];

const DealsOfTheWeek = () => {
  const [currentDeal, setCurrentDeal] = useState(0);
  const [timeLeft, setTimeLeft] = useState(deals[currentDeal].timeLeft);

  // Auto-switch deals every 5 seconds
  useEffect(() => {
    const autoSwitch = setInterval(() => {
      nextDeal();
    }, 5000);

    return () => clearInterval(autoSwitch);
  }, [currentDeal]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentDeal]);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const nextDeal = () => {
    setCurrentDeal((prev) => (prev + 1) % deals.length);
    setTimeLeft(deals[(currentDeal + 1) % deals.length].timeLeft);
  };

  const prevDeal = () => {
    setCurrentDeal((prev) => (prev - 1 + deals.length) % deals.length);
    setTimeLeft(deals[(currentDeal - 1 + deals.length) % deals.length].timeLeft);
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <Paper
      sx={{
        width: "400px", // Fixed width, not full width
        // marginLeft: "60px",
        marginRight: "20px", // Leave space for the next component
        padding: "0px",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", textAlign: "center" }}>
        {/* Header */}
        <Typography
          variant="h6"
          sx={{
           background: "linear-gradient(135deg, #000188,#6a11cb)",
            color: "#fff",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          Deals <span style={{ fontWeight: "normal" }}>of the week</span>
        </Typography>

        {/* Product Section */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
          {/* ✅ Price on top */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000188" }}>
            {deals[currentDeal].discountPrice}{" "}
            <span style={{ textDecoration: "line-through", color: "#aaa", fontSize: "14px" }}>
              {deals[currentDeal].originalPrice}
            </span>
          </Typography>

          {/* ✅ Product Name */}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: "5px", textAlign: "center",color: "#000" }}>
            {deals[currentDeal].title}
          </Typography>

          {/* ✅ Increased Image Size */}
          <img
            src={deals[currentDeal].img}
            alt="Deal"
            style={{ width: "350px", height: "230px", objectFit: "contain" }}
          />

          {/* Discount */}
          <Typography
            variant="body2"
            sx={{
              background: "linear-gradient(135deg, #6a11cb,#000188)",
              color: "lightGreen",
              fontWeight: "bold",
              padding: "5px 10px",
              display: "inline-block",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            SAVE {deals[currentDeal].discountAmount}
          </Typography>

          {/* Countdown Timer */}
          <Box sx={{ marginTop: "15px", textAlign: "center" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" , color : "#000188"}}>
              Hurry up!
            </Typography>
            <Typography variant="body2">Offer ends in:</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "5px" }}>
            {[days, hours, minutes, secs].map((time, index) => (
              <Box
                key={index}
                sx={{
                  background: "linear-gradient(135deg, #6a11cb,#000188)",
                  color: "#fff",
                  padding: "5px 10px",
                  textAlign: "center",
                  borderRadius: "4px",
                  minWidth: "40px",
                  fontWeight: "bold",
                }}
              >
                {time < 10 ? `0${time}` : time}
                <Typography variant="caption" sx={{ display: "block", fontSize: "10px" }}>
                  {["DAYS", "HOURS", "MINS", "SECS"][index]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            background: "linear-gradient(135deg, #000188,#6a11cb)",
            justifyContent: "space-between",
            padding: "10px",
            borderTop: "1px solid #ddd",
          }}
        >
          <Button
            onClick={prevDeal}
            sx={{ textTransform: "none", fontSize: "14px",color: "#fff"}}
          >
            &lt; Previous deal
          </Button>
          <Button
            onClick={nextDeal}
            sx={{ textTransform: "none", fontSize: "14px", color: "#fff" }}
          >
            Next deal &gt;
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default DealsOfTheWeek;
