import React, { Suspense, lazy } from "react";
import Hero from "../components/landingpage/Hero";
import Greeting from "../components/landingpage/Greeting";
import RecentlyWork from "../components/landingpage/RecentlyWork";

// Code-split below-the-fold heavy sections for instant initial page render
const DesignWork = lazy(() => import("../components/landingpage/DesignWork"));
const AllProject = lazy(() => import("../components/landingpage/AllProject"));
const CinematicBanner = lazy(() => import("../components/landingpage/CinematicBanner"));
const EduJourney = lazy(() => import("../components/landingpage/EduJourney"));
const Achievement = lazy(() => import("../components/landingpage/Achievement"));

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greeting />
      <RecentlyWork />
      <Suspense fallback={<div className="w-full h-96 bg-black" />}>
        <DesignWork />
        <AllProject />
        <CinematicBanner />
        <EduJourney />
        <Achievement />
      </Suspense>
    </div>
  );
}