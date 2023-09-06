import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Layout from "./components/Layout";
import Sports from "./pages/Sports";
import CoreTeam from "./pages/CoreTeam";
import Results from "./pages/Results";
import SportsResult from "./components/SportResult";
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
        path: "/matches",
        element: <Matches />,
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
        path: "/results",
        children: [
          {
            index: true,
            element: <Results />,
          },
          {
            path: "/results/:id",
            element: <SportsResult />,
          },
        ],
      },
    ],
  },
];

export default Routes;
