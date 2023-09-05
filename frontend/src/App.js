import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { HomePage } from "./Pages/HomePage";
import Matches from "./Pages/Matches";
import { PointsTable } from "./Pages/PointsTable";
import { SportsSection } from "./Pages/SportsSection";
import { Results } from "./Pages/Results";
import "./fonts/icomoon/style.css";
import "./css/bootstrap/bootstrap.css";
import "./css/style.css";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/matches" element={<Matches></Matches>}></Route>
        <Route
          path="/leaderBoard"
          element={<PointsTable></PointsTable>}
        ></Route>
        <Route path="/sports" element={<SportsSection></SportsSection>}></Route>
        <Route path="/results" element={<Results></Results>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
