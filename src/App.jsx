import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import LandingPage from "./page/Landingpage";
import DraggableGithub from "./components/global/DraggableGithub";
import Footer from "./components/global/Footer";
function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays outside Routes so it shows up on every page */}
      <Navbar />
      <DraggableGithub />

      <Routes>
        {/* You must wrap your component in a Route tag */}
        <Route path="/" element={<LandingPage />} />

        {/* Example of another route */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
