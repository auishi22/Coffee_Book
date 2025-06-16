import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Components/CoffeeCards";
import CoffeeDetails from "../Components/coffeeDetails";

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
            path: "/",
            element: <CoffeeCards />,
            loader: ()=>fetch('../coffees.json')
          },
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
        loader: ()=>fetch('../coffees.json'),
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: ()=>fetch('../coffees.json'),
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
