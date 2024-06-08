import React, { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="navbar bg-primary text-secondary fixed w-full z-50 top-0">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex relative">
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
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white dark:text-secondary transition duration-300"
              >
                {item}
              </a>
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
