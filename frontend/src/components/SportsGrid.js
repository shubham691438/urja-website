import React from 'react'
import '../assets/styles/sportsGridStyle.css'
import FootballImage from '../assets/images/football.png'

const SportsGrid = () => {
  return (
    <section id="services" className="services section-bg mt-5">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Sports</h2>
          
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box w-100 px-5">
              <div className="icon"><img src={FootballImage}></img></div>
              <h4 >Football</h4>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box w-100">
              <div className="icon"><img src={FootballImage}></img></div>
              <h4 >Football</h4>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box w-100">
              <div className="icon"><img src={FootballImage}></img></div>
              <h4 >Football</h4>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box w-100">
              <div className="icon"><img src={FootballImage}></img></div>
              <h4 >Football</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default SportsGrid