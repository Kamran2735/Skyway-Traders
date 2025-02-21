import React from "react";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import Map from "../components/Map";


const Contact = () => {
    return (
        <>
        <Header />
        <ContactHero />
        <ContactUs />
        <Map />
        <Footer />
        </>
      );
    };
    
export default Contact;