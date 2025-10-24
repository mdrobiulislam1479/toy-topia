import error404 from "../assets/error-404.png";
import { NavLink } from "react-router";
import useDataLoad from "../Hooks/useDataLoad";
import LoadingSpinner from "../Components/LoadingSpinner";

const ErrorPage = () => {
  const { loading } = useDataLoad();
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col min-h-screen ">
          <div className="flex-1 flex flex-col justify-center items-center space-y-5 py-14 px-5">
            <img src={error404} />
            <h1 className="text-3xl sm:text-5xl font-semibold text-center">
              Oops, page not found!
            </h1>
            <p className="text-[#627382]">
              The page you are looking for is not available.
            </p>
            <NavLink
              to={"/"}
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0 w-[200px]"
            >
              Go Back!
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorPage;
