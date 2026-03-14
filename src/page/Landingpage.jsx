import React from "react";
import Hero from "../components/landingpage/Hero";
import Greeting from "../components/landingpage/Greeting";
import RecentlyWork from "../components/landingpage/RecentlyWork";
import DesignWork from "../components/landingpage/DesignWork";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greeting />
      <RecentlyWork />
      <DesignWork />
    </div>
  )
}