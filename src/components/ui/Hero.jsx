import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden flex items-center justify-center pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-gray-900 max-w-2xl px-6 sm:px-8">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-tight">
          <span className="text-yellow-500 px-3 py-6">Premium</span>
          <br />
          <span>Streetwear</span>
        </h1>
        <p className="text-lg mx-4 px-4 py-2 sm:text-xl text-gray-600 mb-8 font-light leading-relaxed">
          Discover exclusive limited-edition streetwear. New collections
          dropping weekly. Shop the latest El Chapo drops.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link
            to="/shop"
            className="bg-yellow-500 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow-600 transition transform hover:scale-105 flex items-center justify-center gap-2 rounded-lg shadow-lg"
          >
            Shop Now <FiArrowRight />
          </Link>
          <Link
            to="/brand-story"
            className="border-2 border-gray-900 text-gray-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition transform hover:scale-105 rounded-lg"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-yellow-400 rounded-lg opacity-10 animate-bounce"></div>
      <div className="absolute top-20 right-10 w-24 h-24 border-2 border-yellow-400 rounded-full opacity-10 animate-pulse"></div>
    </div>
  );
};

export default Hero;
