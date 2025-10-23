import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <title>ToyTopia | Log In</title>
      <div className="w-full max-w-md sm:bg-white rounded-lg sm:shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="text-right mt-1">
              <button
                type="button"
                onClick={() =>
                  navigate("/forgot-password", { state: { email } })
                }
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-2 bg-primary/80 hover:bg-primary text-white rounded-md font-semibold transition"
          >
            Login
          </button>
        </form>
        <div className="divider">or</div>

        <div className="mt-4">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle size={24} />
            <span>Login with Google</span>
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
