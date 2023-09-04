import React from 'react'
import logo1 from '../assets/images/logo_1.png'
import logo2 from '../assets/images/logo_2.png'
import logo3 from '../assets/images/logo_3.png'
import logo4 from '../assets/images/logo_4.png'

const Matches = () => {
  return (
    <>
         <div class="site-section bg-dark">
      <div class="container">
        
        <div class="row mb-5">
          <div class="col-lg-12">
            <div class="widget-next-match">
              <div class="widget-title">
                <h3>Next Match</h3>
              </div>
              <div class="widget-body mb-3">
                <div class="widget-vs">
                  <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                    <div class="team-1 text-center">
                      <img src={logo1} alt="Image"/>
                      <h3>Football League</h3>
                    </div>
                    <div>
                      <span class="vs"><span>VS</span></span>
                    </div>
                    <div class="team-2 text-center">
                      <img src={logo2} alt="Image"/>
                      <h3>Soccer</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center widget-vs-contents mb-4">
                <h4>World Cup League</h4>
                <p class="mb-5">
                  <span class="d-block">December 20th, 2020</span>
                  <span class="d-block">9:30 AM GMT+0</span>
                  <strong class="text-primary">New Euro Arena</strong>
                </p>

                <div id="date-countdown2" class="pb-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 title-section">
            <h2 class="heading">Upcoming Match</h2>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="bg-light p-4 rounded">
              <div class="widget-body">
                  <div class="widget-vs">
                    <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div class="team-1 text-center">
                        <img src={logo1} alt="Image"/>
                        <h3>Football League</h3>
                      </div>
                      <div>
                        <span class="vs"><span>VS</span></span>
                      </div>
                      <div class="team-2 text-center">
                        <img src={logo2} alt="Image"/>
                        <h3>Soccer</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center widget-vs-contents mb-4">
                  <h4>World Cup League</h4>
                  <p class="mb-5">
                    <span class="d-block">December 20th, 2020</span>
                    <span class="d-block">9:30 AM GMT+0</span>
                    <strong class="text-primary">New Euro Arena</strong>
                  </p>

                </div>
              
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="bg-light p-4 rounded">
              <div class="widget-body">
                  <div class="widget-vs">
                    <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div class="team-1 text-center">
                        <img src={logo3} alt="Image"/>
                        <h3>Football League</h3>
                      </div>
                      <div>
                        <span class="vs"><span>VS</span></span>
                      </div>
                      <div class="team-2 text-center">
                        <img src={logo4} alt="Image"/>
                        <h3>Soccer</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center widget-vs-contents mb-4">
                  <h4>World Cup League</h4>
                  <p class="mb-5">
                    <span class="d-block">December 20th, 2020</span>
                    <span class="d-block">9:30 AM GMT+0</span>
                    <strong class="text-primary">New Euro Arena</strong>
                  </p>

                </div>
              
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="bg-light p-4 rounded">
              <div class="widget-body">
                  <div class="widget-vs">
                    <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div class="team-1 text-center">
                        <img src={logo1} alt="Image"/>
                        <h3>Football League</h3>
                      </div>
                      <div>
                        <span class="vs"><span>VS</span></span>
                      </div>
                      <div class="team-2 text-center">
                        <img src={logo2} alt="Image"/>
                        <h3>Soccer</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center widget-vs-contents mb-4">
                  <h4>World Cup League</h4>
                  <p class="mb-5">
                    <span class="d-block">December 20th, 2020</span>
                    <span class="d-block">9:30 AM GMT+0</span>
                    <strong class="text-primary">New Euro Arena</strong>
                  </p>

                </div>
              
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="bg-light p-4 rounded">
              <div class="widget-body">
                  <div class="widget-vs">
                    <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                      <div class="team-1 text-center">
                        <img src={logo3} alt="Image"/>
                        <h3>Football League</h3>
                      </div>
                      <div>
                        <span class="vs"><span>VS</span></span>
                      </div>
                      <div class="team-2 text-center">
                        <img src={logo4} alt="Image"/>
                        <h3>Soccer</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center widget-vs-contents mb-4">
                  <h4>World Cup League</h4>
                  <p class="mb-5">
                    <span class="d-block">December 20th, 2020</span>
                    <span class="d-block">9:30 AM GMT+0</span>
                    <strong class="text-primary">New Euro Arena</strong>
                  </p>

                </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Matches