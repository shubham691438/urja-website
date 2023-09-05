import Home from "../src/pages/Home";
import Matches from "../src/pages/Matches";
import Layout from "./components/Layout";

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
    ],
  },
];

export default Routes;
