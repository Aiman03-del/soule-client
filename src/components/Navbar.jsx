import React, { useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';

const logout = () => {
  localStorage.removeItem('access_token');
  window.location.href = '/login';
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-2 sm:px-6 py-3 flex flex-wrap justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center mb-2 sm:mb-0 flex-shrink-0">
        <FaBoxOpen className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Product</span>
      </div>
      {/* Mobile Menu Button */}
      <div className="absolute right-4 top-4 sm:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="focus:outline-none"
          aria-label="Menu"
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      {/* Centered Links */}
      <div className="flex-1 justify-center gap-4 sm:gap-6 mb-2 sm:mb-0 hidden sm:flex">
        <a href="/" className="font-semibold hover:underline">Home</a>
        <a href="/dashboard" className="font-semibold hover:underline">Dashboard</a>
      </div>
      {/* Login/Logout Button (Desktop) */}
      <div className="hidden sm:flex gap-2">
        <button
          className="bg-white text-blue-600 px-4 py-1 rounded font-semibold hover:bg-blue-100"
          onClick={() =>
            localStorage.getItem('access_token')
              ? logout()
              : (window.location.href = '/login')
          }
        >
          {localStorage.getItem('access_token') ? 'Logout' : 'Login'}
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-700 bg-opacity-95 flex flex-col items-center justify-start pt-20 sm:hidden transition-all">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <a
            href="/"
            className="font-semibold hover:underline py-3 w-full text-center border-b border-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/dashboard"
            className="font-semibold hover:underline py-3 w-full text-center border-b border-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </a>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-100 mt-4 w-11/12"
            onClick={() => {
              setMenuOpen(false);
              localStorage.getItem('access_token')
                ? logout()
                : (window.location.href = '/login');
            }}
          >
            {localStorage.getItem('access_token') ? 'Logout' : 'Login'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
