import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Filters from './components/filters';
import Landing from './components/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/selections" element={<Filters />}></Route>   
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
