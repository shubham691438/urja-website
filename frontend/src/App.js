import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import Matches from "./Pages/Matches";
import { PointsTable } from "./Pages/PointsTable";
import { SportsSection } from "./Pages/SportsSection";
import { Results } from "./Pages/Results";
//import "./css/aos.css";
// import "./css/aos.css";
// import "./css/bootstrap-datepicker.css"
// import "./css/bootstrap.min.css"
// import "./css/bootstrap.min.css.map"
// import "./css/jquery-ui.css"
// import "./css/jquery.fancybox.min.css"
// import "./css/jquery.mb.YTPlayer.min.css"
// import "./css/magnific-popup.css"
// import "./css/mediaelementplayer.css"
// import "./css/owl.carousel.min.css"
// import "./css/owl.theme.default.min.css"

// import "./css/bootstrap/bootstrap-grid.css"
// import "./css/bootstrap/bootstrap-reboot.css"
import "./fonts/icomoon/style.css";
import "./css/bootstrap/bootstrap.css";
import "./css/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/matches" element={<Matches></Matches>}></Route>
      <Route path="/leaderBoard" element={<PointsTable></PointsTable>}></Route>
      <Route path="/sports" element={<SportsSection></SportsSection>}></Route>
      <Route path="/results" element={<Results></Results>}></Route>
    </Routes>
  );
}

export default App;
