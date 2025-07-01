import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = () => (
  <div className="text-center mt-80 lg:mt-50 px-2">
    <h1 className="text-4xl font-bold mb-4 break-words">Welcome to Product Management App</h1>
    <p className="text-lg text-gray-700 mb-8 break-words">
      Manage your products easily and efficiently.
    </p>
    <a
      href="/dashboard"
      className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 inline-block"
    >
      Go to Dashboard
    </a>
  </div>
);

export default Home;
