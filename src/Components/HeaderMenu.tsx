import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon Library

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">MyBrand</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-blue-700 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
