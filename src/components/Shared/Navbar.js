import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("/home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (path) => {
    setActive(path);
  };

  return (
    <nav
      className="fixed w-full bg-primary text-secondary shadow-lg z-10 flex justify-center items-center"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <div className="container mx-auto px-6 lg:px-10 py-4 flex justify-center items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {[
            { path: "/home", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/certificate", label: "Certificate" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`cursor-pointer relative transition-all duration-500 ${
                active === item.path
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }`}
              onClick={() => handleSetActive(item.path)}
            >
              {item.label}
              {/* Underline effect with smooth animation */}
              <span
                className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-yellow-300 transition-all duration-300 ${
                  active === item.path ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Left Icon */}
        <div className="md:hidden flex items-center">
          <h2
            style={{
              fontFamily: "'Poetsen One', sans-serif",
            }}
          >
            Humayra
          </h2>
        </div>
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="h-6 w-6 text-secondary"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="h-6 w-6 text-secondary"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        >
          <div
            className="fixed top-0 right-0 w-1/3 max-w-xs h-full bg-primary text-secondary text-center py-4 space-y-4 shadow-lg z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-secondary"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
            </button>
            {[
              { path: "/home", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/certificate", label: "Certificate" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block cursor-pointer relative transition-all duration-500 ${
                  active === item.path
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
                onClick={() => {
                  handleSetActive(item.path);
                  setIsOpen(false); // Close the menu after selection
                }}
              >
                {item.label}
                {/* Underline effect with smooth animation */}
                <span
                  className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-yellow-300 transition-all duration-300 ${
                    active === item.path ? "w-2/3" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
