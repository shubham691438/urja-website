import React from "react";
// import FootballImage from "../assets/images/football.png";
// import CricketImage from "../assets/images/cricketLogo.png";
// import coordinator1 from "../assets/images/team-1.jpg";
// import coordinator2 from "../assets/images/team-2.jpg";
// import SportStyles from "./Sports.module.css";
import SportsHeader from "../components/SportsHeader";
import SportsCoordinator from "../components/SportsCoordinator";
const Sports = () => {
  return (
    <>
      <div class="site-section " style={{ backgroundColor: "#222831" }}>
        <div class="container" style={{ marginTop: "2em" }}>
          <SportsHeader />

          <div class="row mb-5">
            <div class="col-lg-12">
              <div class="widget-next-match">
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
                <div class="widget-body mb-3">
                  <div class="widget-vs">
                    <div
                      class="d-flex align-items-left justify-content-around justify-content-between w-100"
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
