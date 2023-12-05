import React from "react";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import data from "/filters.json";

function NavBar() {
    //Handler function to reset all json boolean value pairs to false.
    const handleHomeReset = () => {
        for(let i = 0; i < data.gender.data.length; i++) {
            data.gender.data[i][1] = false;
        }
        for(let i = 0; i < data.age.data.length; i++) {
            data.age.data[i][1] = false;
        }
        for(let i = 0; i < data.relationship.data.length; i++) {
            data.relationship.data[i][1] = false;
        }
        for(let i = 0; i < data.priceRange.data.length; i++) {
            data.priceRange.data[i][1] = false;
        }
        for(let i = 0; i < data.occasion.data.length; i++) {
            data.occasion.data[i][1] = false;
        }
        for(let i = 0; i < data.giftType.data.length; i++) {
            data.giftType.data[i][1] = false;
        }
        for(let i = 0; i < data.interests.data.length; i++) {
            data.interests.data[i][1] = false;
        }
        for(let i = 0; i < data.activity.data.length; i++) {
            data.activity.data[i][1] = false;
        }
        
    }
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            {/* <Container> */}
            <div className="d-flex align-items-start">
                <h3 className="titleHeader">GIFTFaiRY</h3>
            </div>
            <Link to="/" className="navbar-brand" onClick={handleHomeReset}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="gray"
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
            {/* </Container> */}
        </Navbar>
    </>
  );
}

export default NavBar;