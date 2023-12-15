import { useState } from "react";


const ParameterComponent = ({ data, handler}) => {
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
