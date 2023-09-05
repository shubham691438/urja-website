import React from "react";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";

const Matches = () => {
  return (
    <>
      {/* <Layout /> */}

      <div className="site-section bg-dark">
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
                        <img src={logo1} alt="Image" />
                        <h3>CSE</h3>
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

                <div className="text-center widget-vs-contents mb-4">
                  <h4>Cricket</h4>
                  <p className="mb-5">
                    <span className="d-block">September 20th, 2023</span>
                    <span className="d-block">9:30 AM </span>
                    <strong className="text-primary">Down's Ground</strong>
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
