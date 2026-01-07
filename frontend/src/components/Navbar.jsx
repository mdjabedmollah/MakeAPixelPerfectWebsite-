import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/Frame1.jpg" alt="logo" />
          </div>
          <ul className="hidden md:flex items-center gap-8 text-gray-600">
            <li className="cursor-pointer hover:text-black" >
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="cursor-pointer hover:text-black"> <NavLink to="/blogs">My-Bookings</NavLink></li>
            <li className="cursor-pointer hover:text-black">  <NavLink to="/blogs">Blogs</NavLink></li>
          
            <li className="cursor-pointer hover:text-black"> <NavLink to="/blogs">Contact Us</NavLink></li>
          </ul>
          <div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Emergency
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
