import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AllToys from "../Pages/AllToys";
import AboutUs from "../Pages/AboutUs";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ToyDetails from "../Pages/ToyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-toys/:id",
        element: <ToyDetails />,
      },
    ],
  },
]);
