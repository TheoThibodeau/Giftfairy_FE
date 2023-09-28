import React, { useEffect, useState } from "react";
import axios from "axios";

const getFilterResponse = ({ }) => {

    const [output, setOutput] = useState("");

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/filter/response')
            .then((response) => {
                setOutput(response.data.output);
            })
    })

    return(
        <>
            <h3>{output}</h3>
        </>
    );
};

export default getFilterResponse;