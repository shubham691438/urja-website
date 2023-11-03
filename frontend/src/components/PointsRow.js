import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
function PointsRow({ game, scores }) {
  const tableRStyle = {
    fontSize: "1em",
    color: "white",
  };
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell
            style={tableRStyle}
            scope="row"
            className="table"
          >
            {game}
          </TableCell>
          {Object.values(scores).map((score, index) => (
            <TableCell
              style={tableRStyle}
              key={index}
              scope="row"
              className="table"
            >
              {score}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </>
  );
}

export default PointsRow;
