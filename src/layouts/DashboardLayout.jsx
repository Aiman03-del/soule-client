import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <div className="flex">
      <aside className="w-64 bg-white shadow h-[calc(100vh-56px)] p-6">
        <nav className="flex flex-col gap-4">
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
      <div className="flex-1 p-8">
        <Outlet />
      </div>
      {/* <main className="flex-1 p-8">{children}</main> */}
    </div>
  </div>
);

export default DashboardLayout;
