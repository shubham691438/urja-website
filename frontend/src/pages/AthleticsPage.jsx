import React, { useEffect } from "react";
import SportsCoordinator from "../components/SportsCoordinator";
import AnimatedHeading from "../components/AnimatedHeading";
import data from "../sports.json";
import athleticsData from "../assets/data/athleticsData"
import GlowingButton from "../components/GlowingButton";
// **** In data.json image Url needs to be updated for the sports coordinator one sample will be done **** //

const AtheleticsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const  key  = "athletic";
  const jsonData = data[key];

  return (
    <>
      <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container" style={{ marginTop: "2em" }}>

          <div className="mt-5 pt-5">
            <AnimatedHeading heading={jsonData.title ? jsonData.title : ""} />
          </div>

          <div className="row mb-5">
            <div
              className="col-lg-12 d-flex flex-column justify-content-center"
              style={{
                padding: "16px 20px",
                color: "#fff",
              }}
            >
              <h5
                style={{
                  color: "#ee1e46",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                {" "}

                "{jsonData.quote?jsonData.quote:""}"
              </h5>
              <p>
                {jsonData.description ? jsonData.description : ""}
              </p>
            </div>
          </div>

        <div className="col-lg-12 mb-5">
            <div className="widget-next-match">
                <div className="table-responsive">
                <table className="table custom-table">
                    <thead>
                    <tr>
                        <th>Sport Name</th>
                        <th>Finals</th>
                        <th>Gold</th>
                        <th>Silver</th>
                        <th>Bronze</th>
                    </tr>
                    </thead>
                    <tbody>
                    {athleticsData.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {item.name}
                            </td>
                            <td>{item.finals}</td>
                            <td>{item.gold_point+" "}   {item.gold_winner?item.gold_winner:" "}</td>
                            <td>{item.silver_point+" "}  {item.silver_winner?item.silver_winner:" "}</td>
                            <td>{item.bronze_point+" "}  {item.bronze_winner?item.bronze_winner:" "}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>


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
                      <ul style={{ listStyleType: "none" }}>
                        {jsonData.rules
                          ? jsonData.rules.map((rules) => (
                              <li key={rules}>{` ${rules}`}</li>
                            ))
                          : "Will be Updated Soon"}
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
              <SportsCoordinator
                name={
                  jsonData.coordinator_Name1 ? jsonData.coordinator_Name1 : ""
                }
                position={jsonData.position1 ? jsonData.position1 : ""}
                image={
                  jsonData.coordinator1_image ? jsonData.coordinator1_image : ""
                }
              />
              <SportsCoordinator
                name={
                  jsonData.coordinator_Name2 ? jsonData.coordinator_Name2 : ""
                }
                position={jsonData.position2 ? jsonData.position2 : ""}
                image={
                  jsonData.coordinator2_image ? jsonData.coordinator2_image : ""
                }
              />
            </div>           
            
          </div>
        </section>
      </div>
    </>
  );
};

export default AtheleticsPage;
