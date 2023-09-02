import React from "react";
import Navbar from "../Components/Navbar";
import TitleDiv from "../Components/TitleDiv";
import Home_UpcomMatch from "../Components/Home_UpcomMatch";
import Sports from "../Components/Sports";
import Footer from "../Components/footer";

import { BranchScore } from "../Components/BranchScore";
export const HomePage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <TitleDiv />
      <Home_UpcomMatch />
      <Sports />
      <BranchScore />
      <Footer />
    </div>
  );
};
