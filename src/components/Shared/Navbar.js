// src/components/Shared/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaAward,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [active, setActive] = useState("/home");
  const location = useLocation();

  const handleSetActive = (path) => {
    setActive(path);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navOptions = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Publications", path: "/publications", icon: <FaAward /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Certificate", path: "/certificate", icon: <FaAward /> },
    { name: "About", path: "/about", icon: <FaUserAlt /> },
  ];

  return (
    <div
      className="bg-black text-white p-5"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      <div className="flex lg:justify-center lg:items-center justify-end items-end">
        <div className="hidden md:flex items-center space-x-8">
          {navOptions.map((option, index) => (
            <Link
              key={option.path}
              to={option.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`cursor-pointer relative transition-all duration-500 ${
                active === option.path ? "text-primary" : "hover:text-[#b3f2b1]"
              }`}
              onClick={() => handleSetActive(option.path)}
            >
              <div className="flex items-center gap-2">
                <span>{option.icon}</span>
                {option.name}
              </div>

              <div
                className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-primary transition-all duration-300 ${
                  location.pathname === option.path || hoveredIndex === index
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        <button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-2xl md:hidden focus:outline-none"
          type="button"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6 text-secondary" />
          ) : (
            <FaBars className="h-6 w-6 text-secondary" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 right-0 w-2/3 h-full bg-black shadow-lg max-w-xs text-primary text-center py-4 space-y-4 z-30">
          <div className="flex items-center justify-between p-4">
            <button
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl focus:outline-none"
              type="button"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col space-y-4 mt-6">
            {navOptions.map((option) => (
              <Link
                key={option.path}
                to={option.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center text-lg px-4 py-3 rounded-md hover:bg-accent transition-all ${
                  location.pathname === option.path
                    ? "bg-secondary text-primary"
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
    </div>
  );
};

export default Navbar;
