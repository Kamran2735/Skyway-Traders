import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import LatestProducts from "../components/LatestProducts";
import Testimonials from "../components/Testimonials";
import ProductCategory from "../components/ProductCategory";
import FaqAndNews from "../components/FaqAndNews";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
        

const Home = () => {
    return (
        <>
        <Header />
        <HeroSection />
        <InfoSection />
        <LatestProducts />
        <Testimonials />
        <ProductCategory />
        <FaqAndNews />
        <ContactForm />
        <Footer />
        </>
    );
    };

    export default Home;