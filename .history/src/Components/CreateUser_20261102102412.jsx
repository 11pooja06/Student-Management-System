
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      contact,
      age
    };

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:3000/students",
        payload
      );

      alert("Student added successfully!");
      navigate("/alluser");

    } catch (error) {
      console.log("Error:", error);
      alert("Failed to add student.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-blue-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-blue-100 p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎓</div>

          <h1 className="text-3xl font-bold text-blue-950">
            Add New Student
          </h1>

          <p className="text-gray-500 mt-2">
            Enter student details to create a new record
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter student name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contact Number
            </label>

            <input
              type="tel"
              placeholder="Enter contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Enter a 10-digit contact number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Age
            </label>

            <input
              type="number"
              placeholder="Enter student age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="1"
              max="120"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-3">

            <button
              type="button"
              onClick={() => navigate("/alluser")}
              className="w-1/2 border border-blue-900 text-blue-900 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-1/2 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Student"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateUser;
