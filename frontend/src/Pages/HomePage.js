import React from "react";
import Navbar from "../components/Navbar";
import TitleDiv from "../components/TitleDiv";
import UpcommingMatch from "../components/UpcommingMatch";
import Sports from "../components/Sports";
import Footer from "../components/Footer";
import { BranchScore } from "../components/BranchScore";
export const HomePage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <TitleDiv />
      <UpcommingMatch />
      <Sports />
      <BranchScore />
      <Footer />
    </div>
  );
};
