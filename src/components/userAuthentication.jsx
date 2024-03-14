import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification
 } from "firebase/auth";


const UserAuthentication = ({ handleUserLogin, authentication }) => {

    const [password, setPassword] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [loginSelected, setLoginSelected] = useState(false);
    const [registerSelected, setRegisterSelected] = useState(false);
    const [authCurrentUser, setAuthCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    const [userEmail, setUserEmail] = useState("");
    const [nameInput, setNameInput] = useState("");

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
    };

    const handleNameInput = (e) => {
        setNameInput(e.target.value);
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
                alert("Incorrect password or email address, please try again.");
            });
    };

    const handleRegisterSubmit = (e) => {
        handleUserPost();
        e.preventDefault();
        createUserWithEmailAndPassword(authentication, emailInput, password)
            .then((userCredential) => {
            // Signed up 
            handleUserLogin(userCredential.user);
            // ..
            sendEmailVerification(userCredential.user)
            .then(() => {
                // Email verification sent!                
                alert("Successful user created, email verification sent!")
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode == "auth/email-already-in-use"){
                alert("Email is already in use, please use a different email to sign-up for an account.")
            }
            console.log(errorCode)
            alert(errorMessage)
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
            first_name: nameInput,
          }) 
          .then((response) => {
            if(response){
              console.log("Your post was successful!")
            }
          }) 
          .catch((error) => {
            if(error){
              alert("Oops, there was an error when creating your account. (Render)")
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
            placeholder="First Name"
            name="First Name" 
            value={nameInput}
            onChange={handleNameInput}
            className={`inputButton `}
            required
        >
        </input>

        <input 
            type="string" 
            placeholder="Email"
            name="Email" 
            value={emailInput}
            onChange={handleEmailInput}
            className={`inputButton `}
            required
        >
        </input>

        <input 
            type="string" 
            placeholder="Password" 
            name="Password" 
            value={password}
            onChange={handlePasswordInput}
            className={`inputButton `}
            required
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