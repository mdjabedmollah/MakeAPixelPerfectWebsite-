import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-14 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold">+</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Phudu
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 text-gray-600 mb-8">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            My-Bookings
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Blogs
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact Us
          </a>
        </nav>

        {/* Divider */}
        <div className="border-t max-w-xl mx-auto mb-8"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-105 transition">
            <FaFacebookF />
          </a>

          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 transition">
            <FaXTwitter />
          </a>

          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:scale-105 transition">
            <FaLinkedinIn />
          </a>

          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:scale-105 transition">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
