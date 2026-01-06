import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Conference Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="font-bold text-2xl text-primary tracking-tight"
            >
              IGCCC 2026
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              About
            </Link>
            <Link
              to="/speakers"
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              Speakers
            </Link>
            <Link
              to="/program"
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              Program
            </Link>
            <Link
              to="/venue"
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              Venue
            </Link>
            <button className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition shadow-sm">
              Register
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md"
            >
              About
            </Link>
            <Link
              to="/speakers"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md"
            >
              Speakers
            </Link>
            <Link
              to="/program"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md"
            >
              Program
            </Link>
            <button className="w-full text-left mt-2 bg-primary text-white px-3 py-3 rounded-md font-semibold">
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
