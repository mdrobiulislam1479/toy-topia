import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { BarLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Log Out Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      {user && (
        <li>
          <NavLink to={"/my-profile"}>My Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="bg-primary fixed w-full z-50">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-secondary mr-3 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-primary rounded-box  mt-6 w-[300px] p-2 shadow text-white z-10"
            >
              {items}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold text-white">
            Toy<span className="font-medium text-accent">Topia</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{items}</ul>
        </div>
        {loading ? (
          <p className="navbar-end">
            <BarLoader color="gray" />
          </p>
        ) : user ? (
          <div className="navbar-end">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <Link to={"/my-profile"}>
                <img
                  src={
                    user.photoURL ||
                    "https://img.icons8.com/glyph-neue/64/user-male-circle.png"
                  }
                  className="rounded-full w-[50px] border border-secondary cursor-pointer"
                  alt="User profile"
                />
              </Link>
            </div>

            <button
              className="btn bg-secondary/70 hover:bg-secondary border-0 shadow-none text-white ml-3"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <Link
              to={"login"}
              className="btn  border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent shadow-none"
            >
              Log In
            </Link>
            <Link
              to={"register"}
              className="btn bg-secondary/70 hover:bg-secondary border-0 shadow-none text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
