import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => (
  <div className="mx-auto min-h-screen flex flex-col">
    <Navbar />
    <div className="min-h-[calc(100vh-18vh)] lg:min-h-[calc(100vh-26vh)] px-2 sm:px-4">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default MainLayout;
