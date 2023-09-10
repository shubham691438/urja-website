import React from "react";
import SportsCoordinator from "../components/SportsCoordinator";
import AnimatedHeading from "../components/AnimatedHeading";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../sports.json";
import BoysSampleImg from "../assets/images/BoysSample.jpeg";
import GirlsSampleImg from "../assets/images/girlsSample.jpeg";
import ResultCard from "../components/ResultCard";
// **** In data.json image Url needs to be updated for the sports coordinator one sample will be done **** //

const Sports = () => {
  const { key } = useParams();
  console.log();
  const jsonData = data[key];

  const [data, setData] = useState([{}]);
  async function getData() {
    let d = await fetch("http://localhost:5000/matches/get-match-score", {
      method: "post",
      body: JSON.stringify({ sport: key }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    d = await d.json();
    console.log(d.data);
    setData(d.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container" style={{ marginTop: "2em" }}>
          <AnimatedHeading heading={jsonData.title} />

          <div className="row mb-5 pt-5">
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
                {/* "You don’t win or lose the games because of the 11 you select.
                You win or lose with that those 11 do on the field.” – Rahul
                Dravid */}
                {jsonData.quote}
              </h5>
              <p>
                {/* Cricket is a super popular sport played with a bat and ball.
                This game is played by two teams of 11 players each. It's all
                about scoring runs and getting the other team out. It is played
                on a pitch in a well-maintained field for the same purpose.
                There are different formats like Test matches and One Day
                Internationals. It's a game full of excitement, strategy, and
                amazing moments. */}
                {jsonData.description}
              </p>
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
              <SportsCoordinator
                name={jsonData.coordinator_Name1}
                position={jsonData.position1}
                image={jsonData.coordinator1_image}
              />
              <SportsCoordinator
                name={jsonData.coordinator_Name2}
                position={jsonData.position2}
                image={jsonData.coordinator2_image}
              />
            </div>

            <div
              style={{
                marginTop: "50px",
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
            <div>
              <div>
                <h4
                  style={{
                    margin: "0px",

                    fontWeight: "700",
                    color: "#fff",
                    marginTop: "50px",
                    padding: "16px 20px",
                    backgroundColor: "#ee1e46",
                    display: "inline-flex",
                  }}
                >
                  BOYS
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "4%",
                }}
              >
                {/* <img
                  src={
                    jsonData.boysMatchSchedule
                      ? jsonData.boysMatchSchedule
                      : "https://i.ibb.co/s3xr1zz/Screenshot-2023-09-07-034542.png"
                  }
                  alt=""
                  srcset=""
                /> */}
                <ResultCard
                  team1Name={item.team1}
                  team2Name={item.team2}
                ></ResultCard>
              </div>
            </div>
            {/* <div>
              <div>
                <h4
                  style={{
                    margin: "0px",

                    fontWeight: "700",
                    color: "#fff",
                    marginTop: "50px",
                    padding: "16px 20px",
                    backgroundColor: "#ee1e46",
                    display: "inline-flex",
                  }}
                >
                  GIRLS
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "4%",
                }}
              >
                <img
                  src={
                    jsonData.girlsMatchSchedule
                      ? jsonData.girlsMatchSchedule
                      : "https://i.ibb.co/s3xr1zz/Screenshot-2023-09-07-034542.png"
                  }
                  alt=""
                  srcset=""
                />
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Sports;
