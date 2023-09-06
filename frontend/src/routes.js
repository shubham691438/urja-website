import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Layout from "./components/Layout";
import Sports from "./pages/Sports";
import CoreTeam from "./pages/CoreTeam";
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
        path:"/CoreTeam",
        element: <CoreTeam/>,
      }
    ],
  },
];

export default Routes;
