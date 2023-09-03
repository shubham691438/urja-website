import React from "react";

export const ScheduleTable = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   width: "80vw",
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
    </div>
  );
};
