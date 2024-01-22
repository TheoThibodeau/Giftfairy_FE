import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Filters from './components/filters';
import Landing from './components/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuthentication from './components/userAuthentication';
import GetProfileResponse from './components/userProfile';


function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/selections" element={<Filters />}></Route>
      <Route path="/login" element={<UserAuthentication user={user} setUser={setUser}/>}></Route>
      <Route path="/profile" element={<GetProfileResponse />}></Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
