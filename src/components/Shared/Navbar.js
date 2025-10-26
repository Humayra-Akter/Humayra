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
    { name: "About", path: "/about", icon: <FaUserAlt /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Certificate", path: "/certificate", icon: <FaAward /> },
  ];

  return (
    <div
      className="bg-black text-white p-5"
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
                active === option.path ? "text-primary" : "hover:text-[#b3f2b1]"
              }`}
              onClick={() => handleSetActive(option.path)}
            >
              <div className="flex items-center gap-2">
                <span>{option.icon}</span>
                {option.name}
              </div>
              {/* Underline indicator */}
              <div
                className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-primary transition-all duration-300 ${
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
        <div className="fixed top-0 right-0 w-2/3 h-full bg-black shadow-lg max-w-xs text-primary text-center py-4 space-y-4 z-30">
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
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaHome,
//   FaUserAlt,
//   FaProjectDiagram,
//   FaAward,
//   FaBars,
// } from "react-icons/fa";

// const WheelNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [rotation, setRotation] = useState(0);
//   const [spinSpeed, setSpinSpeed] = useState(0);
//   const [targetRotation, setTargetRotation] = useState(null); // for snapping
//   const location = useLocation();
//   const menuRef = useRef(null);
//   const animationRef = useRef(null);

//   const navOptions = [
//     { name: "Home", path: "/", icon: <FaHome /> },
//     { name: "About", path: "/about", icon: <FaUserAlt /> },
//     { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
//     { name: "Certificate", path: "/certificate", icon: <FaAward /> },
//   ];

//   // Close menu when clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setIsOpen(false);
//         setTargetRotation(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Handle scroll wheel → adds spin speed
//   useEffect(() => {
//     if (!isOpen) return;

//     const handleWheel = (e) => {
//       setSpinSpeed((prev) => prev + e.deltaY * 0.002);
//       setTargetRotation(null); // cancel snapping if user scrolls
//     };

//     const wheelArea = menuRef.current;
//     wheelArea.addEventListener("wheel", handleWheel, { passive: true });

//     return () => wheelArea.removeEventListener("wheel", handleWheel);
//   }, [isOpen]);

//   // Momentum + snapping animation
//   useEffect(() => {
//     const animate = () => {
//       setRotation((prev) => {
//         let newRot = prev + spinSpeed;

//         // Handle snapping
//         if (targetRotation !== null) {
//           const diff = targetRotation - newRot;
//           newRot += diff * 0.1; // ease into target
//           if (Math.abs(diff) < 0.01) {
//             newRot = targetRotation; // snap fully
//             setTargetRotation(null);
//           }
//         }

//         return newRot;
//       });

//       // Apply friction if spinning
//       setSpinSpeed((prev) => {
//         const friction = 0.95;
//         const newSpeed = prev * friction;
//         return Math.abs(newSpeed) < 0.001 ? 0 : newSpeed;
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     if (isOpen) {
//       animationRef.current = requestAnimationFrame(animate);
//     }

//     return () => cancelAnimationFrame(animationRef.current);
//   }, [isOpen, spinSpeed, targetRotation]);

//   // Snap clicked item to the top
//   const handleSnapToTop = (index) => {
//     const itemAngle = (index / navOptions.length) * (2 * Math.PI);
//     // Normalize rotation into 0–2π range
//     const normalizedRotation =
//       ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
//     // Target angle is -π/2 (top)
//     const target = rotation + (-Math.PI / 2 - (itemAngle - normalizedRotation));
//     setTargetRotation(target);
//   };

//   return (
//     <div className="fixed cursor-pointer top-1/2 right-6 transform -translate-y-1/2 z-50">
//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="p-4 rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-lg text-primary hover:scale-110  cursor-pointer transition-transform"
//       >
//         <FaBars size={22} />
//       </button>

//       {/* Wheel Menu */}
//       <div
//         ref={menuRef}
//         className={`absolute top-1/2 right-0 transform -translate-y-1/2 transition-all duration-500 ${
//           isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
//         }`}
//       >
//         <div className="relative w-64 h-64 rounded-full bg-black/50 backdrop-blur-lg border border-white/20 shadow-xl flex items-center justify-center overflow-hidden">
//           {/* Center Label */}
//           <span className="text-primary font-bold select-none">Menu</span>

//           {/* Circular Links */}
//           {navOptions.map((option, index) => {
//             const angle =
//               rotation + (index / navOptions.length) * (2 * Math.PI);
//             const radius = 100;
//             const x = radius * Math.cos(angle);
//             const y = radius * Math.sin(angle);

//             return (
//               <Link
//                 key={option.path}
//                 to={option.path}
//                 onClick={() => {
//                   handleSnapToTop(index);
//                 }}
//                 className={`absolute flex flex-col items-center justify-center w-14 h-14 rounded-full text-white bg-black/70 backdrop-blur-md border border-white/20 shadow-md hover:text-primary hover:scale-110 transition-transform ${
//                   location.pathname === option.path ? "text-primary" : ""
//                 }`}
//                 style={{
//                   transform: `translate(${x}px, ${y}px)`,
//                 }}
//               >
//                 {option.icon}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WheelNavbar;
