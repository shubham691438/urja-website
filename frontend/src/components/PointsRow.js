import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
function PointsRow(props) {
  const tableRStyle = {
    fontSize: "1em",
    color: "white",
  };
  const alignH = "center";
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell style={tableRStyle} scope="row" className="table">
            {props.game}
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            1
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            2
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            3
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            4
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            4
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            4
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            4
          </TableCell>
          <TableCell style={tableRStyle} align={alignH}>
            4
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}

export default PointsRow;
