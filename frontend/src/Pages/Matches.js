import Header from '../Components/heading.js';
import Navbar from '../Components/Navbar.js';
import CurrentGameCard from '../Components/currentGameCard';
import NextMatchCard from '../Components/NextMatchCard';
import UpcomingMatch from '../Components/upcomingMatch';
import Footer from '../Components/footer.js';

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



