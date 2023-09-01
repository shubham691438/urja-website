import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Matches } from "./Pages/Matches";
import { PointsTable } from "./Pages/PointsTable";
import "./css/aos.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/matches" element={<Matches></Matches>}></Route>
      <Route path="/leaderBoard" element={<PointsTable></PointsTable>}></Route>
    </Routes>
  );
}

export default App;
