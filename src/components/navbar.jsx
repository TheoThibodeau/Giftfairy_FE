import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import data from "/filters.json";
import UserImage from '../images/userImage.png';

function NavBar() {
    
    return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Link to="/profile">
                <img 
                src={UserImage} 
                alt="User Image"
                height={40}
                width={40}
                 />
                 </Link>
                <h2 className="titleHeader" >GIFTFaiRY</h2>
            <Link to="/" className="navbar-brand">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    fill="whitesmoke"
                    className="bi bi-house-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
                    />
                    <path
                    d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"
                    />
                </svg>
                </Link>
        </Navbar>
    </>
  );
}

export default NavBar;