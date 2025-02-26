import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";  
import DealsOfTheWeek from "../components/DealoftheWeek";
import ProductGrid from "../components/ProductGrid";
import ProductHeroSection from "../components/ProductHeroSection";
import FeaturedProduct from "../components/FeaturedProduct";
import { Box } from "@mui/material";
import FlashDeals from "../components/FlashDeals";
import Bestseller from "../components/BestSeller";

const Products = () => {
    return (
        <>
            <Header />
            <ProductHeroSection />

            {/* Wrap DealsOfTheWeek and ProductGrid inside a flex container */}
            <Box 
                sx={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "flex-start", // Aligns components at the top
                    padding: "20px 100px",
                    gap: "20px" // Adds spacing between components
                }}
            >
                <DealsOfTheWeek />
                <ProductGrid />
            </Box>
            <FlashDeals />
            <Bestseller />
            <FeaturedProduct />

            <Footer />
        </>
    );
};

export default Products;
