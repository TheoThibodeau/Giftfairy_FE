import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoginForm from "./User Login Forms/loginForm";
import RegisterForm from "./User Login Forms/registerForm";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
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
  const [userFirstName, setUserFirstName] = useState("");
  const [currentState, setCurrentState] = useState("login-register");

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
    setCurrentState("login-register-form");
    setRegisterSelected(false);
  };

  const handleRegisterClick = () => {
    setRegisterSelected(true);
    setCurrentState("login-register-form");
    setLoginSelected(false);
  };

  const handleLoginRegisterReturn = () => {
    setCurrentState("login-register");
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
        console.log("Your account creation was successful!");
        alert("Your account creation was successful!");
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
        alert(
          "Incorrect password or email address, please try again. \n" +
            errorMessage
        );
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

  //Handle user logout! **MAY WANT TO CLEAR OUT FIELDS FOR THIRD-PARTY LOGINS/LOGOUTS
  const handleLogOut = (e) => {
    signOut(authentication)
      .then(() => {
        alert("Your signout was successful"); // Sign-out successful.
      })
      .catch((error) => {
        console.log(error); // An error happened.
      });
  };

  // Handle user password reset!
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, emailInput).then(() => {
      alert("Password reset email sent, please check your email!"); // Password reset email sent!
    });
    //MAY WANT TO INCLUDE A ERROR CATCH HERE
  };

  // Google Third-Party Authentication Function/handler
  const handleGoogleAuth = async () => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const provider = new GoogleAuthProvider();
    // The signed-in user info.
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserID(result.user.uid);
        setUserEmail(result.user.email);
        setUserFirstName(result.user.displayName);
        const response = axios.get(
          `https://giftfairy-be-server.onrender.com/api/user/response/${result.user.email}/`
        );
        console.log("Response: ", response);
        console.log("Response data length: ", response.data.length);
        if (response.data.length === 0) {
          console.log("New user, creating account on giftfairy");
          handleUserPost();
          alert(
            "Successfully created a new user account on giftfairy with your gmail!"
          );
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log("Error code: ", errorCode);
        const errorMessage = error.message;
        console.log("Error message: ", errorMessage);
        const email = error.customData.email; // The email of the user's account used.
        const credential = GoogleAuthProvider.credentialFromError(error); // The AuthCredential type that was used.
      });
  };

  // User Authentication Observer
  // The observer tracks the user authentication token across the different components
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setAuthCurrentUser(user);
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

  //While firebase/third-party is logging in user, current component is in a loading state (very quick).
  // So display nothing.
  if (loading) {
    return <div></div>;
  }

  return (
    <>
      {currentState == "login-register" && !authCurrentUser && (
        <>
          <button type="submit" onClick={handleLoginClick}>
            Login
          </button>
          <button type="submit" onClick={handleRegisterClick}>
            Register
          </button>

          <h5>
            <hr></hr>or<hr></hr>
          </h5>

          <button type="submit" onClick={handleGoogleAuth}>
            <img
              src={GoogleIcon}
              width={25}
              height={25}
              className="googleIcon"
            ></img>
            Continue with Google
          </button>
        </>
      )}

      {registerSelected && currentState == "login-register-form" && (
        <RegisterForm
          handleRegisterSubmit={handleRegisterSubmit}
          nameInput={nameInput}
          handleNameInput={handleNameInput}
          emailInput={emailInput}
          handleEmailInput={handleEmailInput}
          password={password}
          handlePasswordInput={handlePasswordInput}
          handleLoginRegisterReturn={handleLoginRegisterReturn}
        />
      )}

      {loginSelected && currentState == "login-register-form" && (
        <LoginForm
          handleLoginSubmit={handleLoginSubmit}
          emailInput={emailInput}
          handleEmailInput={handleEmailInput}
          password={password}
          handlePasswordInput={handlePasswordInput}
          handlePasswordReset={handlePasswordReset}
          handleLoginRegisterReturn={handleLoginRegisterReturn}
        />
      )}

      {authCurrentUser && (
        <button type="submit" onClick={handleLogOut}>
          Logout
        </button>
      )}
    </>
  );
};

export default UserAuthentication;
