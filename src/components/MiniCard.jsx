import React from "react";

const MiniCard = () => {
  return (
    <>
      <div className="flex  w-full flex-wrap  gap-6   2xl:mt-36 lg:mt-20 mt-0   justify-center">
 
          <div   className=" text-white   border-[1px] border-blue-900 rounded-xl 
               hover:shadow-2xl hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out
               md:max-w-xs m-5 shadow-lg bg-[#ecf0f1] "
        >
          <div class="md:flex  flex-col items-center p-5">
            <img
              className="rounded-md md:w-[150px]  2xl:w-[250px] 2xl:h-[230px]  md:h-[100px] w-[200px] h-[150px]"
              src="https://4.imimg.com/data4/DC/EQ/MY-12323384/computer-printer.jpg"
              alt=""
            />

            <p className="Font-Family-Custom-Class mt-3 text-center text-[15px] 2xl:text-2xl  text-black  custom-hover-effect font-semibold cursor-pointer">
              Print New Bill
            </p>
          </div>
        </div>



        <div   className=" text-white   border-[1px] border-blue-900 rounded-xl 
               hover:shadow-2xl hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out
               md:max-w-xs m-5 shadow-lg bg-[#ecf0f1] "
        >
          <div class="md:flex  flex-col items-center p-5">
            <img
              className="rounded-md md:w-[150px]  2xl:w-[250px] 2xl:h-[230px]  md:h-[100px] w-[200px] h-[150px]"
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              alt=""
            />

            <p className="Font-Family-Custom-Class mt-3 text-center text-[15px] 2xl:text-2xl  text-black  custom-hover-effect font-semibold cursor-pointer">
              Online New Connection
            </p>
          </div>
        </div>




        <div
           className=" text-white   border-[1px] border-blue-900 rounded-xl 
           hover:shadow-2xl hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out
           md:max-w-xs m-5 shadow-lg bg-[#ecf0f1] "
        >
          <div class="md:flex flex-col justify-evenly items-center p-5">
            <img
                className="rounded-md md:w-[150px]  2xl:w-[250px] 2xl:h-[230px]  md:h-[100px] w-[200px] h-[150px]"
             
              src="https://media.istockphoto.com/id/1085122436/photo/young-plant-growing-in-garden-with-sunlight.jpg?s=612x612&w=0&k=20&c=huN8N8gYoN7bXBrPGOOzbMQGr9KPo8ikvfR1hv2sA-E="
              alt=""
            />

            <p className="Font-Family-Custom-Class text-center mt-3 text-[15px] 2xl:text-2xl text-black  custom-hover-effect font-semibold cursor-pointer">
              Tarrif Guide
            </p>
          </div>
        </div>



        <div
           className=" text-white   border-[1px] border-blue-900 rounded-xl 
           hover:shadow-2xl hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out
           md:max-w-xs m-5 shadow-lg bg-[#ecf0f1] "
        >
          <div class="md:flex flex-col justify-evenly items-center p-5">
            <img
              className="rounded-md md:w-[150px]  2xl:w-[250px] 2xl:h-[230px]  md:h-[100px] w-[200px] h-[150px]"
              src="https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ocaFzVRnDARFnANjyd6CMrwAI0Ua6I0Na_MKej8IysA="
              alt=""
            />

            <p className="Font-Family-Custom-Class mt-3 text-center text-black  text-[15px] 2xl:text-2xl custom-hover-effect font-semibold cursor-pointer">
              Customer Center
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default MiniCard;
