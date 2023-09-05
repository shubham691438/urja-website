import React from 'react'
import HomePointsTable from '../components/HomePointsTable'
import SportsGrid from '../components/SportsGrid'
import { HeroSection } from '../components/HeroSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <div className="site-section bg-dark">
      <div className="container">
        <HomePointsTable/>
        <SportsGrid/>
      </div>
    </div>
    </>
  )
}

export default Home