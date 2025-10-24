import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";
import useDataLoad from "../Hooks/useDataLoad";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const { loading } = useDataLoad();
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [loading, location]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="flex-1">
              <Outlet />
            </div>
          )}
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
