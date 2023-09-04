import React, { useEffect, useState } from "react";
import { CustomDiv } from "../styles/CustomDiv";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const PointsTable = () => {
  const [data, setData] = useState([{}]);
  async function getData() {
    console.log(process.env.REACT_APP_BACKEND_URL);
    let d = await fetch(`http://localhost:5000/points`, {
      method: "get",
    });
    d = await d.json();
    console.log(d.data);
    setData(d.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <CustomDiv
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 id="branchScore">Points Table</h1>
        <table className="table">
          <thead>
            <th>Pos</th>
            <th>Branch</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Bronze</th>
            <th>Points</th>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.branch}</td>
                <td>{item.gold}</td>
                <td>{item.silver}</td>
                <td>{item.bronze}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CustomDiv>
      <Footer></Footer>
    </div>
  );
};
