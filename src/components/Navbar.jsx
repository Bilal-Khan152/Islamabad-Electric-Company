import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar (Always Visible) */}
      <div className="flex flex-wrap shadow-lg sticky top-0 z-10 bg-blue-900 sm:justify-between  justify-center items-center w-full">
        <div className="flex items-center p-4">
          <p className="font-bold text-[#dfe6e9] text-lg md:text-xl custom-fontfamily 2xl:text-3xl">
            Islamabad Electric Supply Company
          </p>
        </div>

        <div className="hidden lg:flex gap-4 me-7">
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-[15px] cursor-pointer font-semibold">
          <Link to="/">Home</Link>  
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-[15px] cursor-pointer font-semibold">
             <Link to="/about">About Us</Link>
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-[15px] cursor-pointer font-semibold">
           <Link to="/contact"> Contact Us </Link>
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-[15px] cursor-pointer font-semibold">
            <Link to="/jobsSection"> Jobs </Link>
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-[15px] cursor-pointer font-semibold">
            <Link to="/pressReleases"> Press Releases </Link>
          </p>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden flex items-center me-4">
          <button
            className="text-white text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {isOpen && (
        <div className="flex flex-col bg-blue-900  absolute w-full items-center shadow-lg py-4">
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-lg cursor-pointer font-semibold px-4 py-2">
          <Link to="/">Home</Link> 
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-lg cursor-pointer font-semibold px-4 py-2">
          <Link to="/about">About Us</Link>
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-lg cursor-pointer font-semibold px-4 py-2">
          <Link to="/contact"> Contact Us </Link>
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-lg cursor-pointer font-semibold px-4 py-2">
          <Link to="/jobsSection"> Jobs </Link>
          </p>
          <p className="hover:text-gray-300 text-white text-sm md:text-base lg:text-lg cursor-pointer font-semibold px-4 py-2">
          <Link to="/pressReleases"> Press Releases </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
