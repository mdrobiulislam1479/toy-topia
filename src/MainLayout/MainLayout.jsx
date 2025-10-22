import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-[#FFF7DD50] flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
