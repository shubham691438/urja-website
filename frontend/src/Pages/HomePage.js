import React from "react";
import Navbar from "../components/Navbar";
import TitleDiv from "../components/TitleDiv";
import Home_UpcomMatch from "../components/Home_UpcomMatch";
import Sports from "../components/Sports";
import Footer from "../components/Footer";
import { BranchScore } from "../components/BranchScore";
export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <TitleDiv />
      <Home_UpcomMatch />
      <Sports />
      <BranchScore />
      <Footer />
    </div>
  );
};
