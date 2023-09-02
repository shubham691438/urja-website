import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import backgroundImg from "../assets/background.png";
import football from "../assets/001-football-player.png";
import cric from "../assets/crick.png";
import hockey from "../assets/004-hockey.png";
import basketball from "../assets/003-basketball-player-scoring.png";
import ath from "../assets/008-sprint.png";
import badminton from "../assets/badminton-002.png";
function Sports() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        // backgroundColor: "#222831",
      }}
    >
      <div
        className="heading"
        style={{
          fontSize: "2em",
          fontFamily: "Alfa Slab One",
          color: "transparent",
          backgroundImage: "linear-gradient(orange,yellow)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundPosition: "right bottom",
          WebkitTextStroke: "1.2px black",
        }}
      >
        Sports
      </div>
      <div
        className="cards"
        style={{
          width: "100vw",
          padding: "2vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="splogo"
          >
            <Link to="/sports">
              <Box
                component="img"
                className="sportsImg"
                maxHeight="auto"
                maxWidth="auto"
                alt="The house from the offer."
                src={cric}
                // Cricket
              />
              <div
                style={{
                  fontFamily: "Alfa Slab One",
                  color: "black",
                  zIndex: "999",
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",
                }}
              >
                CRICKET
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="splogo"
          >
            <Link to="/sports">
              <Box
                component="img"
                className="sportsImg"
                maxHeight="auto"
                maxWidth="auto"
                alt="The house from the offer."
                src={football}
                // Cricket
              />
              <div
                style={{
                  fontFamily: "Alfa Slab One",
                  color: "black",
                  zIndex: "999",
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",
                }}
              >
                FOOTBALL
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="splogo"
          >
            <Link to="/sports">
              <Box
                component="img"
                className="sportsImg"
                maxHeight="auto"
                maxWidth="auto"
                alt="The house from the offer."
                src={basketball}
                // Cricket
              />
              <div
                style={{
                  fontFamily: "Alfa Slab One",
                  color: "black",
                  zIndex: "999",
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",
                }}
              >
                BASKETBALL
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="splogo"
          >
            <Link to="/sports">
              <Box
                component="img"
                className="sportsImg"
                maxHeight="auto"
                maxWidth="auto"
                alt="The house from the offer."
                src={hockey}
                // Cricket
              />
              <div
                style={{
                  fontFamily: "Alfa Slab One",
                  color: "black",
                  zIndex: "999",
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",
                }}
              >
                HOCKEY
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="splogo"
          >
            <Link to="/sports">
              <Box
                component="img"
                className="sportsImg"
                maxHeight="auto"
                maxWidth="auto"
                alt="The house from the offer."
                src={ath}
                // Cricket
              />
              <div
                style={{
                  fontFamily: "Alfa Slab One",
                  color: "black",
                  zIndex: "999",
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",
                }}
              >
                ATHLETICS
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="splogo"
          >
            <Link to="/sports">
              <Box
                component="img"
                className="sportsImg"
                maxHeight="auto"
                maxWidth="auto"
                alt="The house from the offer."
                src={badminton}
                // Cricket
              />
              <div
                style={{
                  fontFamily: "Alfa Slab One",
                  color: "black",
                  zIndex: "999",
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",
                }}
              >
                BADMINTON
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Sports;
