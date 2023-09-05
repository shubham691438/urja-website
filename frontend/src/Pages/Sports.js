import React from "react";
// import logo1 from "../assets/images/logo_1.png";
// import logo2 from "../assets/images/logo_2.png";
// import logo3 from "../assets/images/logo_3.png";
// import logo4 from "../assets/images/logo_4.png";
import FootballImage from "../assets/images/football.png";
import CricketImage from "../assets/images/cricketLogo.png";
import SportsHeader from "../components/SportsHeader";

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
        <section  className="services section-bg mt-5">
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
                <div className="icon-box w-100 px-5">
                  <div className="icon">
                    <img src={CricketImage} alt="Cricket"></img>
                  </div>
                  <h4>Coordinator 1</h4>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box w-100">
                  <div className="icon">
                    <img src={FootballImage} alt="Football"></img>
                  </div>
                  <h4>Coordinator 2</h4>
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
