import Header from "../components/heading";
import Navbar from "../components/Navbar";
import CurrentGameCard from "../components/CurrentGameCard";
import NextMatchCard from "../components/NextMatchCard";
import UpcomingMatch from "../components/upcomingMatch";
import Footer from "../components/Footer";
import Sports from "../components/Sports";

export default function Matches() {
  return (
    <div>
      {/* <Navbar />
      <Header />
      <CurrentGameCard />

      <div class="site-section">
        <div class="container">
          <NextMatchCard />
          <UpcomingMatch />
        </div>
      </div> */}

      <Navbar></Navbar>

      <h1 id="branchScore">Matches</h1>

      <Sports path="results"></Sports>

      <Footer />
    </div>
  );
}
