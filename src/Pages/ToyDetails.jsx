import { use, useState } from "react";
import { Star, ShoppingCart, Heart, Share2, Check, X } from "lucide-react";
import Swal from "sweetalert2";
import useDataLoad from "../Hooks/useDataLoad";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import { AuthContext } from "../Contexts/AuthContext";
import ToyDetailsError from "./ToyDetailsError";

const ToyDetails = () => {
  const { user } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
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

    if (!user) {
      navigate("/login", { state: location?.pathname || "/" });
      return;
    }

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
      text: "Your demo request has been submitted! We'll contact you within 24 hours.",
      confirmButtonColor: "#3085d6",
    });
    setFormData({ name: "", email: "" });
  };

  if (!toy) {
    return <div>{loading ? <LoadingSpinner /> : <ToyDetailsError />}</div>;
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : "text-white"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-primary p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                  {toy.subCategory}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {toy.toyName}
                </h1>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex gap-1">{renderStars(toy.rating)}</div>
                  <span className="text-lg font-semibold">{toy.rating}</span>
                  <span className="text-white">• {toy.reviews} reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full md:h-[500px] sm:object-cover lg:object-contain rounded-2xl shadow-xl transform transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isWishlisted
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                  <button className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                    <Share2 className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Seller Info Card */}
              <div className=" bg-blue-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-gray-800 mb-3">Sold by</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12  bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {toy.sellerName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {toy.sellerName}
                    </p>
                    <p className="text-sm text-gray-600">{toy.sellerEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Price & Stock */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-5xl font-bold text-green-600">
                    ${toy.price}
                  </span>
                  <span className="text-gray-500 line-through text-xl mb-2">
                    ${(toy.price * 1.3).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-700">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">
                    {toy.availableQuantity} units in stock
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Product Description
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {toy.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Pieces</div>
                </div>
                <div className=" bg-blue-100 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">5-12</div>
                  <div className="text-sm text-gray-600 mt-1">Age Range</div>
                </div>
              </div>

              {/* Try Now Form */}
              <div className="bg-primary/15 rounded-2xl p-6 border-2 border-secondary/30">
                <h3 className="text-2xl font-bold text-base-300/80 mb-4 flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6 text-secondary" />
                  Try Now - Free Demo
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-all"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-secondary/80 text-white py-4 rounded-xl font-semibold text-lg hover:bg-secondary transform  transition-all shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    Request Free Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
