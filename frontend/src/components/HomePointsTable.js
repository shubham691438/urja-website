import React, { useState, useEffect } from "react";
import Trophy from '@mui/icons-material/EmojiEvents';
import { Button, Link } from "@mui/material";

const HomePointsTable = () => {
  
  const [points, setPoints] = useState([]);

  useEffect(() => {
   
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=_x617luk9BXjMPP6lnOqnK6yeJDOru_aQIU6MWc8JfwsNe1jUN9zyZT297rgdC5Vw1iUCpBHKj0L4ztMlpOqSLiyPFo4-UFSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOZkPTmvpFlwOkN0oa9TzbADypue5jHObWFXiXuEr3mnHU46ALdUDYFuXhr-yE3yEza8-z-vI4QVYJ7dq-ICgOF-p6dyN7s-Rtz9Jw9Md8uu&lib=MqEGK2nOPTRqNxgnaWqkj_8HoBXLQmCkk")
      .then((response) => response.json())
      .then((data) => {
        
        
        const total = data.filter((point) => point.Sport == "TOTAL");

        console.log(total[0])
        // Create an array of objects from the points object
        const pointsArray = Object.keys(total[0])
        .filter(key => key !== "Sport") // Exclude the "Sport" property
        .map(branch => ({
          "branch":branch,
          "points": total[0][branch]
        }));
        pointsArray.sort((a, b) => b.points - a.points);  
        setPoints(pointsArray); 
        // console.log(pointsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // useEffect(() => {
  //   getData();
  // }, []);

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
              </tr>
            </thead>
            <tbody>
              {points.map((item, index) => (
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
