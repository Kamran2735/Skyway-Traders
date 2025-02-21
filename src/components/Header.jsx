import React from "react";
import TopBar from "../components/TopBar";
import MainNav from "../components/MainNav";
import SearchBar from "../components/SearchBar";

const Header = () => {
    return (
        <>
        <TopBar />
        <MainNav />
        <SearchBar />
        </>
      );
    };

export default Header;