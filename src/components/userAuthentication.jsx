import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword,
    onAuthStateChanged
 } from "firebase/auth";
import { Link } from "react-router-dom";


const UserAuthentication = ({ handleUserLogin, authentication }) => {

    const [password, setPassword] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [loginSelected, setLoginSelected] = useState(false);
    const [registerSelected, setRegisterSelected] = useState(false);
    const [authCurrentUser, setAuthCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    const [userEmail, setUserEmail] = useState("");

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(authentication, emailInput, password)
            .then((userCredential) => {
                // Signed in 
                handleUserLogin(userCredential.user);
                alert("Successful User Login");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + errorMessage);
            });
    };

    const handleRegisterSubmit = (e) => {
        handleUserPost();
        e.preventDefault();
        createUserWithEmailAndPassword(authentication, emailInput, password)
            .then((userCredential) => {
            // Signed up 
            handleUserLogin(userCredential.user);
            console.log("Successful User created")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        });
    };

    const handleLogOut = (e) => {
        signOut(authentication).then(() => {
        console.log("Your signout was successful")
          // Sign-out successful.
        }).catch((error) => {
        console.log(error)
          // An error happened.
        });
    };

    //Creates a new User in the User Table Database
    const handleUserPost = () => {
        axios
          .post('https://giftfairy-be-server.onrender.com/api/user/generate', {
            uid: userID,
            password: " ",
            username: emailInput,
            email: emailInput,
          }) 
          .then((response) => {
            if(response){
              console.log("Your post was successful!")
            }
          }) 
          .catch((error) => {
            if(error){
              console.log("Oops, there was an error, don't ask me why")
            }
          })
      };

      //userAuthentication.jsx - User Authentication Observer
      //The observer tracks the user authentication token across the different components

      console.log("Auth Current User is: " + authCurrentUser);

      useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              setAuthCurrentUser(user);
              console.log("User is: " + user);
              handleUserLogin(user); // Call the handler to update user state in parent component
              setUserID(user.uid);
              setUserEmail(user.email);
            } else {
              // No user is signed in
              setAuthCurrentUser(null);
            }
            setLoading(false);
          });
      
          return () => unsubscribe(); // Cleanup function to unsubscribe from the observer
        }, [handleLoginSubmit, handleLogOut, handleRegisterSubmit]);  

        if (loading) {
            return <div></div>;
          }

        const handleLoginClick = () => {
            setLoginSelected(true);
        };

        const handleRegisterClick = () => {
            setRegisterSelected(true);
        };

        console.log(loginSelected);
        console.log(registerSelected);

    return(
    <>
    {(!loginSelected && !registerSelected && !authCurrentUser) && (
        <>
        {!authCurrentUser && (
            <button 
                type="submit"
                onClick={handleLoginClick}
                >
                Login
            </button>
        )}

        {!authCurrentUser && (
            <button 
                type="submit"
                onClick={handleRegisterClick}
                >
                Register
            </button>
        )}
        </>
    )}

    {authCurrentUser && (
        <button
            type="submit"
            onClick={handleLogOut}
        >
            Logout
        </button>
    )}

    {registerSelected && (
        <>
        <h2>Register</h2>
       <form
            onSubmit={handleRegisterSubmit}
       >
        <input 
            type="string" 
            placeholder="Email"
            name="Email" 
            value={emailInput}
            onChange={handleEmailInput}
            className={`inputButton `}
        >
        </input>

        <input 
            type="string" 
            placeholder="Password" 
            name="Password" 
            value={password}
            onChange={handlePasswordInput}
            className={`inputButton `}
        >
        </input>
            <button
                type="submit"
            >
                Submit
            </button>
       </form>
       </>
    )}

    {loginSelected && (
        <>
        <h2>Login</h2>
       <form
            onSubmit={handleLoginSubmit}
       >
        <input 
            type="string" 
            placeholder="Email"
            name="Email" 
            value={emailInput}
            onChange={handleEmailInput}
            className={`inputButton `}
        >
        </input>

        <input 
            type="string" 
            placeholder="Password" 
            name="Password" 
            value={password}
            onChange={handlePasswordInput}
            className={`inputButton `}
        >
        </input>
            <button
                type="submit"
            >
                Submit
            </button>
       </form>
       </>
    )}

    </>
    )
};

export default UserAuthentication;