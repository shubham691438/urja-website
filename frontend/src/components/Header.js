import React from 'react'
import backgroundImage from '../assets/images/bg.jpg'
import logo from '../assets/images/logo.png'

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
            <a href="index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="ml-auto">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                <li><a href="matches.html" className="nav-link">Matches</a></li>
                <li><a href="players.html" className="nav-link">Players</a></li>
                <li><a href="blog.html" className="nav-link">Blog</a></li>
                <li><a href="contact.html" className="nav-link">Contact</a></li>
              </ul>
            </nav>

            <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span
                className="icon-menu h3 text-white"></span></a>
          </div>
        </div>
      </div>

    </header>

    <div className="hero overlay" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 ml-auto">
            <h1 className="text-white">World Cup Event</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
            <div id="date-countdown"></div>
            <p>
              <a href="#" className="btn btn-primary py-3 px-4 mr-3">Book Ticket</a>
              <a href="#" className="more light">Learn More</a>
            </p>  
          </div>
        </div>
      </div>
    </div>

    
    
    <div className="container">
      

      <div className="row">
        <div className="col-lg-12">
          
          <div className="d-flex team-vs">
            <span className="score">4-1</span>
            <div className="team-1 w-50">
              <div className="team-details w-100 text-center">
                {/* <img src="images/logo_1.png" alt="Image" className="img-fluid"> */}
                <h3>LA LEGA <span>(win)</span></h3>
                <ul className="list-unstyled">
                  <li>Anja Landry (7)</li>
                  <li>Eadie Salinas (12)</li>
                  <li>Ashton Allen (10)</li>
                  <li>Baxter Metcalfe (5)</li>
                </ul>
              </div>
            </div>
            <div className="team-2 w-50">
              <div className="team-details w-100 text-center">
                {/* <img src="images/logo_2.png" alt="Image" className="img-fluid"> */}
                <h3>JUVENDU <span>(loss)</span></h3>
                <ul className="list-unstyled">
                  <li>Macauly Green (3)</li>
                  <li>Arham Stark (8)</li>
                  <li>Stephan Murillo (9)</li>
                  <li>Ned Ritter (5)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Header