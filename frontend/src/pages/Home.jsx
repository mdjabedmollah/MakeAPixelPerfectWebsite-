import React from "react";
import HeroSection from "../components/HeroSection";
import BestDoctors from "../components/BestDoctors";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BestDoctors />
      <StatsSection/>
    </div>
  );
};

export default Home;
