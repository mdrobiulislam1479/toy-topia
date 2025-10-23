import toyError from "../assets/toy-error.png";
import { NavLink } from "react-router";
import useDataLoad from "../Hooks/useDataLoad";
import LoadingSpinner from "../Components/LoadingSpinner";

const ToyDetailsError = () => {
  const { loading } = useDataLoad();
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center space-y-5 pt-30 px-5">
          <img src={toyError} />
          <h1 className="text-3xl sm:text-5xl font-semibold text-center">
            OPPS!! Toy NOT FOUND
          </h1>
          <p className="text-[#627382] text-center">
            The toy you are requesting is not found on our system. please try
            another toys
          </p>
          <NavLink
            to={"/"}
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0 w-[200px]"
          >
            Go Back!
          </NavLink>
        </div>
      )}
    </>
  );
};

export default ToyDetailsError;
