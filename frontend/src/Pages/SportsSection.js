import React from "react";
import { Typography } from "@mui/material";
import data from "../data/data.json";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import msdEdit from "../assets/msd-edit.png";
import msd from "../assets/msd.png";
import coach from "../assets/coach-edit.png";
import Navbar from "../components/Navbar";
import { BranchMedal } from "../components/SportsPage/BranchMedal";
import Footer from "../components/Footer";
import Schedule from "../components/SportsPage/Schedule";

export const SportsSection = () => {
  const style1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  const style2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          ...style1,
          ...{
            backgroundImage: `url(${msdEdit})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            marginBottom: "2em",
          },
        }}
      >
        {/* HEADING SECTION   */}
        <div
          style={{
            ...style1,
            ...{ borderBottom: "1px solid yellow", marginBottom: "3em" },
          }}
        >
          <Typography variant="h2a" style={{ fontSize: "4em" }}>
            {data[4].title}
          </Typography>{" "}
        </div>
        {/* -------------------HEADING SECTION ENDS-------------- */}
        <Grid
          container
          style={{
            marginBottom: "4em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid xs={12} md={6}>
            <img
              src={msd}
              // src={require(`${data[4].image}`)}
              alt=""
              srcset=""
              style={{
                maxHeight: "100%",
                maxWidth: "80%",
                borderRadius: "5% solid rgba(0,0,0,0.03)",
                boxShadow:
                  "0px 3px 6px 3px rgba(0,0,0,0.12),0px 6px 10px 3px rgba(0,0,0,0.22),   0px 9px 14px 3px rgba(0,0,0,0.2),  0px 18px 16px 6px rgba(0,0,0,0.28)",
              }}
            />
          </Grid>
          <Grid
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
              {data[4].description1}
            </div>
            <div style={{ color: "black", fontFamily: "Black Ops One" }}>
              {data[4].description2}
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundImage: `url(${coach})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            ...style1,
            ...{ marginBottom: "3em" },
          }}
        >
          <Typography
            variant="h2a"
            style={{
              fontSize: "3em",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              fontFamily: "Alfa Slab One",
              color: "#ef6c57",
            }}
          >
            SPORTS COORDINATOR
          </Typography>{" "}
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
                srcset=""
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

      <div>
        <Grid>
          {" "}
          <box sx={{ m: 0.5 }}>
            {/* {" "} */}
            <BranchMedal />
          </box>
        </Grid>
      </div>

      <div>
        <Grid>
          <box>
            {" "}
            <Schedule />
          </box>
        </Grid>
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};
