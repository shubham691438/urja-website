import React from "react";
import AnimatedHeading from "./AnimatedHeading"
import ResultCard from "./ResultCard";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";

const SportsResult = () => {
  return (
    <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container" style={{ marginTop: "2em" }}>
          <AnimatedHeading heading="CRICKET-RESULTS"/>

          <div className="row pt-5">
            <div className="col pt-5">
                <ResultCard team1Name="PIE" team2Name="ECE" team1Img={logo1} team2Img={logo2} />
                <ResultCard team1Name="PIE" team2Name="ECE" team1Img={logo1} team2Img={logo2} />
                <ResultCard team1Name="PIE" team2Name="ECE" team1Img={logo1} team2Img={logo2} />
                <ResultCard team1Name="PIE" team2Name="ECE" team1Img={logo1} team2Img={logo2} />
                <ResultCard team1Name="PIE" team2Name="ECE" team1Img={logo1} team2Img={logo2} />
                <ResultCard team1Name="PIE" team2Name="ECE" team1Img={logo1} team2Img={logo2} />
                <ResultCard team1Name="PIE" team2Name="ECE" team1Img={logo1} team2Img={logo2} />
            </div>
          </div>  
          
        </div>
    </div>      
  );
};

export default SportsResult;
