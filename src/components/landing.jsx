import React from "react";
import { Link } from "react-router-dom";
import GiftfairyImage from '../images/giftfairy.png';

const Landing = () => {

    const handleBegin = () => {
        Navigate("/filters");
  };


    return(
        <>
            <h1>GIFTFaiRY</h1>
            <div>
                <img 
                src={GiftfairyImage} 
                alt="Gift Fairy"
                height={200}
                width={200}
                 />
            </div>
            <h4 className="landingDescription">GIFTFaiRY selects the perfect gift for every 
            personality with our AI-powered 
            shopping companion – thoughtful, 
            personalized, and just one click 
            away!</h4>
            <Link to="/selections">
                <button className="landingButton">Let's Begin</button>
            </Link>
            <h6 className="version">
                version 3.0.0
            </h6>
        </>
    )
};

export default Landing;