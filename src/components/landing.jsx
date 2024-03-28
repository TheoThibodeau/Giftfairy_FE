import React from "react";
import { Link } from "react-router-dom";
import GiftfairyImage from "../images/giftfairy3.png";
import RightArrow from "../images/right.png";
import InfoIcon from "../images/info.png";
import Amazon from "../images/amazon1.png";
import Popup from "reactjs-popup";
import OrangeSwoop from "./Headers and Footers/orangeSwoop";

const Landing = () => {
  return (
    <>
      <OrangeSwoop fillOpacity={"1"}/>

      {/* Popup on landing page that indicates app is an Amazon Associate */}
      <Popup trigger={<img className="infoIconImg" style={{ zIndex: 4 }} src={InfoIcon} height={30} width={30}></img>} 
      arrow={false} position="right right">
        <div>
          giftfairy is an Amazon Associate 
          <br />
          <img src={Amazon} height={35} width={120}></img>
        </div>
      </Popup>
      {/* Landing Title */}
      <h1 className="landingTitle">
        giftf<i>ai</i>ry
      </h1>
      {/* App Logo - generated by Bing.com: Copilot/Designer */}
      <div>
        <img src={GiftfairyImage} alt="Gift Fairy" height={200} width={200} />
      </div>
      {/* Landing Description - giftfairy short description */}
      <div className="landingDescription">
        <h2 className="oxygen-bold">curated gifts</h2>
        <h2 className="oxygen-bold">made easy</h2>
        <h2 className="oxygen-bold">
          through the power of <i>ai</i>
        </h2>
      </div>
      {/* Get started button */}
      <Link to="/selections">
        <button className="landingButton oxygen-bold">
          Get Started
          <img src={RightArrow} height={25} width={25} />
        </button>
      </Link>
      <h6 className="version">version 4.0.0</h6>
    </>
  );
};

export default Landing;
