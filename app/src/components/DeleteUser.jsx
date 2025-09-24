import React, { useContext } from 'react'
import axios from 'axios'
import { AppProvider, useAppContext } from '../context/AppContext'

const DeleteUser = () => {
  const { url, setDeleteUser, selectedUserId } = useAppContext();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(url + `users/${selectedUserId}`);
      if (response.status === 200){
           setDeleteUser(false);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='fixed px-5 top-0 left-0 z-10 w-full flex justify-center items-center min-h-[100vh] bg-[rgba(0,0,0,0.5)]'>
      <div className='py-6 px-5 bg-white shadow-lg shadow-white rounded-md'>
        <h2 className='text-xl font-medium text-red-800'>Delete User</h2>
        <p>Are you sure you want to delete this user?</p>
        <div className='grid grid-cols-2 gap-2 mt-4'>
          <button onClick={() => setDeleteUser(false)} className='rounded border-2 w-[120px] bg-white border-gray-200 text-lg font-medium text-black cursor-pointer'>Cancel</button>
          <button onClick={handleDelete} className='rounded w-[120px] bg-gradient-to-t from-red-700 to-black border-gray-200 text-lg font-medium text-white cursor-pointer'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser
