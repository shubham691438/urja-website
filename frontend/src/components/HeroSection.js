import React,{useState,useEffect} from "react";
// import { Zoom } from "react-reveal";
import urja_home_img2 from "../assets/images/urja_home_img2.jpg";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";
import backgroundImage from "../assets/images/urja_home_img2.jpg";
import AnimatedHeading from "../components/AnimatedHeading"
import { Link } from "react-router-dom"
import GetBranchIcon from "../assets/functions/GetBranchIcon";
import GlowingText from "./GlowingText";

export const HeroSection = () => {

  

  // Get the image URL based on the passed key
  const imageUrl1 =GetBranchIcon("pie-ecm")
  const imageUrl2 = GetBranchIcon("me")



  const backendUrl = process.env.REACT_APP_BACKEND_URL
  const [data, setData] = useState([{}]);

  async function getData() {
    
    let d = await fetch(backendUrl+"/api/matches/latestMatches", {
      method: "get",
    });
    d = await d.json();
    console.log(d.data[0]);
    setData(d.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className="hero overlay"

        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
       
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 ml-auto">
              <h1 className="text-white" ><AnimatedHeading heading="URJA-2K23"/> </h1>
              <div className="d-flex flex-column align-items-center">
                <GlowingText text={"Unleash the Power of Urja: Ignite Your Passion for Sports"}/>
                <div id="date-countdown"></div>
                <p>
                  <Link to="/matches"
                    className="btn btn-danger py-3 px-4 mr-3 "
                    backgroundColor="#ee1e46"
                  >

                    Matches
                  </Link>
                  {/* <a href="/" className="more light">
                    About
                  </a> */}
                </p>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#222831",
        }}
      >
        {/* <Zoom> */}
       
          <div className="container " >
          
            <div className="row">
            
            <div class="d-flex justify-content-center mb-5" style={{zIndex:999}}>
              <h3><span class="badge badge-danger">Men FootBall Semi-final</span></h3>
            </div>
              <div className="col-lg-12">
                <div className="d-flex team-vs">
                  <span className="score">VS </span>
                  <div className="team-1 w-50">
                    <div className="team-details w-100 text-center">
                      <img src={imageUrl1} alt="Image2" className="img-fluid" />
                      <h3>PIE+ECM</h3>
                      
                    </div>
                  </div>
                  <div className="team-2 w-50">
                    <div className="team-details w-100 text-center">
                      <img src={imageUrl2} alt="Image1" className="img-fluid" />
                      <h3>ME</h3>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </>
  );
};
