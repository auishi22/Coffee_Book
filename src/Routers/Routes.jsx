import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Components/CoffeeCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:category",
            element: <CoffeeCards />,
            loader: ()=>fetch('../coffees.json')
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
