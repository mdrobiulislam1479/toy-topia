import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

export default function Register() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasMinLength = password.length >= 6;

  const allValid = hasUppercase && hasLowercase && hasMinLength;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md sm:bg-white rounded-lg sm:shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="mt-2 text-sm">
              <p
                className={`flex items-center gap-2 ${
                  hasUppercase ? "text-green-600" : "text-gray-500"
                }`}
              >
                {hasUppercase ? <FaCircleCheck /> : <RxCross2 />} Must have an
                uppercase letter
              </p>
              <p
                className={`flex items-center gap-2 ${
                  hasLowercase ? "text-green-600" : "text-gray-500"
                }`}
              >
                {hasLowercase ? <FaCircleCheck /> : <RxCross2 />} Must have a
                lowercase letter
              </p>
              <p
                className={`flex items-center gap-2 ${
                  hasMinLength ? "text-green-600" : "text-gray-500"
                }`}
              >
                {hasMinLength ? <FaCircleCheck /> : <RxCross2 />} At least 6
                characters long
              </p>
            </div>
          </div>

          <button
            type="button"
            className={`w-full py-2 rounded-md font-semibold text-white transition ${
              allValid
                ? "bg-primary/80 hover:bg-primary"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!allValid}
          >
            Register
          </button>
        </form>
        <div className="divider">or</div>

        <div className="mt-4">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
