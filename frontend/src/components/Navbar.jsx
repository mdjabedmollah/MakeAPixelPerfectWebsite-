import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-2">
            <img src="/Frame1.jpg" alt="logo" />
          </div>
          <ul className="hidden md:flex items-center gap-8 text-gray-600">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">My-Bookings</li>
            <li className="cursor-pointer hover:text-black">Blogs</li>
            <li className="cursor-pointer hover:text-black">Contact Us</li>
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
