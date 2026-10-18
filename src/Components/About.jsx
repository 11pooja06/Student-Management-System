
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: "📝",
      title: "Easy Registration",
      text: "Add new students quickly and easily."
    },
    {
      icon: "📋",
      title: "Student Records",
      text: "View all student information in one place."
    },
    {
      icon: "✏️",
      title: "Edit & Update",
      text: "Update student details whenever needed."
    },
    {
      icon: "🗑️",
      title: "Delete Records",
      text: "Remove outdated student records easily."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white text-center px-6 py-20">

        <span className="bg-white/10 px-5 py-2 rounded-full text-sm">
          🎓 ABOUT OUR PLATFORM
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-8">
          Simplifying Student Management
        </h1>

        <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg">
          A simple and modern platform designed to
          organize, manage and maintain student records
          efficiently.
        </p>

      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-600 font-semibold mb-3">
            WHO WE ARE
          </p>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            A Smarter Way to Manage Students
          </h2>

          <p className="text-gray-600 leading-8">
            Our Student Management System helps users
            store, access and manage student information
            through a simple and user-friendly interface.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            With easy registration, student listings,
            editing and deletion features, managing
            records becomes faster and more organized.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-blue-100">

          <div className="text-5xl mb-6">🎯</div>

          <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-8">
            To make student record management simple,
            efficient and accessible through modern
            web technology.
          </p>

          <div className="mt-8 bg-blue-50 rounded-xl p-5">
            <p className="text-blue-900 font-semibold">
              Simple • Organized • Efficient
            </p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-blue-50 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-950 text-center mb-4">
            What You Can Do
          </h2>

          <p className="text-gray-500 text-center mb-12">
            Everything you need to manage student records.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-7">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* Call to Action */}
      <section className="text-center px-6 py-20">

        <h2 className="text-3xl font-bold text-blue-950">
          Ready to Get Started?
        </h2>

        <p className="text-gray-500 mt-4 mb-8">
          Start managing your student records today.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            to="/createuser"
            className="bg-blue-900 text-white px-7 py-3 rounded-xl hover:bg-blue-800 transition-colors"
          >
            + Add Student
          </Link>

          <Link
            to="/alluser"
            className="border border-blue-900 text-blue-900 px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            View Students →
          </Link>

        </div>

      </section>

      

    </div>
  );
};

export default About;

