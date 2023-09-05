import React from "react";
import backgroundImage from "../assets/images/bg.jpg";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo_1.png";
import logo2 from "../assets/images/logo_2.png";
import logo3 from "../assets/images/logo_3.png";
import logo4 from "../assets/images/logo_4.png";
import { Link } from "react-router-dom";
import styles from "../assets/styles/bootstrap.css";
const Header = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar py-4" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="ml-auto">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/matches">Matches</Link>
                  </li>
                  <li>
                    <a href="/" className="nav-link">
                      Players
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <a
                href="/"
                className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
              >
                <span className="icon-menu h3 text-white"></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className="hero overlay"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 ml-auto">
              <h1 className="text-white">URJA 2K24</h1>
              <p>WELCOME TO URJA 2K24</p>
              <div id="date-countdown"></div>
              <p>
                <a
                  href="/matches"
                  className="btn btn-primary py-3 px-4 mr-3 "
                  backgroundColor="#ee1e46"
                >
                  Matches
                </a>
                <a href="/" className="more light">
                 About
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#222831" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex team-vs">
                <span className="score">4-1</span>
                <div className="team-1 w-50">
                  <div className="team-details w-100 text-center">
                    <img src={logo1} alt="Image" className="img-fluid" />
                    <h3>TEAM A</h3>
                    <ul className="list-unstyled">
                      <li>CSE</li>
                      {/* <li>Eadie Salinas (12)</li>
                      <li>Ashton Allen (10)</li>
                      <li>Baxter Metcalfe (5)</li> */}
                    </ul>
                  </div>
                </div>
                <div className="team-2 w-50">
                  <div className="team-details w-100 text-center">
                    <img src={logo2} alt="Image" className="img-fluid" />
                    <h3>TEAM B</h3>
                    <ul className="list-unstyled">
                      <li>CIVIL</li>
                      {/* <li>Arham Stark (8)</li>
                      <li>Stephan Murillo (9)</li>
                      <li>Ned Ritter (5)</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
