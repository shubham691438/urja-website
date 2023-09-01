import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Matches } from "./Pages/Matches";
import "./css/aos.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/matches" element={<Matches></Matches>}></Route>
    </Routes>
  );
}

export default App;
