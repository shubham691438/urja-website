import React from 'react'
import HomePointsTable from '../components/HomePointsTable'

const Home = () => {
  return (
    <>
    <div className="site-section bg-dark">
      <div className="container">
        <HomePointsTable/>
        {/* <div className="row">
          <div className="col-lg-6">
            <div className="widget-next-match">
              <div className="widget-title">
                <h3>Next Match</h3>
              </div>
              <div className="widget-body mb-3">
                <div className="widget-vs">
                  <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                    <div className="team-1 text-center">
                      <img src="images/logo_1.png" alt="Image"/>
                      <h3>Football League</h3>
                    </div>
                    <div>
                      <span className="vs"><span>VS</span></span>
                    </div>
                    <div className="team-2 text-center">
                      <img src="images/logo_2.png" alt="Image"/>
                      <h3>Soccer</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center widget-vs-contents mb-4">
                <h4>World Cup League</h4>
                <p className="mb-5">
                  <span className="d-block">December 20th, 2020</span>
                  <span className="d-block">9:30 AM GMT+0</span>
                  <strong className="text-primary">New Euro Arena</strong>
                </p>

                <div id="date-countdown2" className="pb-1"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Home