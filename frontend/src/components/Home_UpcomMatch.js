import React from "react";
import stadium from "../assets/stadium.png";

function Home_UpcomMatch() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // backgroundImage: `url(${stadium})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        backgroundColor: "#222831",
        borderRadius: "10px",
      }}
      //   https://wallpaperaccess.com/full/3129566.jpg
    >
      <div
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
        Upcoming Match
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80vw",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          border: "1px solid white",
          borderRadius: "10px",
          marginBottom: "2vw",
        }}
      >
        <div
          className="loser"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em",
            margin: "auto",
            width: "50%",
            textAlign: "center",
            backgroundColor: "#222831",
            // backgroundColor: "#ffcc00",
            color: "#ff9900",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              fontSize: "2em",
              fontFamily: "Black Ops One",
            }}
          >
            TEAM A
          </div>
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              fontFamily: "Black Ops One",
              fontSize: "2em",
            }}
          >
            <div>CSE</div>
          </div>
        </div>
        <div
          className="loser"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em",
            margin: "auto",
            width: "50%",
            textAlign: "center",
            backgroundColor: "#ff9900",
            // backgroundColor: "#ffcc00",
            borderRadius: "10px",
            color: "black",
          }}
        >
          <div
            style={{
              fontSize: "2em",
              fontFamily: "Black Ops One",
            }}
          >
            TEAM B
          </div>
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              fontFamily: "Black Ops One",
              fontSize: "2em",
            }}
          >
            <div>ECE</div>
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: "Black Ops One",
          color: "black",
          fontSize: "2em",
          position: "relative",
          zIndex: "999",
          bottom: "18%",
          WebkitTextStroke: "1px black",
          WebkitTextFillColor: "red",
        }}
      >
        DATE:- 02.08.2023
      </div>
      <div
        style={{
          fontFamily: "Black Ops One",
          color: "black",
          fontSize: "2em",
          position: "relative",
          zIndex: "999",
          bottom: "18%",
          WebkitTextStroke: "1px black",
          WebkitTextFillColor: "red",
          textAlign: "center",
        }}
      >
        VENUE:- DOWN'S GROUND
      </div>
      <div
        style={{
          fontFamily: "Black Ops One",
          color: "black",
          fontSize: "2em",
          position: "relative",
          zIndex: "999",
          bottom: "18%",
          WebkitTextStroke: "1px black",
          WebkitTextFillColor: "red",
        }}
      >
        SPORT:- CRICKET
      </div>
    </div>
  );
}

export default Home_UpcomMatch;