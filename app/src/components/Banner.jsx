import React from 'react'

const Banner = () => {
  return (
    <div className='w-full py-3 md:py-5 bg-amber-200 flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-5xl p-2 font-bold text-violet-600 text-center'>User Management</h1>
        <p className='text-base md:text-xl py-2 font-medium text-center px-4'>
          Manage your team members with our comprehensive user management system.
          <br className='hidden md:block' /> Add, edit, delete, and organize users across different departments with style.
        </p>
    </div>
  )
}

export default Banner
