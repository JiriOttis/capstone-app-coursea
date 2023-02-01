import React from "react";
import HeaderElement from "./components/HeaderElement";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Specials from "./components/Specials";


function App() {
    return (
        <>
            <HeaderElement/>
            <HeroSection/>
            <Specials/>
            <Footer/>
        </>
    );
}

/*TODO add Routers*/
export default App;
