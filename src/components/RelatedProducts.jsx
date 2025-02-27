import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Rating } from "@mui/material";

import img1 from "../assets/Products/img_01.png";
import img2 from "../assets/Products/img_02.png";
import img3 from "../assets/Products/img_03.png";
import img4 from "../assets/Products/img_04.png";

const relatedProducts = [
    {
        id: 1,
        title: "Amazon Cloud Cam Security Camera",
        image: img1,
        discountedPrice: 239.52,
        originalPrice: 362.0,
        rating: 3,
        reviews: 126,
        discount: "-14%",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor, sit amet adipisci elit.",
        image: img2,
        discountedPrice: 220.52,
        originalPrice: 315.0,
        rating: 3,
        reviews: 106,
        discount: "-11%",
      },
      {
        id: 3,
        title: "Taboriosam aenda et itaques expcabo.",
        image: img3,
        discountedPrice: 215.52,
        originalPrice: 345.0,
        rating: 4,
        reviews: 120,
        discount: "-18%",
      },
      {
        id: 4,
        title: "Eius doloribus dicta labore magni nulla!",
        image: img4,
        discountedPrice: 188.52,
        originalPrice: 268.0,
        rating: 3,
        reviews: 106,
        discount: "-20%",
      },
      {
    id: 1,
    title: "Amazon Cloud Cam Security Camera",
    image: img1,
    discountedPrice: 239.52,
    originalPrice: 362.0,
    rating: 3,
    reviews: 126,
    discount: "-14%",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor, sit amet adipisci elit.",
    image: img2,
    discountedPrice: 220.52,
    originalPrice: 315.0,
    rating: 3,
    reviews: 106,
    discount: "-11%",
  },
  {
    id: 3,
    title: "Taboriosam aenda et itaques expcabo.",
    image: img3,
    discountedPrice: 215.52,
    originalPrice: 345.0,
    rating: 4,
    reviews: 120,
    discount: "-18%",
  },
  {
    id: 4,
    title: "Eius doloribus dicta labore magni nulla!",
    image: img4,
    discountedPrice: 188.52,
    originalPrice: 268.0,
    rating: 3,
    reviews: 106,
    discount: "-20%",
  },
];

const RelatedProducts = () => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box sx={{ maxWidth: 1200, marginX: "auto", padding: 4 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", alignItems: "center", marginBottom: 2 ,color: "#000188"}}>
        <span style={{ color: "red", marginRight: 8 }}></span> YOU MAY ALSO LIKE
      </Typography>
      
      <Box
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        sx={{
          display: "flex",
          gap: 3,
          overflow: "hidden",
          scrollBehavior: "smooth",
          paddingBottom: 2,
          cursor: isDown ? "grabbing" : "grab",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        {relatedProducts.map((product) => (
          <Card key={product.id} sx={{ minWidth: 270, maxWidth: 250, boxShadow: 3, borderRadius: 2 }}>
            <Box sx={{ position: "relative" }}>
              <CardMedia component="img" image={product.image} alt={product.title} sx={{ height: 140, objectFit: "contain" }} />
              <Box 
                sx={{ position: "absolute", top: 10, right: 10, background: "linear-gradient(135deg, #6a11cb, #000188)", color: "white", padding: "2px 8px", borderRadius: "8px" }}>
                {product.discount}
              </Box>
            </Box>
            <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
  <Rating value={product.rating} readOnly size="small" />
  <Typography sx={{ fontSize: ".8rem", color: "#4C4CC4", whiteSpace: "nowrap" }}>
    ({product.reviews} Reviews)
  </Typography>
</Box>

              <Typography variant="body2" fontWeight="bold" sx={{ marginY: 1 }}>{product.title}</Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ color: "#000188"}}>
                ${product.discountedPrice} <Typography component="span" sx={{ textDecoration: "line-through", color: "#4C4CC4" }}>${product.originalPrice}</Typography>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RelatedProducts;
