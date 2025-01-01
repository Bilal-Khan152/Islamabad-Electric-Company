import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar (Always Visible) */}
    <div className="flex flex-row ">

      <div className="flex md:flex-row flex-col  md:justify-between justify-evenly  items-center w-full  ">
        <div className="flex items-center   ">
          <img
            className=" md:w-[130px] lg:w-[90px] lg:h-[90px] md:h-[130px] md:block hidden "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiOJo8fXzamsxCXsiefW9l4fTsCdwOLn--Q&s"
            alt=""
          />
          <p className="font-bold md:text-[17px] mt-2 md:mt-0 text-sm 2xl:text-3xl text-blue-900">
            Islamabad Electric Supply Company
          </p>
        </div>

        <div className="flex md:gap-4 gap-2 me-7 ">
          <p className="  hover:text-[#1D4ED8] hidden lg:block lg:text-[15px] text-xs 2xl:text-2xl cursor-pointer font-semibold">
            Webmail
          </p>
          <p className=" hover:text-[#1D4ED8] hidden lg:block lg:text-[15px] text-xs 2xl:text-2xl cursor-pointer font-semibold">
            Press Releases
          </p>
          <p className=" hover:text-[#1D4ED8] lg:text-[15px] hidden lg:block text-xs 2xl:text-2xl cursor-pointer font-semibold">
            Jobs
          </p>
          <p className=" hover:text-[#1D4ED8] lg:text-[15px] text-xs hidden lg:block 2xl:text-2xl cursor-pointer font-semibold">
            FAQ
          </p>
          <p className=" hover:text-[#1D4ED8] lg:text-[15px] text-xs 2xl:text-2xl hidden lg:block cursor-pointer font-semibold">
            Contact Us
          </p>
        </div>
      </div>

      {/* Hamburger Button for Navbar 2 */}
      <div className="lg:hidden flex  justify-end px-4 py-2">
        <button
          className="text-xl   font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Main Navbar (Responsive) */}
      <div
        className={`${
          isOpen ? "flex " : "hidden "
        } lg:flex flex-col lg:flex-row lg:items-center  absolute z-10 top-20 py-3 lg:justify-center bg-[#8395a7] w-full lg:h-[12vh] text-sm`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-6   lg:justify-center items-center w-full gap-2   ">
          <li className="custom-hover-effect 2xl:text-3xl   cursor-pointer font-semibold">
            Home
          </li>
          <li className="relative group">
            <span className="custom-hover-effect cursor-pointer 2xl:text-3xl font-semibold">
              About Us
            </span>
            <ul className="absolute z-10 text-sm left-0 hidden group-hover:block bg-white shadow-2xl rounded-lg mt-2 w-48">
              <li className="px-1 py-1  hover:bg-gray-300 cursor-pointer">
                BOD Profile
              </li>
              <li className="px-1 py-1   hover:bg-gray-300 cursor-pointer">
                ISCEO BOD
              </li>
              <li className="px-1 py-1  hover:bg-gray-300 cursor-pointer">
                What We Do
              </li>
              <li className="px-1 py-1  hover:bg-gray-300 cursor-pointer">
                The Ministry
              </li>
              <li className="px-1  py-1 hover:bg-gray-300 cursor-pointer">
                Vission , Mission and Values
              </li>
              <li className="px-1  py-1  hover:bg-gray-300 cursor-pointer">
              Legal Status
              </li>
              <li className="px-1  py-1 hover:bg-gray-300 cursor-pointer">
              Organizational Structure
              </li>
              <li className="px-1 py-1  hover:bg-gray-300 cursor-pointer">
              Organizational Setup
              </li>
              <li className="px-1  py-1   hover:bg-gray-300 cursor-pointer">
               Consumer Profile
              </li>
              <li className="px-1  py-1 hover:bg-gray-300 cursor-pointer">
               Consumer Service Manual
              </li>
              <li className="px-1 py-1  hover:bg-gray-300 cursor-pointer">
               PEPCO
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="custom-hover-effect 2xl:text-3xl cursor-pointer font-semibold">
              Projects
            </span>
            <ul className="absolute z-10 text-sm left-0 hidden group-hover:block bg-white shadow-2xl rounded-lg mt-2 w-48">
              <li className="px-1 py-1  hover:bg-gray-300 cursor-pointer">
                Project Managment Unit
              </li>
              <li className="px-1 py-1   hover:bg-gray-300 cursor-pointer">
                Secure Electricity Meter
              </li>
              <li className="px-1 py-1  hover:bg-gray-300 cursor-pointer">
                Village Electrification Cell
              </li>
            
            </ul>
          </li>
          <li className="relative group">
            <span className="custom-hover-effect 2xl:text-3xl cursor-pointer font-semibold">
              Customer Services
            </span>
            <ul className="absolute z-10 text-sm left-0 hidden group-hover:block bg-white shadow-2xl rounded-lg mt-2 w-48">
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Bill View/Print Duplicate Bill
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Old vs New Ref No
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Tarrif Guide
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
               Prcodure
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Customer Center
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Maintenance Schedule
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Test Report Contractor
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Daily Monthly Quarterly Data
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Load SHedding Managment
              </li>
               
            </ul>
          </li>
          <li className="custom-hover-effect 2xl:text-3xl cursor-pointer font-semibold">
            Public Notice
          </li>
          <li className="relative group">
            <span className="custom-hover-effect 2xl:text-3xl cursor-pointer font-semibold">
              Downloads
            </span>
            <ul className="absolute z-10 text-sm left-0 hidden group-hover:block bg-white shadow-2xl rounded-lg mt-2 w-48">
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Employee Download
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Customer Download
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="custom-hover-effect 2xl:text-3xl cursor-pointer font-semibold">
              IESCO GIS
            </span>
            <ul className="absolute z-10 text-sm left-0 hidden group-hover:block bg-white shadow-2xl rounded-lg mt-2 w-48">
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                PDMS
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                EMS
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                GIS SOP
              </li>
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                GIS Maps
              </li>
              
            </ul>
          </li>
          <li className="relative group">
            <span className="custom-hover-effect 2xl:text-3xl cursor-pointer font-semibold">
              Departments
            </span>
            <ul className="absolute z-10 text-sm left-0 hidden group-hover:block bg-white shadow-2xl rounded-lg mt-2 w-48">
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Examination Cell
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                New MIS IESCO
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Email Address
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Search Ref No
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
               Newly Created Subdiv Ref No
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Consumer Profile 
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                ISECO Dashboard 
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Regional Center 
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Financial 
              </li>
              
              <li className="px-1 py-1 hover:bg-gray-300 cursor-pointer">
                Pension Cell 
              </li>
              
              
            </ul>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Navbar;
