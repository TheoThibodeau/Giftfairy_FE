import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Filters from './components/filters';
import Landing from './components/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuthentication from './components/userAuthentication';
import GetProfileResponse from './components/userProfile';
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword
 } from "firebase/auth";


function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [authentication, setAuthentication] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUserLogin = (newUser) => {
    setUser(newUser);
  };

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyD31E0qyRff38YbacqfmJX1mLePHxanrws",
      authDomain: "giftfairy-a84c0.firebaseapp.com",
      projectId: "giftfairy-a84c0",
      storageBucket: "giftfairy-a84c0.appspot.com",
      messagingSenderId: "360717671227",
      appId: "1:360717671227:web:1a35bb12a01c2799f7f51e",
      measurementId: "G-TDHVENEFD9"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service for the giftfairy app
    const auth = getAuth(app);

    useEffect(() => {
      setAuthentication(auth);
    }, [auth]);

    const handleLoginSubmit = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(authentication, email, password)
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
      e.preventDefault()
      createUserWithEmailAndPassword(authentication, email, password)
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

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailInput = (e) => {
      setEmail(e.target.value);
  };

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/selections" 
      element=
      {<Filters 
      user={user} 
      handleUserLogin={handleUserLogin} 
      authentication={authentication} 
      handleLoginSubmit={handleLoginSubmit} 
      handleLogOut={handleLogOut} 
      handleRegisterSubmit={handleRegisterSubmit} 
      handlePasswordInput={handlePasswordInput}
      handleEmailInput={handleEmailInput}
      email={email}
      password={password}
      />}></Route>
      <Route path="/login" 
      element=
      {<UserAuthentication 
      user={user} 
      handleUserLogin={handleUserLogin} 
      authentication={authentication} 
      handleLoginSubmit={handleLoginSubmit} 
      handleLogOut={handleLogOut} 
      handleRegisterSubmit={handleRegisterSubmit}
      handlePasswordInput={handlePasswordInput}
      handleEmailInput={handleEmailInput}
      email={email}
      password={password}
      />}></Route>
      <Route path="/profile" element={<GetProfileResponse user={user} handleUserLogin={handleUserLogin}/>}></Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App;
