import axios from "axios";
import {useState} from "react";
import ParameterComponent from "./parameterComponent";
import data from "/filters.json";
import getFilterResponse from "./getfilter";
import NavBar from "./navbar";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ReactDOM } from "react";


const Filters = () => {
    const [age, setAge] = useState(""); 
    const [gender, setGender] = useState("");
    const [relationship, setRelationship] = useState(""); 
    const [priceRange, setPriceRange] = useState("");
    const [occasion, setOccasion] = useState(""); 
    const [giftType, setGiftType] = useState(""); 
    const [interests, setInterests] = useState("");
    const [activity, setActivity] = useState("");
    const [activeElement, setActiveElement] = useState("gender");
    const [isGenerated, setIsGenerated] = useState(false);
    const [generate, setGenerate] = useState(false);
    const [itemTitle, setItemTitle] = useState([]);
    const [itemDescrip, setItemDescrip] = useState([]);
    const [openaiDescrip, setOpenaiDescrip] = useState([]);
    const [progress, setProgress] = useState(0);
    const [promptMess, setPromptMess] = useState("");  
    const [selectionMade, setSelectionMade] = useState(false); 
    

    const handlePost = () => {
        axios 
            .post ("http://127.0.0.1:8000/api/filter/generate", {
                age: age,
                gender: gender, 
                relationship: relationship,
                price_range: priceRange, 
                occasion: occasion, 
                gift_type: giftType, 
                interest: interests, 
                activity_level: activity,
            })
            .then ((response) => {
                console.log("Response from backend:", response.data);
                //Toggle boolean value to true for re-generate button use
                setIsGenerated(true)
                //Reset the arrays on the front-end
                setItemDescrip([])
                setItemTitle([])
                setOpenaiDescrip([])
                //Clear prompt message before items are done being generated. 
                setPromptMess("");
                //Set response.data.item_descrip_string
                setItemDescrip(response.data.item_descrip_string.split("*"))
                //Set response.data.item_title_string
                setItemTitle(response.data.item_title_string.split(","))
                //Set response.data.openai_descrip_string
                setOpenaiDescrip(response.data.openai_descrip_string.split(","))
                //Set up variable to hold next prompt message depending on next active element 
            })
    }

    const handleAgeChange = (selectedAge) => {
        setAge(selectedAge)
        console.log(selectedAge)
    }

    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender)
        console.log(selectedGender)
    }

    const handleRelationshipChange = (selectedRelationship) => {
        setRelationship(selectedRelationship)
        console.log(selectedRelationship)
    }

    const handlePriceRangeChange = (selectedPriceRange) => {
        setPriceRange(selectedPriceRange)
        console.log(selectedPriceRange)
    }

    const handleOccasionChange = (selectedOccasion) => {
        setOccasion(selectedOccasion)
        console.log(selectedOccasion)
    }   

    const handleGiftTypeChange = (selectedGiftType) => {
        setGiftType(selectedGiftType)
        console.log(selectedGiftType)
    }

    const handleInterestsChange = (selectedInterests) => {
        setInterests(selectedInterests)
        console.log(selectedInterests)
    }

    const handleActivityChange = (selectedActivity) => {
      setActivity(selectedActivity)
      console.log(selectedActivity)
  }

    const handleGenerate = (selectedGenerate) => {
        setGenerate(selectedGenerate);
      };

    const handleActiveNav = (newValue) => {   //Delete this function??? Doesn't seem like it's getting used. 
    const newState = navData.map((datum) => {
      if (datum.isActive) {
        datum.isActive = false;
        return datum;
      }

      if (datum.title.toLowerCase() === newValue) {
        datum.isActive = true;
        return datum;
      }

      return datum;
    });

    setNavData(newState);
  };
//   console.log("navData", navData);

    const progressValues = {
      "gender": 10,
      "age": 20,
      "relationship": 30,
      "priceRange": 40,
      "occasion": 50,
      "giftType": 60,
      "interests": 70,
      "activity": 80,
      "generate": 100,
    };

    //Object containing messages for each selection page
    const promptMessages = {
      gender: "Hey gift fairy here! Before I can give you some great gift ideas, I need to know a little bit more about the person you are shopping for. What is their gender?",
      age: "How old are they?", 
      relationship: "What is your relationship with them?", 
      priceRange: "What is your price range?", 
      occasion: "What's the occasion?",
      giftType: "What gifts would they be interested in?",
      interests: "What are their interests?",
      activity: "What is their activity level?",
      generate: "Ok, thanks for the help! I think I have enough information to generate some great gift ideas for you! Click the generate button down below"
    }

    const handleStateSet = (key, value) => {
        if (key === "Gender") {
          handleAgeChange(value);
          setSelectionMade(true);
        }
        if (key === "Age") {
          handleGenderChange(value);
          setSelectionMade(true);
        }
        if (key === "Relationship") {
          handleRelationshipChange(value);
          setSelectionMade(true);
        }
        if (key === "Price Range") {
          handlePriceRangeChange(value);
          setSelectionMade(true);
        }
        if (key === "Occasion") {
            handleOccasionChange(value);
            setSelectionMade(true);
        }
        if (key === "Gift Type") {
            handleGiftTypeChange(value);
            setSelectionMade(true);
          }
        if (key === "Interests") {
            handleInterestsChange(value);
            setSelectionMade(true);
        }
        if (key === "Activity Level") {
            handleActivityChange(value);
            setSelectionMade(true);
      }
        if (key === "generateButton") {
          handleGenerate(value);
          setSelectionMade(true);
        }
      };
    
      const keys = ["age", "gender", "relationship", "priceRange", "occasion", "giftType", "interests", "activity"]; //Delete this line??? Doesn't seem like it's getting used. 

      const handlePreviousElement = () => {
        // Define the mapping of previous states here
        const previousStateMap = {
          "age": "gender",
          "relationship": "age",
          "priceRange": "relationship",
          "occasion": "priceRange",
          "giftType": "occasion",
          "interests": "giftType",
          "activity": "interests",
          "generate": "activity"
        };

        if (activeElement !== "gender" && previousStateMap[activeElement]) {
          const previousElement = previousStateMap[activeElement];
          setActiveElement(previousElement);
        }
      }
    
      const handleNextElement = () => {
        // Define the mapping of next states here
        const nextStateMap = {
          "gender": "age",
          "age": "relationship",
          "relationship": "priceRange",
          "priceRange": "occasion",
          "occasion": "giftType",
          "giftType": "interests",
          "interests": "activity",
          "activity": "generate"
        };
  
        if (activeElement !== "generate" && nextStateMap[activeElement]) {
          const nextElement = nextStateMap[activeElement];
          setActiveElement(nextElement);
          const newProgress = progressValues[nextElement];
          setProgress(newProgress);
          const newPrompt = promptMessages[nextElement];
          setPromptMess(newPrompt);
          setSelectionMade(false);
        };
      };
    

    return (
        <>
            <div className="navbarContainer">
              <NavBar />
              <ProgressBar now={progressValues[activeElement]} label={``} style={{ backgroundColor: 'lightgray', height: '24px' }}>
                <ProgressBar variant="success" now={progressValues[activeElement]} label={``} style={{ backgroundColor: 'lightblue', height: '24px'} } />
              </ProgressBar>
            </div>

            <br/>
            
            <div className="prompt-div">
              {!isGenerated && (
                <p>{promptMessages[activeElement]}</p>
              )}
            </div>

          <div>
              <ParameterComponent
                key={activeElement}
                data={data[activeElement]}
                selectionMade={selectionMade}
                handler={handleStateSet}
                />
          </div>

          <div className="container">
            {/* //replace with paragraph of our own */}
            {/* <p className="openaiDescrip">{openaiDescrip}</p> */}
            <p className="openaiDescrip">Here are 10 gift ideas that I think would be perfect for your giftee!</p>
            {itemTitle.map((title, index) => (
              <div className="individual-responses-container" key={index}>
                <h2>{title}</h2>
                <p>{itemDescrip[index]}</p>
                <a key={index} href={`https://www.amazon.com/s?k=${encodeURIComponent(title)}`} target="_blank">
                  <button>Buy Product</button>
                </a>
              </div>
            ))}
          </div>

          {activeElement === "generate" && !isGenerated && (
            <button onClick={handlePost}>Generate</button>
          )}

          <div className="footer">
            {isGenerated ? (
              <div className="regenButton-div">
                <button onClick={handlePost}>Re-Generate</button>
              </div>
            ) : (
              <>
              <div className="backButton-div">
                {activeElement !== "gender" && (
                <button
                onClick={handlePreviousElement}
                className="backButton"
                >
                  Previous
                </button>
                )}
              </div>

              <div className="nextButton-div">
                {activeElement !== "generate" && (
                  <button
                  disabled={!selectionMade}
                  onClick={handleNextElement}
                  className={`${selectionMade ? 'opacity2' : 'opacity1'}`}
                  >
                    Next
                  </button>
                )}
              </div>
              </>
            )}
          </div>

    </>
    )
}; 

export default Filters;