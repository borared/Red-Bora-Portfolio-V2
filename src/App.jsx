import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import LandingPage from "./page/Landingpage";
import DraggableGithub from "./components/global/DraggableGithub";
import CustomCursor from "./components/global/CustomCursor";
import Footer from "./components/global/Footer";
import IntroLoader from "./components/global/IntroLoader";

function App() {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <BrowserRouter>
      <CustomCursor />

      {/* Intro loading screen – unmounts after animation completes */}
      {introVisible && (
        <IntroLoader onComplete={() => setIntroVisible(false)} />
      )}

      {/* Main site – already rendered but hidden behind the intro overlay */}
      <Navbar />
      <DraggableGithub />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
