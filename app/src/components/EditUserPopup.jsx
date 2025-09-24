import React, { useContext, useEffect, useState } from 'react'
import { AppProvider, useAppContext } from '../context/AppContext'
import axios from 'axios'

const EditUserPopup = () => {
  const { url, setShowEditUser, selectedUserId } = useAppContext();
  const [data, setData] = useState({});
  const [updatedData, setUpdatedData] = useState({
    firstName: '', lastName: '', email: '', department: ''
  })
  console.log(selectedUserId)
  useEffect(() => {
    if (!selectedUserId) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(url + `users/${selectedUserId}`);
        console.log('Edit User: ', response)
        if (response.status === 200) {
          setData(response.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url, selectedUserId]);

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await axios.put(url + `users/${selectedUserId}`, updatedData)
    if (response.status === 200){
        setShowEditUser(false)
    }
  }

  const handleChanges = (e) => {
      const {name, value} = e.target 
      setUpdatedData(prevState => ({
        ...prevState, 
        [name]: value
  }))
  }

  return (
    <div className='fixed top-0 left-0 z-10 w-full flex justify-center items-center min-h-[100vh] bg-[rgba(0,0,0,0.5)]'>
      <div className=' py-6 px-5 bg-white shadow-lg shadow-white rounded-md'>
         <div className='flex items-center justify-between'>
            <h2 className='text-xl font-medium text-yellow-800'>Update User</h2>
            <h2 onClick={() => setShowEditUser(false)} className='cursor-pointer text-xl font-medium'>X</h2>
         </div>

         <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <div className='flex gap-3 max-w-2xl items-center justify-between'>
                <div>
                    <label className='text-md mb-2 font-semibold' >First Name</label>
                    <input type='text' name='firstName' onChange={handleChanges} placeholder='Enter your first name' value={data.firstName} required
                     className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2' />
                </div>
                <div>
                    <label className='text-md mb-2 font-semibold'>Last Name</label>
                    <input type='text' name='lastName' onChange={handleChanges}  placeholder='Enter your last name' required value={data.lastName}
                     className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2' />
                </div>
            </div>
            <div>
                    <label className='text-md mb-2 font-semibold'>Email</label>
                    <input type='email' name='email' onChange={handleChanges} placeholder='Enter your email' required value={data.email}
                     className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2' />
                </div>
                <div>
                    <label className='text-md mb-2 font-semibold'>Department</label>
                    <select placeholder='Select department' name='department' onChange={handleChanges} value={data.department} className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2'>
                        <option className='text-lg font-medium p-1' value='Design'>Design</option>
                        <option className='text-lg font-medium p-1' value='Finance'>Finance</option>
                        <option className='text-lg font-medium p-1' value='Engineering'>Engineering</option>
                    </select>
                </div>
                <div className='grid self-end grid-cols-2 gap-2'>
                    <button onClick={() => setShowEditUser(false)} className='rounded border-2 w-[120px] bg-white border-gray-200 text-lg font-medium text-black cursor-pointer'>Cancel</button>
                    <button type='submit' className='rounded w-[120px] bg-gradient-to-t from-yellow-950 to-black border-gray-200 text-lg font-medium text-white cursor-pointer'>Update User</button>
                </div>
         </form>
      </div>
    </div>
  )
}

export default EditUserPopup
