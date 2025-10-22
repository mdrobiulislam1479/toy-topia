import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const items = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-toys"}>All Toys</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#80A1BA]">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
            >
              {items}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold text-blue-600">
            Toy<span className="font-medium text-green-800">Topia</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{items}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            to={"login"}
            className="btn  border-green-800 text-green-800 bg-transparent shadow-none"
          >
            Log In
          </Link>
          <Link
            to={"register"}
            className="btn bg-green-800 border-0 shadow-none text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
