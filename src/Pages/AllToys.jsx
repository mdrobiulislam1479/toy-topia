import LoadingSpinner from "../Components/LoadingSpinner";
import ToyCard from "../Components/ToyCard";
import useDataLoad from "../Hooks/useDataLoad";

const AllToys = () => {
  const { data, loading } = useDataLoad();
  return (
    <div>
      <title>ToyTopia | All Toys</title>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className="py-10 px-4 max-w-[1440px] mx-auto">
          <h1
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-right"
          >
            Our All Toys
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {data.map((toy, index) => (
              <ToyCard key={index} toy={toy} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AllToys;
