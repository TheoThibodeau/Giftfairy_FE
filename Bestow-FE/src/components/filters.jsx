import axios from "axios";
import {useState} from "react";
import ParameterComponent from "./parameterComponent";
import data from "/filters.json";

const Filters = () => {
    const [age, setAge] = useState(""); 
    const [gender, setGender] = useState("");
    const [relationship, setRelationship] = useState(""); 
    const [priceRange, setPriceRange] = useState("");
    const [occasion, setOccasion] = useState(""); 
    const [giftType, setGiftType] = useState(""); 
    const [interests, setInterests] = useState("");
    const [activeElement, setActiveElement] = useState("age");

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

    const handleActiveNav = (newValue) => {
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

    const handleStateSet = (key, value) => {
        console.log("key", key);
        if (key === "Age") {
          handleAgeChange(value);
          const newActiveElement = "gender";
          setActiveElement(newActiveElement);
          handleActiveNav(newActiveElement);
        }
        if (key === "Gender") {
          handleGenderChange(value);
          const newActiveElement = "relationship";
          setActiveElement(newActiveElement);
          handleActiveNav(newActiveElement);
        }
        if (key === "Relationship") {
          handleRelationshipChange(value);
          const newActiveElement = "priceRange";
          setActiveElement(newActiveElement);
          handleActiveNav(newActiveElement);
        }
        if (key === "Price Range") {
          handlePriceRangeChange(value);
          const newActiveElement = "occasion";
          setActiveElement(newActiveElement);
          handleActiveNav("length");
        }
        if (key === "Occassion") {
          handleOccasionLength(value);
          const newActiveElement = "giftType";
          setActiveElement(newActiveElement);
          setGenerateButton(true);
          handleActiveNav(newActiveElement);
        }
        if (key === "Gift Type") {
            handleGiftTypeChange(value);
            const newActiveElement = "interests";
            setActiveElement(newActiveElement);
            setGenerateButton(true);
            handleActiveNav(newActiveElement);
          }
        if (key === "Interests") {
        handleInterestsChange(value);
        const newActiveElement = "generate";
        setActiveElement(newActiveElement);
        setGenerateButton(true);
        handleActiveNav(newActiveElement);
        }
    
        if (key === "generateButton") {
          handleGenerate(value);
        }
      };
    
      const keys = ["age", "gender", "relationship", "priceRange", "occasion", "giftType", "interests"];

    return (
        <>

            <h1>Bestow</h1>


            <div>
                <ParameterComponent
                  key={activeElement}
                  data={data[activeElement]}
                  handler={handleStateSet}/>
              </div>

            <p>Gender</p>
            <button onClick={() => handleGender("male")}>
                    <h5>male</h5>
                </button>
            <p>Relationship</p>
            <button onClick={() => handleRelationship("partner")}>
                    <h5>partner</h5>
                </button>
            <p>Price Range</p>
            <button onClick={() => handlePriceRange("$10-$15")}>
                    <h5>$10-$15</h5>
                </button>
            <p>Occasion</p>
            <button onClick={() => handleOccasion("Christmas")}>
                    <h5>Christmas</h5>
                </button>
            <p>Gift Type</p>
            <button onClick={() => handleGiftType("Product")}>
                    <h5>Product</h5>
                </button>
            <p>Interests</p>
            <button onClick={() => handleInterests("Cooking")}>
                    <h5>Cooking</h5>
                </button>
        <button onClick={handlePost}>Generate</button>
        </>
    )
}; 

export default Filters