
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
              🎓 Smart Student Management
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-8">
              Managing Students
              <span className="block text-blue-300 mt-2">
                Made Simple.
              </span>
            </h1>

            <p className="text-blue-100 mt-6 text-lg leading-relaxed">
              A smarter way to organize student records.
              Add, view, update and manage everything
              from one beautiful dashboard.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/createuser"
                className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100"
              >
                + Add Student
              </Link>

              <Link
                to="/alluser"
                className="border border-white/50 px-6 py-3 rounded-xl hover:bg-white/10"
              >
                Explore Students →
              </Link>
            </div>
          </div>

          {/* Right Dashboard Card */}
          <div className="bg-white text-blue-950 rounded-3xl p-7 shadow-2xl">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                Dashboard Overview
              </h2>
              <span className="text-2xl">📊</span>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-5">
              <p className="text-gray-500">
                Total Registered Students
              </p>

              <h3 className="text-5xl font-bold text-blue-900 mt-3">
                {students.length}
              </h3>

              <p className="text-sm text-blue-600 mt-3">
                Live student records
              </p>
            </div>

            <h3 className="font-semibold mb-4">
              Recently Added Students
            </h3>

            <div className="space-y-3">
              {students.slice(-3).reverse().map((student) => (
                <div
                  key={student.id}
                  className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl"
                >
                  <div className="bg-blue-100 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {student.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="font-semibold">
                      {student.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {student.email}
                    </p>
                  </div>
                </div>
              ))}

              {students.length === 0 && (
                <p className="text-gray-500 text-sm">
                  No students added yet.
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">
            EVERYTHING IN ONE PLACE
          </p>

          <h2 className="text-3xl font-bold text-blue-950 mt-3">
            Manage Your Students Effortlessly
          </h2>

          <p className="text-gray-500 mt-3">
            Simple tools to make student management easier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: "📝",
              title: "Student Registration",
              text: "Quickly add new student details.",
              link: "/createuser"
            },
            {
              icon: "📋",
              title: "Student Directory",
              text: "View all registered student records.",
              link: "/alluser"
            },
            {
              icon: "⚙️",
              title: "Manage Records",
              text: "Edit or delete student information.",
              link: "/alluser"
            }
          ].map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-950">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {item.text}
              </p>

              <p className="text-blue-700 font-semibold mt-6">
                Get Started →
              </p>
            </Link>
          ))}

        </div>
      </section>

      

    </div>
  );
};

export default Home;
