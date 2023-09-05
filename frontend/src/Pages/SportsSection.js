import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import data from "../data/data.json";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import msd from "../assets/msd.png";
import tennis from "../assets/lawnTennis.png";
import basketball from "../assets/basketball.png";
import coach from "../assets/coach-edit.png";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { BranchMedal } from "../components/SportsPage/BranchMedal";
import Footer from "../components/Footer";
import classes from "./sportsSection.module.css";

export const SportsSection = () => {
  const [sportDetails, setSportDetails] = useState({});
  const [image, setImage] = useState("");
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sport = searchParams.get("item");
    const sp = data[sport];
    const images = { cricket: msd, tennis: tennis, basketball };
    setSportDetails(sp);
    setImage(images[sport]);
  }, []);

  const style1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className={classes["text-center"]}>
          <Typography variant="h2a">{sportDetails.title}</Typography>{" "}
        </div>
        <Grid
          container
          style={{
            marginBottom: "4em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.18)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(7.2px)",
              WebkitBackdropFilter: "blur(7.2px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              padding: "1%",
            }}
          >
            <div style={{ color: "black", fontFamily: "Black Ops One" }}>
              {sportDetails.description1}
            </div>
            <div style={{ color: "black", fontFamily: "Black Ops One" }}>
              {sportDetails.description2}
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes["rules-container"]}>
        <div>
          <Typography variant="h2a">Rules:</Typography>{" "}
        </div>

        <Box
          sx={{
            flexGrow: 1,
            margin: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid container spacing={2} style={{ marginBottom: "4em" }}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(7.2px)",
                WebkitBackdropFilter: "blur(7.2px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                padding: "1%",
                color: "black",
                fontFamily: "Black Ops One",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              dolorum temporibus quae molestias iusto nostrum beatae
              exercitationem soluta. Error esse reiciendis dolorem! Dolorum
              tempore dignissimos fugiat minus commodi. Sed quam asperiores,
              numquam consequuntur ea porro facere nobis assumenda quibusdam
              minus!
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                src="https://th.bing.com/th/id/OIP.4iOYDKQR69GckNETbgLU_wHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt=""
                srcSet=""
                style={{
                  maxHeight: "100%",
                  maxWidth: "90%",
                  borderRadius: "5% solid rgba(0,0,0,0.03)",
                  boxShadow:
                    "0px 3px 6px 3px rgba(0,0,0,0.12),0px 6px 10px 3px rgba(0,0,0,0.22),   0px 9px 14px 3px rgba(0,0,0,0.2),  0px 18px 16px 6px rgba(0,0,0,0.28)",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </div>

      <BranchMedal />

      {/* <Footer /> */}
    </div>
  );
};
