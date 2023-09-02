import React, { useMemo } from "react";
import { useTable } from "react-table";
import DATA from "./DATA.json";
import { Columns } from "./Columns";

import "../css/bootstrap/bootstrap.css";

export const BranchScore = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <h1 id="branchScore"> Branch Wise Scores</h1>

      <table className="table" {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupsProps}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
