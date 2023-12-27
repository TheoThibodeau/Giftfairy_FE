import { useState } from "react";


const ParameterComponent = ({ data, handler, selectionMade}) => {
  const title = data.title;
  const entries = data.data;
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [multiSelectEntry, setMultiSelectEntry] = useState([]);
  console.log(data);

  const handleClick = (entry) => {
    setSelectedEntry(entry);
    handler(title, entry);
  };

  const handleChange = (e) => {
    setSelectedEntry(e.target.value);
    handler(title, e.target.value);
  };

  return (
    <form>
      
        {entries.map((entry) => (
          <div
            key={entry}
            className="paramButtonContainer"
          >
            {/* // Single Select Button */}
            {(title == "Age" || title == "Gender" || title == "Activity Level" || title == "Personality" || title == "Nature" || title == "Price Range") && (
              <input
                type="button"
                name={entry}
                value={entry}
                className={`button ${selectedEntry === entry ? "paramButtonActive" : ""}`}
                style={{ opacity: selectedEntry && selectedEntry !== entry ? 0.55 : 1.1 }}
                onClick={() => handleClick(entry)}
              />
              )
            } 
             {/* Dropdown Button */}
            {title == "Relationship" && (
              <select 
                type="button"
                name={entry}
                value={entry}
                className={`button ${selectedEntry === entry ? "paramButtonActive" : ""}`}
                style={{ opacity: selectedEntry && selectedEntry !== entry ? 0.55 : 1.1 }}
                onClick={() => handleClick(entry)}
              />
            )}
            {/*  Multi Select Button */}
            {(title == "Gift Type" || title == "Interests" || title == "Occasion") && (
              <>
                <input
                  type="checkbox"
                  name={entry}
                  value={entry}
                  id={entry}
                  onClick={() => handleClick(entry)}
                />
                <label htmlFor={entry} className="checkbox-button">{entry}</label>  
                </>
            )}
        </div>
        ))}
            {/* // Write-In Button */}
            {(title == "Gift Type" || title == "Interests" || title == "Occasion") && (
              <input 
                type="text"
                name="userInput"
                placeholder="Write your own"
                className={`inputButton `}
                style={{ opacity: 1.1 }}
                onBlur={handleChange}
              />
            )}

    </form>
        
  );
};
export default ParameterComponent;
