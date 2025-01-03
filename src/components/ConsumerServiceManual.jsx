import React from 'react'

const ConsumerServiceManual = () => {
  return (
    <div className='  mt-8'>
        <div>
        <p className="font-bold  md:text-2xl custom-fontfamily 2xl:text-3xl text-blue-900 Font-Family-Custom-Class">Consumer Sevice Manual</p>
      </div>
    <div className='w-[100%] mt-5 lg:px-3 px-1 bg-blue-300 py-3  min-h-[82px] border-[1px] border-blue-900 rounded-md shadow-lg'>
    
      <div>
        <ul className='list-disc list-inside   '>
          <li >
            <span className='Font-Family-Custom-Class hover:text-blue-900 cursor-pointer text-gray-800 2xl:text-2xl text-xs font-semibold'>  Consumer Sevice Manual (English)
           </span>
          </li>
          <li  className='mt-2'>
            <span className=' Font-Family-Custom-Class hover:text-blue-900 cursor-pointer 2xl:text-2xl text-gray-800 text-xs font-semibold'>Consumer Sevice Manual (Urdu)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ConsumerServiceManual