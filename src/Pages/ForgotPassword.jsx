import { useState, useEffect, use } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const ForgetPassword = () => {
  const { forgotPassword } = use(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    forgotPassword(email)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <title>ToyTopia | Forgot Password</title>
      <div className="w-full max-w-md sm:bg-white rounded-lg sm:shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary/80 hover:bg-primary text-white rounded-md font-semibold transition"
          >
            Reset Password
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Remembered your password?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
