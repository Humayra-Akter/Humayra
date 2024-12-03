
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
  FaHandshake,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [active, setActive] = useState("/home");
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (path) => {
    setActive(path);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  const navOptions = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Projects", path: "/projects", icon: <FaCalendarAlt /> },
    { name: "Certificate", path: "/certificate", icon: <FaHandshake /> },
  ];

  return (
    <nav
      className="p-4 bg-primary text-white"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      {/* Top Bar */}
      <div className="flex lg:justify-center lg:items-center justify-end items-end">
        {/* Large Screen Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          {navOptions.map((option, index) => (
            <Link
              key={option.path}
              to={option.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`cursor-pointer relative transition-all duration-500 ${
                active === option.path
                  ? "text-yellow-300"
                  : "hover:text-yellow-300 dark:text-white"
              }`}
              onClick={() => handleSetActive(option.path)}
            >
              <div className="flex items-center gap-2">
                <span>{option.icon}</span>
                {option.name}
              </div>
              {/* Underline indicator */}
              <div
                className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-yellow-300 transition-all duration-300 ${
                  location.pathname === option.path || hoveredIndex === index
                    ? "w-full"
                    : "w-0"
                }`}
              ></div>
            </Link>
          ))}
        </div>

        {/* Small Screen Menu Button */}
        <button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6 text-secondary" />
          ) : (
            <FaBars className="h-6 w-6 text-secondary" />
          )}
        </button>
      </div>

      {/* Small Screen Side Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg  max-w-xs  text-secondary text-center py-4 space-y-4 z-30">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4">
            <button
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Options */}
          <div className="flex flex-col space-y-4 mt-6">
            {navOptions.map((option) => (
              <Link
                key={option.path}
                to={option.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center text-lg px-4 py-3 rounded-md hover:bg-secondary transition-all ${
                  location.pathname === option.path
                    ? "bg-secondary text-white"
                    : "text-gray-300"
                }`}
              >
                <span className="mr-3 text-xl">{option.icon}</span>
                {option.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
