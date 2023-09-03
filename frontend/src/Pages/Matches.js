import Header from "../components/heading";
import Navbar from "../components/Navbar";
import CurrentGameCard from "../components/currentGameCard";
import NextMatchCard from "../components/NextMatchCard";
import UpcomingMatch from "../components/upcomingMatch";
import Footer from "../components/Footer";

export default function Matches() {
  return (
    <div>
      <Navbar />
      <Header />
      <CurrentGameCard />

      <div class="site-section">
        <div class="container">
          <NextMatchCard />
          <UpcomingMatch />
        </div>
      </div>

      <Footer />
    </div>
  );
}
