import React from "react";

const ExecutiveSummary = () => {
  return (
    <div className="  mt-8  ">
      <div className="flex  items-center     ">
        <div className="md:w-[50%] w-full pt-6  h-full">
          <div className="">
            <p className=" font-bold md:text-3xl text-[16px] 2xl:text-3xl   text-blue-900
             custom-fontfamily
            Font-Family-Custom-Class">
              Executive Summary
            </p>
          </div>

          <div className="lg:w-[100%] mt-1  md:pr-10 py-8     rounded          ">
            <div>
              <p className="font-bold text-[16px] 2xl:text-2xl  text-gray-700 Font-Family-Custom-Class">
                What is IESCO ?
              </p>
              <p className="Font-Family-Custom-Class text-gray-800 text-sm 2xl:text-xl font-semibold">
                IESCO was formed in 1998 to take over the assets, functions and
                responsibilities of the erstwhile Islamabad Area Electricity
                Board, which was then a division of WAPDA.{" "}
              </p>
            </div>

            <div className="mt-2">
              <p className="font-bold text-[16px] 2xl:text-2xl  text-gray-700 Font-Family-Custom-Class">
                {" "}
                Scope of Activities/Purpose/what it provides
              </p>
              <p className="Font-Family-Custom-Class text-gray-800 text-sm 2xl:text-xl font-semibold">
                IESCO's core function is to supply, distribute and sell power
                (electricity) in the area from Attock to Jhelum, and from the
                river Indus to River Neelum in Kashmir.It services 3.2 million
                consumers directly, but touches the lives of more than 25 mln
                people living in the 6 districts its services.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[50%]   md:block hidden mt-8">
          <img
            className=" md:h-full w-full h-[70vh] rounded-md"
            src="https://static.vecteezy.com/system/resources/previews/027/935/192/non_2x/happy-middle-aged-business-man-ceo-standing-in-office-arms-crossed-photo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
