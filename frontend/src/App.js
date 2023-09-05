import "./App.css";
import Routes from "./routes";
import "./assets/styles/style.css";
import "./assets/styles/bootstrap.css";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes(Routes);
  return <div className="site-wrap">{element}</div>;
}

export default App;
