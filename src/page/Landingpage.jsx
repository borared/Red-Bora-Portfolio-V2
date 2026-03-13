import React from "react";
import Hero from "../components/landingpage/Hero";
import Greeting from "../components/landingpage/Greeting";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greeting />
    </div>
  )
}