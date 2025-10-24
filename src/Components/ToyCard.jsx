import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  return (
    <div
      className="bg-primary/20 shadow-md rounded-lg overflow-hidden duration-200 hover:scale-105 p-5 flex flex-col justify-between "
      data-aos="fade-up"
    >
      <div className="bg-white rounded-xl relative">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="h-60 object-cover mx-auto"
        />
        <p className="absolute right-3 bottom-3 bg-secondary/50 p-1 rounded-md">
          Qty: {toy.availableQuantity}
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-xl font-semibold text-base-300">{toy.toyName}</h2>
        <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
          <p className="text-secondary font-bold text-xl">
            ${toy.price.toFixed(2)}
          </p>
          <p className="flex gap-1 items-center text-lg">
            <IoIosStar color="orange" size={17} /> {toy.rating}
          </p>
        </div>

        <div className="mt-4 flex  bg-secondary/70 text-white py-2 px-4 rounded hover:bg-secondary transition text-center">
          <Link to={`/all-toys/${toy.toyId}`} className="w-full">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
