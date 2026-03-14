import React from "react";
import Hero from "../components/landingpage/Hero";
import Greeting from "../components/landingpage/Greeting";
import RecentlyWork from "../components/landingpage/RecentlyWork";
import DesignWork from "../components/landingpage/DesignWork";
import Buildme from "../components/landingpage/Buildme";
import MoreDetailAbout from "../components/landingpage/MoreDetailAbout";
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greeting />
      <RecentlyWork />
      <DesignWork />
      <Buildme />
      <MoreDetailAbout />
    </div>
  )
}