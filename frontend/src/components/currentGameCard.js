import { Stack } from "@mui/material";
import React from "react";

function CurrentGameCard(props) {
  const data = props.data;
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="d-flex team-vs">
              <Stack direction="column" spacing={5}>
                <span className="score">{data.sport}</span>
                <span className="score">{data.gender}</span>
                {/* <span className="score" style={{ fontSize: "30px" }}>
                  {data.matchTitle}
                </span> */}
              </Stack>

              <div class="team-1 w-50">
                <div class="team-details w-100 text-center">
                  <img
                    src="images/logo_1.png"
                    alt="Image"
                    class="img-fluid"
                  ></img>
                  <h3>
                    {data.team1} <span>{data.result1}</span>
                  </h3>
                  {/* <ul class="list-unstyled">
                    <li>Anja Landry (7)</li>
                    <li>Eadie Salinas (12)</li>
                    <li>Ashton Allen (10)</li>
                    <li>Baxter Metcalfe (5)</li>
                    
                  </ul> */}
                </div>
              </div>
              <div class="team-2 w-50">
                <div class="team-details w-100 text-center">
                  <img
                    src="images/logo_2.png"
                    alt="Image"
                    class="img-fluid"
                  ></img>
                  <h3>
                    {data.team2} <span>{data.result2}</span>
                  </h3>
                  {/* <ul class="list-unstyled">
                    <li>Macauly Green (3)</li>
                    <li>Arham Stark (8)</li>
                    <li>Stephan Murillo (9)</li>
                    <li>Ned Ritter (5)</li>
                  </ul> */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {data.matchTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentGameCard;
