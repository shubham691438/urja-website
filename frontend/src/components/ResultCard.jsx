import React from 'react'
// import { Zoom } from "react-reveal";

import GetBranchIcon from '../assets/functions/GetBranchIcon'

const ResultCard = ({ sport, gender, team1Name, team2Name, matchTitle, score, result }) => {

  
  // Get the image URL based on the passed key
  const imageUrl1 = GetBranchIcon(team1Name);
  const imageUrl2 = GetBranchIcon(team2Name);

  // Capitalize the first letter of gender and matchTitle
  const capitalizedGender = gender?gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase():"";
  const capitalizedMatchTitle = matchTitle?matchTitle.charAt(0).toUpperCase() + matchTitle.slice(1).toLowerCase():"";

  // Convert team names to uppercase and store the result
  const upperCaseTeam1Name = team1Name ? team1Name.toUpperCase() : "TEAM A";
  const upperCaseTeam2Name = team2Name ? team2Name.toUpperCase() : "TEAM B";

  return (
    <div
      style={{
        backgroundColor: "#222831",
      }}
    >
      {/* <Zoom> */}
      <div class="d-flex justify-content-center">
        <h3><span class="badge badge-danger mb-3 ">{(capitalizedGender||"" )+ " " + (capitalizedMatchTitle||"")}</span></h3>
      </div>
      <div className="container " style={{ paddingBottom: "50px", paddingTop: "70px" }}>
        <div className="row">
          <div className="col-lg-12 ">
            <div className="d-flex team-vs result-card">
              <span className="score">
                {score || "4-1"}
              </span>
              <div className="team-1 w-50">
                <div className="team-details w-100 text-center">
                  <img src={imageUrl1} alt="Image2" className="img-fluid" />
                  <h3>{upperCaseTeam1Name}</h3>
                </div>
              </div>
              <div className="team-2 w-50">
                <div className="team-details w-100 text-center">
                  <img src={imageUrl2} alt="Image1" className="img-fluid" />
                  <h3>{upperCaseTeam2Name}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Zoom> */}
    </div>
  )
}

export default ResultCard
