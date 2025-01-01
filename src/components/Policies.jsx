import React from 'react';

const Policies = () => {
  return (
    <div className='  mt-8'>
       <div>
          <p className="font-bold md:text-[16px] 2xl:text-3xl   text-blue-900 Font-Family-Custom-Class">Policies</p>
        </div>
      <div className='w-[100%] lg:px-3 px-1 mt-1 bg-[#ecf0f1] py-3  min-h-[82px] border-[1px] border-blue-900 rounded-md shadow-lg'>
       
        <div>
          <ul className='list-disc list-inside '>
            <li >
              <span className='Font-Family-Custom-Class text-xs 2xl:text-2xl hover:text-blue-900 cursor-pointer text-gray-800  font-semibold'>Code of Conduct Rules</span>
            </li>
            <li  className='mt-2'>
              <span className=' Font-Family-Custom-Class hover:text-blue-900 2xl:text-2xl cursor-pointer text-gray-800 text-xs font-semibold'>Conflict of Interest Policy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policies;
