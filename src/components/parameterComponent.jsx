import { useState } from "react";


const ParameterComponent = ({ data, handler, hasSelectionsHandler}) => {
  const title = data.title;
  const entries = data.data;
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [multiSelectEntry, setMultiSelectEntry] = useState([]);
  console.log(data);

  const handleClick = (entry) => {
    setSelectedEntry(entry);
    handler(title, entry);
    hasSelectionsHandler(true);
  };

  const handleNextButtonOnInput = () => {
    hasSelectionsHandler(true);
  }

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
            {(title == "Age" || title == "Gender" || title == "Activity Level" || title == "Personality" || title == "Nature" || title == "Price Range" || title == "Occasion" || title == "Relationship") && (
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
            {/*  Multi Select Button */}
            {(title == "Gift Type" || title == "Interests") && (
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
            {/* Dropdown Button */}
            {title == "Relationship" && (
              <select 
                type="button"
                name="relationship selection"
                className={`button`}
                onChange={handleChange}
              >
                  <option value="" style={{ textAlign: "center" }} hidden>Select Another Relationship</option>
                  <option value="Sibling" style={{ textAlign: "center" }}>Sibling</option>
                  <option value="Father In-law" style={{ textAlign: "center" }}>Father In-Law</option>
                  <option value="Mother In-law" style={{ textAlign: "center" }}>Mother In-Law</option>
                  <option value="Boss" style={{ textAlign: "center" }}>Boss</option>
                  <option value="Co-Worker" style={{ textAlign: "center" }}>Co-Worker</option>
                  <option value="Professor/Teacher" style={{ textAlign: "center" }}>Professor/Teacher</option>
                  <option value="Niece/Nephew" style={{ textAlign: "center" }}>Niece/Nephew</option>
                  <option value="Sister In-Law" style={{ textAlign: "center" }}>Sister In-Law</option>
                  <option value="Brother In-Law" style={{ textAlign: "center" }}>Brother In-Law</option>
                  <option value="Pet" style={{ textAlign: "center" }}>Pet</option>
              </select>
            )}
            {/* // Write-In Button */}
            {(title == "Gift Type" || title == "Interests" || title == "Occasion") && (
              <input 
                type="text"
                name="userInput"
                placeholder="Write your own"
                className={`inputButton `}
                style={{ opacity: 1.1 }}
                onChange={handleNextButtonOnInput}
                onBlur={handleChange}
              />
            )}

    </form>
        
  );
};
export default ParameterComponent;
