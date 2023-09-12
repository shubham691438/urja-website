import React from "react";
import MatchesGrid from "../components/MatchesGrid";
import AnimatedHeading from "../components/AnimatedHeading";
// import { Outlet } from "react-router-dom"

const Results = () => {
  return (
    <div
      className="site-section"
      style={{ backgroundColor: "#222831", paddingTop: "100px" }}
    >
      <div className="container" style={{ marginTop: "2em" }}>
        <AnimatedHeading heading="ALL-MATCHES" />

        <div className="row mb-5">
          <MatchesGrid />
        </div>
      </div>
    </div>
  );
};

export default Results;
