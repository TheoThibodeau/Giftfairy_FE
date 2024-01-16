import React, { useEffect, useState } from "react";
import axios from "axios";

const GetFilterResponse = () => {

    const [output, setOutput] = useState("");

    useEffect(() => {
        axios
            .get('https://giftfairy-be-server.onrender.com/api/filter/response/?user=*')
            .then((response) => {
                setOutput(response.data.output);
            })
    })

    return(
        <>
            <h1>User Profile</h1>
            <h3>{output}</h3>
        </>
    );
};

export default GetFilterResponse;