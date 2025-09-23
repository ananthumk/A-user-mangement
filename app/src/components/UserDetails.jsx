import React from 'react'

const UserDetails = () => {
  return (
    <div>
      <table className='min-w-[90%] mx-auto text-left border-collapse bg-white shadow-white'> 
         <thead>
            <tr>
                <th className='bg-blue-100  text-left px-6 py-3 font-medium text-gray-700'>ID</th>
                <th className='bg-blue-100  text-left px-6 py-3 font-medium text-gray-700'>First Name</th>
                <th className='bg-blue-100  text-left px-6 py-3 font-medium text-gray-700'>Last Name</th>
                <th className='bg-blue-100  text-left px-6 py-3 font-medium text-gray-700'>Email</th>
                <th className='bg-blue-100  text-left px-6 py-3 font-medium text-gray-700'>Departure</th>
                <th className='bg-blue-100  text-left px-6 py-3 font-medium text-gray-700'>Actions</th>
            </tr>
         </thead>
         <tbody>
            
         </tbody>
      </table>
    </div>
  )
}

export default UserDetails
