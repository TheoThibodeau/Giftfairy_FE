import { useState } from "react";


const ParameterComponent = ({ data, handler, hasSelectionsHandler}) => {
  const title = data.title;
  const entries = data.data;
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [multiSelectEntry, setMultiSelectEntry] = useState([]);

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
                  <option value="" hidden>Select Another Relationship</option>
                  <option value="Sibling" >Sibling</option>
                  <option value="Father In-law" >Father In-Law</option>
                  <option value="Mother In-law" >Mother In-Law</option>
                  <option value="Boss" >Boss</option>
                  <option value="Co-Worker" >Co-Worker</option>
                  <option value="Professor/Teacher" >Professor/Teacher</option>
                  <option value="Niece/Nephew" >Niece/Nephew</option>
                  <option value="Sister In-Law" >Sister In-Law</option>
                  <option value="Brother In-Law" >Brother In-Law</option>
                  <option value="Pet" >Pet</option>
              </select>
            )}

    </form>
        
  );
};
export default ParameterComponent;
