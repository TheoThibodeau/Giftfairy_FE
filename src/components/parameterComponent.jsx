import { useState } from "react";


const ParameterComponent = ({ data, handler}) => {
  const title = data.title;
  const entries = data.data;
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [multiSelectEntry, setMultiSelectEntry] = useState([]);
  console.log(data);

  const handleClick = (entry) => {
    setSelectedEntry(entry);
    handler(title, entry);
  };

  return (
    <form>
      
        {entries.map((entry) => (
          <div
            key={entry}
            className="paramButtonContainer"
          >
            {title !== "Gift Type" && title !== "Interests" ? (
              <input
                type="button"
                name={entry}
                value={entry}
                className={`button ${selectedEntry === entry ? "paramButtonActive" : ""}`}
                style={{ opacity: selectedEntry && selectedEntry !== entry ? 0.55 : 1.1 }}
                onClick={() => handleClick(entry)}
              />
            )
            : 
            (
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
            )
            }
          </div>
        ))}

    </form>
        
  );
};
export default ParameterComponent;
