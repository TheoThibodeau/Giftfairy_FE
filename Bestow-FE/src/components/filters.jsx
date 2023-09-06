import axios from "axios";
import {useState} from "react";
import data from "/filters.json"; 

const Filters = () => {
    const [age, setAge] = useState(""); 
    const [gender, setGender] = useState("");
    const [relationship, setRelationship] = useState(""); 
    const [priceRange, setPriceRange] = useState("");
    const [occasion, setOccasion] = useState(""); 
    const [giftType, setGiftType] = useState(""); 
    const [interests, setInterests] = useState("");

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
            .then (() => {

            })
            console.log(handlePost)
    }

    const handleAge = (selectedAge) => {
        setAge(selectedAge)
        console.log(selectedAge)
    }

    const handleGender = (selectedGender) => {
        setGender(selectedGender)
        console.log(selectedGender)
    }

    const handleRelationship = (selectedRelationship) => {
        setRelationship(selectedRelationship)
        console.log(selectedRelationship)
    }

    const handlePriceRange = (selectedPriceRange) => {
        setPriceRange(selectedPriceRange)
        console.log(selectedPriceRange)
    }

    const handleOccasion = (selectedOccasion) => {
        setOccasion(selectedOccasion)
        console.log(selectedOccasion)
    }   

    const handleGiftType = (selectedGiftType) => {
        setGiftType(selectedGiftType)
        console.log(selectedGiftType)
    }

    const handleInterests = (selectedInterests) => {
        setInterests(selectedInterests)
        console.log(selectedInterests)
    }

    return (
        <>
            <h1>Bestow</h1>
            <p>Age</p>
                <button onClick={() => handleAge("0-5")}>
                    <h5>0-5</h5>
                </button>
                <button>
                    <h5>6-12</h5>
                </button>
                <button>
                    <h5>13-20</h5>
                </button>
                <button>
                    <h5>21-30</h5>
                </button>
                <button>
                    <h5>31-40</h5>
                </button>
                <button>
                    <h5>41-50</h5>
                </button>
                <button>
                    <h5>51-65</h5>
                </button>
                <button>
                    <h5>65+</h5>
                </button>
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