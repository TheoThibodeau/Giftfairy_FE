import ProgressBar from "react-bootstrap/ProgressBar";
import { progressValues } from "../Data and Functions/data";


const Footer = ({ activeElement, handleNextElement, handlePreviousElement, isLoading, selectionMade, hasSelections, isGenerated }) => {
    return (
        <>
        <div className="footer">
        {!isGenerated && (
          <>
            <div className="backButton-div">
              {activeElement !== "gifteeName" && (
                <button
                  onClick={handlePreviousElement}
                  disabled={isLoading}
                  className={`backButton ${
                    isLoading ? "opacity1" : "opacity2"
                  }`}
                >
                  Previous
                </button>
              )}
            </div>

            {/* Next Button Logic for Single Selections */}
            <div className="nextButton-div">
              {(activeElement == "age" ||
                activeElement == "gender" ||
                activeElement == "activity" ||
                activeElement == "personality" ||
                activeElement == "nature" ||
                activeElement == "priceRange" ||
                activeElement == "relationship") && (
                <button
                  disabled={!selectionMade}
                  onClick={handleNextElement}
                  className={`${selectionMade ? "opacity2" : "opacity1"}`}
                >
                  Next
                </button>
              )}

              {/* Next Button Logic for Multi Selections */}
              {(activeElement == "giftType" ||
                activeElement == "interests" ||
                activeElement == "occasion") && (
                <button
                  disabled={!hasSelections || !selectionMade}
                  onClick={handleNextElement}
                  className={`${
                    hasSelections && selectionMade ? "opacity2" : "opacity1"
                  }`}
                >
                  Next
                </button>
              )}

              {/* Next button logic for 'Optional' gifteeName */}
              {activeElement == "gifteeName" && (
                <button
                  onClick={handleNextElement}
                  className={`${selectionMade}`}
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div> 
        
        <ProgressBar
            now={progressValues[activeElement]}
            label={``}
            style={{
            backgroundColor: "white",
            width: "100%",
            opacity: ".75",
            height: "8px",
            }}
        >
        <ProgressBar
            variant="success"
            now={progressValues[activeElement]}
            label={``}
            style={{ background: "#ffa514", height: "8px" }}
            />
        </ProgressBar>
    </>
    )
};

export default Footer;