import React from "react";
import AnimatedHeading from "../components/AnimatedHeading"
import ResultCard from "../components/ResultCard";

import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";

import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import UpcommingMatchCard from "../components/UpcommingMatchCard";

const SportsResult = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  
  const {id}=useParams()
  
  const [sport,setSport]=useState(id)
  const [data, setData] = useState([{}]);
  
  async function getData() {
    
    console.log(sport)
    let d = await fetch(backendUrl+"/api/matches/get-match-score", {
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
          <AnimatedHeading heading={sport}/>
          

          <div className="container ">
            <div className="row ">
              <div className="col-12 title-section">
                <h2 className="heading">Upcoming Matches</h2>
              </div>
              <UpcommingMatchCard/>
              <UpcommingMatchCard/>
              

              <div className="col-12 title-section">
                <h2 className="heading">Past Match</h2>
              </div>
                 

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
