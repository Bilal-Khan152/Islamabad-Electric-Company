import React from 'react';

const ContactPageContent = () => {
  return (
    <div className="flex flex-wrap justify-center w-full">
      <div
        className="
          m-5 shadow-2xl border-[1px] rounded-xl border-blue-900 px-3 py-14 mt-11 mb-[99px] 2xl:mb-72
          hover:border-blue-500 bg-blue-300 
          sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4
        "
      >
        <p className="text-[22px] text-black 2xl:text-2xl font-bold mt-4 FONT_FAMILT">
          IESCO Headquater Address
        </p>
        <li className="text-sm 2xl:text-lg mt-4 font-semibold text-slate-700">
          Islamabad Electric Supply Company
        </li>
        <li className="text-sm 2xl:text-lg font-semibold text-slate-700">
          IESCO Head Office St,40
        </li>
        <li className="text-sm 2xl:text-lg font-semibold text-slate-700">
          Sector G-7/4 Islamabad
        </li>
        <li className="text-sm 2xl:text-lg font-semibold text-slate-700">
          Tel: 051-9252937,9252938,9252939, Fax: 051-9252927
        </li>
      </div>

      <div
        className="
          m-5 shadow-2xl border-[1px] rounded-xl border-blue-900 px-3 py-14 mt-11 mb-[99px] 2xl:mb-72
          hover:border-blue-500 bg-blue-300 
          sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4
        "
      >
        <p className="text-[22px] text-black 2xl:text-2xl font-bold mt-4 FONT_FAMILT">
          Contact Us
        </p>
        <select className="md:px-3 md:py-2 px-1 py-1 mt-4 border-[1px] bg-slate-200 outline-none border-black rounded w-full">
          <option value="value1">Select Directorate</option>
          <option value="value2">HR & ADMIN DIRECTORATE</option>
          <option value="value3">OPERATING DIRECTORATE</option>
          <option value="value3">TECHNICAL DIRECTORATE</option>
          <option value="value3">PLANNING & ENGINEERING DIRECTORATE</option>
          <option value="value3">PLANNING & ENGINEERING DIRECTORATE</option>
          <option value="value3">PLANNING & ENGINEERING GIS CELL</option>
          <option value="value3">CUSTOMER SERVICES GIS CELL</option>
        </select>
      </div>
    </div>
  );
};

export default ContactPageContent;
