import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log Out Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const closeDrawer = () => {
    const drawerToggle = document.getElementById("navbar-drawer");
    if (drawerToggle) drawerToggle.checked = false;
  };

  const items = (
    <>
      <li>
        <NavLink to={"/"} onClick={closeDrawer}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/all-toys"} onClick={closeDrawer}>
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"} onClick={closeDrawer}>
          About Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/my-profile"} onClick={closeDrawer}>
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="drawer fixed z-50 w-full">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-primary">
        <nav className="navbar max-w-[1440px] mx-auto text-white">
          <div className="navbar-start flex items-center">
            <label
              htmlFor="navbar-drawer"
              className="lg:hidden text-white px-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <Link to={"/"} className="text-2xl font-bold text-white">
              Toy<span className="font-medium text-accent">Topia</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{items}</ul>
          </div>
          {loading ? (
            <p className="navbar-end">
              <BarLoader color="gray" />
            </p>
          ) : user ? (
            <div className="navbar-end flex items-center gap-2">
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
                    className="rounded-full w-[45px] border border-secondary cursor-pointer"
                    alt="User profile"
                  />
                </Link>
              </div>
              <button
                className="btn bg-secondary/70 hover:bg-secondary border-0 shadow-none text-white"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="navbar-end flex gap-2">
              <Link
                to={"/login"}
                className="btn border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent shadow-none"
              >
                Log In
              </Link>
              <Link
                to={"/register"}
                className="btn bg-secondary/70 hover:bg-secondary border-0 shadow-none text-white"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-primary text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              Toy<span className="text-accent">Topia</span>
            </h2>
            <label
              htmlFor="navbar-drawer"
              className="text-white cursor-pointer"
            >
              <RxCross2 size={24} />
            </label>
          </div>
          {items}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
