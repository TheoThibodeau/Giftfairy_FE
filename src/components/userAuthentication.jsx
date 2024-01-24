import React from "react";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";



const UserAuthentication = ({user, handleUserLogin, authentication, handleLoginSubmit, handleLogOut, handleRegisterSubmit, handleEmailInput, handlePasswordInput, email, password}) => {

    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    const [loginSelected, setLoginSelected] = useState(false);
    const [registerSelected, setRegisterSelected] = useState(false);

    // // Your web app's Firebase configuration
    // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //     apiKey: "AIzaSyD31E0qyRff38YbacqfmJX1mLePHxanrws",
    //     authDomain: "giftfairy-a84c0.firebaseapp.com",
    //     projectId: "giftfairy-a84c0",
    //     storageBucket: "giftfairy-a84c0.appspot.com",
    //     messagingSenderId: "360717671227",
    //     appId: "1:360717671227:web:1a35bb12a01c2799f7f51e",
    //     measurementId: "G-TDHVENEFD9"
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);

    // // Initialize Firebase Authentication and get a reference to the service for the giftfairy app
    // const auth = getAuth(app);

    // const handlePasswordInput = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleEmailInput = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handleLoginSubmit = (e) => {
    //     e.preventDefault()
    //     signInWithEmailAndPassword(authentication, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             handleUserLogin(userCredential.user);
    //             alert("Successful User Login");
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             alert(errorCode + errorMessage);
    //         });
    // };

    // const handleRegisterSubmit = (e) => {
    //     e.preventDefault()
    //     createUserWithEmailAndPassword(authentication, email, password)
    //         .then((userCredential) => {
    //         // Signed up 
    //         handleUserLogin(userCredential.user);
    //         console.log("Successful User created")
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode)
    //         console.log(errorMessage)
    //         // ..
    //     });
    // };

    // const handleLogOut = (e) => {
    //     signOut(authentication).then(() => {
    //     console.log("Your signout was successful")
    //       // Sign-out successful.
    //     }).catch((error) => {
    //     console.log(error)
    //       // An error happened.
    //     });
    // };

      //This is where we check to see who the user is

      const auth = getAuth();
      const [authCurrentUser, setAuthCurrentUser] = useState(null);
  
      useEffect(() => {
        const currentUser = auth.currentUser;
        setAuthCurrentUser(currentUser);
      }, [auth.currentUser]);  
      console.log(user);
      console.log(authCurrentUser);

    const handleLoginClick = () => {
        setLoginSelected(true);
    };

    const handleRegisterClick = () => {
        setRegisterSelected(true);
    };

    console.log(loginSelected);
    console.log(registerSelected);
    console.log(user.email);

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
            value={email}
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
            value={email}
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