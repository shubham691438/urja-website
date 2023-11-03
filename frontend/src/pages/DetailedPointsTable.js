import React, { useState, useEffect } from "react";
import AnimatedHeading from '../components/AnimatedHeading';
import HashLoader from "react-spinners/HashLoader";

function Points() {
  const [points, setPoints] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=_x617luk9BXjMPP6lnOqnK6yeJDOru_aQIU6MWc8JfwsNe1jUN9zyZT297rgdC5Vw1iUCpBHKj0L4ztMlpOqSLiyPFo4-UFSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOZkPTmvpFlwOkN0oa9TzbADypue5jHObWFXiXuEr3mnHU46ALdUDYFuXhr-yE3yEza8-z-vI4QVYJ7dq-ICgOF-p6dyN7s-Rtz9Jw9Md8uu&lib=MqEGK2nOPTRqNxgnaWqkj_8HoBXLQmCkk")
      .then((response) => response.json())
      .then((data) => {
        setPoints(data);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className="site-section"
      style={{ backgroundColor: "#222831", paddingTop: "100px", minHeight: "100vh" }}
    >
      <div className="container" style={{ marginTop: "2em" }}>
        <AnimatedHeading heading="Points-Table" />

        {loading ? (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
          >
            <HashLoader
              color="#36d7b7"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="col-lg-12">
            <div className="widget-next-match">
              <div className="table-responsive">
                <table className="table table-bordered table-hover custom-table">
                  <thead>
                    <tr>
                      <th style={{ borderRight: "1px solid #000" }}>Sport</th>
                      <th style={{ borderRight: "1px solid #000" }}>CSE</th>
                      <th style={{ borderRight: "1px solid #000" }}>ECE</th>
                      <th style={{ borderRight: "1px solid #000" }}>EE</th>
                      <th style={{ borderRight: "1px solid #000" }}>ME</th>
                      <th style={{ borderRight: "1px solid #000" }}>CE</th>
                      <th style={{ borderRight: "1px solid #000" }}>MME</th>
                      <th style={{ borderRight: "1px solid #000" }}>PIE+ECM</th>
                      <th>PG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {points.map((point, index) => (
                      <tr key={index}>
                        <td style={{ backgroundColor: "#36454F", borderRight: "1px solid #000" }}>{point.Sport}</td>
                        <td style={{ borderRight: "1px solid #000" }}>{point.CSE}</td>
                        <td style={{ borderRight: "1px solid #000" }}>{point.ECE}</td>
                        <td style={{ borderRight: "1px solid #000" }}>{point.EE}</td>
                        <td style={{ borderRight: "1px solid #000" }}>{point.ME}</td>
                        <td style={{ borderRight: "1px solid #000" }}>{point.CE}</td>
                        <td style={{ borderRight: "1px solid #000" }}>{point.MME}</td>
                        <td style={{ borderRight: "1px solid #000" }}>{point["PIE+ECM"]}</td>
                        <td>{point.PG}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Points;
