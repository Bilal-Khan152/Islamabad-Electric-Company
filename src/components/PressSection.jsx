import React from 'react';

const PressSection = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="mt-8">
        <p className="text-lg sm:text-xl lg:text-2xl ms-4 sm:ms-8 lg:ms-[145px] font-bold mt-4 FONT_FAMILT">
          MEDIA WATCH
        </p>
        <p className="text-md sm:text-lg lg:text-xl custom-fontfamily ms-4 sm:ms-8 lg:ms-[145px] mb-3 font-bold mt-4 FONT_FAMILT">
          Press Releases:
        </p>

        {/* Tables */}
        {[...Array(10)].map((_, index) => (
          <table
            key={index}
            className="w-[90%] md:w-[80%] mx-auto border border-blue-900 shadow-lg bg-blue-300 mb-4"
          >
            <thead>
              <tr>
                <th className="border border-blue-900 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base xl:text-lg Font-Family-Custom-Class">
                  Description
                </th>
                <th className="border border-blue-900 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base xl:text-lg Font-Family-Custom-Class">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-900 px-1 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base xl:text-[14px] text-center text-slate-800 font-semibold Font-Family-Custom-Class">

                  Due to System Maintenance, IESCO has Issued a Schedule for
                  Power Shut Down on {28 + index}th December 2024
                </td>
                <td className="border border-blue-900 px-1 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base xl:text-[14px] text-slate-800 text-center   font-semibold hover:text-blue-900 cursor-pointer Font-Family-Custom-Class">
                  English | Urdu
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default PressSection;
