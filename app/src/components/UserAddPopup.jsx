import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import axios from 'axios';

const UserAddPopup = () => {
  const { url, setShowAddUser } = useAppContext();
  const [data, setData] = useState({
    firstName: '', lastName: '', email: '', department: ''
  })
  
  const handleSubmit = async (e) => {
     e.preventDefault()
     try {
       const response = await axios.post(url+'users', data)
       if(response.status === 200){
        setShowAddUser(false)
       }
     } catch (error) {
       console.log('While adding user ', error)
     }
  }
  
  const handleChange = (e) => {
    const {name, value} = e.target 
    setData(prevState => ({
      ...prevState, 
      [name]: value
    }))
  }
  return (
    <div className='fixed top-0 left-0 z-10 w-full flex justify-center items-center min-h-[100vh] bg-[rgba(0,0,0,0.5)]'>
      <div className=' py-6 px-5 bg-white shadow-lg shadow-white rounded-md'>
         <div className='flex items-center justify-between'>
            <h2 className='text-xl font-medium text-yellow-800'>Add New User</h2>
            <h2 onClick={() => setShowAddUser(false)} className='cursor-pointer text-xl font-medium'>X</h2>
         </div>

         <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <div className='flex gap-3 max-w-2xl items-center justify-between'>
                <div>
                    <label className='text-md mb-2 font-semibold' >First Name</label>
                    <input type='text' onChange={handleChange} name='firstName' placeholder='Enter your first name' required
                     className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2' />
                </div>
                <div>
                    <label className='text-md mb-2 font-semibold'>Last Name</label>
                    <input type='text' onChange={handleChange} name='lastName' placeholder='Enter your last name' required
                     className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2' />
                </div>
            </div>
            <div>
                    <label className='text-md mb-2 font-semibold'>Email</label>
                    <input type='email' onChange={handleChange} name='email' placeholder='Enter your email' required
                     className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2' />
                </div>
                <div>
                    <label className='text-md mb-2 font-semibold'>Last Name</label>
                    <select onChange={handleChange} name='department' placeholder='Select department' className='text-md font-medium w-full rounded-lg border-0 outline-1 outline-gray-400 p-2'>
                        <option className='text-lg font-medium p-1' value='Design'>Design</option>
                        <option className='text-lg font-medium p-1' value='Finance'>Finance</option>
                        <option className='text-lg font-medium p-1' value='Engineering'>Engineering</option>
                    </select>
                </div>
                <div className='grid self-end grid-cols-2 gap-2'>
                    <button onClick={() => setShowAddUser(false)} className='rounded border-2 w-[120px] bg-white border-gray-200 text-lg font-medium text-black cursor-pointer'>Cancel</button>
                    <button type='submit' className='rounded w-[120px] bg-gradient-to-t from-yellow-950 to-black border-gray-200 text-lg font-medium text-white cursor-pointer'>Add User</button>
                </div>
         </form>
      </div>
    </div>
  )
}

export default UserAddPopup
