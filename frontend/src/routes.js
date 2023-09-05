import Home from "./Pages/Home";
import Matches from "./Pages/Matches";
import Layout from "./components/Layout";
import Sports from "./Pages/Sports";
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
        path: "/sports",
        element: <Sports />,
      },
    ],
  },
];

export default Routes;
