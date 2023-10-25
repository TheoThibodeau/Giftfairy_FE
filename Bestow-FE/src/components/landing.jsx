import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Landing = () => {

    const handleBegin = () => {
        Navigate("/filters");
  };


    return(
        <>
            <h1>giftfAIry</h1>
            <h4>giftfAIry selects the perfect gift for every 
            personality with our AI-powered 
            shopping companion – thoughtful, 
            personalized, and just one click 
            away!</h4>
            <Link to="/selections" className="landingBegin">
                <button>Let's Begin</button>
            </Link>
        </>
    )
};

export default Landing;