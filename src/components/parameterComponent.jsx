import { useState } from "react";
import axios from "axios";


const ParameterComponent = ({ data, handler}) => {
  const title = data.title;
  const entries = data.data;
  const [selectedEntry, setSelectedEntry] = useState(null);
  console.log(data);

  const handleClick = (entry) => {
    setSelectedEntry(entry);
    handler(title, entry);
    // entry[1] = true;
    // if (title !== "Gift Type") {
    //   entry[1] == true
    // } else (
    //   entry[1] == true ? entry[1] = true : entry[1] = false
    // );
  };

  return (
    
        entries.map((entry) => (
          <div
            key={entry}
            className="paramButtonContainer"
          >
            <button
              className={`paramButton ${entry[1] == true ? "paramButtonActive" : ""}`}
              style={{ opacity: selectedEntry && entry[1] == false ? 0.55 : 1.1 }}
              onClick={() => handleClick(entry)}
            >
              {entry}
            </button>  
          </div>
        ))
        
  );
};
export default ParameterComponent;
