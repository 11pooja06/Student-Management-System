
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import AllUser from "./Components/Alluser";
import CreateUser from "./Components/CreateUser";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Nav />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/alluser" element={<AllUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
