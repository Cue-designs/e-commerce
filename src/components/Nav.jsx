import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import chapo from "../assets/chapo.jpg";

const Nav = ({ cartActions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Brand Story", path: "/brand-story" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white text-gray-900 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo Placeholder */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img
              src={chapo}
              alt="El Chapo logo"
              className="w-10 h-10 object-cover rounded-lg"
            />
            <span className="font-bold text-lg hidden sm:inline text-gray-900">
              EL CHAPO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative p-2 hover:text-yellow-500 transition hidden md:block text-gray-700"
          >
            <FiShoppingCart size={22} />
            {cartActions.getTotalItems() > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartActions.getTotalItems()}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-3 space-y-2 border-t border-gray-200">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-700 hover:text-yellow-500 transition text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/cart"
              className="block py-2 text-gray-700 hover:text-yellow-500 transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Cart ({cartActions.getTotalItems()})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
