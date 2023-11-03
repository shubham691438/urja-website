import React from "react";
import AnimatedHeading from "../components/AnimatedHeading";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PointsRow from "./PointsRow";
function PointsTable() {
  const alignH = "center";
  const tableHStyle = {
    fontSize: "1.2em",
    fontFamily: "'Alfa Slab One', cursive",
    color: "white",
  };
  const matchData = [
    {
      game: "100m BOYS",
      scores: {
        cse: 0,
        ece: 0,
        ee: 0,
        me: 0,
        ce: 0,
        mme: 0,
        pie: 0,
        pg: 0,
      },
    },
  ];
  return (
    <div
      className="col-lg-12"
      style={{
        backgroundColor: "#222831",
        paddingTop: "100px",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div className="container" style={{ marginTop: "2em" }}>
        <AnimatedHeading heading="Points" />
      </div>
      <TableContainer
        style={{ boxSizing: "border-box", color: "white", padding: "10px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ color: "white", backgroundColor: "#ee1e46" }}>
              <TableCell style={tableHStyle}>GAME</TableCell>

              <TableCell style={tableHStyle} align={alignH}>
                CSE
              </TableCell>
              <TableCell style={tableHStyle} align={alignH}>
                ECE
              </TableCell>
              <TableCell style={tableHStyle} align={alignH}>
                EE
              </TableCell>
              <TableCell style={tableHStyle} align={alignH}>
                ME
              </TableCell>
              <TableCell style={tableHStyle} align={alignH}>
                CE
              </TableCell>
              <TableCell style={tableHStyle} align={alignH}>
                MME
              </TableCell>
              <TableCell style={tableHStyle} align={alignH}>
                PIE+ECM
              </TableCell>
              <TableCell style={tableHStyle} align={alignH}>
                PG
              </TableCell>
            </TableRow>
          </TableHead>
          {matchData.map((match, index) => {
            return <PointsRow key={index} {...match} />;
          })}
        </Table>
      </TableContainer>
    </div>
  );
}

export default PointsTable;
