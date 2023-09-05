import React from "react";
import "../assets/styles/sportsGridStyle.css";
import FootballImage from "../assets/images/football.png";
import CricketImage from "../assets/images/cricketLogo.png";
import BadmintonImage from "../assets/images/badmintonLogo.png";
import BasketballImage from "../assets/images/basketballLogo.png";
import HockeyLogo from "../assets/images/hockeyLogo.png";
import Athlete from "../assets/images/Athlete.png";
import Tennis from "../assets/images/TennisPlayer.png";
import { Link } from "react-router-dom";
const SportsGrid = () => {
  return (
    <section id="services" className="services section-bg mt-5">
      <div className="container " data-aos="fade-up">
        <div className="section-title">
          <h2>Sports</h2>
        </div>

        <div className="row mt-3">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link to="/sports/cricket" className="w-100 text-decoration-none">
              <div className="icon-box px-5">
                <div className="icon">
                  <img src={CricketImage} alt="Cricket"></img>
                </div>
                <h4>Cricket</h4>
              </div>
            </Link>
          </div>
          

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link to="/sports/football" className="w-100 text-decoration-none">
              <div className="icon-box ">
                <div className="icon">
                  <img src={FootballImage} alt="Football"></img>
                </div>
                <h4>Football</h4>
              </div>
            </Link>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/sports/badminton" className="w-100 text-decoration-none">
            <div className="icon-box ">
              <div className="icon">
                <img src={BadmintonImage} alt="Badminton"></img>
              </div>
              <h4>Badminton</h4>
            </div>
            </Link>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Link to="/sports/basketball" className="w-100 text-decoration-none">
            <div className="icon-box w-100">
              <div className="icon">
                <img src={BasketballImage} alt="Basketball"></img>
              </div>
              <h4>Basketball</h4>
            </div>
            </Link>
          </div>
        </div>

        <div className="row mt-3">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link to="/sports/hockey" className="w-100 text-decoration-none">
            <div className="icon-box w-100 px-5">
              <div className="icon">
                <img src={HockeyLogo} alt="Hockey"></img>
              </div>
              <h4>Hockey</h4>
            </div>
            </Link>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link to="/sports/athlete" className="w-100 text-decoration-none">
            <div className="icon-box w-100">
              <div className="icon">
                <img src={Athlete} alt="Athletics"></img>
              </div>
              <h4>Athlete</h4>
            </div>
            </Link>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/sports/tennis" className="w-100 text-decoration-none">
            <div className="icon-box w-100">
              <div className="icon">
                <img src={Tennis} alt="Tennis"></img>
              </div>
              <h4>Tennis</h4>
            </div>
            </Link>
          </div>
          {/* 
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box w-100">
              <div className="icon">
                <img src={FootballImage}></img>
              </div>
              <h4>Football</h4>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SportsGrid;
