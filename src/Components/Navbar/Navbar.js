import React from "react";
import { NavLink } from "react-router-dom";
//
const Navbar = () => {
  return (
    <div className="py-6 bg-[#d8e2dc] w-full">
      <div className="flex justify-between items-center md:w-2/3 w-full md:mx-auto md:text-xl text-sm px-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#023047] border-b-2 border-[#023047]" : "text-[#577590]"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#023047] border-b-2 border-[#023047]" : "text-[#577590]"
          }
          to="/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#023047] border-b-2 border-[#023047]" : "text-[#577590]"
          }
          to="/moreshoes"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#023047] border-b-2 border-[#023047]" : "text-[#577590]"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#023047] border-b-2 border-[#023047]" : "text-[#577590]"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#023047] border-b-2 border-[#023047]" : "text-[#577590]"
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
