
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo login - authentication will be added later
    console.log("Email:", email);
    alert("Login form submitted!");
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] bg-blue-50 flex items-center justify-center px-4 py-12">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎓</div>

          <h1 className="text-3xl font-bold text-blue-950">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your Student Management System
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Login
          </button>

        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
