import React from "react";
import CardContainer from "./components/CardContainer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import './AirApp.css'

function AirApp(){
    return(
        <div className="App">
            <Header />
            <Hero />
            <CardContainer />
        </div>
    );
}

export default AirApp;