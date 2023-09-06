import React from "react";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";

const Matches = () => {
  return (
    <>
      <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="widget-next-match">
                <div className="widget-title">
                  <h3>Next Match</h3>
                </div>
                <div className="widget-body mb-3">
                  <div className="widget-vs">
                    <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div className="team-1 text-center">
                        <img src={logo1} alt="Football " />
                        <h3>Football League</h3>
                      </div>
                      <div>
                        <span classNameName="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div classNameName="team-2 text-center">
                        <img src={logo2} alt="Match" />
                        <h3>ECE</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center widget-vs-contents mb-4">
                  <h4>World Cup League</h4>
                  <p className="mb-5">
                    <span className="d-block" style={{ color: "grey" }}>
                      December 20th, 2020
                    </span>
                    <span className="d-block" style={{ color: "grey" }}>
                      9:30 AM GMT+0
                    </span>
                    <strong className="text-primary1">New Euro Arena</strong>
                  </p>

                  <div id="date-countdown2" classNameName="pb-1"></div>
                </div>
              </div>
            </div>
          </div>

          <div classNameName="row">
            <div classNameName="col-12 title-section">
              <h2 classNameName="heading">Upcoming Match</h2>
            </div>
            <div classNameName="col-lg-6 mb-4">
              <div classNameName="bg-light_p-4">
                <div classNameName="widget-body">
                  <div classNameName="widget-vs">
                    <div classNameName="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div classNameName="team-1 text-center">
                        <img src={logo1} alt="Match" />
                        <h3>PIE</h3>
                      </div>
                      <div>
                        <span classNameName="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div classNameName="team-2 text-center">
                        <img src={logo2} alt="Match" />
                        <h3>ECM</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="text-center widget-vs-contents mb-4">
                  <h4>Basket Ball League</h4>
                  <p classNameName="mb-5">
                    <span classNameName="d-block">Setember 10th, 2023</span>
                    <span classNameName="d-block">6:00 PM</span>
                    <strong classNameName="text-primary">Ups Ground</strong>
                  </p>
                </div>
              </div>
            </div>
            <div classNameName="col-lg-6 mb-4">
              <div classNameName="bg-light_p-4">
                <div classNameName="widget-body">
                  <div classNameName="widget-vs">
                    <div classNameName="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div classNameName="team-1 text-center">
                        <img src={logo3} alt="Match" />
                        <h3>CIVIL</h3>
                      </div>
                      <div>
                        <span classNameName="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div classNameName="team-2 text-center">
                        <img src={logo4} alt="Match" />
                        <h3>CSE</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="text-center widget-vs-contents mb-4">
                  <h4>Basket Ball League</h4>
                  <p classNameName="mb-5">
                    <span classNameName="d-block">Setember 10th, 2023</span>
                    <span classNameName="d-block">6:00 PM</span>
                    <strong classNameName="text-primary">Ups Ground</strong>
                  </p>
                </div>
              </div>
            </div>

            <div classNameName="col-12 title-section">
              <h2 classNameName="heading">Past Match</h2>
            </div>
            <div classNameName="col-lg-6 mb-4">
              <div classNameName="bg-light_p-4">
                <div classNameName="widget-body">
                  <div classNameName="widget-vs">
                    <div classNameName="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div classNameName="team-1 text-center">
                        <img src={logo1} alt="Match" />
                        <h3>METALLURGY</h3>
                      </div>
                      <div>
                        <span classNameName="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div classNameName="team-2 text-center">
                        <img src={logo2} alt="Match" />
                        <h3>CIVIL</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="text-center widget-vs-contents mb-4">
                  <h4>Basket Ball League</h4>
                  <p classNameName="mb-5">
                    <span classNameName="d-block">Setember 10th, 2023</span>
                    <span classNameName="d-block">6:00 PM</span>
                    <strong classNameName="text-primary">Ups Ground</strong>
                  </p>
                </div>
              </div>
            </div>
            <div classNameName="col-lg-6 mb-4">
              <div classNameName="bg-light_p-4">
                <div classNameName="widget-body">
                  <div classNameName="widget-vs">
                    <div classNameName="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div classNameName="team-1 text-center">
                        <img src={logo3} alt="Match" />
                        <h3>EE</h3>
                      </div>
                      <div>
                        <span classNameName="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div classNameName="team-2 text-center">
                        <img src={logo4} alt="Match" />
                        <h3>PIE</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="text-center widget-vs-contents mb-4">
                  <h4>Basket Ball League</h4>
                  <p classNameName="mb-5">
                    <span classNameName="d-block">Setember 10th, 2023</span>
                    <span classNameName="d-block">6:00 PM</span>
                    <strong classNameName="text-primary">Ups Ground</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;
