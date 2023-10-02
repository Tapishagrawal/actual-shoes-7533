import { Link } from 'react-router-dom'
import React from 'react'

const Adminsidebar = () => {
  return (
    <div className='border-x h-[100%] w-[100%]'>
      <div className='ml-5 pt-8'>
        <h1 className='font-semibold text-xl'>Welcome, Admin</h1>
      </div>
      <div className='flex flex-col gap-5 mt-10 ml-5 text-lg font-medium'>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/operations">Add Product</Link>
      </div>
    </div>
  )
}

export default Adminsidebar