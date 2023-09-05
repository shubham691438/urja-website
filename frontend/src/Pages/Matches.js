import React from "react";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";

const Matches = () => {
  return (
    <>
      <div class="site-section " style={{ backgroundColor: "#222831" }}>
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-12">
              <div class="widget-next-match">
                <div class="widget-title">
                  <h3>Next Match</h3>
                </div>
                <div class="widget-body mb-3">
                  <div class="widget-vs">
                    <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div class="team-1 text-center">
                        <img src={logo1} alt="Football " />
                        <h3>Football League</h3>
                      </div>
                      <div>
                        <span className="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div className="team-2 text-center">
                        <img src={logo2} alt="Image" />
                        <h3>ECE</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center widget-vs-contents mb-4">
                  <h4>World Cup League</h4>
                  <p class="mb-5">
                    <span class="d-block" style={{ color: "grey" }}>
                      December 20th, 2020
                    </span>
                    <span class="d-block" style={{ color: "grey" }}>
                      9:30 AM GMT+0
                    </span>
                    <strong class="text-primary1">New Euro Arena</strong>
                  </p>

                  <div id="date-countdown2" className="pb-1"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 title-section">
              <h2 className="heading">Upcoming Match</h2>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="bg-light_p-4">
                <div className="widget-body">
                  <div className="widget-vs">
                    <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div className="team-1 text-center">
                        <img src={logo1} alt="Image" />
                        <h3>PIE</h3>
                      </div>
                      <div>
                        <span className="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div className="team-2 text-center">
                        <img src={logo2} alt="Image" />
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
            <div className="col-lg-6 mb-4">
              <div className="bg-light_p-4">
                <div className="widget-body">
                  <div className="widget-vs">
                    <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div className="team-1 text-center">
                        <img src={logo3} alt="Image" />
                        <h3>CIVIL</h3>
                      </div>
                      <div>
                        <span className="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div className="team-2 text-center">
                        <img src={logo4} alt="Image" />
                        <h3>CSE</h3>
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

            <div className="col-12 title-section">
              <h2 className="heading">Past Match</h2>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="bg-light_p-4">
                <div className="widget-body">
                  <div className="widget-vs">
                    <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div className="team-1 text-center">
                        <img src={logo1} alt="Image" />
                        <h3>METALLURGY</h3>
                      </div>
                      <div>
                        <span className="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div className="team-2 text-center">
                        <img src={logo2} alt="Image" />
                        <h3>CIVIL</h3>
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
            <div className="col-lg-6 mb-4">
              <div className="bg-light_p-4">
                <div className="widget-body">
                  <div className="widget-vs">
                    <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div className="team-1 text-center">
                        <img src={logo3} alt="Image" />
                        <h3>EE</h3>
                      </div>
                      <div>
                        <span className="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div className="team-2 text-center">
                        <img src={logo4} alt="Image" />
                        <h3>PIE</h3>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;
