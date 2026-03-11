import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays outside Routes so it shows up on every page */}
      <Navbar /> 
      
      <Routes>
        {/* You must wrap your component in a Route tag */}
        <Route path="/" element={<Hero />} />
        
        {/* Example of another route */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
        <section className="min-h-screen" />
    </BrowserRouter>
  );
}

export default App;