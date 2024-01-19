import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const GetProfileResponse = () => {
  const [profile, setProfile] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://giftfairy-be-server.onrender.com/api/filter/response/")
      .then((response) => {
        const items = response.data;
        setProfile(items);
      });
  }, []);

  const handleDateClick = (index) => {
    setSelectedDate(selectedDate === index ? null : index);
  };

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <>
      <h1>User Profile</h1>
      <h2>Selection History</h2>
      <div className="userProfileHistory">
        {profile
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((item, index) => (
            <div key={index} className="userHistoryByDate" >
              <div key={index}className="userHistoryByDateHeader"> 
                  <h3>
                      Date: {dayjs(item.created_at).format("MM-DD-YYYY hh:mm A")}
                  </h3>
                  {selectedDate == index ? 
                    <svg id="more-arrows" viewBox="0 0 125 115" onClick={() => handleDateClick(index)}>
                      <polygon class="arrow-top" points="37.6,1.3 1.8,27.9 3.3,29.2 37.6,3.9 71.9,29.2 73.7,27.9"/>
                      <polygon class="arrow-middle" points="37.6,18.7 0.8,45.8 4.4,48.1 37.6,23.2 71.2,48.1 74.5,45.8"/>
                      <polygon class="arrow-bottom" points="37.6,36.1 0,64 5.1,67.3 37.6,43.2 70.4,67.3 75.5,64"/>
                    </svg>
                    :
                    <svg id="more-arrows" viewBox="0 0 125 115" onClick={() => handleDateClick(index)}>
                      <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                      <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                      <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                    </svg>
                  }
              </div>
              {selectedDate == index && (
              <div className="userHistory" >
                <div className="userHistorySelections">
                  <h3>
                    Selections: 
                  </h3>
                  {selectedItem == index ? 
                      <svg id="more-arrows" viewBox="0 0 125 115" onClick={() => handleItemClick(index)}>
                        <polygon class="arrow-top" points="37.6,1.3 1.8,27.9 3.3,29.2 37.6,3.9 71.9,29.2 73.7,27.9"/>
                        <polygon class="arrow-middle" points="37.6,18.7 0.8,45.8 4.4,48.1 37.6,23.2 71.2,48.1 74.5,45.8"/>
                        <polygon class="arrow-bottom" points="37.6,36.1 0,64 5.1,67.3 37.6,43.2 70.4,67.3 75.5,64"/>
                      </svg>
                      :
                      <svg id="more-arrows" viewBox="0 0 125 115" onClick={() => handleItemClick(index)}>
                        <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                        <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                        <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                      </svg>
                    }
                    </div>
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
                        </div>
                    )}
                    <div className="userHistoryGeneratedGifts">                      
                    <h3>Generated Gift Ideas: {item.item_title_string}</h3>
                    </div>
              </div>
              )}
            </div>
        ))}
      </div>
    </>
  );
};

export default GetProfileResponse;
