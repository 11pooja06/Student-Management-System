
import { useState, useEffect } from "react";
import axios from "axios";

const AllUser = () => {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const url = "http://localhost:5000/api/students";

  // GET all students
  const getData = async () => {
    try {
      setError("");
      const res = await axios.get(url);
      setStudents(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load students");
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
        prev.filter((s) => s._id !== id)
      );

      if (editId === id) setEditId(null);
      alert("Student deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert(err.response?.data?.message || "Failed to delete student");
    }
  };

  // EDIT student
  const editUser = (student) => {
    setEditId(student._id);
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
        age: Number(form.age)
      });

      setEditId(null);
      await getData();
      alert("Student updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert(err.response?.data?.message || "Failed to update student");
    }
  };

  // Keep your existing JSX return below

  