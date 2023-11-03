import React, { useState, useEffect } from "react";
import Trophy from '@mui/icons-material/EmojiEvents';

const HomePointsTable = () => {
  const [data, setData] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  async function getData() {
    let response = await fetch(backendUrl + "/api/medals/get-medal-table", {
      method: "get",
    });
    let result = await response.json();
    // Sort the data in decreasing order by points
    result.medals.sort((a, b) => b.points - a.points);
    setData(result.medals);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="widget-next-match">
        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th >Branch</th>
                <th>POINTS</th>
                {/* <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    {index === 0 && (
                      <Trophy sx={{color:'#C9B037'}}/>
                    )}
                    {index === 1 && (
                      <Trophy sx={{color:'#D7D7D7'}}/>
                    )}
                    {index === 2 && (
                      <Trophy sx={{color:'#6A3805'}}/>
                    )}
                    {index >= 3 && index + 1}
                  </td>
                  <td >
                    <strong className="text-white">
                      {item.branch.toUpperCase()}
                    </strong>
                  </td>
                  <td style={{backgroundColor:"#36454F"}}>{item.points}</td>
                  {/* <td>{item.gold}</td>
                  <td>{item.silver}</td>
                  <td>{item.bronze}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePointsTable;
