import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import LandingPage from "./page/Landingpage";
import DraggableGithub from "./components/global/DraggableGithub";
import CustomCursor from "./components/global/CustomCursor";
import Footer from "./components/global/Footer";
import IntroLoader from "./components/global/IntroLoader";
import Contact from "./page/Contact";

function App() {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <BrowserRouter>
      <CustomCursor />

      {/* Intro loading screen – unmounts after animation completes */}
      {introVisible && (
        <IntroLoader onComplete={() => setIntroVisible(false)} />
      )}

      {/* Fixed black border frame stuck around the entire screen */}
      <div
        className="fixed inset-[12px] sm:inset-[20px] md:inset-[30px] rounded-[16px] sm:rounded-[24px] md:rounded-[32px] pointer-events-none z-40"
        style={{
          boxShadow: "0 0 0 100vmax black",
        }}
      />

      {/* Main site – already rendered but hidden behind the intro overlay */}
      <Navbar />
      <DraggableGithub />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
