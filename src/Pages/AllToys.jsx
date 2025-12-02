import { useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import ToyCard from "../Components/ToyCard";
import useDataLoad from "../Hooks/useDataLoad";

const AllToys = () => {
  const { data, loading } = useDataLoad();
  const [sortOrder, setSortOrder] = useState("none");
  const [search, setSearch] = useState("");

  // Filter by search
  let filteredToys = [...(data || [])];
  if (search.trim() !== "") {
    filteredToys = filteredToys.filter((toy) =>
      toy.toyName.toLowerCase().includes(search.trim().toLowerCase())
    );
  }

  // Sort by price
  let sortedToys = [...filteredToys];
  if (sortOrder === "lowToHigh") {
    sortedToys.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedToys.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <title>ToyTopia | All Toys</title>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className="py-10 px-4 max-w-[1440px] mx-auto">
          <h1
            className="text-3xl font-bold text-center mb-8"
            data-aos="zoom-in"
          >
            Our All Toys
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name..."
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
            />
            <div className="flex items-center justify-end gap-2">
              <label className="font-medium text-gray-700">
                Sort by Price:
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="none">None</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {sortedToys.map((toy, index) => (
              <ToyCard key={index} toy={toy} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AllToys;
