import React from "react";

const Home = () => {
  return (
    <>
      <div className="site-section bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="widget-next-match">
                <div className="widget-title">
                  <h3>Next Match</h3>
                </div>
                <div className="widget-body mb-3">
                  <div className="widget-vs">
                    <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div className="team-1 text-center">
                        {/* <img src="images/logo_1.png" alt="Image"> */}
                        <h3>Football League</h3>
                      </div>
                      <div>
                        <span className="vs">
                          <span>VS</span>
                        </span>
                      </div>
                      <div className="team-2 text-center">
                        {/* <img src="images/logo_2.png" alt="Image"> */}
                        <h3>Soccer</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center widget-vs-contents mb-4">
                  <h4>World Cup League</h4>
                  <p className="mb-5">
                    <span className="d-block">December 20th, 2020</span>
                    <span className="d-block">9:30 AM GMT+0</span>
                    <strong className="text-primary">New Euro Arena</strong>
                  </p>

                  <div id="date-countdown2" className="pb-1"></div>
                </div>
              </div>
            </div>
            {/* TABLE starts here */}
            <div className="col-lg-6">
              <div className="widget-next-match">
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Branch</th>

                      <th>POINTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <strong className="text-white">
                          Computer Science And Engineering
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <strong className="text-white">
                          Electronics and Communication Engineering
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <strong className="text-white">
                          Electrical Engineering
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <strong className="text-white">
                          Civil Engineering
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <strong className="text-white">
                          Mechanical Engineering
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <strong className="text-white">
                          Metallurgical and Materials Engineering
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <strong className="text-white">
                          Production and Industrial Engineering + Engineering
                          and Computational Mechanics
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <strong className="text-white">
                          M. Tech + M.SC + MCA
                        </strong>
                      </td>

                      <td>140</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
