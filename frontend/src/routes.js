import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Layout from "./components/Layout";
import Sports from "./pages/Sports";
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
