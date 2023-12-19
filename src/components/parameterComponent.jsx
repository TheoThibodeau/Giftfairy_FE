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
    <form>
      
        {entries.map((entry) => (
          <div
            key={entry}
            className="paramButtonContainer"
          >
            <input
              type="button"
              name={entry}
              value={entry}
              className={`button ${selectedEntry === entry ? "paramButtonActive" : ""}`}
              style={{ opacity: selectedEntry && selectedEntry !== entry ? 0.55 : 1.1 }}
              onClick={() => handleClick(entry)}
            />
          </div>
        ))}

    </form>
        
  );
};
export default ParameterComponent;
