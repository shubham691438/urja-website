import React from 'react'
// import { Zoom } from "react-reveal";

import GetBranchIcon from '../assets/functions/GetBranchIcon'



const ResultCard = ({sport,gender,team1Name,team2Name,matchTitle,score,result}) => {

  // Get the image URL based on the passed key
  const imageUrl1 = GetBranchIcon(team1Name);
  const imageUrl2 = GetBranchIcon(team2Name);



  
  return (
    <div
    style={{
      backgroundColor: "#222831",
    }}
  >
    
    
    {/* <Zoom> */}
      <div class="d-flex justify-content-center">
      <h3><span class="badge badge-danger mb-3 ">Men Semi-final</span></h3>
      </div>
      <div className="container " style={{paddingBottom:"50px",paddingTop:"70px"}}>
        <div className="row">
        
          <div className="col-lg-12 ">
          
            <div className="d-flex team-vs result-card">
              
              <span className="score">
                4 -1
              </span>
              <div className="team-1 w-50">
                <div className="team-details w-100 text-center">
                  <img src={imageUrl1 } alt="Image2" className="img-fluid" />
                  <h3>{team1Name?team1Name:"Team A"}</h3>
                  {/* <ul className="list-unstyled">
                    <li>CSE</li>
                  </ul> */}
                </div>
              </div>
              <div className="team-2 w-50">
                <div className="team-details w-100 text-center">
                  <img src={imageUrl2 } alt="Image1" className="img-fluid" />
                  <h3>{team2Name?team2Name:"Team B"}</h3>
                  {/* <ul className="list-unstyled">
                    <li>CIVIL</li>
                  </ul> */}
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