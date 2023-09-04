import React from "react";

function Footer() {
  return (
    <div
      style={{
        marginTop: "2vw",
        marginBottom: "2vw",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "1em",
          fontFamily: "Black Ops One",
          backgroundImage: "linear-gradient(white,green)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center",
        }}
      >
        Created and Designed by Web Team, NIT JAMSHEDPUR{" "}
      </div>
    </div>
  );
}

export default Footer;
