import React, { useMemo } from "react";
import { useTable } from "react-table";
import BranchMedalData from "./BranchMedalData.json";
import { BranchMedalColumns } from "./BranchMedalColumns";
import { CustomDiv } from "../../styles/CustomDiv";
import backgroundImg from "../../assets/backgroundLowROpac.jpeg";

export const BranchMedal = () => {
  const columns = useMemo(() => BranchMedalColumns, []);
  const data = useMemo(() => BranchMedalData, []);

  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div
      stylse={{
        // marginTop: "2vw",
        // marginBottom: "2vw",
        alignItems: "center",
        // display: "flex",
        justifyContent: "center",
      }}
    >
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
        <div>
          <CustomDiv
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <h1 id="branchScore"> Branch Wise Medal Table</h1>

            <table
              className="tableMedal"
              {...getTableProps}
              stickyHeader
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid #fff",
                width: "80%",
                // height: "100%",
                // "&:nth-of-type(odd)": {
                //   backgroundColor: "#f23a2e",
                // },
                // "&:last-child td, &:last-child th": {
                //   border: 0,
                // },
              }}
              // sx={{
              //   "&:nth-of-type(odd)": {
              //     backgroundColor: "#f23a2e",
              //   },
              // }}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupsProps} style={{}}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{ fontSize: "1.3rem", color: "#f89d13" }}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody {...getTableBodyProps}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps}
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        color: "#ffb340",
                        border: "1px solid #fff",
                        padding: "1rem",
                      }}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CustomDiv>
        </div>
      </div>
    </div>
  );
};
