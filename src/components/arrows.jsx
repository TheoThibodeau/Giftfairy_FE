import React from 'react';

//Arrows component to be used on userProfile page
const Arrows = ({ onClickHandler, index, direction }) => {
    const handleFlip = () => {
        onClickHandler(index);
    }

    if(direction == 'down') {
        return (
            <svg id="more-arrows" viewBox="0 0 125 115" onClick={handleFlip}>
                <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
            </svg>
        )
    } else if (direction == 'up') {
        return (
            <svg id="more-arrows" viewBox="0 0 125 115" onClick={handleFlip}>
                <polygon className="arrow-top" points="37.6,1.3 1.8,27.9 3.3,29.2 37.6,3.9 71.9,29.2 73.7,27.9"/>
                <polygon className="arrow-middle" points="37.6,18.7 0.8,45.8 4.4,48.1 37.6,23.2 71.2,48.1 74.5,45.8"/>
                <polygon className="arrow-bottom" points="37.6,36.1 0,64 5.1,67.3 37.6,43.2 70.4,67.3 75.5,64"/>
            </svg>
        )
    }
}

export default Arrows;