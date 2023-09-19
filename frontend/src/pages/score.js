import React from "react";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedScoreHeading from "../components/AnimatedScoreHeading";
import ScorePointsTable from "../components/ScorePointsTable";
const Results = () => {
  return (
    <div
      className="site-section"
      style={{ backgroundColor: "#222831", paddingTop: "100px" }}
    >
      <div className="container" style={{ marginTop: "2em" }}>
        <AnimatedHeading heading="SCORES" />

        <div className="row mb-5">
          <AnimatedScoreHeading heading="CRICKET" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="FOOTBALL" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="BADMINTON" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="BASKETBALL" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="HOCKEY" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="ATHLETICS" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="TABLE TENNIS" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="LAWN TENNIS" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="CHESS" />
          <ScorePointsTable />
        </div>
        <div className="row mb-5">
          <AnimatedScoreHeading heading="VOLLEYBALL" />
          <ScorePointsTable />
        </div>
      </div>
    </div>
  );
};

export default Results;
