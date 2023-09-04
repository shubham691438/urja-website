import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Layout from "./components/Layout";

const Routes = [
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/matches',
                element:<Matches/>,
            },
        ]
  },
  
]

export default Routes;