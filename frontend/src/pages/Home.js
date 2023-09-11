import React from 'react'
import HomePointsTable from '../components/HomePointsTable'
import SportsGrid from '../components/SportsGrid'
import SportsCoordinator from '../components/SportsCoordinator'
import { HeroSection } from '../components/HeroSection'
import anubhavImg from '../assets/images/anubhavImg.jpg'
import ravindraRajImg from '../assets/images/ravindraRajImg.jpeg'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <div className="site-section bg-dark">
      <div className="container">
        <HomePointsTable/>
        <SportsGrid/>

        <section className="services section-bg mt-5">
          <div className="container " data-aos="fade-up">
           
              <div className="col-12 title-section ">
                <h1 className="heading" style={{fontSize:"30px"}}>Sports Secretary</h1>
              </div>
           

            <div className="row mt-3 justify-content-evenly">
              <SportsCoordinator name="Ravindra Raj" position="Sports Secretary" image={ravindraRajImg}/>
              <SportsCoordinator name="Anubhav" position="Joint Sports Secretary" image={anubhavImg}/>
            </div>
          </div>
        </section>

      </div>
    </div>
    </>
  )
}

export default Home