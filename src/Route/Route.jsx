import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AllToys from "../Pages/AllToys";
import AboutUs from "../Pages/AboutUs";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ToyDetails from "../Pages/ToyDetails";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgotPassword";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/my-profile",
        element: <MyProfile />,
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
        path: "/forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "/all-toys/:id",
        element: <ToyDetails />,
      },
    ],
  },
]);
