import React from 'react'
import { Zoom } from "react-reveal";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";

const ResultCard = ({team1Name,team2Name,team1Img,team2Img}) => {
  return (
    <div
    style={{
      backgroundColor: "#222831",
    }}
  >
    <Zoom>
      <div className="container " style={{paddingBottom:"50px",paddingTop:"70px"}}>
        <div className="row">
          <div className="col-lg-12 ">
            <div className="d-flex team-vs ">
              <span className="score">4-1</span>
              <div className="team-1 w-50">
                <div className="team-details w-100 text-center">
                  <img src={team1Img} alt="Image2" className="img-fluid" />
                  <h3>{team1Name}</h3>
                  {/* <ul className="list-unstyled">
                    <li>CSE</li>
                  </ul> */}
                </div>
              </div>
              <div className="team-2 w-50">
                <div className="team-details w-100 text-center">
                  <img src={team2Img} alt="Image1" className="img-fluid" />
                  <h3>{team2Name}</h3>
                  {/* <ul className="list-unstyled">
                    <li>CIVIL</li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  </div>
  )
}

export default ResultCard