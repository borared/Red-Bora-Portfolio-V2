import React from "react";
import Hero from "../components/landingpage/Hero";
import Greeting from "../components/landingpage/Greeting";
import RecentlyWork from "../components/landingpage/RecentlyWork";
import DesignWork from "../components/landingpage/DesignWork";
import AllProject from "../components/landingpage/AllProject";
import CinematicBanner from "../components/landingpage/CinematicBanner";
import EduJourney from "../components/landingpage/EduJourney";
import Buildme from "../components/landingpage/Buildme";
import MoreDetailAbout from "../components/landingpage/MoreDetailAbout";
import Model2D from "../components/landingpage/Model2D";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greeting />
      <RecentlyWork />
      <DesignWork />
      <AllProject />
      <CinematicBanner />
      <EduJourney />
      <Buildme />
      <MoreDetailAbout />
      <Model2D />
    </div>
  )
}