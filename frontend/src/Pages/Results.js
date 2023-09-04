import React, { useState } from "react";
import CurrentGameCard from "../components/CurrentGameCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Results = () => {
  const location = useLocation();
  const [boys, setBoys] = useState([{}]);
  const [girls, setGirls] = useState([{}]);
  const [sp, setSport] = useState("");

  async function getData() {
    const searchParams = new URLSearchParams(location.search);
    const sport = searchParams.get("item");
    //console.log(sport);
    let data = await fetch("http://localhost:5000/matches", {
      method: "post",
      body: JSON.stringify({ sport }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    setSport(sport);
    setBoys(data.male);
    setGirls(data.female);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Navbar></Navbar>
      <h2 style={{ width: "100vw" }}>{sp}</h2>
      <h3 style={{ color: "black" }}>Boys</h3>
      <div style={{ height: "100px" }}></div>
      <Stack
        direction="column"
        spacing={15}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {boys.map((item) => (
          <CurrentGameCard data={item}></CurrentGameCard>
        ))}
      </Stack>
      <div style={{ height: "100px" }}></div>

      <h3 style={{ color: "black" }}>Girls</h3>
      <div style={{ height: "100px" }}></div>
      <Stack
        direction="column"
        spacing={15}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {girls.map((item) => (
          <CurrentGameCard data={item}></CurrentGameCard>
        ))}
      </Stack>
      <div style={{ height: "100px" }}></div>
      <Footer></Footer>
    </div>
  );
};
