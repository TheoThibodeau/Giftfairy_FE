import React from "react";

const DownArrows = ({ onClickHandler, index }) => {
    const handleFlip = () => {
        onClickHandler(index);
    }

    return ( 
        <svg id="more-arrows" viewBox="0 0 125 115" onClick={handleFlip}>
            <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
            <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
            <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
        </svg>
    );
};

export default DownArrows;