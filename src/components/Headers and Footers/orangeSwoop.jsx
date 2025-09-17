import React from "react";


const OrangeSwoop = ({ fillOpacity }) => {
    return(

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 200">
        <path
          fill="#ffa517"
          fillOpacity={fillOpacity}
          d="M0,160L40,176C80,192,160,224,240,234.7C320,245,400,235,480,197.3C560,160,640,96,720,96C800,96,880,160,960,165.3C1040,171,1120,117,1200,85.3C1280,53,1360,43,1400,37.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
        </svg>
    )
};

export default OrangeSwoop;