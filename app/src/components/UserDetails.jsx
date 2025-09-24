import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from '../context/AppContext';

const UserDetails = () => {
  const [userData, setUserData] = useState([])

  const { url, setShowEditUser, setDeleteUser, searchQuery, setSelectedUserId, usersPerPage, currentPage, setCurrentPage } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(url + 'users')
            console.log('UserDetails: ', response)
            if(response.status === 200){
                setUserData(response.data.user)
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
  }, [url])

 
  const totalUsers = userData.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const startIdx = (currentPage - 1) * usersPerPage;
  const endIdx = startIdx + usersPerPage;
  const paginatedUsers = userData.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  
  const filterData = !searchQuery
    ? paginatedUsers
    : paginatedUsers.filter(data =>
        data.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.department?.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return (
    <div className="w-[95%] md:w-[90%] mx-auto ">
      <div className="overflow-x-auto">
        <table className='min-w-full mx-auto text-left border-collapse bg-white shadow-white'>
          <thead>
            <tr>
              <th className='bg-blue-100 text-left px-2 md:px-6 py-2 md:py-3 font-medium text-gray-700 text-xs md:text-base'>ID</th>
              <th className='bg-blue-100 text-left px-2 md:px-6 py-2 md:py-3 font-medium text-gray-700 text-xs md:text-base'>First Name</th>
              <th className='bg-blue-100 text-left px-2 md:px-6 py-2 md:py-3 font-medium text-gray-700 text-xs md:text-base'>Last Name</th>
              <th className='bg-blue-100 text-left px-2 md:px-6 py-2 md:py-3 font-medium text-gray-700 text-xs md:text-base'>Email</th>
              <th className='bg-blue-100 text-left px-2 md:px-6 py-2 md:py-3 font-medium text-gray-700 text-xs md:text-base'>Departure</th>
              <th className='bg-blue-100 text-left px-2 md:px-6 py-2 md:py-3 font-medium text-gray-700 text-xs md:text-base'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((data, idx) => (
              <tr key={startIdx + idx + 1} className="text-xs md:text-base">
                <th className='px-2 md:px-6 py-2 md:py-3 font-normal'>{idx + 1}</th>
                <th className='px-2 md:px-6 py-2 md:py-3 font-normal'>{data.firstName}</th>
                <th className='px-2 md:px-6 py-2 md:py-3 font-normal'>{data.lastName}</th>
                <th className='px-2 md:px-6 py-2 md:py-3 font-normal'>{data.email}</th>
                <th className='px-2 md:px-6 py-2 md:py-3 font-normal'>{data.department}</th>
                <th className='px-2 md:px-6 py-2 md:py-3 font-normal flex items-center gap-2'>
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
      <div className='flex  justify-end w-full md:w-[90%] mx-auto items-center mt-4 gap-2'>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className='px-2 md:px-3 py-1 rounded border bg-gray-200 disabled:opacity-50 text-xs md:text-base'
        >
          Prev
        </button>
        <div className="flex flex-wrap gap-1">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-2 md:px-3 py-1 rounded border ${currentPage === i + 1 ? 'bg-yellow-400' : 'bg-gray-100'} text-xs md:text-base`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => handlePageChange(currentPage + 1)}
          className='px-2 md:px-3 py-1 rounded border bg-gray-200 disabled:opacity-50 text-xs md:text-base'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default UserDetails

