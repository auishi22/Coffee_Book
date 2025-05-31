import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
