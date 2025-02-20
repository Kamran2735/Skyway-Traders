import React from "react";
import TopBar from "../components/TopBar";
import MainNav from "../components/MainNav";
import SearchBar from "../components/SearchBar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import Map from "../components/Map";


const Contact = () => {
    return (
        <>
        <TopBar />
        <MainNav />
        <SearchBar />
        <ContactHero />
        <ContactUs />
        <Map />
        <Footer />
        </>
      );
    };
    
export default Contact;