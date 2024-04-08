import React, { useState, useEffect } from "react";
import axios from "axios";
import ParameterComponent from "./parameterComponent";
import data from "/filters.json";
import NavBar from "./navbar";
import TypeWriter from "./typewriter";
import UserAuthentication from "./userAuthentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProductCarousel from "./productCarousel";
import { progressValues, promptMessages, previousStateMap, nextStateMap } from "./Data and Functions/data";
import OrangeSwoop from "./Headers and Footers/orangeSwoop";
import Footer from "./Headers and Footers/footer";
import PromptDiv from "./Selections Components/promptDiv";

const Filters = ({ handleUserLogin, authentication }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [relationship, setRelationship] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [occasion, setOccasion] = useState("");
  const [giftType, setGiftType] = useState([]);
  const [interests, setInterests] = useState([]);
  const [activity, setActivity] = useState("");
  const [personality, setPersonality] = useState("");
  const [gifteeName, setGifteeName] = useState("No name selected");
  const [nature, setNature] = useState("");
  const [activeElement, setActiveElement] = useState("gifteeName"); //Start at gifteeName page/state
  const [isGenerated, setIsGenerated] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [itemTitle, setItemTitle] = useState([]);
  const [itemDescrip, setItemDescrip] = useState([]);
  const [openaiDescrip, setOpenaiDescrip] = useState([]);
  const [progress, setProgress] = useState(0);
  const [promptMess, setPromptMess] = useState("");
  const [selectionMade, setSelectionMade] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSelections, setHasSelections] = useState(false);
  const [authCurrentUser, setAuthCurrentUser] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [currentInterests, setCurrentInterests] = useState([]);

  const handlePost = () => {
    setIsLoading(true);
    setIsGenerated(false);
    axios
      .post("https://giftfairy-be-server.onrender.com/api/filter/generate", {
        age: age,
        gender: gender,
        relationship: relationship,
        price_range: priceRange,
        occasion: occasion,
        gift_type: giftType.join(", "),
        interest: interests.join(", "),
        activity_level: activity,
        personality: personality,
        nature: nature,
        email: userEmail,
        giftee_name: gifteeName,
      })
      .then((response) => {
        setIsLoading(false);
        console.log("Response from backend:", response.data);
        //Toggle boolean value to true for re-generate button use
        setIsGenerated(true);
        //Reset the arrays on the front-end
        setItemDescrip([]);
        setItemTitle([]);
        setOpenaiDescrip([]);
        //Clear prompt message before items are done being generated.
        setPromptMess("");
        //Set response.data.item_descrip_string
        setItemDescrip(response.data.item_descrip_string.split("*"));
        //Set response.data.item_title_string
        setItemTitle(response.data.item_title_string.split(","));
        //Set response.data.openai_descrip_string
        setOpenaiDescrip(response.data.openai_descrip_string.split(","));
        //Set up variable to hold next prompt message depending on next active element
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error(
            "Server responded with status code:",
            error.response.data
          );
          if (error.response.status == 400) {
            alert(
              "You left one or more of your choices blank please go back and redo your selections!"
            );
          } else if (error.response.status == 404) {
            alert(
              "Back-End server endpoint not found. Server might have been discontinued."
            );
          } else if (error.response.status == 500) {
            alert("Internal Server Error, please try again!");
          } else if (error.response.status == 502) {
            alert("Bad Gateway, please try again!");
          } else if (error.response.status == 504) {
            alert("Gateway Timeout, please try again!");
          }
        } else if (error.request) {
          // The request was made but no response was received
          alert("No response received from server, please try again!");
        } else {
          // Something else happened while setting up the request
          alert("Error:", error.message);
        }
      });
  };

  const handleAgeChange = (selectedAge) => {
    setAge(selectedAge);
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleRelationshipChange = (selectedRelationship) => {
    setRelationship(selectedRelationship);
  };

  const handlePriceRangeChange = (selectedPriceRange) => {
    setPriceRange(selectedPriceRange);
  };

  const handleOccasionChange = (selectedOccasion) => {
    setOccasion(selectedOccasion);
  };

  const handleGiftTypeChange = (selectedGiftType) => {
    const containsGift = giftType.includes(selectedGiftType);
    if (containsGift) {
      setGiftType((prevArray) =>
        prevArray.filter((element) => element !== selectedGiftType)
      );
    } else {
      setGiftType([...giftType, selectedGiftType]);
    }
  };

  const handleInterestsChange = (selectedInterests) => {
    const containsInterests = interests.includes(selectedInterests);
    if (containsInterests) {
      setInterests((prevArray) =>
        prevArray.filter((element) => element !== selectedInterests)
      );
    } else {
      setInterests([...interests, selectedInterests]);
    }
  };

  const handleActivityChange = (selectedActivity) => {
    setActivity(selectedActivity);
  };

  const handlePersonalityChange = (selectedPersonality) => {
    setPersonality(selectedPersonality);
  };

  const handleNatureChange = (selectedNature) => {
    setNature(selectedNature);
  };

  const handleGifteeName = (selectedGifteeName) => {
    setGifteeName(selectedGifteeName);
  };

  const handleGenerate = (selectedGenerate) => {
    setGenerate(selectedGenerate);
  };


  const handleStateSet = (key, value) => {
    if (key === "Giftee Name") {
      handleGifteeName(value);
      setSelectionMade(true);
    }
    if (key === "Gender") {
      handleGenderChange(value);
      setSelectionMade(true);
    }
    if (key === "Age") {
      handleAgeChange(value);
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
    if (key === "Personality") {
      handlePersonalityChange(value);
      setSelectionMade(true);
    }
    if (key === "Nature") {
      handleNatureChange(value);
      setSelectionMade(true);
    }
    if (key === "generateButton") {
      handleGenerate(value);
      setSelectionMade(true);
    }
  };

  const handlePreviousElement = () => {
    if (activeElement !== "gifteeName" && previousStateMap[activeElement]) {
      const previousElement = previousStateMap[activeElement];
      setActiveElement(previousElement);
      if (previousElement === "gifteeName") {
        setSelectionMade(true);
      }
    }
  };

  const handleNextElement = () => {
    if (activeElement !== "generate" && nextStateMap[activeElement]) {
      const nextElement = nextStateMap[activeElement];
      if (nextElement == "interests"){
        getRandomInterests()
      }
      setActiveElement(nextElement);
      const newProgress = progressValues[nextElement];
      setProgress(newProgress);
      const newPrompt = promptMessages[nextElement];
      setPromptMess(newPrompt);
      setSelectionMade(false);
    }
  };

  //We want to get 6 random elements from the interests array in the json file
  const getRandomInterests = () => {
    let tempArray = new Array(6)
    for (let i=0; i<6; i++) {
      let newElement = data.interests.data[Math.floor(Math.random()*12)]; //Gets random element from the interests array
      while (tempArray.includes(newElement)) { //While Loop checks newElement is not in the currentInterests array and not in tempArray
        newElement = data.interests.data[Math.floor(Math.random()*12)];
      }
      tempArray[i] = newElement
      console.log(tempArray)
    }
    setCurrentInterests(tempArray)
  };
  console.log(currentInterests);

  //Filters.jsx - User Authentication Observer
  //The observer tracks the user authentication token across the different components
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setAuthCurrentUser(user);
        setUserEmail(user.email);
        handleUserLogin(user); // Call the handler to update user state in parent component
      } else {
        // No user is signed in
        setAuthCurrentUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the observer
  }, []);

  return (
    <>
      <div className="navbar-ProgressBar-Container">
        <NavBar />
      </div>

      <OrangeSwoop fillOpacity={".75"}/>

      <br />

      <PromptDiv 
        activeElement={activeElement}
        isLoading={isLoading}
        authCurrentUser={authCurrentUser}
        isGenerated={isGenerated}
        gifteeName={gifteeName}
      />

      <div className="paramCompContainer">
        <ParameterComponent
          key={activeElement}
          data={data[activeElement]}
          handler={handleStateSet}
          hasSelectionsHandler={setHasSelections}
          getRandomInterests={getRandomInterests}
          currentInterests={currentInterests}
        />
      </div>

      {isGenerated && (
        <>
          <div className="container">
            <ProductCarousel itemTitle={itemTitle} itemDescrip={itemDescrip} />
          </div>
        </>
      )}

      {/* Regenerate Button */}
      {isGenerated && (
        <div className="regenButton-div">
          <button onClick={handlePost}>Re-Generate</button>
        </div>
      )}

      {activeElement === "generate" &&
        !isLoading &&
        !isGenerated &&
        authCurrentUser && (
          <button
            onClick={handlePost}
            disabled={isLoading}
            className={`generateButton ${isLoading ? "opacity1" : "opacity2"}`}
          >
            Generate
          </button>
        )}

      {activeElement === "generate" &&
        !isLoading &&
        !isGenerated &&
        !authCurrentUser && (
          <>
            <div className="prompt-div">
              <TypeWriter
                text={
                  "Before I can give you any suggestions, please login or register a new account!"
                }
              />
            </div>
            <UserAuthentication
              handleUserLogin={handleUserLogin}
              authentication={authentication}
            />
          </>
        )}

      <Footer 
        activeElement={activeElement} 
        handleNextElement={handleNextElement}
        handlePreviousElement={handlePreviousElement}
        isLoading={isLoading}
        selectionMade={selectionMade}
        hasSelections={hasSelections}
        isGenerated={isGenerated}
      />
    </>
  );
};

export default Filters;
