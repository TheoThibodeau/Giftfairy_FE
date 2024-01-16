import React from "react";
import { useState } from "react";
import axios from "axios";
import NavBar from "./navbar";
import { Nav } from "react-bootstrap";

const UserAuthentication = ({setToken, token}) => {

    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    return(
    <>
    
       <form>
        <input type="string" placeholder="Username"></input>
        <input type="string" placeholder="Password"></input>
        <button type="submit">Login</button>
        <button type="submit">Logout</button>
        <button type="submit">Register</button>
       </form>
       
    </>
    )
}

export default UserAuthentication;