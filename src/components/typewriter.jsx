import React, { useState, useEffect} from 'react';

export default function TypeWriter ({text}) {
    const [displayText, setDisplayText] = useState(" ");

    useEffect(() => {
        let i = -1;
        console.log(text);
        const typingInterval = setInterval(() => {
            if (i < text.length) {
              setDisplayText((prev) => prev + text.charAt(i));
              i++;
            } else {
              clearInterval(typingInterval);
            }
          }, 30);
      
          return () => {
            clearInterval(typingInterval);
            setDisplayText("")
          };
    }, [text])

    return <p>{displayText}</p>;
};