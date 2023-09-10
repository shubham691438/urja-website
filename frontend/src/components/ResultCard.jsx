import React from 'react'
import { Zoom } from "react-reveal";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";

const ResultCard = ({team1Name,team2Name,matchTitle,score,result}) => {
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
          
            <div className="d-flex team-vs result-card">
              
              <span className="score">
                <p>{matchTitle?matchTitle:"match Title"}</p>
                <p>{score?score:"score"}</p>
                <p>{result?result:"result"}</p>
              </span>
              <div className="team-1 w-50">
                <div className="team-details w-100 text-center">
                  <img src={logo1} alt="Image2" className="img-fluid" />
                  <h3>{team1Name}</h3>
                  {/* <ul className="list-unstyled">
                    <li>CSE</li>
                  </ul> */}
                </div>
              </div>
              <div className="team-2 w-50">
                <div className="team-details w-100 text-center">
                  <img src={logo2} alt="Image1" className="img-fluid" />
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