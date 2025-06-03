import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      {/* Navbar */}
      <div className=" mb-10">
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
