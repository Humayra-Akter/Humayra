import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div
      className="navbar bg-primary text-secondary fixed w-full z-50 top-0"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <div className="navbar-start"></div>
      <div className="navbar-center flex relative">
        <ul className="menu menu-horizontal px-1 space-x-10 text-center relative">
          {navItems.map((item) => (
            <li
              key={item}
              className={`group relative ${
                selected === item
                  ? "text-secondary font-bold dark:text-secondary dark:font-bold"
                  : ""
              }`}
              onClick={() => setSelected(item)}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-white dark:text-secondary transition duration-300"
              >
                {item}
              </Link>
              {selected === item}
            </li>
          ))}
        </ul>
        <div
          className="absolute bottom-0 left-0 h-1 bg-secondary dark:bg-secondary transition-transform duration-500"
          style={{
            width: `${100 / navItems.length}%`,
            transform: `translateX(${navItems.indexOf(selected) * 100}%)`,
          }}
        ></div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
