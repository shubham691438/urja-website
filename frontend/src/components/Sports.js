import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import backgroundImg from "../assets/backgroundLowROpac.jpeg";
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
          fontFamily: "Black Ops One",
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
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="#">
              <Box
                component="img"
                sx={{
                  height: 283,
                  width: 380,
                  maxHeight: { xs: 280, md: 200 },
                  maxWidth: { xs: 380, md: 280 },
                }}
                className="sportsImg"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1595210382051-4d2c31fcc2f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyaWNrZXQlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                // Cricket
              />
            </Link>
            <div
              style={{
                fontFamily: "Black Ops One",
                color: "black",
                fontSize: "2em",
                position: "relative",
                zIndex: "999",
                bottom: "18%",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              CRICKET
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="#">
              <Box
                component="img"
                sx={{
                  height: 283,
                  width: 380,
                  maxHeight: { xs: 280, md: 200 },
                  maxWidth: { xs: 380, md: 280 },
                }}
                className="sportsImg"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1616514169928-a1e40c6f791c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb3RiYWxsJTIwcGxheWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                //Football
              />
            </Link>
            <div
              style={{
                fontFamily: "Black Ops One",
                color: "white",
                fontSize: "2em",
                position: "relative",
                zIndex: "999",
                bottom: "18%",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              FOOTBALL
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="#">
              <Box
                component="img"
                sx={{
                  height: 283,
                  width: 380,
                  maxHeight: { xs: 280, md: 200 },
                  maxWidth: { xs: 380, md: 280 },
                }}
                className="sportsImg"
                alt="The house from the offer."
                src="https://plus.unsplash.com/premium_photo-1661930553182-61dacdfb9ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFza2V0YmFsbCUyMGp1bXB8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60"
              />
            </Link>
            <div
              style={{
                fontFamily: "Black Ops One",
                color: "white",
                fontSize: "2em",
                position: "relative",
                zIndex: "999",
                bottom: "18%",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              BASKETBALL
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="#">
              <Box
                component="img"
                sx={{
                  height: 283,
                  width: 380,
                  maxHeight: { xs: 280, md: 200 },
                  maxWidth: { xs: 380, md: 280 },
                }}
                className="sportsImg"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFkbWludG9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              />
            </Link>
            <div
              style={{
                fontFamily: "Black Ops One",
                color: "white",
                fontSize: "2em",
                position: "relative",
                zIndex: "999",
                bottom: "18%",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              TENNIS
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="#">
              <Box
                component="img"
                sx={{
                  height: 283,
                  width: 380,
                  maxHeight: { xs: 280, md: 200 },
                  maxWidth: { xs: 380, md: 280 },
                }}
                className="sportsImg"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1554539484-e4fab56d4a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9ja2V5JTIwc3BvcnRzJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              />
            </Link>
            <div
              style={{
                fontFamily: "Black Ops One",
                color: "white",
                fontSize: "2em",
                position: "relative",
                zIndex: "999",
                bottom: "18%",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              HOCKEY
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="#">
              <Box
                component="img"
                sx={{
                  height: 283,
                  width: 380,
                  maxHeight: { xs: 280, md: 200 },
                  maxWidth: { xs: 380, md: 280 },
                }}
                className="sportsImg"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1630888500647-870f75f27327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXRobGV0aWNzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              />
            </Link>
            <div
              style={{
                fontFamily: "Black Ops One",
                color: "white",
                fontSize: "2em",
                position: "relative",
                zIndex: "999",
                bottom: "18%",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              ATHLETICS
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Sports;
