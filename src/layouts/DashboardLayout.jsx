import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <div className="flex flex-1 flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-white p-4 md:p-6 flex-shrink-0">
        <nav className="flex flex-row md:flex-col gap-4 justify-center md:justify-start">
          <a
            href="/dashboard/products"
            className="font-semibold hover:underline"
          >
            Products
          </a>
          <a
            href="/dashboard/add-product"
            className="font-semibold hover:underline"
          >
            Add Product
          </a>
        </nav>
      </aside>
      <div className="flex-1 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);

export default DashboardLayout;
