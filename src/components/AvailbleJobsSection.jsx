import React from 'react'

const AvailbleJobsSection = () => {
  return (
     
      <div className= 'mt-8 '>
  
          <div>
    
        <p className='font-bold  md:text-[16px] 2xl:text-3xl text-blue-900 Font-Family-Custom-Class  '>Availble Jobs</p>  

          </div>

            <div className='mt-5'>
        <table className='  w-full border-[1px] border-blue-900 shadow-lg  bg-[#ecf0f1]'>
        <thead>
            <tr className=''>
                <th className='  border-[1px] border-blue-900 md:text-[17px] 2xl:text-2xl text-xs  md:px-4 px-2 md:py-2 py-1 Font-Family-Custom-Class'>Job Title</th>
                <th className=' border-[1px] border-blue-900  md:text-[17px] 2xl:text-2xl text-xs   md:px-4 px-2 md:py-2 py-1 Font-Family-Custom-Class'>Last Date</th>
                <th className='  border-[1px] border-blue-900   md:text-[17px] 2xl:text-2xl text-xs  md:px-4 px-2 md:py-2 py-1 Font-Family-Custom-Class'>Options</th>
                <th className='  border-[1px] border-blue-900 md:text-[17px] 2xl:text-2xl text-xs  md:px-4 px-2 md:py-2 py-1 Font-Family-Custom-Class'>Docs</th>
            </tr>
        </thead>
        <tbody className=' '>

      
            <tr >
                <td className='  border-[1px] border-blue-900 text-center  md:px-4 px-1 md:py-2 py-1 Font-Family-Custom-Class mt-3 md:text-[14px] 2xl:text-xl text-xs font-semibold hover:text-blue-900  cursor-pointer                  
                '>Chief Executive Officer (CEO)</td>
                <td className='  border-[1px] border-blue-900  text-center  md:px-4 px-1 md:py-2 py-1 Font-Family-Custom-Class mt-3 text-black md:text-[14px] 2xl:text-xl text-xs font-semibold hover:text-blue-900   cursor-pointer '>29-December 2024 </td>
                <td className='  border-[1px] border-blue-900 text-center   md:px-4 px-1 md:py-2 py-1 Font-Family-Custom-Class mt-3 text-black md:text-[14px] 2xl:text-xl text-xs font-semibold hover:text-blue-900  cursor-pointer '>View Ad | Apply Online</td>
                <td className=' border-[1px] border-blue-900 text-center   md:px-4 px-1 md:py-2 py-1 Font-Family-Custom-Class mt-3 text-black md:text-[14px] 2xl:text-xl text-xs font-semibold hover:text-blue-900 cursor-pointer '> Specimen</td>
            </tr>            
        </tbody>
        </table>

        </div>
        
        
        
        
        
        
        </div> 
        
      
  )
}

export default AvailbleJobsSection ;