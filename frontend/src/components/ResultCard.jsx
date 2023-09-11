import React from 'react'
// import { Zoom } from "react-reveal";

import pieEcmImage from '../assets/images/branchImg/player1.png';
import eceImage from '../assets/images/branchImg/player2.png';
import cseImage from '../assets/images/branchImg/player3.png';
import eeeImage from '../assets/images/branchImg/player4.png';
import pgImage from '../assets/images/branchImg/player5.png';
import meImage from '../assets/images/branchImg/player6.png';
import ceImage from '../assets/images/branchImg/player7.png';
import other1Image from '../assets/images/branchImg/player8.png';
import other2Image from '../assets/images/branchImg/player9.png';



const ResultCard = ({sport,gender,team1Name,team2Name,matchTitle,score,result}) => {

  const imageMap = new Map([
    ['PIE+ECM', pieEcmImage],
    ['ECE', eceImage],
    ['CSE', cseImage],
    ['EEE', eeeImage],
    ['PG', pgImage],
    ['ME', meImage],
    ['CE', ceImage],
    ['other1', other1Image],
    ['other2', other2Image],
  ]);

  // Get the image URL based on the passed key
  const imageUrl1 = imageMap.get(team1Name);
  const imageUrl2 = imageMap.get(team2Name);

  // If the image URL is not found (key doesn't exist), use a default image
  const defaultImageUrl1 = other1Image;
  const defaultImageUrl2 = other2Image;

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
                  <img src={imageUrl1 || defaultImageUrl1} alt="Image2" className="img-fluid" />
                  <h3>{team1Name?team1Name:"Team A"}</h3>
                  {/* <ul className="list-unstyled">
                    <li>CSE</li>
                  </ul> */}
                </div>
              </div>
              <div className="team-2 w-50">
                <div className="team-details w-100 text-center">
                  <img src={imageUrl2 || defaultImageUrl2} alt="Image1" className="img-fluid" />
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