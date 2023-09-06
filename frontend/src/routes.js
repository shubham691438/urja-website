import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Layout from "./components/Layout";
import Sports from "./pages/Sports";
import CoreTeam from "./pages/CoreTeam";
import Results from "./pages/Results"
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
        path: "/sports/:id",
        element: <Sports />,
      },
      {
        path:"/our-team",
        element: <CoreTeam/>,
      },
      {
        path:"/results",
        element: <Results/>,
      }
    ],
  },
];

export default Routes;
