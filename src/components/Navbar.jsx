import React from 'react';
import { FaBoxOpen } from 'react-icons/fa6';


const logout = () => {
  localStorage.removeItem('access_token');
  window.location.href = '/login';
};

const Navbar = () => (
  <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center">
      <FaBoxOpen className="h-8 w-8 mr-2" />
      <span className="text-xl font-bold">Product</span>
    </div>
    {/* Centered Links */}
    <div className="flex-1 flex justify-center gap-6">
      <a href="/" className="font-semibold hover:underline">Home</a>
      <a href="/dashboard" className="font-semibold hover:underline">Dashboard</a>
    </div>
    {/* Login/Logout Button */}
    <div className="flex gap-2">
      <button
        className="bg-white text-blue-600 px-4 py-1 rounded font-semibold hover:bg-blue-100"
        onClick={() => (localStorage.getItem('access_token') ? logout() : window.location.href = '/login')}
      >
        {localStorage.getItem('access_token') ? 'Logout' : 'Login'}
      </button>
    </div>
  </nav>
);

export default Navbar;
