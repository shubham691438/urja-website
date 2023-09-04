import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TitleDiv from "../components/TitleDiv";
import UpcommingMatch from "../components/UpcommingMatch";
import Sports from "../components/Sports";
import Footer from "../components/Footer";
import { BranchScore } from "../components/BranchScore";
import CurrentGameCard from "../components/CurrentGameCard";
import { Stack } from "@mui/material";
export const HomePage = () => {
  const [data, setData] = useState([{}]);

  async function getData() {
    let d = await fetch("http://localhost:5000/latestMatches", {
      method: "get",
    });
    d = await d.json();
    setData(d.data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <TitleDiv />
      {/* <UpcommingMatch /> */}
      <h2>Latest Matches</h2>
      <div style={{ height: "100px" }}></div>
      <Stack
        direction="column"
        spacing={15}
        style={{ display: "flex", alignItems: "center" }}
      >
        {data.map((item) => (
          <CurrentGameCard data={item}></CurrentGameCard>
        ))}
      </Stack>
      <div style={{ height: "100px" }}></div>

      <Sports path="sports" />
      {/* <BranchScore /> */}
      <Footer />
    </div>
  );
};
