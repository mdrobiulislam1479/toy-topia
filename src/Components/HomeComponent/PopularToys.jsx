import { FaArrowRightLong } from "react-icons/fa6";
import useDataLoad from "../../Hooks/useDataLoad";
import ToyCard from "../ToyCard";
import { NavLink } from "react-router";
import { PropagateLoader } from "react-spinners";

const PopularToys = () => {
  const { data, loading } = useDataLoad();
  const toyData = data?.filter((toy) => toy.rating > 4.8) || [];

  return (
    <section className="md:py-10 px-4 max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Popular Toys</h1>
      {loading ? (
        <PropagateLoader color="skyblue" className="text-center" />
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {toyData.map((toy, index) => (
              <ToyCard key={index} toy={toy} />
            ))}
          </div>
          <div className="flex justify-center  py-6 md:pt-10">
            <NavLink
              to={"/all-toys"}
              className="btn bg-secondary/70 hover:bg-secondary text-white border-0 w-[200px]"
            >
              Show All Apps <FaArrowRightLong className="animate-pulse" />
            </NavLink>
          </div>
        </>
      )}
    </section>
  );
};

export default PopularToys;
