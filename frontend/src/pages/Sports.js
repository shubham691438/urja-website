import React from "react";
import SportsHeader from "../components/SportsHeader";
import SportsCoordinator from "../components/SportsCoordinator";
const Sports = () => {
  return (
    <>
      <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container" style={{ marginTop: "2em" }}>
          <SportsHeader />

          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="widget-next-match">
                <div
                  style={{
                    padding: "16px 20px",
                    color: "#fff",
                    backgroundColor: "#ee1e46",
                  }}
                >
                  <h4
                    style={{
                      margin: "0px",
                      padding: "0px",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    Rules
                  </h4>
                </div>
                <div className="widget-body mb-3">
                  <div className="widget-vs">
                    <div
                      className="d-flex align-items-left justify-content-around justify-content-between w-100"
                      style={{ color: "white", flexDirection: "column" }}
                    >
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        <section className="services section-bg mt-5">
          <div className="container " data-aos="fade-up">
            <div
              style={{
                padding: "16px 20px",
                color: "#fff",
                backgroundColor: "#ee1e46",
              }}
            >
              <h4
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                Sports Coordinator
              </h4>
            </div>

            <div className="row mt-3 justify-content-evenly">
              <SportsCoordinator />
              <SportsCoordinator />
            </div>

              <div
                style={{
                  marginTop:"50px",
                  padding: "16px 20px",
                  color: "#fff",
                  backgroundColor: "#ee1e46",
                }}
              >
                <h4
                  style={{
                    margin: "0px",
                    padding: "0px",
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                Schedule of Matches
              </h4>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sports;
