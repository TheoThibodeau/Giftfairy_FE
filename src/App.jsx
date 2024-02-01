import { useState, useEffect } from 'react';
import './App.css';
import Filters from './components/filters';
import Landing from './components/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetProfileResponse from './components/userProfile';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [authentication, setAuthentication] = useState('');

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


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/selections" element={<Filters handleUserLogin={handleUserLogin} authentication={authentication} />}></Route>
      <Route path="/profile" element={<GetProfileResponse handleUserLogin={handleUserLogin} authentication={authentication}/>}></Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
};

export default App;