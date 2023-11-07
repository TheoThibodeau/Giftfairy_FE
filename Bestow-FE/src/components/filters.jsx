import axios from "axios";
import {useState} from "react";
import ParameterComponent from "./parameterComponent";
import data from "/filters.json";
import getFilterResponse from "./getfilter";
import NavBar from "./navbar";
import ProgressBar from 'react-bootstrap/ProgressBar';

// const respArr = new Array (10);

const Filters = () => {
    const [age, setAge] = useState(""); 
    const [gender, setGender] = useState("");
    const [relationship, setRelationship] = useState(""); 
    const [priceRange, setPriceRange] = useState("");
    const [occasion, setOccasion] = useState(""); 
    const [giftType, setGiftType] = useState(""); 
    const [interests, setInterests] = useState("");
    const [activeElement, setActiveElement] = useState("gender");
    const [isGenerated, setIsGenerated] = useState(false);
    const [output, setOutput] = useState(""); //Delete this line??? Doesn't seem like it's getting used. 
    const [respArr, setRespArr] = useState([]);
    const [generate, setGenerate] = useState(false);
    const [itemTitle, setItemTitle] = useState([]);
    const [itemDescrip, setItemDescrip] = useState([]);
    const [openaiDescrip, setOpenaiDescrip] = useState([]);
    const [progress, setProgress] = useState(0);
    

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
            })
            .then ((response) => {
                console.log("Response from backend:", response.data);
                setRespArr(response.data.output_text.split("\n\n"))
                //Toggle boolean value to true for re-generate button use
                setIsGenerated(true)
                //Reset the arrays on the front-end
                setItemDescrip([])
                setItemTitle([])
                setOpenaiDescrip([])
                //Set response.data.item_descrip_string
                setItemDescrip(response.data.item_descrip_string.split("*"))
                //Set response.data.item_title_string
                setItemTitle(response.data.item_title_string.split(","))
                //Set response.data.openai_descrip_string
                setOpenaiDescrip(response.data.openai_descrip_string.split(","))
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
      "generate": 100,
    };

    const handleStateSet = (key, value) => {
        if (key === "Gender") {
          handleAgeChange(value);
          const newActiveElement = "age";
          setActiveElement(newActiveElement);
          const newProgress = progressValues[newActiveElement];
          setProgress(newProgress);
        }
        if (key === "Age") {
          handleGenderChange(value);
          const newActiveElement = "relationship";
          setActiveElement(newActiveElement);
          const newProgress = progressValues[newActiveElement];
          setProgress(newProgress);
        }
        if (key === "Relationship") {
          handleRelationshipChange(value);
          const newActiveElement = "priceRange";
          setActiveElement(newActiveElement);
          const newProgress = progressValues[newActiveElement];
          setProgress(newProgress);
        }
        if (key === "Price Range") {
          handlePriceRangeChange(value);
          const newActiveElement = "occasion";
          setActiveElement(newActiveElement);
          const newProgress = progressValues[newActiveElement];
          setProgress(newProgress);
        }
        if (key === "Occasion") {
            handleOccasionChange(value);
            const newActiveElement = "giftType";
            setActiveElement(newActiveElement);
            const newProgress = progressValues[newActiveElement];
            setProgress(newProgress);
        }
        if (key === "Gift Type") {
            handleGiftTypeChange(value);
            const newActiveElement = "interests";
            setActiveElement(newActiveElement);
            const newProgress = progressValues[newActiveElement];
            setProgress(newProgress);
          }
        if (key === "Interests") {
            handleInterestsChange(value);
            const newActiveElement = "generate";
            setActiveElement(newActiveElement);
            const newProgress = progressValues[newActiveElement];
            setProgress(newProgress);
            console.log(isGenerated)
        }
        if (key === "generateButton") {
          handleGenerate(value);
          const newProgress = progressValues[newActiveElement];
          setProgress(newProgress);
          console.log("key", key);
        }
      };
    
      const keys = ["age", "gender", "relationship", "priceRange", "occasion", "giftType", "interests"]; //Delete this line??? Doesn't seem like it's getting used. 

      const handlePreviousElement = () => {
        // Define the mapping of previous states here
        const previousStateMap = {
          "age": "gender",
          "relationship": "age",
          "priceRange": "relationship",
          "occasion": "priceRange",
          "giftType": "occasion",
          "interests": "giftType",
          "generate": "interests"
        };
    
        if (activeElement !== "gender" && previousStateMap[activeElement]) {
          const previousElement = previousStateMap[activeElement];
          setActiveElement(previousElement);
        }
      };


    return (
        <>
            <div className="navbarContainer">
              <NavBar />
            </div>

            <ProgressBar now={progressValues[activeElement]} label={`${progressValues[activeElement]}%`} style={{ backgroundColor: 'lightgray' }}>
                <ProgressBar variant="success" now={progressValues[activeElement]} label={`${progressValues[activeElement]}%`} style={{ backgroundColor: 'lightblue' }} />
            </ProgressBar>

            {activeElement !== "gender" && (
             <a onClick={handlePreviousElement} className="backButton">&lt;</a>
            )}  

            <div>
                <ParameterComponent
                  key={activeElement}
                  data={data[activeElement]}
                  handler={handleStateSet}/>
            </div>

          <div className="container">
            <p className="openaiDescrip">{openaiDescrip}</p>
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
          {activeElement === "generate" && isGenerated && (
            <button onClick={handlePost}>Re-Generate</button>
          )}      
    </>
    )
}; 

export default Filters;