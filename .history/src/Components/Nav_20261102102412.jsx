
import { Link } from "react-router-dom";
import img from "/Users/apple/Desktop/Au-react/src/Components/image.png";

function Nav() {
  return (
    <nav className="bg-blue-900 text-white flex w-full justify-between px-6 shadow-md">
      <div>
        <ul className="flex gap-5 h-16 items-center text-xl">
          <li>
            <Link to="/">
              <img src={img} className="h-15 w-30" alt="Logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className="font-bold hover:text-blue-200 transition-colors">
              Student Management System
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex h-16 gap-6 items-center text-lg">
          <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
          <li><Link to="/createuser" className="hover:text-blue-300 transition-colors">CreateUser</Link></li>
          <li><Link to="/alluser" className="hover:text-blue-300 transition-colors">AllUsers</Link></li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-4 h-16 items-center text-lg">
          <li>
            <Link to="/login" className="bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
