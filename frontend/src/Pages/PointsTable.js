import React, { useEffect, useState } from "react";

export const PointsTable = () => {
  const [data, setData] = useState("");
  async function getData() {
    console.log(process.env.REACT_APP_BACKEND_URL);
    let d = await fetch(`http://localhost:5000/points`, {
      method: "get",
    });
    d = await d.json();
    console.log(d.data);
    setData(d.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return <h1>Points Table</h1>;
};
