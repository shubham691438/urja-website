import React from "react";
// import { Fade as Slide } from "react-reveal";
import "../assets/styles/sportsGridStyle.css";
import FootballImage from "../assets/images/football.png";
import CricketImage from "../assets/images/cricketLogo.png";
import BadmintonImage from "../assets/images/badmintonLogo.png";
import BasketballImage from "../assets/images/basketballLogo.png";
import HockeyLogo from "../assets/images/hockeyLogo.png";
import AthleticsIcon from "../assets/images/Athlete.png";
import Tennis from "../assets/images/TennisPlayer.png";
import chessIcon from "../assets/images/chessIcon.png";
import VolleyballIcon from "../assets/images/VolleyballIcon.png";
import YogaLogo from "../assets/images/YogaLogo.png";
import { Link } from "react-router-dom";

const ResultsSportsGrid = () => {
  return (
    <section id="services" className="services section-bg mt-5">
      <div className="container " data-aos="fade-up">
        <div className="row mt-3">
          {/*<Slide> */}
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch">
            <Link to="/matches/cricket" className="w-100 text-decoration-none">
              <div className="icon-box px-5">
                <div className="icon">
                  <img src={CricketImage} alt="Cricket"></img>
                </div>
                <h4>Cricket</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}

          {/*<Slide> */}
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <Link to="/matches/football" className="w-100 text-decoration-none">
              <div className="icon-box ">
                <div className="icon">
                  <img src={FootballImage} alt="Football"></img>
                </div>
                <h4>Football</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}

          {/*<Slide> */}
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
            <Link
              to="/matches/badminton"
              className="w-100 text-decoration-none"
            >
              <div className="icon-box ">
                <div className="icon">
                  <img src={BadmintonImage} alt="Badminton"></img>
                </div>
                <h4>Badminton</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}

          {/*<Slide> */}
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
            <Link
              to="/matches/basketball"
              className="w-100 text-decoration-none"
            >
              <div className="icon-box w-100">
                <div className="icon">
                  <img src={BasketballImage} alt="Basketball"></img>
                </div>
                <h4>Basketball</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}
        </div>

        <div className="row mt-3">
          {/*<Slide> */}
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link to="/matches/hockey" className="w-100 text-decoration-none">
              <div className="icon-box w-100 px-5">
                <div className="icon">
                  <img src={HockeyLogo} alt="Hockey"></img>
                </div>
                <h4>Hockey</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}

          {/*<Slide> */}
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link to="/matches/athletic" className="w-100 text-decoration-none">
              <div className="icon-box w-100">
                <div className="icon">
                  <img src={AthleticsIcon} alt="Athletics"></img>
                </div>
                <h4>Athletics</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}
          {/*<Slide> */}
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/matches/tableTennis" className="w-100 text-decoration-none">
              <div className="icon-box w-100">
                <div className="icon">
                  <img src={Tennis} alt="Tennis"></img>
                </div>
                <h4>Table Tennis</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}
          {/*<Slide> */}
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-3 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/matches/lawnTennis" className="w-100 text-decoration-none">
              <div className="icon-box w-100">
                <div className="icon">
                  <img src={Tennis} alt="Tennis"></img>
                </div>
                <h4>Lawn Tennis</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}
        </div>
        <div className="row mt-3">
          {/*<Slide> */}
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/matches/chess" className="w-100 text-decoration-none">
              <div className="icon-box w-100">
                <div className="icon">
                  <img src={chessIcon} alt="chess"></img>
                </div>
                <h4>Chess</h4>
              </div>
            </Link>
          </div>
          {/* </Slide> */}
          {/*<Slide> */}
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link
              to="/matches/volleyBall"
              className="w-100 text-decoration-none"
            >
              <div className="icon-box w-100 px-5">
                <div className="icon">
                  <img src={VolleyballIcon} alt="Volleyball"></img>
                </div>
                <h4>Volleyball</h4>
              </div>
            </Link>
          </div>
          {/*</Slide> */}

          {/*<Slide> */}
          <div
            className="col-xl-3 col-md-6 mt-4 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link to="/sports/yoga" className="w-100 text-decoration-none">
              <div className="icon-box w-100 px-5">
                <div className="icon">
                  <img src={YogaLogo} alt="Yoga"></img>
                </div>
                <h4>Yoga</h4>
              </div>
            </Link>
          </div>
          {/*</Slide> */}
        </div>
      </div>
    </section>
  );
};

export default ResultsSportsGrid;
