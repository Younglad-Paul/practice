import React from 'react'

const page = () => {
  return (
    <div className='w-full h-16 shadow-lg flex items-center justify-end'>
        <p><span className='text-blue-950 text-20'>N</span>ova<span>H</span>ub</p>
      <ul className='flex justify-between  w-[25rem] mr-64'>
        <li className='cursor-pointer hover:font-bold'>Find Event</li>
        <li className='cursor-pointer hover:font-bold'>About Us</li>
        <li className='cursor-pointer hover:font-bold'>Contact</li>
      </ul>
      <ul className='flex justify-between items-center w-[15rem] mr-20'>
        <li className='cursor-pointer hover:font-bold'>Sign Up</li>
        <li className='border-2 border-blue-900 rounded-md p-2 hover:p-4 hover:border-green-900 hover:font-bold'>Create Event</li>
        
      </ul>
    </div>
  )
}

export default page
