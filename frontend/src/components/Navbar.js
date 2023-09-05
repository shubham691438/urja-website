import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link to="/" className="text-decoration-none">
                <div className="d-flex">
                <img src={logo} alt="Logo" style={{width:"70px",height:"70px"}}/>
                <h1 >Urja-2023</h1>
                </div>
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
                  {/* <li>
                    <a href="/" className="nav-link">
                      Blog
                    </a>
                  </li> */}
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
    </>
  );
};

export default Navbar;
