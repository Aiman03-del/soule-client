import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => (
  <div className=" mx-auto min-h-screen flex flex-col">
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  </div>
);

export default MainLayout;
