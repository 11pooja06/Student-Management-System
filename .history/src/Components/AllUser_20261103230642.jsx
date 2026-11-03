
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/students";

const AllUser = () => {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET ALL STUDENTS
  const getData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API_URL);

      console.log("Students from MongoDB:", response.data);

      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        setStudents([]);
        setError("Unexpected response from server");
      }
    } catch (err) {
      console.error("Fetch students error:", err);
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to load students"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // DELETE STUDENT
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      setStudents((prev) =>
        prev.filter((student) => student._id !== id)
      );

      if (editId === id) {
        setEditId(null);
      }

      alert("Student deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert(
        err.response?.data?.message ||
        "Failed to delete student"
      );
    }
  };

  // SELECT STUDENT FOR EDIT
  const editUser = (student) => {
    setEditId(student._id);

    setForm({
      name: student.name || "",
      email: student.email || "",
      contact: student.contact || "",
      age: student.age ?? ""
    });
  };

  // UPDATE STUDENT
  const updateUser = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`${API_URL}/${editId}`, {
        name: form.name,
        email: form.email,
        contact: form.contact,
        age: Number(form.age)
      });

      setEditId(null);
      await getData();

      alert("Student updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert(
        err.response?.data?.message ||
        "Failed to update student"
      );
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-blue-50 flex flex-col">

      <main className="flex-1 w-full p-6 md:p-10">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl font-bold text-blue-950 mb-2">
            Student Management System
          </h1>

          <p className="text-gray-500 mb-8">
            View and manage all student records
          </p>

          {/* STUDENT TABLE */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="bg-blue-900 text-white px-6 py-5 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                All Students
              </h2>

              <span className="bg-blue-700 px-4 py-2 rounded-lg">
                Total: {students.length}
              </span>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4">
                {error}
                <button
                  onClick={getData}
                  className="ml-4 underline font-semibold"
                >
                  Retry
                </button>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full text-left">

                <thead className="bg-blue-100 text-blue-950">
                  <tr>
                    {[
                      "ID",
                      "Name",
                      "Email",
                      "Contact",
                      "Age",
                      "Actions"
                    ].map((item) => (
                      <th key={item} className="px-6 py-4">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-blue-100">
                  {students.map((student, index) => (
                    <tr
                      key={student._id}
                      className="hover:bg-blue-50"
                    >
                      <td className="px-6 py-4">
                        {index + 1}
                      </td>

                      <td className="px-6 py-4">
                        {student.name || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {student.email || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {student.contact || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {student.age ?? "-"}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex gap-3">

                          <button
                            onClick={() => editUser(student)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deleteUser(student._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                          >
                            Delete
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {loading ? (
              <p className="text-center py-10 text-gray-500">
                Loading students...
              </p>
            ) : !error && students.length === 0 ? (
              <p className="text-center py-10 text-gray-500">
                No Students Found
              </p>
            ) : null}

          </div>

          {/* EDIT FORM */}
          {editId !== null && (
            <form
              onSubmit={updateUser}
              className="bg-white p-6 rounded-xl shadow-lg mt-8"
            >
              <h2 className="text-xl font-bold text-blue-900 mb-5">
                Edit Student
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {["name", "email", "contact", "age"].map((field) => (
                  <div key={field}>
                    <label className="block mb-2 text-gray-700 font-medium capitalize">
                      {field}
                    </label>

                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "age"
                          ? "number"
                          : field === "contact"
                          ? "tel"
                          : "text"
                      }
                      placeholder={`Enter ${field}`}
                      value={form[field] ?? ""}
                      required
                      min={field === "age" ? 1 : undefined}
                      max={field === "age" ? 120 : undefined}
                      pattern={
                        field === "contact"
                          ? "[0-9]{10}"
                          : undefined
                      }
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          [field]: e.target.value
                        }))
                      }
                      className="w-full border border-blue-200 rounded-lg p-3 outline-none focus:border-blue-600"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setEditId(null)}
                  className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

        </div>
      </main>
    </div>
  );
};

export default AllUser;
