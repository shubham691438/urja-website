import React from "react";

function TitleDiv() {
  return (
    <div
      style={{
        fontSize: "6vw",
        color: "white",
        fontFamily: "Alfa Slab One",
        margin: "0vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundImage: `url("https://images.alphacoders.com/923/923979.jpg")`,
        // https://images.alphacoders.com/923/923979.jpg
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundImage: `url("https://th.bing.com/th/id/OIP.5b2qb062nDASDVh_HD8d-AHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundClip: "text",

          WebkitBackgroundClip: "text",
          color: "transparent",
          width: "50%",
          margin: "2vw",
        }}
      >
        ANNUAL SPORTS FEST OF NIT JAMSHEDPUR
      </div>
    </div>
  );
}

export default TitleDiv;
