// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex bg-[#1a1a1a] justify-between items-center py-4 px-6 md:px-12 lg:px-24">
      <Link to="/" className="text-2xl font-bold text-white">PIU Coffee Shop</Link>
      <div className="hidden md:flex space-x-8 text-gray-300">
        <Link to="/" className="hover:text-white transition duration-300">Home</Link>
        <Link to="/menu" className="hover:text-white transition duration-300">Menu</Link>
        <Link to="/about" className="hover:text-white transition duration-300">About Us</Link>
        <Link to="/facilities" className="hover:text-white transition duration-300">Facilities</Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/login" className="text-gray-300 hover:text-white transition duration-300 hidden md:block">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
