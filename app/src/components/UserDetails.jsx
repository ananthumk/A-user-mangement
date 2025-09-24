import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from '../context/AppContext';

const UserDetails = () => {
  const [userData, setUserData] = useState([])

  const { url, setShowEditUser, setDeleteUser, setSelectedUserId } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(url + 'users')
            
            if(response.status === 200){
                console.log('data',response)
                setUserData(response.data.user)
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
  }, [url])
  return (
    <div>
      <table className='min-w-[90%]  mx-auto text-left border-collapse bg-white shadow-white'> 
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
            {userData?.map((data,idx) => (
                <tr key={idx+1}>
                    <th className='px-6 py-3 font-normal'>{idx+1}</th>
                    <th className='px-6 py-3 font-normal'>{data.firstName}</th>
                    <th className='px-6 py-3 font-normal'>{data.lastName}</th>
                    <th className='px-6 py-3 font-normal'>{data.email}</th>
                    <th className='px-6 py-3 font-normal'>{data.department}</th>
                    <th className='px-6 py-3 font-normal flex items-center gap-2'>
                        <CiEdit
                          size={20}
                          onClick={() => {
                            setSelectedUserId(data._id);
                            setShowEditUser(true);
                          }}
                          className='hover:text-blue-400 cursor-pointer rounded hover:bg-blue-300/50'
                        />
                        <MdDeleteOutline
                          onClick={() => {
                            setSelectedUserId(data._id);
                            setDeleteUser(true);
                          }}
                          size={20}
                          className='hover:text-red-400 cursor-pointer rounded hover:bg-red-300/50'
                        />
                    </th>
                </tr>
            ))}
         </tbody>
      </table>
    </div>
  )
}

export default UserDetails

