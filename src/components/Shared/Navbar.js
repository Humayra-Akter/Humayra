// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState("/home");

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSetActive = (path) => {
//     setActive(path);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

//   return (
//     <div
//       className="fixed w-full bg-primary text-secondary shadow-lg z-10 flex justify-center items-center"
//       style={{
//         fontFamily: "'Poetsen One', sans-serif",
//       }}
//     >
//       <div className="container mx-auto px-6 lg:px-10 py-4 flex justify-center items-center">
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-lg">
//           {[
//             { path: "/home", label: "Home" },
//             { path: "/about", label: "About" },
//             { path: "/projects", label: "Projects" },
//             { path: "/certificate", label: "Certificate" },
//           ].map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`cursor-pointer relative transition-all duration-500 ${
//                 active === item.path
//                   ? "text-yellow-300"
//                   : "hover:text-yellow-300 dark:text-white"
//               }`}
//               onClick={() => handleSetActive(item.path)}
//             >
//               {item.label}
//               {/* Underline effect with smooth animation */}
//               <span
//                 className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-yellow-300 transition-all duration-300 ${
//                   active === item.path ? "w-full" : "w-0"
//                 }`}
//               />
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Left Icon */}
//         <div className="md:hidden flex items-center">
//           <h2
//             style={{
//               fontFamily: "'Poetsen One', sans-serif",
//             }}
//           >
//             Humayra
//           </h2>
//         </div>
//         <div className="md:hidden flex items-center ml-auto">
//           <button onClick={toggleMenu} aria-label="Toggle menu">
//             {isOpen ? (
//               <FontAwesomeIcon
//                 icon={faTimes}
//                 className="h-6 w-6 text-secondary"
//               />
//             ) : (
//               <FontAwesomeIcon
//                 icon={faBars}
//                 className="h-6 w-6 text-secondary"
//               />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20"
//           onClick={toggleMenu}
//         >
//           <div
//             className="fixed top-0 right-0 w-2/3 max-w-xs h-full bg-primary text-secondary text-center py-4 space-y-4 shadow-lg z-30"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-4 right-4 text-secondary"
//               onClick={toggleMenu}
//               aria-label="Close menu"
//             >
//               <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
//             </button>
//             {[
//               { path: "/home", label: "Home" },
//               { path: "/about", label: "About" },
//               { path: "/projects", label: "Projects" },
//               { path: "/certificate", label: "Certificate" },
//             ].map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`block cursor-pointer relative transition-all duration-500 ${
//                   active === item.path
//                     ? "text-yellow-300 dark:text-white"
//                     : "hover:text-yellow-300 dark:text-white"
//                 }`}
//                 onClick={() => {
//                   handleSetActive(item.path);
//                   setIsOpen(false);
//                 }}
//               >
//                 {item.label}
//                 {/* Underline effect with smooth animation */}
//                 <span
//                   className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-yellow-300 transition-all duration-300 ${
//                     active === item.path ? "w-2/3" : "w-0"
//                   }`}
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
  FaBook,
  FaHandshake,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../images/humayra.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex justify-center items-center">
        {/* Logo */}
        {/* <Link to="/" aria-label="Home">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </Link> */}

        {/* Large Screen Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          {navOptions.map((option, index) => (
            <Link
              key={option.path}
              to={option.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative text-lg font-medium ${
                location.pathname === option.path
                  ? "text-secondary"
                  : "text-gray-300"
              } hover:text-secondary transition-all`}
            >
              <div className="flex items-center gap-2">
                <span>{option.icon}</span>
                {option.name}
              </div>
              {/* Underline indicator */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full rounded transition-all duration-300 ${
                  location.pathname === option.path || hoveredIndex === index
                    ? "bg-secondary"
                    : "opacity-0"
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
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Small Screen Side Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
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
