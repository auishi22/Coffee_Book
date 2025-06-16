import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/15 px-20 py-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="border px-6 py-2 rounded-xl border-yellow-400 hover:bg-yellow-50 hover:text-yellow-500 hover:border-none">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="border px-6 py-2 rounded-xl border-yellow-400 hover:bg-yellow-50 hover:text-yellow-500 hover:border-none">
              <NavLink to="/coffees">Coffees</NavLink>
            </li>
            <li className="border px-6 py-2 rounded-xl border-yellow-400 hover:bg-yellow-50 hover:text-yellow-500 hover:border-none">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/">
          <h1 className=" text-xl md:text-4xl font-bold text-yellow-400">
            Coffee__Books
          </h1>
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-6 font-medium px-1">
          
            <NavLink className={({isActive})=>`border px-6 py-2 rounded-xl border-yellow-400 text-yellow-400  ${isActive ? 'bg-yellow-300 text-white font-bold border-yellow-500' : 'hover:bg-yellow-50 hover:text-yellow-500 hover:font-bold hover:border-none' }`} to="/">Home</NavLink>
            <NavLink className={({isActive})=>`border px-6 py-2 rounded-xl border-yellow-400 text-yellow-400 hover:bg-yellow-50 hover:text-yellow-500 hover:font-bold hover:border-none ${isActive ? 'bg-yellow-300 text-white font-bold border-yellow-500' : '' }`} to="/coffees">Coffees</NavLink>
            <NavLink className={({isActive})=>`border px-6 py-2 rounded-xl border-yellow-400 text-yellow-400 hover:bg-yellow-50 hover:text-yellow-500 hover:font-bold hover:border-none ${isActive ? '  *-bg-yellow-300 text-white font-bold border-yellow-500' : '' }`} to="/dashboard">Dashboard</NavLink>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
