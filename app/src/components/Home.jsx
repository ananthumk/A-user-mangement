import React, { useContext, useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { AppProvider, useAppContext } from '../context/AppContext';

const Home = ({}) => {
  
  
  const { setShowAddUser, setFilterType, searchQuery, setSearchQuery, usersPerPage, setUsersPerPage, setCurrentPage } = useAppContext()

  const handleChange = (e) => {
    setFilterType(e.target.value)
  }

  const handleShowChange = (e) => {
    setUsersPerPage(Number(e.target.value));
    setCurrentPage(1); 
  }
   
  return (
    <>
    <div className='w-[95%] md:w-[90%] relative mx-auto py-4 md:py-8'>
      <div className='w-full flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-around rounded shadow-2xl bg-white p-3'>
         <input type='search' value={searchQuery} placeholder='Search User' 
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full md:w-xl border-1 border-gray-500 p-2 text-sm md:text-md font-medium rounded' />
         
         <div className='flex items-center gap-2 p-1 rounded-md border-2 border-gray-500'>
          <CiFilter size={20} />
          <select onChange={handleChange} className='border-0 outline-0 text-sm md:text-lg'>
            <option value=''>Filter</option>
            <option value='firstName'>First Name</option>
            <option value='lastName'>Last Name</option>
            <option value='email'>Email</option>
            <option value='department'>Department</option>
         </select>
         </div>

         <div className='flex items-center gap-2'>
            <h3 className='text-sm md:text-lg text-gray-500 font-medium'>Show: </h3>
            <select value={usersPerPage} onChange={handleShowChange} 
              className='border-2 border-gray-500 p-1 rounded font-medium text-sm md:text-base'>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
         </div>

         <button onClick={() => setShowAddUser(true)} 
          className='text-sm md:text-lg font-semibold py-2 px-4 text-white bg-gradient-to-b from-yellow-500 to-black rounded border-0 cursor-pointer'>
           + Add User
         </button>
      </div>
    </div>
    
    </>
  )
}

export default Home
