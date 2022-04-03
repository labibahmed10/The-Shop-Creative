import React from "react";
import { NavLink } from "react-router-dom";
//
const Navbar = () => {
  return (
    <div className="py-6 bg-[#d8e2dc]">
      <div className="flex justify-between items-center w-2/3 mx-auto text-xl">
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
          to="/review"
        >
          Reviews
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
