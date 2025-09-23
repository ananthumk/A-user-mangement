import React from 'react'
import { CiFilter } from "react-icons/ci";

const Home = () => {
  return (
    <div className='w-[90%] mx-auto py-8'>
      <div className='w-full flex items-center justify-around rounded shadow-2xl bg-white p-3'>
         <input type='search' placeholder='Search User'
          className='w-xl border-1 border-gray-500 p-2 text-md font-medium rounded ' />
         <div className='flex items-center gap-2 p-1 rounded-md border-2 border-gray-500'>
          <CiFilter size={20} />
         <select className='border-0 outline-0 text-lg '>
            <option value=''>Filter</option>
            <option value='firstName'>First Name</option>
            <option value='lastName'>Last Name</option>
            <option value='email'>Email</option>
            <option value='department'>Department</option>
         </select>
         </div>
         <div className='flex items-center gap-2'>
            <h3 className='text-lg text-gray-500 font-medium'>Show: </h3>
            <select className='border-2 border-gray-500 p-1 rounded font-medium'>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
         </div>
         <button className='text-xl font-semibold py-2 px-4 text-white bg-gradient-to-b 
         from-yellow-500 to-black rounded border-0 cursor-pointer'>+ Add User</button>
      </div>
    </div>
  )
}

export default Home
