
import { useState, useEffect } from "react";
import axios from "axios";

const AllUser = () => {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});

  const url = "http://localhost:3000/students";

  // GET students
  const getData = async () => {
    try {
      const res = await axios.get(url);
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // DELETE student
  const deleteUser = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await axios.delete(`${url}/${id}`);
      setStudents((prev) =>
        prev.filter((s) => s.id !== id)
      );
      if (editId === id) setEditId(null);
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT student
  const editUser = (student) => {
    setEditId(student.id);
    setForm({ ...student });
  };

  // UPDATE student
  const updateUser = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`${url}/${editId}`, {
        name: form.name,
        email: form.email,
        contact: form.contact,
        age: form.age
      });

      setEditId(null);
      getData();
      alert("Student updated successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-blue-50 flex flex-col">

      {/* MAIN CONTENT */}
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

            <div className="overflow-x-auto">
              <table className="w-full text-left">

                <thead className="bg-blue-100 text-blue-950">
                  <tr>
                    {["ID", "Name", "Email", "Contact", "Age", "Actions"].map((item) => (
                      <th key={item} className="px-6 py-4">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-blue-100">
                  {students.map((student, index) => (
                    <tr key={student.id} className="hover:bg-blue-50">

                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{student.name || "-"}</td>
                      <td className="px-6 py-4">{student.email || "-"}</td>
                      <td className="px-6 py-4">{student.contact || "-"}</td>
                      <td className="px-6 py-4">{student.age || "-"}</td>

                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <button
                            onClick={() => editUser(student)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deleteUser(student.id)}
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

            {students.length === 0 && (
              <p className="text-center py-10 text-gray-500">
                No Students Found
              </p>
            )}
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
                  <input
                    key={field}
                    type={
                      field === "email" ? "email" :
                      field === "age" ? "number" : "text"
                    }
                    placeholder={field}
                    value={form[field] ?? ""}
                    required
                    onChange={(e) =>
                      setForm({
                        ...form,
                        [field]: e.target.value
                      })
                    }
                    className="border border-blue-200 rounded-lg p-3 outline-none focus:border-blue-600"
                  />
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

