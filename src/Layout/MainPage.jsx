import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="px-20 py-2 shadow-sm shadow-gray-50-50 backdrop-blur bg-yellow-50/5">
        <Navbar />
      </div>
      {/* Dynamic section */}
      <div className="container mx-auto py-12 px-8 min-h-[calc(100vh-304px)] ">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
