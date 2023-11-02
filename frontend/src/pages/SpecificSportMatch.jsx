import React from "react";
import AnimatedHeading from "../components/AnimatedHeading"
import ResultCard from "../components/ResultCard";

import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";
import HashLoader from "react-spinners/HashLoader";

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
  const [pastMatches, setPastMatches] = useState([{}]);
  const [upcommingMatches, setUpcommingMatches] = useState([{}])
  const [loading,setLoading]=useState(true);
  
  async function getPastMatches() {
    setLoading(true);
  
    try {
      let d = await fetch(backendUrl + "/api/matches/get-match-score/" + sport, {
        method: "get",
      });
      d = await d.json();
      
      sortMatchesByDate(d.data);
      setPastMatches(d.data);
    } catch (error) {
      console.error("Error fetching past matches:", error);
    } finally {
      setLoading(false);
    }
  }
  
  async function getUpcommingMatches() {
    setLoading(true);
  
    try {
      let d = await fetch(backendUrl + "/api/matches/get-upcomming-matches/" + sport, {
        method: "get",
      });
      d = await d.json();
  
      sortMatchesByDate(d.data);
      setUpcommingMatches(d.data);
    } catch (error) {
      console.error("Error fetching upcoming matches:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPastMatches();
    getUpcommingMatches();    
  }, [sport]);

  
  
  // Function to sort an array of matches by date
  const sortMatchesByDate = (matches) => {
    return matches.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  };

  


  return (
    <div className="site-section min-vh-100" style={{ backgroundColor: "#222831" }}>
      {
        loading?(
        <div  style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999, // Make sure it's on top of other content
        }}>
            <HashLoader
              color="#36d7b7"
              loading={loading}
              // cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
          />
        </div>
      ):(

        <div className="container" style={{ marginTop: "2em" }}>
          <AnimatedHeading heading={sport}/>
          

          <div className="container ">
            <div className="row ">
              <div className="col-12 title-section">
                <h2 className="heading">Upcoming Matches</h2>
              </div>

              
              {upcommingMatches.length>0 && upcommingMatches.map((item, index) => (
                <UpcommingMatchCard
                  key={index}
                  team1Name={item.team1}
                  team2Name={item.team2}
                  matchTitle={item.matchTitle}
                  sport={item.sport}
                  gender={item.gender}
                  date={item.date}
                  time={item.time}
                  location={item.location}
                />
              ))}

              

              <div className="col-12 title-section">
                <h2 className="heading">Past Matches</h2>
              </div>
                 

              {pastMatches.length>0 && pastMatches.map((item, index) => (
                <ResultCard
                  key={index}
                  team1Name={item.team1}
                  team2Name={item.team2}
                  score={item.score}
                  result={item.result}
                  matchTitle={item.matchTitle}
                  sport={item.sport}
                  gender={item.gender}
                />
              ))}

            </div>
          </div>

          
          
        </div>
        
        )
      }
        
    </div>      
  );
};

export default SportsResult;
