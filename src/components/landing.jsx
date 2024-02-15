import React from "react";
import { Link } from "react-router-dom";
import GiftfairyImage from "../images/giftfairy.png";
import RightArrow from "../images/right-arrow.png";

const Landing = () => {
  const handleBegin = () => {
    Navigate("/filters");
  };

  return (
    <>
      <h1>GIFTFaiRY</h1>
      <div>
        <img src={GiftfairyImage} alt="Gift Fairy" height={200} width={200} />
      </div>
      <div className="landingDescription">
        <h2 className="oxygen-bold">Curated Gifts</h2>
        <h2 className="oxygen-bold">made easy</h2>
        <h2 className="oxygen-bold">through the power of AI</h2>
      </div>
      <Link to="/selections">
        <button className="landingButton oxygen-bold">
          Get Started
          <img src={RightArrow} height={30} width={30} />
        </button>
      </Link>
      <h6 className="version">version 3.0.0</h6>
    </>
  );
};

export default Landing;
