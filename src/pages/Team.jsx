import React from "react";
import Header from "../components/Header";
import SalesTeam from "../components/SalesTeam";
import MeetTeam from "../components/MeetTeam";
import TeamHero from "../components/TeamHero";
import Footer from "../components/Footer";


const Team = () => {
    return (
        <>
        <Header />  
        <TeamHero />
        <SalesTeam />
        <MeetTeam />
        <Footer />
        </>
      );
    };
    
export default Team;