import React from "react";
import AnimatedHeading from "./AnimatedHeading"
import ResultCard from "./ResultCard";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const SportsResult = () => {
  //vfdcxdfcx
  const {id}=useParams()
  console.log(id)
  const [sport,setSport]=useState(id)
  const [data, setData] = useState([{}]);
  
  async function getData() {
    
    console.log(sport)
    let d = await fetch("http://localhost:5000/matches/get-match-score", {
      method: "post",
      body: JSON.stringify({ sport}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    d = await d.json();
    //console.log(d)
    //console.log(d.data);
    setData(d.data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container" style={{ marginTop: "2em" }}>
          <AnimatedHeading heading="CRICKET-RESULTS"/>

          <div className="row pt-5">
            <div className="col pt-5">
                {data.map(item=>(
                  <ResultCard team1Name={item.team1} team2Name={item.team2} score={item.score} result={item.result} matchTitle={item.matchTitle} sport={item.sport} gender={item.gender}></ResultCard>
                ))}
            </div>
          </div>  
          
        </div>
    </div>      
  );
};

export default SportsResult;
