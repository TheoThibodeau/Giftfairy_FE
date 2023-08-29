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
    }

    return (
        <>
            <h1>Bestow</h1>
            <p>Age</p>
                <button>
                    <h5>0-10</h5>
                </button>
                <button>
                    <h5>11-20</h5>
                </button>
            <p>Gender</p>
            <p>Relationship</p>
            <p>Price Range</p>
            <p>Occasion</p>
            <p>Gift Type</p>
            <p>Interests</p>

        </>
    )
}; 

export default Filters