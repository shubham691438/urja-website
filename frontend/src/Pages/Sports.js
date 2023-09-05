import React from "react";
// import FootballImage from "../assets/images/football.png";
// import CricketImage from "../assets/images/cricketLogo.png";
import coordinator1 from "../assets/images/team-1.jpg";
import coordinator2 from "../assets/images/team-2.jpg";
import SportStyles from "./Sports.module.css";

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
              Matches Scheduled
            </h4>
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

            <div className="row mt-3">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className=" w-100 ">
                  <div className={SportStyles.coordinator}>
                    <img
                      src={coordinator1}
                      style={{
                        width: "100%",
                        height: "auto",
                        // filter: "grayscale(100%)",
                        // WebkitFilter: "grayscale(100%)",
                        // WebkitTransition: "all 1s ease",
                        // ":hover": {
                        //   filter: "none",
                        //   WebkitFilter: "grayscale(0%)",
                        //   transition: "1s ease",
                        // },
                      }}
                      alt="Cricket"
                    ></img>
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      padding: "16px 20px",
                      backgroundColor: "#ee1e46",
                    }}
                  >
                    COORDINATOR 1
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className=" w-100 ">
                  <div className={SportStyles.coordinator}>
                    <img
                      src={coordinator2}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      alt="Cricket"
                    ></img>
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      padding: "16px 20px",
                      backgroundColor: "#ee1e46",
                    }}
                  >
                    COORDINATOR 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sports;
