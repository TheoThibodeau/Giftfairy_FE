import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import GoogleIcon from "../images/googleIcon.png";

const UserAuthentication = ({ handleUserLogin, authentication }) => {
  const [password, setPassword] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [loginSelected, setLoginSelected] = useState(false);
  const [registerSelected, setRegisterSelected] = useState(false);
  const [authCurrentUser, setAuthCurrentUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userID, setUserID] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [userIdGoogle, setUserIdGoogle] = useState("");

  const auth = getAuth();

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleLoginClick = () => {
    setLoginSelected(true);
  };

  const handleRegisterClick = () => {
    setRegisterSelected(true);
  };

  //Creates a new user in backend database for giftfairy (postgreSQL/Render)
  const handleUserPost = () => {
    axios
      .post("https://giftfairy-be-server.onrender.com/api/user/generate", {
        uid: userID,
        password: " ",
        username: emailInput,
        email: emailInput,
        first_name: nameInput,
      })
      .then((response) => {
        console.log("Your post was successful!");
      })
      .catch((error) => {
        alert("Oops, there was an error when creating your account. (Render)");
      });
  };

  // Handle user login through Firebase
  const handleLoginSubmit = (e) => {
    e.preventDefault(); //Prevent browser reload on from submit
    signInWithEmailAndPassword(authentication, emailInput, password) //Firebase function to sign-in user 
      .then((userCredential) => {
        handleUserLogin(userCredential.user); //Pass user up to parent component
        alert("Successful User Login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Incorrect password or email address, please try again. \n" + errorMessage);
      });
  };

  // Handle registering new user
  const handleRegisterSubmit = (e) => {
    //Call function that creates new user being registered to giftfairy backend on Render/postgreSQL
    handleUserPost();
    e.preventDefault();
    createUserWithEmailAndPassword(authentication, emailInput, password)
      .then((userCredential) => {
        handleUserLogin(userCredential.user); //Send user up to parent component
        sendEmailVerification(userCredential.user).then(() => {
          alert("Successful user created, email verification sent!"); //Successful email verification sent
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
          alert(
            "Email is already in use, please use a different email to sign-up for an account."
          );
        }
        alert(errorMessage);
      });
  };

  //Handle user logout! **MAY WANT TO CLEAR OUT FIELDS FOR THIRDPARTY LOGINS/LOGOUTS
  const handleLogOut = (e) => {
    signOut(authentication)
      .then(() => {
        console.log("Your signout was successful"); // Sign-out successful.
      })
      .catch((error) => {
        console.log(error); // An error happened.
      });
  };

  // Handle user password reset!
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, emailInput).then(() => {
      alert("Password reset email sent, please check your email!");// Password reset email sent!
    });
    //MAY WANT TO INCLUDE A ERROR CATCH HERE
  };

  // Google Third-Party Authentication Function/handler
  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(result)
                console.log(credential);
                const token = credential.accessToken;
                const user = result.user; // The signed-in user info.
                setUserIdGoogle(result.user);
                // IdP data available using getAdditionalUserInfo(result)

                // WHAT NEEDS TO HAPPEN:
                // RESULT IS THE PROMISE WE GET BACK FROM 3RD PARTY PROVIDER, THE RESULT WILL HOLD USER DETAILS
                // 1. SEND A GET REQUEST BACK TO RENDER/POSTGRESQL TO CHECK TO SEE IF THERE IS A USER WITH THAT EMAIL ALREADY
                // 2. AWAIT RESPONSE, IF USER FOUND THEN USER ALREADY HAS AN ASSOCIATED ACCOUNT AND USER/APP CAN PROCEED WITHOUT ANY FURTHER STEPS
                // 3. IF USER IS NOT FOUND, THEN CALL FUNCTION HANDLEUSERPOST. WILL NEED EMAIL, UID, AND FIRSTNAME IF ABLE TO RETRIEVE 


            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email; // The email of the user's account used.
                const credential = GoogleAuthProvider.credentialFromError(error); // The AuthCredential type that was used.

            });
    }

    // User Authentication Observer
    // The observer tracks the user authentication token across the different components
    useEffect(() => {
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

    console.log("Test for current user via Google Auth: " + userIdGoogle);
    console.log("Current user email: " + userEmail);

    console.log("Auth Current User is: " + authCurrentUser);
    // console.log("Test for current user id via Google Auth: " + userID);
    // console.log("Test for current user email via Google Auth: " + userEmail);

  //While firebase/third-party is logging in user, current component is in a loading state (very quick).
  // So display nothing.
  if (loading) {
    return <div></div>;
  }

  return (
    <>
      {!loginSelected && !registerSelected && !authCurrentUser && (
        <>
          {!authCurrentUser && (
            <button type="submit" onClick={handleLoginClick}>
              Login
            </button>
          )}

          {!authCurrentUser && (
            <button type="submit" onClick={handleRegisterClick}>
              Register
            </button>
          )}
          <h5>
            <hr></hr>
                or
            <hr></hr>
          </h5>
          {!authCurrentUser && (
            <button 
                type="submit"
                onClick={handleGoogleAuth}
            >
              <img
                src={GoogleIcon}
                width={25}
                height={25}
                className="googleIcon"
              ></img>
              Continue with Google
            </button>
          )}
        </>
      )}
        <button type="submit" onClick={handleLogOut}>
          Logout
        </button>

      {registerSelected && (
        <>
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="string"
              placeholder="First Name"
              name="First Name"
              value={nameInput}
              onChange={handleNameInput}
              className={`inputButton `}
              required
            ></input>

            <input
              type="string"
              placeholder="Email"
              name="Email"
              value={emailInput}
              onChange={handleEmailInput}
              className={`inputButton `}
              required
            ></input>

            <input
              type="string"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={handlePasswordInput}
              className={`inputButton `}
              required
            ></input>
            <button type="submit">Submit</button>
          </form>
        </>
      )}

      {loginSelected && (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="string"
              placeholder="Email"
              name="Email"
              value={emailInput}
              onChange={handleEmailInput}
              className={`inputButton `}
            ></input>

            <input
              type="string"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={handlePasswordInput}
              className={`inputButton `}
            ></input>
            <button type="submit">Submit</button>
            <a className="forgotPassword" onClick={handlePasswordReset}>
              Forgot Password
            </a>
          </form>
        </>
      )}
    </>
  );
};

export default UserAuthentication;
