import { useState } from "react";
import axios from "axios";

const ParameterComponent = ({ data, handler, selectionMade }) => {
  const title = data.title;
  const entries = data.data;
  const [selectedEntry, setSelectedEntry] = useState(null);
  console.log(data);

  const handleClick = (entry) => {
    setSelectedEntry(entry);
    handler(title, entry);
  };

  return (
    
        entries.map((entry) => (
          <div
            key={entry}
            className="paramButtonContainer"
          >
            <button
              className={`paramButton ${selectedEntry === entry ? "paramButtonActive" : ""}`}
              style={{ opacity: selectedEntry && selectedEntry !== entry ? 0.85 : 1 }}
              onClick={() => handleClick(entry)}
            >
              {entry}
            </button>  
          </div>
        ))
        
  );
};
export default ParameterComponent;
