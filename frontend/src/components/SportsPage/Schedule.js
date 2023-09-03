import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ScheduleTable } from "./ScheduleTable";

function Schedule() {
  const gridItemStyle = {
    minHeight: "300px",
    margin: "10px",
    padding: "10px",
  };

  return (
    <>
      {" "}
      <div>
        <div
          style={{
            fontSize: "1em",
            // fontFamily: "Black Ops One",
            // backgroundImage: "linear-gradient(white,green)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center",
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
            <Box sx={{ my: "2rem" }} />
            Schedule
          </Typography>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            sx={{ p: 2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              color: "#fff",
              backgroundColor: "#222831",
              borderRadius: "10px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              style={{ minHeight: "300px" }}
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              spacing={{ xs: 2, md: 3 }}
            >
              <Typography
                variant="h2a"
                style={{
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  fontFamily: "Alfa Slab One",
                  color: "#f89d13",
                  backgroundColor: "#343a40",
                }}
              >
                Past Matches
              </Typography>

              <ScheduleTable />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              style={{ minHeight: "300px" }}
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              spacing={{ xs: 2, md: 3 }}
            >
              <Typography
                variant="h2a"
                style={{
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  fontFamily: "Alfa Slab One",
                  color: "#f89d13",
                  backgroundColor: "#343a40",
                }}
              >
                Current Matches
              </Typography>
              <ScheduleTable />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              style={{ minHeight: "300px" }}
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              spacing={{ xs: 2, md: 3 }}
            >
              <Typography
                variant="h2a"
                style={{
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  fontFamily: "Alfa Slab One",
                  color: "#f89d13",
                  backgroundColor: "#343a40",
                }}
              >
                Upcoming Matches
              </Typography>
              <ScheduleTable />
            </Grid>
          </Grid>{" "}
        </div>
      </div>
    </>
  );
}

export default Schedule;
