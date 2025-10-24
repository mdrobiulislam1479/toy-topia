import { useState } from "react";
import Swal from "sweetalert2";
import useDataLoad from "../Hooks/useDataLoad";
import { useParams } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import ToyDetailsError from "./ToyDetailsError";

const ToyDetails = () => {
  const { data, loading } = useDataLoad();
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const toy = data?.find((t) => t.toyId == id);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please fill in both fields.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your Try Now request has been submitted!",
      confirmButtonColor: "#3085d6",
    });

    setFormData({ name: "", email: "" });
  };

  if (!toy) {
    return <div>{loading ? <LoadingSpinner /> : <ToyDetailsError />}</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 pt-30 pb-10">
      <title>{toy.toyName}</title>
      <div className="" data-aos="fade-down">
        <div className="lg:flex items-start gap-10 pb-10">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="rounded-lg shadow-lg mb-6 lg:mb-0 sm:max-w-[390px] mx-auto "
            data-aos="zoom-in"
          />
          <div className="flex-1 " data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {toy.toyName}
            </h2>
            <div className=" bg-gray-50 rounded-lg shadow">
              <table className="min-w-full text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="font-semibold px-4 py-3 bg-gray-100 w-1/3">
                      Seller
                    </td>
                    <td className="px-4 py-3">{toy.sellerName}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold px-4 py-3 bg-gray-100">
                      Email
                    </td>
                    <td className="px-4 py-3">{toy.sellerEmail}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold px-4 py-3 bg-gray-100">
                      Price
                    </td>
                    <td className="px-4 py-3">${toy.price}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold px-4 py-3 bg-gray-100">
                      Rating
                    </td>
                    <td className="px-4 py-3">{toy.rating}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold px-4 py-3 bg-gray-100">
                      Available Quantity
                    </td>
                    <td className="px-4 py-3">{toy.availableQuantity}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold px-4 py-3 bg-gray-100">
                      Category
                    </td>
                    <td className="px-4 py-3">{toy.subCategory}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold px-4 py-3 bg-gray-100">
                      Description
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-justify">
                      {toy.description}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-100 p-8 shadow-lg rounded-lg"
          data-aos="fade-down"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-800">Try Now</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary/90 text-white py-2 rounded hover:bg-primary transition"
            >
              Try Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
