import React, { useState, useEffect} from 'react';

// TypeWriter function to be used throughout app to give the effect of the 'gift fairy' talking to the user
// Param(text) - String passed in to be iterated one character at a time
export default function TypeWriter ({text}) {
    // displayText - state variable to hold what will be printed out/returned by function out to UI
    const [displayText, setDisplayText] = useState(" ");

    useEffect(() => {
        let i = -1;
        const typingInterval = setInterval(() => {
            // iterate through 'text' and append it to displayText
            if (i < text.length) {
              setDisplayText((prev) => prev + text.charAt(i));
              i++;
            } else {  //If iteration has reached the end of the string then clear the interval
              clearInterval(typingInterval);
            }
          }, 51);
          
          // For the return, clear interval and clear DisplayText state variable to so that next string is ready to be received.
          return () => {
            clearInterval(typingInterval);
            setDisplayText("")
          };
    }, [text])

    return <p>{displayText}</p>;
};