import Home from "../src/Pages/Home";
import Matches from "../src/Pages/Matches";
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
