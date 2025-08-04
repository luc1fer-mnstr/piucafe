// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex bg-[#1a1a1a] justify-between items-center py-4 px-6 md:px-12 lg:px-24 relative">
      <Link to="/" className="text-2xl font-bold text-white">PIU Coffee Shop</Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-gray-300">
        <Link to="/" className="hover:text-white transition duration-300">Home</Link>
        <Link to="/menu" className="hover:text-white transition duration-300">Menu</Link>
        <Link to="/about" className="hover:text-white transition duration-300">About Us</Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link to="/login" className="text-gray-300 hover:text-white transition duration-300 hidden md:block">Login</Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] flex flex-col space-y-4 py-4 px-6 z-50">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="text-gray-300 hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className="text-gray-300 hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/login" 
            className="text-gray-300 hover:text-white transition duration-300 pt-2 border-t border-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;