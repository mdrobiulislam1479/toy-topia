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
import PrivateRoute from "./PrivateRoute";
import ContactPage from "../Pages/ContactUs";

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
        element: (
          <PrivateRoute>
            <AllToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
