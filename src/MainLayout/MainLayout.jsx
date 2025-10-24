import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import useDataLoad from "../Hooks/useDataLoad";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
  const { loading } = useDataLoad();
  console.log(loading);

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
