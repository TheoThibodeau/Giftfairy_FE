import { useState, useEffect } from "react";
import Filters from "./components/filters";
import Landing from "./components/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetProfileResponse from "./components/userProfile";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
require('dotenv').config();

function App() {
  const [user, setUser] = useState("");
  const [authentication, setAuthentication] = useState("");

  const handleUserLogin = (newUser) => {  
    setUser(newUser);
  };    

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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
          <Route
            path="/selections"
            element={
              <Filters
                handleUserLogin={handleUserLogin}
                authentication={authentication}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <GetProfileResponse
                handleUserLogin={handleUserLogin}
                authentication={authentication}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
