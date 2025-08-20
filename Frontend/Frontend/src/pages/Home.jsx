import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-[url('https://www.dinnerpartydownload.org/wp-content/uploads/2013/08/stoplight.jpg')] h-screen pt-8 pl-9 flex justify-between flex-col w-full bg-red-400">
      {/* Logo */}
      <img
        className="w-24 ml-8"
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt="Uber Logo"
      />

      {/* White Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-8 mb-12">
        <h2 className="text-3xl font-bold mb-4">Get Started With Uber</h2>
        <Link
          to="/login"
          className="flex items-center justify-center bg-black w-full text-white py-3 rounded-lg hover:bg-gray-900 transition text-lg"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
