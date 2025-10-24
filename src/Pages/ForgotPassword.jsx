import { useState, useEffect, use } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { forgotPassword, setLoading } = use(AuthContext);
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
        toast.success("Password reset email sent!");
        window.open("https://mail.google.com", "_blank");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (!error?.code) {
          toast.error("An unknown error occurred.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many requests. Try again later.");
        } else if (error.code === "auth/invalid-credential") {
          toast.error("The login credential is invalid. Please try again.");
        } else {
          toast.error(`${error.message}`);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <title>ToyTopia | Forgot Password</title>
      <div
        className="w-full max-w-md sm:bg-white rounded-lg sm:shadow-md p-8"
        data-aos="zoom-in"
      >
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
