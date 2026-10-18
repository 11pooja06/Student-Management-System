
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: ""
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Save signup data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/users",
        form
      );

      alert("Signup successful!");
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Signup failed!");
    }
  };

  return (
    <div className="min-h-[80vh] bg-blue-50 flex items-center justify-center px-4 py-12">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎓</div>

          <h1 className="text-3xl font-bold text-blue-950">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join our Student Management System
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {[
            { name: "name", type: "text", label: "Full Name" },
            { name: "email", type: "email", label: "Email Address" },
            { name: "password", type: "password", label: "Password" },
            { name: "contact", type: "tel", label: "Contact Number" }
          ].map((field) => (
            <div key={field.name}>

              <label className="block text-gray-700 mb-2 font-medium">
                {field.label}
              </label>

              <input
                type={field.type}
                name={field.name}
                placeholder={`Enter ${field.label}`}
                value={form[field.name]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
