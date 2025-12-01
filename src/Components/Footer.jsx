import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-6 py-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <Link to={"/"} className="text-3xl font-bold">
            Toy<span className="text-accent">Topia</span>
          </Link>
          <p className="mt-2 text-sm">
            Where play meets imagination. <br /> Premium toys for curious minds.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Useful Info</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="hover:link">Terms & Conditions</a>
            </li>
            <li>
              <a className="hover:link">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:link">Shipping & Returns</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Connect with us</h3>
          <div className="flex gap-4 text-2xl">
            <span className="cursor-pointer">
              <FaFacebook />
            </span>
            <span className=" cursor-pointer">
              <FaSquareInstagram />
            </span>
            <span className=" cursor-pointer">
              <AiFillTwitterCircle />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} ToyTopia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
