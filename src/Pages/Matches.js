import React from 'react';

import Header from '../components/heading.js';
import Navbar from '../components/Navbar.js';
import CurrentGameCard from '../components/currentGameCard';
import NextMatchCard from '../components/NextMatchCard';
import UpcomingMatch from '../components/upcomingMatch';

import Footer from '../components/footer';

export default function Matches() {
  return (
    <>
       <Navbar/>
    <Header />
    <CurrentGameCard/>

    <div class="site-section">
      <div class="container">
         <NextMatchCard/>
         <UpcomingMatch/>
      </div>
    </div> 
    
    
    <Footer/>


    
    </>
  );
}


