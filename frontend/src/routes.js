import Home from "./pages/Home";
import Layout from "./components/Layout";
import Sports from "./pages/Sports";
import CoreTeam from "./pages/CoreTeam";
import Matches from "./pages/Matches";
import SpecificSportMatch from "./pages/SpecificSportMatch";
import AthleticsPage from "./pages/AthleticsPage";
const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/sports/athletic",
        element: <AthleticsPage/>
      },
      {
        path: "/sports/:key",
        element: <Sports />,
      },
      {
        path: "/our-team",
        element: <CoreTeam />,
      },
      {
        path: "/matches",
        children: [
          {
            index: true,
            element: <Matches/>,
          },
          {
            path: "/matches/:id",
            element: <SpecificSportMatch/>,
          },
        ],
      },
    ],
  },
];

export default Routes;
