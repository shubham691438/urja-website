import React from "react";
// import { Zoom } from "react-reveal";
import urja_home_img2 from "../assets/images/urja_home_img2.jpg";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";
import backgroundImage from "../assets/images/urja_home_img2.jpg";
import AnimatedHeading from "../components/AnimatedHeading"
import { Link } from "react-router-dom"
export const HeroSection = () => {

  const [data, setData] = useState([{}]);

  async function getData() {
    //grefdsfdzvsdfxcvsfdvsdf
    ///gfevscefeffd
    let d = await fetch("http://localhost:5000/matches/latestMatches", {
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
              <h1 className="text-white" style={{marginLeft:"10px"}}><AnimatedHeading heading="URJA-2K23"/> </h1>
              <p>Unleash the Power of Urja: Ignite Your Passion for Sports</p>
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

      <div
        style={{
          backgroundColor: "#222831",
        }}
      >
        {/* <Zoom> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex team-vs">
                  <span className="score">4-1</span>
                  <div className="team-1 w-50">
                    <div className="team-details w-100 text-center">
                      <img src={logo1} alt="Image2" className="img-fluid" />
                      <h3>TEAM A</h3>
                      <ul className="list-unstyled">
                        <li>CSE</li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-2 w-50">
                    <div className="team-details w-100 text-center">
                      <img src={logo2} alt="Image1" className="img-fluid" />
                      <h3>TEAM B</h3>
                      <ul className="list-unstyled">
                        <li>CIVIL</li>
                      </ul>
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
