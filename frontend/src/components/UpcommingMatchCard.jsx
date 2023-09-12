import React from 'react'
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";

const UpcommingMatchCard = () => {
  return (
    <div className="col-lg-6 mb-4">
        <div className="bg-light_p-4">
            <div className="widget-body">
            <div className="widget-vs">
                <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                <div className="team-1 text-center">
                    <img src={logo1} alt="Match" />
                    <h3>PIE</h3>
                </div>
                <div>
                    <span className="vs">
                    <span>VS</span>
                    </span>
                </div>
                <div className="team-2 text-center">
                    <img src={logo2} alt="Match" />
                    <h3>ECM</h3>
                </div>
                </div>
            </div>
            </div>

            <div className="text-center widget-vs-contents mb-4">
            <h4>Basket Ball League</h4>
            <p className="mb-5">
                <span className="d-block">Setember 10th, 2023</span>
                <span className="d-block">6:00 PM</span>
                <strong className="text-primary">Ups Ground</strong>
            </p>
            </div>
        </div>
    </div>
  )
}

export default UpcommingMatchCard