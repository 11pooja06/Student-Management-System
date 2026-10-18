
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            🎓 Student Management System
          </h2>
          <p className="text-blue-200 text-sm">
            A simple and smart way to manage
            student records efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-blue-200">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/createuser" className="hover:text-white">
              Add Student
            </Link>
            <Link to="/alluser" className="hover:text-white">
              All Students
            </Link>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold mb-3">
            Our Features
          </h3>

          <p className="text-blue-200 text-sm leading-7">
            Student Registration
            <br />
            View Student Records
            <br />
            Edit Student Details
            <br />
            Delete Student Records
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 mt-8 pt-5 text-center text-blue-300 text-sm">
        © 2026 Student Management System. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
