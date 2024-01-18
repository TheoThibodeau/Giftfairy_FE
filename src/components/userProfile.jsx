import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const GetProfileResponse = () => {
  const [profile, setProfile] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    axios
      .get("https://giftfairy-be-server.onrender.com/api/filter/response/")
      .then((response) => {
        const items = response.data;
        setProfile(items);
      });
  }, []);

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <>
      <h1>User Profile</h1>
      <h2>Selection History</h2>
      <div className="userProfileHistory">
        {profile.map((item, index) => (
            <div key={index}>
                <h3 onClick={() => handleItemClick(index)}>
                    Date: {dayjs(item.created_at).format("MM-DD-YYYY hh:mm:ss A")}
                </h3>
                {selectedItem === index && (
                    <div className="details">
                        <h3>Age: {item.age}</h3>
                        <h3>Gender: {item.gender}</h3>
                        <h3>Relationship: {item.relationship}</h3>
                        <h3>Price Range: {item.price_range}</h3>
                        <h3>Occasion: {item.occasion}</h3>
                        <h3>Gift Type: {item.gift_type}</h3>
                        <h3>Interest: {item.interest}</h3>
                        <h3>Activity: {item.activity_level}</h3>
                        <h3>Personality: {item.personality}</h3>
                        <h3>Nature: {item.nature}</h3>
                        <h3>Generated Gift Ideas: {item.item_title_string}</h3>
                    </div>
                )}
            </div>
        ))}
      </div>
    </>
  );
};

export default GetProfileResponse;
